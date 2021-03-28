import ConvertIntToRoman from './ConvertIntToRoman'
import ConvertRomanToInt from './ConvertRomanToInt'

import styled from 'styled-components'

const LayoutStyledCmp = styled.div`
  margin: 30px;
`

const Conversion = () => (
  <LayoutStyledCmp>
    <ConvertRomanToInt />
    <ConvertIntToRoman />
  </LayoutStyledCmp>
)

export default Conversion
