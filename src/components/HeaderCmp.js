import styled from 'styled-components'
import logo from '../assets/logo.png'

const HeaderStyledCmp = styled.div`
  min-height: 80px;
  background-image: linear-gradient(-90deg, #38898c 0%, #051e3a 100%);
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  img {
    max-width: 40%;
  }
  a {
    width: 60%;
  }
`
const HeaderTextStyledCmp = styled.div`
  color: #fff;
`

const HeaderCmp = () => (
  <HeaderStyledCmp>
    <a href='https://www.optiopay.com/'>
      <img src={logo} alt='Logo' />
    </a>
    <HeaderTextStyledCmp>Frontend Coding Challenge</HeaderTextStyledCmp>
  </HeaderStyledCmp>
)

export default HeaderCmp
