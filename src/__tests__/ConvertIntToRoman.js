import ConvertIntToRoman from '../components/conversion/ConvertIntToRoman'
import {render, fireEvent} from '@testing-library/react'

test('ConvertIntToRoman render correctly', async () => {
  const {container, getByTestId} = render(<ConvertIntToRoman />)

  expect(getByTestId('input-convert-to-roman')).toBeInTheDocument()
  expect(getByTestId('btn-convert-to-roman')).toBeInTheDocument()
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="sc-hKgILt cFzAqj"
      >
        <input
          class="sc-bdfBwQ iNtGjV"
          data-testid="input-convert-to-roman"
          max="3999"
          min="1"
          type="number"
        />
        <button
          class="sc-gsTCUz jpduKj"
          data-testid="btn-convert-to-roman"
        >
          Convert int to Roman
        </button>
        
        
      </div>
    </div>
  `)
})

test('Check functionality int to Roman - value : 90', async () => {
  const {getByTestId, getByText} = render(<ConvertIntToRoman />)
  const inputConvertToRoman = getByTestId('input-convert-to-roman')
  const btnConvertToRoman = getByTestId('btn-convert-to-roman')

  await fireEvent.change(inputConvertToRoman, {target: {value: '90'}})
  await fireEvent.click(btnConvertToRoman)

  expect(getByText('Amount: XC')).toBeInTheDocument()
})

test('Check functionality int to Roman - value : 1990', async () => {
  const {getByTestId, getByText} = render(<ConvertIntToRoman />)
  const inputConvertToRoman = getByTestId('input-convert-to-roman')
  const btnConvertToRoman = getByTestId('btn-convert-to-roman')

  await fireEvent.change(inputConvertToRoman, {target: {value: '1990'}})
  await fireEvent.click(btnConvertToRoman)

  expect(getByText('Amount: MCMXC')).toBeInTheDocument()
})
