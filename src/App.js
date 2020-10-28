import React, {useState} from 'react'
import './App.css';
import {triviaData} from './data';
// import SubmitPage from './SubmitPage';

function App() {

  //holds the questions
  const [trivia, setTrivia] = useState(triviaData);
  //makes the index dynamic
  const [currentQuest, setCurrentQuest] = useState(0);
  //handles whether the user is on the questions or the submit page
  const [submit, setSubmit] = useState(false);
  
  //holds the score
  const [score, setScore] = useState(0);

  //continues to the next question
  const buttonChange = (correct) => {
    if(correct) {
      setScore(score + 1);
    }
    //add event listener to my buttons

    // const next = document.querySelector('div.next');
    // next.classList.toggle('hide');
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
              return <button onClick={() => buttonChange(a.correct)}>{a.answer}</button>
                })}
              {/* {trivia[currentQuest].answers.map((a) => {
                // console.log(a.correct)
                  return <label htmlFor="answer"><input id='answer' name='answer' type="radio"/>{a.answer}</label>
                })} */}
              {/* {trivia[currentQuest].answers.map((a) => {
                console.log(a)
                  return <button onClick={() => buttonChange(a.correct)}>Submit</button>
                })} */}
            </div>
            <div className='next'>
                <button onClick={nextBtn}>Next</button>
            </div>
          </div>
        </div>
        )
      }
  
      

    </div>
  );
}

export default App;
