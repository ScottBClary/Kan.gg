import React, {createRef} from 'react';
import Styled from 'styled-components'
const SignIn = function () {


  const submitHandler = function(e) {
    console.log(e);
  }

  const inputEnterHandler = function(e) {
    if (e.code === "Enter") {
      submitHandler(e);
      console.log('Name is ' + nameRef.current.value);
      console.log('Pass is ' + passRef.current.value);
    }
  }

  const nameRef = createRef();
  const passRef = createRef();


  return <Column>
    <Text>Sign In?</Text>
    <Form onSubmit={()=>{alert('Submitted')}}>
      <TextInput placeholder="Username" ref={nameRef} ></TextInput>
      <TextInput placeholder="Password" ref={passRef} onKeyPress={(e)=>{inputEnterHandler(e)}}></TextInput>
    </Form>
  </Column>

}

const Form = Styled.form`
  display: flex;
  flex-direction: column;
`;

const Column = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = Styled.p`
  text-align: center;
  font-size: 24px;
  text-shadow: 3px 3px #00000051;
`

const TextInput = Styled.input`
  border-radius: 10px;
  width: 417px;
  height: 54px;
  text-align: center;
  letter-spacing: 2px;
  font-size: 24px;
  border: none;
  box-shadow: 4px 4px 4px 1px rgba(0,0,0,0.4);
  margin-top: 13px;
  &:active {
    outline: none;
    box-shadow: none;
  }
  &::placeholder {
    font-style: italic;
    color: #c2c2c2;
  }
  &:focus::placeholder {
    color: transparent;
    text-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;

export default SignIn;