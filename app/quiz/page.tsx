'use client';

import React, { useState } from 'react';
import { quiz } from '../data.js';

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ score: 0 });

  const { questions } = quiz;
  const { question, answers } = questions[activeQuestion];

  // Select and check answer
  const onAnswerSelected = (i: number) => {
    setChecked(true);
    setSelectedAnswerIndex(i);
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    const scoreMap = [0, 1, 2, 3]; // Map answers to scores
    if (selectedAnswerIndex !== null && selectedAnswerIndex !== -1) {
      setResult((prev) => ({
        score: prev.score + scoreMap[selectedAnswerIndex],
      }));
    }

    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
    setChecked(false);
  };

  const overallPercentage = Math.round((result.score / (questions.length * 3)) * 100);

  return (
    <div className='max-w-3xl w-full mx-auto p-4'>
      <h1 className='text-4xl text-black'>Selvtest</h1>
      <div>
        <h2 className='text-2xl text-black'>
          Spørsmål: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className='bg-gray-100 p-4 mt-8 rounded'>
            <h3 className='pb-8 text-3xl text-gray-800'>{question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(idx)}
                className={`cursor-pointer my-2 py-4 px-2 border border-gray-300 text-gray-800 ${
                  selectedAnswerIndex === idx
                    ? 'bg-blue-900 text-white'
                    : 'hover:bg-gray-300'
                }`}
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className='w-full mt-3 py-4 px-2 text-xl rounded cursor-pointer bg-gray-500 text-gray-200'>
                {activeQuestion === questions.length - 1 ? 'Fullfør' : 'Neste'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className='w-full mt-3 py-4 px-2 text-xl rounded cursor-pointer bg-gray-300 text-gray-500'>
                {activeQuestion === questions.length - 1 ? 'Fullfør' : 'Neste'}
              </button>
            )}
          </div>
        ) : (
          <div className='bg-gray-100 p-4 mt-8 rounded'>
            <h3 className='pb-8 text-3xl text-gray-800'>Resultater</h3>
            <h3 className='pb-8 text-3xl text-gray-800'>Totalt {overallPercentage}%</h3>
            <p className='py-2'>
              Totalt poeng: <span>{result.score}</span>
            </p>
            <p className='py-2'>
              0-10 %: Ingen eller minimal risiko for pengespillavhengighet. Du har god kontroll over dine spillevaner.
              </p>
              <p className='py-1'>
              11-30 %: Lav risiko for pengespillavhengighet. Vær oppmerksom på dine spillevaner og vurder å sette grenser.
              </p>
              <p className='py-1'>
              31-50 %: Moderat risiko for pengespillavhengighet. Det kan være nyttig å søke hjelp for å forhindre at problemet utvikler seg.
              </p>
              <p className='py-1'>
              51-70 %: Høy risiko for pengespillavhengighet. Det anbefales å søke profesjonell hjelp.
              </p>
              <p className='py-1'>
              71-100 %: Svært høy risiko for pengespillavhengighet. Det er sterkt anbefalt at du søker profesjonell hjelp umiddelbart for å håndtere dette problemet.
              </p>
            <button onClick={() => window.location.reload()} className='w-full mt-3 py-4 px-2 text-xl rounded cursor-pointer bg-gray-500 text-gray-200'>
              Prøv på nytt
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;