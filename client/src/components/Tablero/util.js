export default function start ({setPlayerA, setPlayerB, input, setStart}) {
    if (Math.floor(Math.random()*10) % Math.floor(Math.random()*10) === 0) {
        setPlayerA(input.name[0])
        setPlayerB(input.name[1])
    } else {
        setPlayerB(input.name[0])
        setPlayerA(input.name[1])
    }
    setStart(true)

}