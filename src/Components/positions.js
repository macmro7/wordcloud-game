function generatePositions(data) {
    let positionsInit = []

    while (positionsInit.length < data.all_words.length) {
        let x = Math.floor((Math.random() * 6) + 1).toString()
        let y = Math.floor((Math.random() * 9) + 1).toString()
        let position = (x + y)

        if (!positionsInit.includes(position)) {
            positionsInit.push(position)
        }
    }

    return(positionsInit)
}

export default generatePositions