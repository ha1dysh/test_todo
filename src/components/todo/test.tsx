import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from '../App'

test('isComplete', () => {
  render(<App />)
  const titleInput = screen.getByPlaceholderText<HTMLInputElement>('Title*')
  fireEvent.change(titleInput, { target: { value: 'test title' } })
  const textInput = screen.getByPlaceholderText<HTMLTextAreaElement>('Text')
  fireEvent.change(textInput, { target: { value: 'test text' } })
  const submitButton = screen.getByText('ADD')
  fireEvent.submit(submitButton)

  const completeCheckbox = screen.getByTestId<HTMLInputElement>('isComplete')
  expect(completeCheckbox.checked).toBe(false)
  fireEvent.click(completeCheckbox)
  expect(completeCheckbox.checked).toBe(true)
})

test('delete', async () => {
  render(<App />)
  const titleInput = screen.getByPlaceholderText<HTMLInputElement>('Title*')
  fireEvent.change(titleInput, { target: { value: 'test title' } })
  const textInput = screen.getByPlaceholderText<HTMLTextAreaElement>('Text')
  fireEvent.change(textInput, { target: { value: 'test text' } })
  const submitButton = screen.getByText('ADD')
  fireEvent.submit(submitButton)

  const deleteButton = await screen.findByTestId('delete')
  fireEvent.click(deleteButton)
  await waitFor(() => {
    expect(screen.queryByTestId('delete')).toBeNull()
  })
})
