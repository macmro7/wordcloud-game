import { useState } from 'react'
import Board from './Board'
import Login from './Login'
import ScoreBoard from './ScoreBoard'
import generatePositions from './positions'

function Game(props) {
    const { data } = props
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
        setIsFinished(true)
    }

    return (
        <>
            { nickname === '' ?
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
                    <div className="game">
                        <h1 className="message">{ data.question} </h1>
                        <Board
                            all_words={ data.all_words }
                            good_words={ data.good_words }
                            positions={ positions }
                            updateScore={ updateScore }
                            updateIsFinished={ updateIsFinished }
                        />  
                    </div>
            }
        </>
    )
}

export default Game