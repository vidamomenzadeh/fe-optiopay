import {RomanSymbol, RomanNumberRange} from '../constants'

const convertRomanSymbtoValue = (roman) => {
  switch (roman) {
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    case 'M':
      return 1000
    default:
      return -1
  }
}

/**
 * toRoman : Convert int to Roman,
 * fromRoman : Convert Roman to int
 * */
export const RomanNumerals = {
  /**
   * Try to find the highest division based on RomanNumberRange (call it X).
   * if X is greater than 0 then repeat that corresponding symbol,
   * the new number is % from RomanNumberRange
   */
  toRoman: (number) => {
    let index = RomanSymbol.length - 1
    let result = ''

    while (number > 0) {
      let div = parseInt(number / RomanNumberRange[index])

      number = number % RomanNumberRange[index]
      result += RomanSymbol[index].repeat(div)
      index--
    }

    return result
  },
  /**
   * Loop through each character, Compare the value of the current roman symbol
   * with the value of right charachter. If is less than that then add the
   * value, if is greather than that then then add it else add subtract of them
   */
  fromRoman: (str) => {
    let res = 0

    for (let index = 0; index < str.length; index++) {
      let subStr1 = convertRomanSymbtoValue(str[index])

      if (index + 1 < str.length) {
        let subStr2 = convertRomanSymbtoValue(str[index + 1])

        if (subStr1 >= subStr2) {
          res = res + subStr1
        } else {
          res = res + subStr2 - subStr1
          index++
        }
      } else {
        res = res + subStr1
      }
    }

    return res
  }
}
