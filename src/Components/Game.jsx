import Board from './Board'
import data from '../data.json'

function Game() {
    console.log(data.all_words)

    return (
        <>
            <h1>{ data.question } </h1>
            <Board
                all_words={ data.all_words }
                good_words={ data.good_words }
            />
        </>
    )
}

export default Game