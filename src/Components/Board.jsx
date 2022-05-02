import { useState } from 'react'
import Word from './Word'

function Board(props) {
    const { all_words, good_words, positions } = props
    const [ selectedWords, setSelectedWords ] = useState([])
    const [ isActive, setIsActive ] = useState([])
    const [ answers, setAnswers ] = useState([])
    const [ score, setScore ] = useState([])

    function handleClick(i) {
        let newWord = all_words[i]
        let updatedTimers

        if (selectedWords.includes(newWord)) {
            updatedTimers = selectedWords.filter((word) => word != newWord)
            setSelectedWords(updatedTimers)
        }
        else {
            setSelectedWords(prev => [
                ...prev,
                all_words[i]
            ])
        }
    }

    function checkAnswers() {
        let correct = []
        let incorrect = []
        selectedWords.forEach(word => {     // check whether the selected word is correct or incorrect
            if(good_words.includes(word)) {
                correct.push(word)
            }
            else {
                incorrect.push(word)
            }
        })

        let checked = []
        all_words.forEach(word => {     // combine answers into one array
            if(correct.includes(word)) {
                checked.push('correct')
            }
            else if(incorrect.includes(word)) {
                checked.push('incorrect')
            }
            else {
                checked.push(null)
            }
        })

        let missed = []
        all_words.forEach((word, index) => {    // find missed words
            if(good_words.includes(word) && checked[index] == null)
                missed.push(word)
        })
        
        setAnswers(checked)
        console.log(missed)
        console.log(correct.length, incorrect.length, missed.length)
        calculateScore(correct.length, incorrect.length, missed.length)
    }

    function calculateScore(correct, incorrect, missed) {
        let scoreInit = correct * 2 - (incorrect + missed)

        setScore(scoreInit)
    }

    return (
        <ul className="board">
            {all_words.map((word, index) =>
                <li 
                    key={ word }
                    style={{gridColumn: positions[index].slice(0, 1), gridRow: positions[index].slice(1, 2)}}
                >
                    <Word
                        word={ word }
                        onClick={() => handleClick(index) }
                        isSelected={ selectedWords.includes(word) ? true : false }
                        // isCorrect={ correct.includes(word) ? true : false }
                        // isIncorrect={ correct.includes(word) ? true : false }
                        isCorrect={ answers[index] }
                    />
                </li> 
            )}
            <button onClick={ checkAnswers }>Check answers</button>
        </ul>
    )
}

export default Board