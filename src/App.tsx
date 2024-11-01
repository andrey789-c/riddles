import { act, useEffect, useState } from "react";
import { data, IData } from "./data";
import Answer from "./answer";

function App() {
	const [answer, setAnswer] = useState<IData[]>([]);
	const [activeIndex, setActiveIndex] = useState(0);
  const [success, setSuccess] = useState(false)

	useEffect(() => {
		document.title = "Загадки";

		setAnswer(data);
	}, []);

  useEffect(() => {
    if(activeIndex > 3 ) {
      setSuccess(true)
    }
  }, [activeIndex])

	return (
		<div className="wrapper">
			{!activeIndex ? (
				<div className="start">
					Чтобы получить задание, отгадай 3 загадки. Если готов нажми на кнопку
					"Погнали!"
					<button onClick={() => setActiveIndex(1)}>Погнали!</button>
				</div>
			) : (
        activeIndex === 4 ? <div className="success">Вы отгадали все загадки</div> :
				<Answer
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
					answer={answer[activeIndex - 1].answer}
					text={answer[activeIndex - 1].text}
				/>
			)}

      
		</div>
	);
}

export default App;
