import {RomanNumerals} from '../../helpers'
import {useState, useRef} from 'react'
import {
  InputStyledCmp,
  BtnStyledCmp,
  ConversionWrapper,
  AmountWrapper,
  ErrorStyledCmp
} from './styledComponent'

const ConvertIntToRoman = () => {
  const [convertVal, setConvertVal] = useState('')
  const [hasError, setHasError] = useState('')
  const inputEl = useRef(null)

  const convertToRoman = () => {
    const value = inputEl.current.value

    if (value < 1 || value > 3999) {
      setHasError(true)

      return
    }

    setHasError(false)
    setConvertVal(null)
    setConvertVal(RomanNumerals.toRoman(inputEl.current.value))
  }

  return (
    <ConversionWrapper>
      <InputStyledCmp
        data-testid='input-convert-to-roman'
        ref={inputEl}
        type='number'
        max='3999'
        min='1'
        onChange={() => setHasError(false)}
      />
      <BtnStyledCmp
        disabled={hasError}
        onClick={convertToRoman}
        data-testid='btn-convert-to-roman'
      >
        Convert int to Roman
      </BtnStyledCmp>
      {convertVal && !hasError && (
        <AmountWrapper>Amount: {convertVal}</AmountWrapper>
      )}
      {hasError && <ErrorStyledCmp>Input is not valid</ErrorStyledCmp>}
    </ConversionWrapper>
  )
}

export default ConvertIntToRoman
