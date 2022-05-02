function Word(props) {
    const { word, onClick, isSelected, isCorrect } = props

    return (
        <span // button?
            className={ isSelected ? `selected ${isCorrect}` : 'non-selected'}
            onClick={ onClick }
        >
            { word }
        </span>
    )
}

export default Word