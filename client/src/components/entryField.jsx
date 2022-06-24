import React from "react";
import { render } from "react-dom";

var converter = require('jp-conversion');

class EntryField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: '',
    }
    this.setToken = this.setToken.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (e.code === 'Enter') {
      this.props.submitFunction(this.state.field);
      this.setState({field: ''});
    }
  }

  setToken(e) {
    // if someone copy + pastes

    // if someone adds a character
    // n can be n or na

    let target = e.target.value;

    let fieldR = converter.convert(target).romaji;
    let lastKanaIndex = 0;
    // if HHHA then possible
    // if HHAAA then possible
    // we need to check last hiragana and 3
    var didConvert = false;
    var newKana = '';
    var newKanaIndex = undefined;


    // find first alphabetic at end of entryField
    //  look at 4 last characters
    //  last, second to last, etc.
    // once you find one that is not an alphabet character, you have found the start index

    var lastAlphaIndex = target.length - 1;
    for (var i = target.length - 1; i > target.length - 5 && i >= 0 && (/[a-zA-Z]/).test(target[i]); i--) {
      lastAlphaIndex = i;
    }

    for (var i = lastAlphaIndex; i < target.length; i++) {
      let convH = converter.convert(target.slice(lastAlphaIndex)).hiragana;

        if (convH) {
          newKana = convH;
          newKanaIndex = (target.length - 1) - i;
          didConvert = true;
          break;
        }
    }


    // if (target.length > this.state.field.length) {

    //   for (var i = 4; i > 0; i--) {
    //     var startIndex
    //     if (target[target.length - 1 - i] === undefined || )
    //     console.log(target.slice(Math.max(0,target.length - i)));
    //     let convH = converter.convert(target.slice(Math.max(0,target.length - i))).hiragana;
    //     console.log(convH ,' is convH');
    //     if (convH) {
    //       newKana = convH;
    //       newKanaIndex = (target.length - 1) - i;
    //       didConvert = true;
    //       break;
    //     }
    //   }
    // }

    if (didConvert) {
      var newField = target.slice(0, lastAlphaIndex);
      newField += newKana;
      newField = newField.replace(/んあ/g, 'な');
      newField = newField.replace(/んゆ/g, 'にゅ');
      this.setState({
        field: newField,
      });
    } else {
      this.setState({
        field: target,
      })
    }




  }
  render() {

    return (

      <fieldset className="" >

        <input id="user-response" name="user-response" placeholder="Your Response" type="text" onChange = {(e) => {this.setToken(e);}} value = {this.state.field} onKeyDown={(e)=>{this.handleKeyDown(e)}}/>
        <button className="submitButton" onClick={()=>{this.props.submitFunction(this.state.field)}} >⏎</button>
      </fieldset>
    );
  }

}

export default EntryField;