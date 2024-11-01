import { FC, useState } from "react"

interface IAnswerProps {
  text: string
  answer: string
  setActiveIndex: (index: number) => void
  activeIndex: number
}

const Answer:FC<IAnswerProps> = ({answer, text, activeIndex, setActiveIndex}) => {

  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  console.log(activeIndex)

  const checkAnswer = () => {
    if (input.toLowerCase() === answer.toLowerCase()) {
      if(activeIndex === 3) {
        setActiveIndex(4)
        return
      }
      setActiveIndex(activeIndex + 1)
      setError(false)
      setInput('')
    } else {
      setError(true)
    }
  }

  return <div className="answer">
    <div className="answer__title">{text}</div>
    
    <input placeholder="Введите ответ" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    {error ? <div className="error">Позвони своему лидеру, попроси помощи</div> : null}
    <button onClick={checkAnswer}>Ответить</button>

    
  </div>

}

export default Answer