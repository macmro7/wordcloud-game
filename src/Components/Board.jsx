import { useState } from 'react'
import Word from './Word'

function Board(props) {
    const { all_words, good_words, positions, updateScore, updateIsFinished } = props
    const [ selectedWords, setSelectedWords ] = useState([])
    const [ answers, setAnswers ] = useState([])

    function handleClick(i) {
        let newWord = all_words[i]
        let updatedTimers

        if (selectedWords.includes(newWord)) {
            updatedTimers = selectedWords.filter((word) => word !== newWord)
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
        calculateScore(correct.length, incorrect.length, missed.length)
    }

    function calculateScore(correct, incorrect, missed) {
        let score = correct * 2 - (incorrect + missed)
        updateScore(score)
    }

    return (
        <div className="board">
            <ul className="words">
                {all_words.map((word, index) =>
                    <li 
                        key={ word }
                        style={{gridColumn: positions[index].slice(0, 1), gridRow: positions[index].slice(1, 2)}}
                    >
                        <Word
                            word={ word }
                            onClick={() => handleClick(index) }
                            isSelected={ selectedWords.includes(word) ? true : false }
                            isCorrect={ answers[index] }
                        />
                    </li> 
                )}
            </ul>
            { answers.length === 0 ? 
                <button 
                    className="continue--button"
                    onClick={ checkAnswers }
                >
                    Check answers
                </button>
                :
                <button 
                    className="continue--button"
                    onClick={ updateIsFinished }
                >
                    finish game
                </button>
            }
        </div>
    )
}

export default Board