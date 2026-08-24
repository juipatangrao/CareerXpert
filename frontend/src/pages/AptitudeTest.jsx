import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import "../style/AptitudeTest.css";

const questions = [
  {
    id: 1,
    question: "I enjoy solving Mathematics problems.",
    category: "Technology",
  },
  {
    id: 2,
    question: "I like Programming and Coding.",
    category: "Technology",
  },
  {
    id: 3,
    question: "I enjoy helping people.",
    category: "Medical",
  },
  {
    id: 4,
    question: "I like Drawing and Designing.",
    category: "Design",
  },
  {
    id: 5,
    question: "I enjoy Public Speaking.",
    category: "Leadership",
  },
  {
    id: 6,
    question: "I like Business activities.",
    category: "Business",
  },
  {
    id: 7,
    question: "I enjoy Scientific Research.",
    category: "Research",
  },
  {
    id: 8,
    question: "I enjoy Team Work.",
    category: "Leadership",
  },
  {
    id: 9,
    question: "I like Computers.",
    category: "Technology",
  },
  {
    id: 10,
    question: "I enjoy Teaching others.",
    category: "Education",
  },
  {
    id: 11,
    question: "I enjoy solving logical puzzles.",
    category: "Technology",
  },
  {
    id: 12,
    question: "I like managing people.",
    category: "Leadership",
  },
  {
    id: 13,
    question: "I enjoy science experiments.",
    category: "Research",
  },
  {
    id: 14,
    question: "I like creative thinking.",
    category: "Design",
  },
  {
    id: 15,
    question: "I enjoy learning new technologies.",
    category: "Technology",
  },
];

const options = [
  { label: "Strongly Agree", value: 5 },
  { label: "Agree", value: 4 },
  { label: "Neutral", value: 3 },
  { label: "Disagree", value: 2 },
  { label: "Strongly Disagree", value: 1 },
];

const AptitudeTest = () => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[currentQuestion];

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [question.id]: value,
    });
  };

  const nextQuestion = () => {
    if (!answers[question.id]) {
      alert("Please select an answer.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitTest = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions.");
      return;
    }

    let totalScore = 0;

    const categoryScores = {};

    questions.forEach((q) => {
      const score = answers[q.id];

      totalScore += score;

      if (!categoryScores[q.category]) {
        categoryScores[q.category] = 0;
      }

      categoryScores[q.category] += score;
    });

    localStorage.setItem(
      "aptitudeResult",
      JSON.stringify({
        totalScore,
        categoryScores,
      })
    );

    navigate("/career-result");
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="aptitude-page">

      <div className="aptitude-card">

        <div className="aptitude-header">

          <FaBrain className="brain-icon" />

          <h1>AI Aptitude Test</h1>

          <p>
            Answer honestly. AI will analyze your aptitude and
            recommend the most suitable careers.
          </p>

        </div>

        {/* <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>

        </div> */}

        <div className="question-number">

          Question {currentQuestion + 1} of {questions.length}

        </div>

        <div className="question-card">

          <h2>{question.question}</h2>

          <div className="option-list">

            {options.map((option) => (

              <label
                key={option.value}
                className={
                  answers[question.id] === option.value
                    ? "option active"
                    : "option"
                }
              >

                <input
                  type="radio"
                  name={`question-${question.id}`}
                  checked={
                    answers[question.id] === option.value
                  }
                  onChange={() =>
                    handleAnswer(option.value)
                  }
                />

                <span>{option.label}</span>

              </label>

            ))}

          </div>

        </div>

        <div className="button-group">

          {currentQuestion > 0 && (

            <button
              className="back-btn"
              onClick={previousQuestion}
            >

              <FaArrowLeft />

              Previous

            </button>

          )}

          {currentQuestion !== questions.length - 1 ? (

            <button
              className="next-btn"
              onClick={nextQuestion}
            >

              Next

              <FaArrowRight />

            </button>

          ) : (

            <button
              className="submit-btn"
              onClick={submitTest}
            >

              <FaCheckCircle />

              Submit Test

            </button>

          )}

        </div>

      </div>

    </div>
  );
};

export default AptitudeTest;