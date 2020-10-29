import React, {useState} from 'react'
import './App.css';
import {triviaData} from './data';

function App() {

  //holds the questions
  const [trivia, setTrivia] = useState(triviaData);
  //makes the index dynamic
  const [currentQuest, setCurrentQuest] = useState(0);
  //handles whether the user is on the questions or the submit page
  const [submit, setSubmit] = useState(false);
  
  //holds the score
  const [score, setScore] = useState(0);

  //handles the scores
  const buttonChange = (correct) => {
    if(correct) {
      setScore(score + 1);
      document.querySelectorAll('.answer-btn').forEach(item => {
        item.addEventListener('click', event => {
          item.classList.add('right-answer')
        })
      })
    }
    //color the button green if the correct answer was clicked
    //color the button red if the wrong answer was clicked

    //disable buttons after the user has clicked once

  }

  //retry btn
  const retryBtn = () => {
    setSubmit(false);
    setCurrentQuest(0);
    setScore(0);

  }

  //next btn
  const nextBtn = (e) => {
    const next = currentQuest + 1;
    if(next < triviaData.length) {
      setCurrentQuest(next);
    }
    else {
      setSubmit(true);
    }
  }

  return (
    <div>
      <h1  className="title">Tandem Trivia</h1>
      {
        submit ? ( 
        <div className='score'>
          <h1>You scored {score}/{triviaData.length}</h1>
          <button onClick={retryBtn}>Retry</button>
        </div>
        ) : 
        (
        <div>
          <div className='trivia'>
            <h2 className='question'>
              {trivia[currentQuest].question} {currentQuest + 1}/{triviaData.length}
            </h2>
            <div className='btn-container'>
              {trivia[currentQuest].answers.map((a) => {
                // console.log(a.correct)
              return <button type='submit' className='answer-btn' onClick={() => buttonChange(a.correct)}>{a.answer}</button>
                })}
              {/* {trivia[currentQuest].answers.map((a) => {
                // console.log(a.correct)
                  return <label htmlFor="answer"><input onChange={() => buttonChange(a.correct)} id='answer' name='answer' type="radio"/>{a.answer}</label>
                })} */}
              {/* {trivia[currentQuest].answers.map((a) => {
                console.log(a)
                  return <button onClick={() => buttonChange(a.correct)}>Submit</button>
                })} */}
            </div>
            <div className='next'>
                <button type='submit' className='next-btn' onClick={nextBtn}>Next</button>
            </div>
          </div>
        </div>
        )
      }
  
      

    </div>
  );
}

export default App;
