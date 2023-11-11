const gridCount = 16;
const container = document.querySelector('.container')
const resetButton = document.querySelector('button')

const makeGrid = (gridCount) => {
    for (let i = 0; i < gridCount; i++)
    {
        const row = document.createElement('div')
        row.classList.add('row')

        for (let j = 0; j < gridCount; j++)
        {
            const box = document.createElement('div')
            box.classList.add('box')

            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = 'black'
            })
            row.appendChild(box)
        }
        container.appendChild(row)
    }
}

resetButton.addEventListener('click', () => {
    let input

    while (input > 100)
        input = Number.prompt('Type dimensions for the new grid.')
        makeGrid(input)
})

makeGrid(gridCount)