import React, {useState, useEffect} from 'react';
import { addGame, getUsers } from '../../actions';
import {useDispatch, useSelector } from 'react-redux';
import './tablero.css';


export default function Tablero () {
    const dispatch = useDispatch();
    const [turn, setTurn] = useState('X');
    const [cell, setCell] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState([])

    const [playerA, setPlayerA] = useState({
        name: '',
        figure: 'X'
    });
    const [playerB, setPlayerB] = useState({
        name: '',
        figure: 'O'
    });
    const [playerTurn, setTurnPlayer] = useState('Player A')
    const [start, setStart] = useState(false);

    const users = useSelector(state => state.users);
    const [input, setInput] = useState({
        name: []
    });

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    function startGame () {
        if(input.name.length === 2){
            if (Math.floor(Math.random()*10) % Math.floor(Math.random()*10) === 0) {
                playerA.name = input.name[0]
                playerB.name = input.name[1]
            } else {
                playerB.name = input.name[0]
                playerA.name = input.name[1]
            }
            setStart(true)
        } else {
            alert('You must select two players')
        }
    }

    function handleSelect (e) {
        if (input.name.length === 2) {
            alert('Max Players Chosen')
        } else {
            if (!input.name.includes(e.target.value)){
                data.players = [...input.name, e.target.value]
                setInput({
                    ...input, 
                    name: [...input.name, e.target.value]
                })
            }
        }  
    }

    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]    
    ]

    function checkWinner (square) {
        for (var i = 0; i < combinations.length; i++) {
            const [x, y, e] = combinations[i];
            if(square[x] && square[x] === square[y] && square[x] === square[e]){
                if (square[x] === 'X') {
                    setWinner(`El ganador fue: ${square[x]}, congrats ${playerA.name}`);
                } else {
                    setWinner(`El ganador fue: ${square[x]}, congrats ${playerB.name}`);
                }
            }
        }
        if(!square.includes('')){
            setWinner(`El resultado fue un empate!`);
            data.equality = "Equality"
        }
    }

    const data = {
        players: input.name,
        winner: '',
        loser: '',
        equality: '',
        user: input.name
    }
    

    if (winner) {
        if(winner.includes(playerA.name)){
            data.winner = playerA.name;
            data.loser = playerB.name;
        } else if(winner.includes(playerB.name)){
            data.winner = playerB.name;
            data.loser = playerA.name;
        } else {
            data.equality = "Equality"
        }
    }

    function resetGame () {
        setWinner('')
        setCell(Array(9).fill(''))
        console.log('SOY DATA', data)
        dispatch(addGame(data))
        startGame()
    }

    function handleClick (num) {
        if(cell[num] !== '' ){
            alert('Ya esta elegido, seleccione otro')
            return
        }
        let square = [...cell]
        if(turn === 'X') {
            square[num] = 'X';
            setTurn('O')
            setTurnPlayer('Player B')
        } else {
            square[num] = 'O';
            setTurn('X')
            setTurnPlayer('Player A')
        }
        checkWinner(square)
        setCell(square);
    }

    function handleDelete (e) {
        setInput({
            ...input, 
            name: input.name.filter(name => name !== e)
        })
    }

    function Cell ({num}) {
        return <td onClick={() => handleClick(num)}>{cell[num]}</td>
    }

    return (
        <div className='container' >
            <div className='selectContainer'>
                {
                    <select onChange={(user) => handleSelect(user)}>
                        <option>Select users</option>
                        {users.map(user =>(
                            <option key={user.id} value={user.username}>{user.username}</option>
                        ))}                
                    </select>
                }
                <div className='playerSelects'>
                    {
                        input.name.map(user => (
                            <label key={user} value={user} className='inputLabel'>
                                {user} <button className='deleteButton' onClick={() => handleDelete (user)}>X</button>
                            </label>
                        ))
                    }
                </div>
            </div>
            <div>
                {
                    start? 
                    <>
                        <table className= 'tablero'>
                            <tbody>
                                <tr>
                                    <Cell num={0}/>
                                    <Cell num={1}/>
                                    <Cell num={2}/>
                                </tr>
                                <tr>
                                    <Cell num={3}/>
                                    <Cell num={4}/>
                                    <Cell num={5}/>
                                </tr>
                                <tr>
                                    <Cell num={6}/>
                                    <Cell num={7}/>
                                    <Cell num={8}/>
                                </tr>
                            </tbody>
                        </table>
                        <div className='turn'>
                            {
                                winner? 
                                <>
                                    <div className='containWinner'>
                                        <h4 className='textData'>○ {winner}</h4>
                                        <button className='startButton' onClick={resetGame}>Play again</button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='containData'>
                                        <h4 className='textData'>○ Player A: {playerA.name} </h4>
                                        <h4 className='textData' >○ Player B: {playerB.name} </h4>
                                        <h4 className='textData' >○ Is turn of {playerTurn}: {turn}</h4>
                                    </div>
                                </>
                            }
                        </div>                   
                    
                    </> :
                    <>
                        <h3 className= 'preGame'>One play?</h3> 
                        <button className='startButton'  onClick={startGame}>START GAME</button>
                    </>
                }
            </div>

        </div>
    )


}

//export default Tablero;
