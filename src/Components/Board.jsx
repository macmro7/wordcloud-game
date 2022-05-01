import Word from './Word'

function Board(props) {
    const { all_words, good_words } = props

    return (
        all_words.map(word => 
            <Word
                key={ word }
                word={ word }
            />
        )
    )
}

export default Board