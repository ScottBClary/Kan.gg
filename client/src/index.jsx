import React from "react";
import { render } from "react-dom";
import KanjiPicker from './components/kanjiPicker.jsx';
import axios from 'axios';
import EntryField from './components/entryField.jsx';
import KanjiDisplay from './components/kanjiDisplay.jsx';
import $ from "jquery";
var converter = require('jp-conversion');
const baseURL = "http://localhost:3000";
class App extends React.Component {

  //if user presses enter, it submits guess,
  // if guess is wrong, pass animation prop to kanji display
  // if guess is right, ''
  // if guess is submitted "again" move on to next character
  //

  constructor(props) {
    super(props);
    this.state = {
      currentKanji: '',
      currentPronounciation: '',
      resultOfGuess: '',
      currentGrade: '',
    }
    this.getKanji = this.getKanji.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
  }

  getKanji(grade) {
    axios.get(baseURL + '/randomKanji?grade=' + grade).then((res) => {
      console.log(res);
      console.log('got back ' + res.data.kanji);
      this.setState((oldState) => {
        return {
          currentPronounciation: res.data.pronounciation,
          currentKanji: res.data.kanji,
          resultOfGuess: '',
          currentGrade: grade,
        }
      });

    })
  }

  submitGuess(guess) {
    console.log('guess submitted : ' + guess);
    if (this.state.resultOfGuess === true) {
      this.getKanji(this.state.currentGrade);
    }
    if (this.state.resultOfGuess === false) {
      this.getKanji(this.state.currentGrade);
    }
    this.checkGuess(guess);
  }
  //returns true or false
  checkGuess(guess) {
    if (guess.length === 0) {
      console.log('Failed');
      this.setState((oldState)=> {
      return {
        currentPronounciation: oldState.currentPronounciation,
        currentKanji: oldState.currentKanji,
        resultOfGuess: false,
        currentGrade: oldState.currentGrade,
      };})
      return 0;
    }
    var g1 = guess;
    var g2 = converter.convert(g1).katakana;
    console.log(g1, '   ', g2);
    if (this.state.currentPronounciation.includes(g1) || this.state.currentPronounciation.includes(g2)) {
      console.log('Passed');
      this.setState((oldState) => {
        return {
          currentPronounciation: oldState.currentPronounciation,
          currentKanji: oldState.currentKanji,
          resultOfGuess: true,
          currentGrade: oldState.currentGrade,
        }
      });
    } else {

      console.log('Failed');
      this.setState((oldState)=> {
      return {
        currentPronounciation: oldState.currentPronounciation,
        currentKanji: oldState.currentKanji,
        resultOfGuess: false,
        currentGrade: oldState.currentGrade,
      };})
    }

  }


  render() {
    console.log('rendering App');
    return (
      <div>
        <p className='titleText'>Kanji Learner</p>
        <EntryField submitFunction={this.submitGuess} ></EntryField>
        <KanjiPicker getKanji={(grade) => {this.getKanji(grade);}}></KanjiPicker>
        <KanjiDisplay kanji={this.state.currentKanji} pronounciation={this.state.currentPronounciation} guessIsCorrect={this.state.resultOfGuess}></KanjiDisplay>
      </div>
    );
  }

}

render(<App />, document.getElementById('root'));