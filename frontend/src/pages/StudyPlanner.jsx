import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/StudyPlanner.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import jsPDF from "jspdf";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
function StudyPlanner() {
  const [generated, setGenerated] = useState(false);
  const [formData, setFormData] = useState({
    education: "",
    goal: "",
    studyTime: "",
    startDate: "",
    endDate: "",
    subjects: [],
  });
  const [studyPlan, setStudyPlan] = useState(null);
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newSubject, setNewSubject] = useState("");

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [badges, setBadges] = useState([]);
  const [dailyTip, setDailyTip] = useState("");
  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, time]);

  const addSubject = () => {
    const subject = newSubject.trim();

    if (!subject) {
      return;
    }

    if (formData.subjects.includes(subject)) {
      alert("This subject is already added.");
      return;
    }

    setFormData({
      ...formData,
      subjects: [...formData.subjects, subject],
    });

    setNewSubject("");
  };

  const removeSubject = (subject) => {
    setFormData({
      ...formData,
      subjects: formData.subjects.filter((item) => item !== subject),
    });
  };

const generateStudyPlan = async () => {
  try {
    if (!formData.education.trim()) {
      alert("Please enter your current education.");
      return;
    }

    if (!formData.goal.trim()) {
      alert("Please enter your career goal.");
      return;
    }

    if (formData.subjects.length === 0) {
      alert("Please add at least one subject.");
      return;
    }

    if (!formData.studyTime) {
      alert("Please select your daily study time.");
      return;
    }

    if (!formData.startDate || !formData.endDate) {
      alert("Please select start and end dates.");
      return;
    }

    setLoading(true);

    const res = await axios.post(
      "http://localhost:5000/api/study-planner",
      formData
    );

    if (res.data.success) {
      setStudyPlan(res.data.plan);

      setReminders(
        res.data.plan.reminders || []
      );

      setDailyTip(
        res.data.plan.motivation ||
        "Stay consistent and revise every day."
      );

      setGenerated(true);
    }

  } catch (err) {
    console.log(
      "Study Planner Error:",
      err.response?.data || err.message
    );

    alert(
      err.response?.data?.message ||
      "Failed to create study plan."
    );

  } finally {
    setLoading(false);
  }
};
const toggleTask = (task) => {
  if (completedTasks.includes(task)) {
    setCompletedTasks(
      completedTasks.filter((t) => t !== task)
    );
  } else {
    const updatedTasks = [...completedTasks, task];

    setCompletedTasks(updatedTasks);

    // Achievement Badges
    if (updatedTasks.length === 1) {
      setBadges(["🌟 First Task Completed"]);
    }

    if (updatedTasks.length === 3) {
      setBadges((prev) => [
        ...prev,
        "🔥 Study Starter",
      ]);
    }

    if (updatedTasks.length === 5) {
      setBadges((prev) => [
        ...prev,
        "🏆 Study Champion",
      ]);
    }
  }
};
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
doc.text("Study Planner", 20, 20);
    doc.setFontSize(14);

    doc.text(`Education : ${formData.education}`, 20, 40);
    doc.text(`Career Goal : ${formData.goal}`, 20, 50);
    doc.text(`Study Time : ${formData.studyTime}`, 20, 60);
    doc.text(`Start Date : ${formData.startDate}`, 20, 70);
    doc.text(`End Date : ${formData.endDate}`, 20, 80);

    doc.text(`Subjects : ${formData.subjects.join(", ")}`, 20, 95);

    let y = 115;

    doc.setFontSize(18);
    doc.text("Today's Plan", 20, y);

    y += 10;

    studyPlan?.todayPlan?.forEach((item) => {
      doc.text(`• ${item}`, 25, y);
      y += 8;
    });

    y += 8;

    doc.text("Weekly Plan", 20, y);

    y += 10;

    studyPlan?.weeklyPlan?.forEach((item) => {
      doc.text(`• ${item}`, 25, y);
      y += 8;
    });

