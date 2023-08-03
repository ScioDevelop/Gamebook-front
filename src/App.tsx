import { useState } from 'react'
import './App.css'

interface StoryOption {
  text: string;
  to: number;
  curiosity: boolean;
}

interface StoryElement {
  id: number;
  text: string;
  question: string;
  options: StoryOption[];
}

function App() {
  const [text, setText] = useState<string>("")
  const [question, setQuestion] = useState<string>("")
  const [options, setOptions] = useState<StoryOption[]>([])

  let storyData: StoryElement[] = [
    {
      id: 1,
      text: "Před sebou máte řeku v které je dítě a truhla.",
      question: "Copak zachráníte ?",
      options: [
        {
          text: "Zachráním truhlu",
          to: 3,
          curiosity: true,
        },
        {
          text: "Zachráním dítě",
          to: 2,
          curiosity: false,
        }
      ]
    },
    {
      id: 2,
      text: "Zachránil jste dítě které Vám dalo lahvičku s lektvarem.",
      question: "Vypijete lektvar ?",
      options: [
        {
          text: "ANO",
          to: 4,
          curiosity: true,
        },
        {
          text: "NE",
          to: 5,
          curiosity: false,
        }
      ]
    },
    {
      id: 3,
      text: "Zachránil jste truhlu která je napůl otevřená ale nevíte co je uvnitř.",
      question: "Otevřete a nahlédnete do truhly ?",
      options: [
        {
          text: "ANO",
          to: 6,
          curiosity: true,
        },
        {
          text: "NE",
          to: 7,
          curiosity: false,
        }
      ]
    },
  ]

  function startGame(id = 0) {
    let searchedElement = storyData.find(element => element.id === id)
    if (searchedElement) {
      setText(searchedElement.text);
      setQuestion(searchedElement.question);
      setOptions(searchedElement.options);
    } else {
      // Handle the case when searchedElement is not found (optional)
      console.log("Story element not found.");
    }
  }

  return (
    <div>
      <button onClick={() => startGame(1)}>Start game</button>
      <h2>Gamebook</h2>
      <p>{text}</p>
      <p style={{ fontWeight: "bold" }}>{question}</p>

      <div className='container'>
        {options.map((option, index) => (
          <button key={index} onClick={() => startGame(option?.to)}>{option?.text}</button>
        ))}
      </div>
    </div>
  )
}

export default App
