import { useState } from 'react'
import data from '../data.json'
import Board from './Board'
import Login from './Login'
import ScoreBoard from './ScoreBoard'
import generatePositions from './positions'

function Game() {
    const [ positions, setPositions ] = useState(generatePositions(data))
    const [ score, setScore ] = useState()
    const [ nickname, setNickname ] = useState('')
    const [ isFinished, setIsFinished ] = useState(false)

    function updateScore(calculatedScore) {
        setScore(calculatedScore)
    }

    function updateNickname(name) {
        setNickname(name)
    }

    function updateIsFinished() {
        console.log('updated')
        setIsFinished(true)
    }

    console.log(isFinished)

    return (
        <>
            { nickname == '' ? 
                <Login
                    updateNickname={ updateNickname }
                />
                :
                isFinished ?
                    <ScoreBoard
                        score={ score }
                        nickname={ nickname }
                    />
                    :
                    <Board
                        all_words={ data.all_words }
                        good_words={ data.good_words }
                        positions={ positions }
                        updateScore={ updateScore }
                        updateIsFinished={ updateIsFinished }
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