// const sfym = []

// sfym.push('I am Electric') // можно также использовать .shift(),
// sfym.push('Na zare') // но этот метод добавляет элемент в начало,
// sfym.push('1994') // а .push() — в конец

// console.log(sfym[1])
// console.log(' ')

// console.log(sfym.slice(0, 2))
// console.log(' ')

// console.log(sfym.splice(1, 1))
// console.log(' ')

// const studs = ['Смирнов', 'Иванов', 'Васильев', 'Молоткова', 'Алексашкина', 'Гришин'].sort()

// console.log('Список класса:')
// for (let i = 0; i < studs.length; i++) {
//     console.log(String(i + 1), '—', String(studs[i]))
// }
// console.log('Всего учеников:', String(studs.length))

let games = ['Counter-Strike 2', 'PUBG']

const check_button = document.querySelector('.check-button')
const is_game = document.querySelector('.is-game')
const game_input = document.querySelector('.game-input')

check_button.addEventListener('click', () => {
    let chosengame = game_input.value
    if (games.includes (chosengame)) {
        is_game.textContent = 'Эта игра уже есть в списке!'
    } else {
        games.push(chosengame)
        is_game.textContent = 'Игры не было в списке, но она уже добавлена!'
    }
})

// let games = ['Counter-Strike 2', 'PUBG']
// let chosenGame = prompt('Напишите игру для турнира').toLowerCase()

// if (games.includes (chosengame)) {
//     alert('Эта игра уже есть в списке!')
// } else {
//     games.push(chosengame)
//     alert('Игра добавлена в список!')
// }