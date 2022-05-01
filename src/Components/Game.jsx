import { useState } from 'react'
import data from '../data.json'
import Board from './Board'
import generatePositions from './positions'

function Game() {
    const [ positions, setPositions ] = useState(generatePositions(data))

    return (
        <>
            <h1>{ data.question } </h1>
            <Board
                all_words={ data.all_words }
                good_words={ data.good_words }
                positions={ positions }
            />
        </>
    )
}

export default Game