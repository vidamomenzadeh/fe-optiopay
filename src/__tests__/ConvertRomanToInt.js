import ConvertRomanToInt from '../components/conversion/ConvertRomanToInt'
import {render, screen, fireEvent} from '@testing-library/react'

test('ConvertRomanToInt render correctly', async () => {
  const {container, getByTestId} = render(<ConvertRomanToInt />)

  expect(getByTestId('input-convert-to-int')).toBeInTheDocument()
  expect(getByTestId('btn-convert-to-int')).toBeInTheDocument()
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="sc-hKgILt cFzAqj"
      >
        <input
          class="sc-bdfBwQ iNtGjV"
          data-testid="input-convert-to-int"
        />
        <button
          class="sc-gsTCUz jpduKj"
          data-testid="btn-convert-to-int"
        >
          Convert Roman to int
        </button>
        
        
      </div>
    </div>
  `)
})

test('Check functionality Roman to int - value : XC', async () => {
  const {getByTestId, getByText} = render(<ConvertRomanToInt />)
  const inputConvertToRoman = getByTestId('input-convert-to-int')
  const btnConvertToRoman = getByTestId('btn-convert-to-int')

  await fireEvent.change(inputConvertToRoman, {target: {value: 'XC'}})
  await fireEvent.click(btnConvertToRoman)

  expect(getByText('Amount: 90')).toBeInTheDocument()
})

test('Check functionality Roman to int - value : MCMXC', async () => {
  const {getByTestId, getByText} = render(<ConvertRomanToInt />)
  const inputConvertToRoman = getByTestId('input-convert-to-int')
  const btnConvertToRoman = getByTestId('btn-convert-to-int')

  await fireEvent.change(inputConvertToRoman, {target: {value: 'MCMXC'}})
  await fireEvent.click(btnConvertToRoman)

  expect(getByText('Amount: 1990')).toBeInTheDocument()
})

test('Show errors when the value is not valid', async () => {
  const {getByTestId, getByText} = render(<ConvertRomanToInt />)
  const inputConvertToRoman = getByTestId('input-convert-to-int')
  const btnConvertToRoman = getByTestId('btn-convert-to-int')

  await fireEvent.change(inputConvertToRoman, {target: {value: 'xetXC'}})
  await fireEvent.click(btnConvertToRoman)

  expect(getByText('Input is not valid')).toBeInTheDocument()
})
