function Word(props) {
    const { word, positionX, positionY } = props

    console.log(positionX, positionY)
    return (
        <h1
            style={{gridColumn: positionX, gridRow: positionY}}
        >
            { word }
        </h1>
    )
}

export default Word