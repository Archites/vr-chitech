import styled from 'styled-components'

export const Form = styled.form`
  margin: 0;
`

export const FormFieldContainer = styled.fieldset`
  margin: 20px;
  border: 1px solid #bfc0c6;
  border-radius: 5px;
  padding: 0;

  &:hover {
    box-shadow: 0 2px 5px #eaeaec;
  }
`

export const FormButtonContainer = styled.fieldset`
  padding: 5px 20px;
  margin: 0;
  border: 0;
`

export const FieldContainer = styled.div`
  position: relative;
`

export const Email = styled.input`
  display: block;
  color: #282c3f;
  padding-right: 40px;
  font-size: 15px;
  width: 100%;
  border: 0;
  padding: 15px
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const Password = styled.input`
  display: block;
  color: #282c3f;
  padding-right: 40px;
  font-size: 15px;
  width: 100%;
  border: 0;
  padding: 15px;
  border-top: 1px solid #d5d6d9;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const Submit = styled.button`
  background-color: #6a2c91;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 15px;
  display: block;
  width: 100%;
  border: 0;
  text-transform: uppercase;
  border-radius: 3px;
  font-family: Whitney;

  &:hover {
    background: #a543e2;
  }
`

export const SignInGoogle = styled.button`
  background-color: #ea4335;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 15px;
  display: block;
  width: 100%;
  border: 0;
  text-transform: uppercase;
  border-radius: 3px;
  font-family: Whitney;

  &:hover {
    background: #ff6666;
  }
`

export const SignInFacebook = styled.button`
  background-color: #4267b2;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 15px;
  display: block;
  width: 100%;
  border: 0;
  text-transform: uppercase;
  border-radius: 3px;
  font-family: Whitney;

  &:hover {
    background: #0099e5;
  }
`
