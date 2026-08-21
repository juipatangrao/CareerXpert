import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBrain, FaArrowRight, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import "../style/AptitudeTest.css";

const questions = [
  { id:1, question:"I enjoy solving Mathematics problems.", category:"Technology"},
  { id:2, question:"I like Programming and Coding.", category:"Technology"},
  { id:3, question:"I enjoy helping people.", category:"Medical"},
  { id:4, question:"I like Drawing and Designing.", category:"Design"},
  { id:5, question:"I enjoy Public Speaking.", category:"Leadership"},
  { id:6, question:"I like Business activities.", category:"Business"},
  { id:7, question:"I enjoy Scientific Research.", category:"Research"},
  { id:8, question:"I enjoy Team Work.", category:"Leadership"},
  { id:9, question:"I like Computers.", category:"Technology"},
  { id:10, question:"I enjoy Teaching others.", category:"Education"},
  { id:11, question:"I enjoy solving logical puzzles.", category:"Technology"},
  { id:12, question:"I like managing people.", category:"Leadership"},
  { id:13, question:"I enjoy science experiments.", category:"Research"},
  { id:14, question:"I like creative thinking.", category:"Design"},
  { id:15, question:"I enjoy learning new technologies.", category:"Technology"},
];

const options=[
{label:"Strongly Agree",value:5},
{label:"Agree",value:4},
{label:"Neutral",value:3},
{label:"Disagree",value:2},
{label:"Strongly Disagree",value:1},
];
 function AptitudeTest(){
const navigate=useNavigate();
const [currentQuestion,setCurrentQuestion]=useState(0);
const [answers,setAnswers]=useState({});
const question=questions[currentQuestion];

const handleAnswer=v=>setAnswers({...answers,[question.id]:v});
const nextQuestion=()=>{
 if(!answers[question.id]) return alert("Please select an answer.");
 if(currentQuestion<questions.length-1) setCurrentQuestion(currentQuestion+1);
};
const previousQuestion=()=> currentQuestion>0&&setCurrentQuestion(currentQuestion-1);
const submitTest=()=>{
 if(Object.keys(answers).length!==questions.length) return alert("Please answer all questions.");
 let totalScore=0; const categoryScores={};
 questions.forEach(q=>{
  const s=answers[q.id]; totalScore+=s;
  categoryScores[q.category]=(categoryScores[q.category]||0)+s;
 });
 localStorage.setItem("aptitudeResult",JSON.stringify({totalScore,categoryScores}));
 navigate("/career-result");
};
const progress=((currentQuestion+1)/questions.length)*100;

return(
<div className="at-page">
<div className="at-card">
<div className="at-header">
<FaBrain className="at-brain-icon"/>
<h1>AI Aptitude Test</h1>
<p>Answer honestly. AI will analyze your aptitude and recommend the most suitable careers.</p>
</div>

{/* <div className="at-progress-bar"><div className="at-progress-fill" style={{width:`${progress}%`}} /></div> */}

<div className="at-question-number">Question {currentQuestion+1} of {questions.length}</div>

<div className="at-question-card">
<h2>{question.question}</h2>
<div className="at-option-list">
{options.map(option=>(
<label key={option.value} className={answers[question.id]===option.value?"at-option active":"at-option"}>
<input
type="radio"
name={`question-${question.id}`}
checked={answers[question.id]===option.value}
onChange={()=>handleAnswer(option.value)}
/>
<span>{option.label}</span>
</label>
))}
</div>
</div>

<div className="at-button-group">
{currentQuestion>0&&(
<button className="at-back-btn" onClick={previousQuestion}>
<FaArrowLeft/> Previous
</button>
)}
{currentQuestion!==questions.length-1?(
<button className="at-next-btn" onClick={nextQuestion}>
Next <FaArrowRight/>
</button>
):(
<button className="at-submit-btn" onClick={submitTest}>
<FaCheckCircle/> Submit Test
</button>
)}
</div>

</div>
</div>
);
}
export default AptitudeTest;