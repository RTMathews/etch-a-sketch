const gridCount = 16;
const container = document.querySelector('.container')

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

makeGrid(gridCount)

