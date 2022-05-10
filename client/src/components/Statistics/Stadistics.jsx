import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, allGames, filterByUser } from "../../actions";
import { Link } from "react-router-dom";
import './stadistics.css';


export default function Stadistics () {

    const dispatch = useDispatch();

    const users = useSelector(state => state.users);
    const games = useSelector(state => state.games);
  

    const [userFilter, setUserFilter] = useState(
        [window.localStorage.getItem("filter")]
    );

    // La funcion setLocalStorage es parte de la idea inicial para conservar los datos al actualizar la pagina
    // Decidi dejar el codigo, a pesar de que no esta consevando los valores al actualizar, para obtener una devolucion
    // de parte de ustedes. Y me comenten si la idea era acertada o no, que fue lo que estuvo mal ejecutado, o que fue lo que 
    // debi hacer, o me falto, para concretar la idea. 

    function setLocalStorage (e) {
        try {
            dispatch(filterByUser(e.target.value))
            setUserFilter(e.target.value)
            window.localStorage.setItem("filter",  userFilter);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(getUsers());
        dispatch(allGames());
    }, []);


    // function handleFilterByUser (e) {
    //     e.preventDefault()
    //     dispatch(filterByUser(e.target.value));
    // }


    return (

        <div className="containerStadistics">
            <div>
                <div className='homeNav'>
                    <div className= 'containTitleHome' >
                        <h4 className='titleHome' >
                            Welcome to Ta-Te-Ti
                        </h4>                    
                    </div>
                    <div >
                        <Link to='/'><button className= 'buttonLink'>Home</button></Link>
                    </div>
                </div>
                <div className='homeNav'>
                    <h4 className= 'titleHome'>Filter by User </h4>
                    <select onChange= {setLocalStorage} value={window.localStorage.getItem("filter")} className='selectStadistics'>
                        <option>Filter user</option>
                        { 
                            users.map(e => {
                                return (
                                    <option key={e.id} value={e.username}>{e.username}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
           <div className='contCards'>
               {
                    games? 
                    <div className= 'containerCard'>
                    {
                        games?.map(games => {
                            return (
                                
                                <div key={games.id} className= 'card'>
                                    <div className= 'card_cover'>
                                        <h4>○ {games.players[0]} vs {games.players[1]}</h4>
                                    </div>
                                    <div className= 'card_content'>
                                        <h4>○ Winner: {games.winner? games.winner : '-' }</h4>
                                        <h4>○ Loser: {games.loser? games.loser : '-'}</h4>
                                        <h4>○ Equality: {games.equality? games.equality : '-'}</h4>
                                    </div>
                                </div>                                 
                            ) 
                        })
                    
                    }
                    </div>  
                : <h1>Loading...</h1>
                } 
            </div>
        </div>
    )

}