doc.save("Study_Planner.pdf");
  };
  const chartData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        label: "Study Progress",
        data: [
          completedTasks.length,
          studyPlan?.todayPlan
            ? studyPlan.todayPlan.length - completedTasks.length
            : 0,
        ],
        backgroundColor: ["#7b1023", "#d8d8d8"],
      },
    ],
  };

  return (
    <div className="study-page">
      {!generated ? (
        <div className="planner-form">
          <h1>Create Study Plan</h1>

          <div className="form-group">
            <label>Current Education</label>
            <input
              list="education-options"
              type="text"
              placeholder="Select or type your education"
              value={formData.education}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  education: e.target.value,
                })
              }
            />

            <datalist id="education-options">
              <option value="10th" />
              <option value="12th" />
              <option value="Diploma" />
              <option value="Engineering" />
              <option value="BCA" />
              <option value="B.Sc" />
              <option value="B.Tech" />
              <option value="B.E" />
              <option value="MCA" />
              <option value="M.Sc" />
              <option value="M.Tech" />
              <option value="MBA" />
            </datalist>
          </div>

          <div className="form-group">
            <label>Career Goal</label>
            <input
              type="text"
              placeholder="Software Engineer"
              value={formData.goal}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  goal: e.target.value,
                })
              }
            />
          </div>

          <div className="row">
            <div className="form-group">
              <label>Daily Study Time</label>
              <select
                value={formData.studyTime}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    studyTime: e.target.value,
                  })
                }
              >
                <option value="">Select</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
                <option>4 Hours</option>
                <option>5 Hours</option>
              </select>
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    startDate: e.target.value,
                  })
                }
              />{" "}
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    endDate: e.target.value,
                  })
                }
              />{" "}
            </div>

            <div className="form-group">
              <label>Study Plan Type</label>
              <select>
                <option>100% Syllabus</option>
                <option>Revision</option>
                <option>Exam Preparation</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Subjects</label>

            <div className="subject-input-row">
              <input
                type="text"
                placeholder="Enter subject name"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSubject();
                  }
                }}
              />

              <button
                type="button"
                className="add-subject-btn"
                onClick={addSubject}
              >
                + Add
              </button>
            </div>

            <div className="subjects">
              {formData.subjects.map((subject) => (
                <div key={subject} className="subject active">
                  <span>{subject}</span>

                  <button type="button" onClick={() => removeSubject(subject)}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button className="generate-btn" onClick={generateStudyPlan}>
{loading ? "Creating Plan..." : "Create Study Plan"}
          </button>
        </div>
      ) : (
        <div className="dashboard">
<h1>📚 My Study Planner</h1>
          <p className="planner-subtitle">
            Stay consistent. Track your progress and achieve your dream career.
          </p>
          <div className="dashboard-grid">
            <div className="card">
              <h3>📅 Today's Plan</h3>

              <ul>
                {studyPlan?.todayPlan?.map((item, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      checked={completedTasks.includes(item)}
                      onChange={() => toggleTask(item)}
                    />

                    <span
                      style={{
                        textDecoration: completedTasks.includes(item)
                          ? "line-through"
                          : "none",

                        marginLeft: "10px",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>📆 Weekly Plan</h3>

              <ul>
                {studyPlan?.weeklyPlan?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>📚 Revision Schedule</h3>

              <ul>
                {studyPlan?.revisionSchedule?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>🔔 Today's Reminders</h3>

              <ul>
                {reminders.map((item, index) => (
                  <li key={index}>⏰ {item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>📌 Study Recommendations</h3>
              <ul>
                {studyPlan?.studyRecommendations?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>💡 Daily Motivation</h3>

              <p>{studyPlan?.motivation}</p>
            </div>

            <div className="card">
              <h3>📈 Daily Progress</h3>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{
                    width: `${
                      studyPlan?.todayPlan
                        ? (completedTasks.length / studyPlan.todayPlan.length) *
                          100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>

              <p>
                {studyPlan?.todayPlan
                  ? Math.round(
                      (completedTasks.length / studyPlan.todayPlan.length) *
                        100,
                    )
                  : 0}
                % Completed
              </p>
            </div>
            <div className="card">
              <h3>📅 Study Calendar</h3>

              <Calendar onChange={setDate} value={date} />
            </div>

            <div className="card">
              <h3>🔥 Study Streak</h3>

              <h2>12 Days</h2>

              <p>Keep Going!</p>
            </div>

            <div className="card">
              <h3>🎯 Goal Progress</h3>

              <div className="progress">
                <div className="progress-fill" style={{ width: "75%" }}></div>
              </div>

              <p>75% Goal Completed</p>
            </div>

            <div className="card">
              <h3>⏱️ Pomodoro Timer</h3>

              <h2>
                {Math.floor(time / 60)} :{String(time % 60).padStart(2, "0")}
              </h2>
              <button
                className="timer-btn"
                onClick={() => setRunning(!running)}
              >
                {running ? "Pause" : "Start"}
              </button>
            </div>
            <div className="card">
              <h3>🏆 Achievements</h3>

              {badges.length === 0 ? (
                <p>No Badges Yet</p>
              ) : (
                <ul>
                  {badges.map((badge, index) => (
                    <li key={index}>{badge}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card">
<h3>💡 Daily Study Tip</h3>
              <p className="daily-tip">{dailyTip}</p>
            </div>
            <div className="card">
              <h3>📊 Study Progress Chart</h3>

              <Bar data={chartData} />
            </div>
          </div>

          <button className="download-btn" onClick={downloadPDF}>
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default StudyPlanner;