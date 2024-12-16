import { SetStateAction, useState } from "react"

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
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  )
}

export default MemoryGrid