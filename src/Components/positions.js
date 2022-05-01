function generatePositions(data) {
    let positionsInit = []

    while (positionsInit.length < data.all_words.length) {
        let x = Math.floor(Math.random() * 5).toString()
        let y = Math.floor(Math.random() * 10).toString()
        let position = (x + y)

        if (!positionsInit.includes(position)) {
            positionsInit.push(position)
        }
    }

    return(positionsInit)
}

export default generatePositions