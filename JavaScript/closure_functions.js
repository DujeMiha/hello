
function outer(){

    let message = "Hello"

    function inner(){
        console.log(message)
    }

    inner()
}

message = "Goodbye"

outer()

//////////////////////////////////////////////////////
function createCounter(){

    let count = 0

    function increment(){
        count++
        console.log(`Count increased to ${count}`)
    }

    function getCount(){
        return count
    }

    return{increment, getCount}
}

const counter = createCounter()

counter.increment()
counter.increment()
counter.increment()
counter.increment()

console.log(`The current count is ${counter.getCount()}`)

///////////////////////////////////////////////////////
function createGame(){

    let score = 0

    function increaseScore(points){
        score += points
        console.log(`+${points}pts`)
    }

    function decreaseScore(points){
        score -= points
        console.log(`-${points}pts`)
    }

    function getScore(){
        return score
    }
    return {increaseScore, decreaseScore, getScore}
}
score = 1000000000000

const game = createGame()

game.increaseScore(5)
game.increaseScore(5)
game.increaseScore(5)
game.decreaseScore(3)
game.decreaseScore(3)
console.log(`The score is ${game.getScore()}pts`)
