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
 * intToRoman : Convert int to Roman,
 * romanToInt : Convert Roman to int
 * */
export const RomanNumerals = {
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
