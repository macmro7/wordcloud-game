function Word(props) {
    const { word, positionX, positionY, onClick } = props

    return (
        <span // button?
            style={{gridColumn: positionX, gridRow: positionY}}
            onClick={ onClick }
        >
            { word }
        </span>
    )
}

export default Word