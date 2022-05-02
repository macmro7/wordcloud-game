import { useState } from 'react'
import data from '../data.json'
import Board from './Board'
import Login from './Login'
import generatePositions from './positions'

function Game() {
    const [ positions, setPositions ] = useState(generatePositions(data))
    const [ score, setScore ] = useState(0)
    const [ nickname, setNickname ] = useState('')

    function updateScore(calculatedScore) {
        setScore(calculatedScore)
    }

    function updateNickname(name) {
        setNickname(name)
    }

    return (
        <>
            { nickname == '' ? 
                <Login
                    updateNickname={ updateNickname }
                />
                :
                <Board
                all_words={ data.all_words }
                good_words={ data.good_words }
                positions={ positions }
                updateScore={ updateScore }
                />
            }
            {/* <h1>{ data.question } </h1>
            <Board
                all_words={ data.all_words }
                good_words={ data.good_words }
                positions={ positions }
                updateScore={ updateScore }
            />
            { score } */}
        </>
    )
}

export default Game