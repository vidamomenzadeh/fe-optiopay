import {RomanNumerals} from '../../helpers'
import {useState, useRef} from 'react'
import {
  InputStyledCmp,
  BtnStyledCmp,
  ErrorStyledCmp,
  ConversionWrapper,
  AmountWrapper
} from './styledComponent'

const romanRegex = new RegExp('^[M|D|X|C|L|I|V]+$')

const ConvertRomanToInt = () => {
  const [convertVal, setConvertVal] = useState('')
  const [hasError, setHasError] = useState('')
  const inputEl = useRef(null)

  const convertToRoman = () => {
    const value = inputEl.current.value

    if (!romanRegex.test(inputEl.current.value)) {
      setHasError(true)

      return
    }

    setHasError(false)
    setConvertVal(RomanNumerals.fromRoman(value))
  }

  return (
    <ConversionWrapper>
      <InputStyledCmp
        data-testid='input-convert-to-int'
        ref={inputEl}
        onChange={() => setHasError(false)}
      />
      <BtnStyledCmp
        data-testid='btn-convert-to-int'
        onClick={convertToRoman}
        disabled={hasError}
      >
        Convert Roman to int
      </BtnStyledCmp>
      {convertVal && !hasError && (
        <AmountWrapper>Amount: {convertVal}</AmountWrapper>
      )}
      {hasError && <ErrorStyledCmp>Input is not valid</ErrorStyledCmp>}
    </ConversionWrapper>
  )
}

export default ConvertRomanToInt
