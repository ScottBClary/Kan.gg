import React from "react";
import axios from 'axios';


class KanjiPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGrade: 1,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onSubmit() {
    console.log('submitted');
    this.props.getKanji(this.state.currentGrade);
  }
  onChange() {
    console.log('changed');
    this.setState({
      currentGrade: event.target.value,
    });
  }

  render() {

    return (
      <div id='KanjiPicker' onChange={this.onChange}>
        <div>
         <input type="radio" value="1" name="grade" /><p className = 'radioText'>1</p>
        </div>
        <div>
          <input type="radio" value="2" name="grade" /><p className = 'radioText'>2</p>
        </div>
        <div>
          <input type="radio" value="3" name="grade" /><p className = 'radioText'>3</p>
        </div>
        <div>
          <button type="submit" value="getKanji" onClick={this.onSubmit}> Get Kanji! </button>
        </div>
      </div>
    );
  }

}

export default KanjiPicker