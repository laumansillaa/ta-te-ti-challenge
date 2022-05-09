import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import AddUser from '../addUser/addUser';
import Tablero from '../Tablero/Tablero';
import { getUsers } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

import './Home.css';

export default function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])


    return (
        <div>
            <div>
                <div className='homeNav'>
                    <div className= 'containTitleHome' >
                        <h4 className='titleHome' >
                            Welcome to Ta-Te-Ti
                        </h4>                    
                    </div>
                    <div >
                        <Link to='/stadistics'><button className= 'buttonLink'>Stadistics</button></Link>
                    </div>
                </div>
            </div>
            <AddUser />
            <div className='homeSubTitle'>
                <h2 className='subtitleHome'>Ta-te-ti game!</h2>
            </div>
            <div className='containTablero'>
                <Tablero />
            </div>
        </div>
    )


}