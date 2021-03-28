import styled from 'styled-components'

export const InputStyledCmp = styled.input`
  padding: 10px;
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const BtnStyledCmp = styled.button`
  background: #8bc34a;
  border: none;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 5px;
  :disabled{
    background: #ccc;
    cursor: default;
  }
}`

export const ErrorStyledCmp = styled.div`
  color: red;
  margin: 5px 0px;
  font-size: 13px;
}`

export const ConversionWrapper = styled.div`
  margin: 20px 20px;
}`

export const AmountWrapper = styled.div`
  margin: 20px 0px;
  font-weight: bold;
  font-size: 13px;
}`
