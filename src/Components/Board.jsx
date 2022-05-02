import { useState } from 'react'
import Word from './Word'

function Board(props) {
    const { all_words, good_words, positions } = props
    const [ selectedWords, setSelectedWords ] = useState([])

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

    console.log(selectedWords)

    return (
        <div className="board">
            {all_words.map((word, index) =>
                <li 
                    key={ word }
                    style={{gridColumn: positions[index].slice(0, 1), gridRow: positions[index].slice(1, 2)}}
                >
                    <Word
                        word={ word }
                        positionX={ positions[index].slice(0, 1) }
                        positionY={ positions[index].slice(1, 2)}
                        onClick={() => handleClick(index) }
                    />
                </li> 
            )}
        </div>
    )
}

export default Board