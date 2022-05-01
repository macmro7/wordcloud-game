import Word from './Word'

function Board(props) {
    const { all_words, good_words, positions } = props

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
                    />
                </li> 
            )}
        </div>
    )
}

export default Board