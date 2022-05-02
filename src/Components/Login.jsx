import { useState } from "react"

function Login(props) {
    const { updateNickname } = props 
    const [ input, setInput ] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        updateNickname(input)
    }

    return (
        <div className="login">
            <h1>Wordcloud Game</h1>
            <form onSubmit={ handleSubmit }>
                <input
                    name="input"
                    value={input}
                    onChange={ handleChange }
                    placeholder="Enter your nickname here..."
                />
                <button
                    className="continue--button"
                    // onSubmit={ handleSubmit }
                >
                    play
                </button>
            </form>
        </div>
    )
}

export default Login