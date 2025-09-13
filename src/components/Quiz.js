import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing the latest icons
import "./quiz.css"; // Optional: Add custom styles for the quiz

function Quiz() {
  const questions = [
    {
      question: "How can you reduce your personal carbon footprint?",
      options: ["Drive a fuel-efficient car", "Use public transportation or bike", "Avoid recycling", "Use more plastic products"],
      correctAnswer: "Use public transportation or bike",
    },
    {
      question: "What is the most eco-friendly way to dispose of your waste?",
      options: ["Throw everything in the trash", "Recycle as much as possible", "Burn waste", "Leave it in nature"],
      correctAnswer: "Recycle as much as possible",
    },
    {
      question: "Which of the following is a sustainable way to reduce energy consumption at home?",
      options: ["Leave lights on when not needed", "Install energy-efficient LED bulbs", "Use air conditioning all the time", "Use old appliances"],
      correctAnswer: "Install energy-efficient LED bulbs",
    },
    {
      question: "What is a sustainable habit for reducing water waste at home?",
      options: ["Leave taps running while washing dishes", "Take long showers every day", "Fix leaky faucets immediately", "Use a hose to clean sidewalks"],
      correctAnswer: "Fix leaky faucets immediately",
    },
    {
      question: "How can you help reduce plastic waste in your daily life?",
      options: ["Use reusable bags for shopping", "Use plastic bottles for water", "Buy products in excessive plastic packaging", "Throw plastic in the trash"],
      correctAnswer: "Use reusable bags for shopping",
    },
    {
      question: "Which of the following practices is an example of sustainable food consumption?",
      options: ["Eating fast food every day", "Growing your own vegetables at home", "Throwing away food that is about to expire", "Eating large quantities of meat"],
      correctAnswer: "Growing your own vegetables at home",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Finished! Your score is ${score + 1} out of ${questions.length}`);
      setCurrentQuestionIndex(0); // Reset quiz to first question
      setScore(0); // Reset score
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="quiz-container">
      <h2>Sustainability Quiz</h2>
      <div className="quiz-question">
        <h3>{questions[currentQuestionIndex].question}</h3>
        <div className="quiz-options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className="quiz-option"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="quiz-navigation">
        <button className="prev-btn" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          <FaArrowLeft /> Previous
        </button>
        <button className="next-btn" onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Quiz;
