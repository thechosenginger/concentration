import { SetStateAction, useState } from "react"
import Button from '@mui/material/Button'

interface MemoryGridProps {
  buttonText: string;
  placeholder: string;
  // onSubmit: (inputValue: string) => void;
}

const MemoryGrid: React.FC<MemoryGridProps> = ({ buttonText, placeholder}) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    console.log('Button clicked, input value is:', inputValue)
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="placeholder"
        />
      <Button onClick={handleButtonClick} variant="contained" color="secondary">{buttonText}</Button>
    </div>
  )
}

export default MemoryGrid