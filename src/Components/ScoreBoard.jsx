
function ScoreBoard(props) {
    const { score, nickname } = props

    function restartGame() {
        window.location.reload();
    }

    return (
        <div className="scoreBoard">
            <h1 className="score--message">Congratulations, { nickname }!</h1>
            <h1>Your score:</h1>
            <h1 className="score">{ score } points</h1>
            <button 
                className="continue--button"
                onClick={ restartGame }
            >
                Try again
            </button>
        </div>
    )
}

export default ScoreBoard