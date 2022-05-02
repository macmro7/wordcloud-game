
function ScoreBoard(props) {
    const { score, nickname } = props
    return (
        <div className="scoreBoard">
            <h1>Congratulations, { nickname }!</h1>
            <h1>Your score:</h1>
            { score }
        </div>
    )
}

export default ScoreBoard