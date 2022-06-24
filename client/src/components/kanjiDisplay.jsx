import React from "react";

function KanjiDisplay(props) {

  console.log('current guess is ' + props.guessIsCorrect);
  if (props.guessIsCorrect === '') {
    return (
      <div className='KanjiDisplay'>

        <p>{props.kanji}</p>
      </div>
    );
  }
  else if (props.guessIsCorrect === false) {
    return (
      <div className='KanjiDisplay'>
        <p id='wrongAnswer' >✘</p>
        <p id='pronounciationText'>Pronounciation: {props.pronounciation}</p>
        <p>{props.kanji}</p>
      </div>
    );
  }
  else if (props.guessIsCorrect === true) {
    return (
      <div className='KanjiDisplay'>

        <p id='rightAnswer' >✓</p>
        <p>{props.kanji}</p>
      </div>
    );
  }




}

export default KanjiDisplay;