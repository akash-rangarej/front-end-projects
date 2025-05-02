let container = document.querySelector('.container').children;
container = Array.from(container);

let values = ['<h1>X</h1>', '<h1>O</h1>'];
let turn = true;
let t = false; // to track if the game is over
let reset = document.querySelector('.btn');
let result = document.querySelector('.result')


container.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.querySelector('.item').innerHTML === '') {
            cell.querySelector('.item').innerHTML = turn ? values[0] : values[1];
            turn = !turn; 

            // Check for winning possibilities
            for (let j = 0; j < 2; j++) {

                // Row-wise winning possibilities
                for (let i = 0; i < container.length; i += 3) {
                    if (
                        container[i].querySelector('.item').innerHTML === values[j] &&
                        container[i + 1].querySelector('.item').innerHTML === values[j] &&
                        container[i + 2].querySelector('.item').innerHTML === values[j]
                    ) {
                        result.innerText = `Player ${values[j] === values[0] ? 'X' : 'O'} wins`;
                        t = true;
                        break;
                    }
                }

                // Column-wise winning possibilities
                for (let i = 0; i < 3; i++) {
                    if (
                        container[i].querySelector('.item').innerHTML === values[j] &&
                        container[i + 3].querySelector('.item').innerHTML === values[j] &&
                        container[i + 6].querySelector('.item').innerHTML === values[j]
                    ) {
                        result.innerText = `Player ${values[j] === values[0] ? 'X' : 'O'} wins`;
                        t = true; 
                        break;
                    }
                }

                // Diagonal-wise winning possibilities
                if (
                    (container[0].querySelector('.item').innerHTML === values[j] &&
                        container[4].querySelector('.item').innerHTML === values[j] &&
                        container[8].querySelector('.item').innerHTML === values[j]) ||
                    (container[2].querySelector('.item').innerHTML === values[j] &&
                        container[4].querySelector('.item').innerHTML === values[j] &&
                        container[6].querySelector('.item').innerHTML === values[j])
                ) {
                    result.innerText = `Player ${values[j] === values[0] ? 'X' : 'O'} wins`;
                    t = true;
                    break;
                }
            }

            // Check for a draw
            if (!t && container.every(cell => cell.querySelector('.item').innerHTML !== '')) {
                result.innerText = 'It\'s a draw!';
                t = true; 
            }
        } else {
            alert('This cell is already filled');
        }
    });
});

reset.addEventListener('click' ,()=>{
container.forEach(cell =>{
  cell.querySelector('.item').innerHTML = ''
})
result.innerText = ''
})