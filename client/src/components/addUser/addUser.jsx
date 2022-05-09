import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addUser, getUsers } from '../../actions';
import './adduser.css'



export default function AddUser () {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [username, setUserName] = useState('');

    useEffect (() => {
        dispatch(getUsers());
    }, [dispatch])

    const data = {
        name: name,
        username: username
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && username) {
            dispatch(addUser(data));
            alert('User created')
            setName('');
            setUserName('');
            dispatch(getUsers());
        } else {
            alert('Please fill all the fields')
        }
    }

    return (

        <div className='navbar'>
                <div className='containTitle'>
                    <h5 className='titleCreate'>  Create user</h5>
                </div>
                <div className= 'allInputs' >
                    <form onSubmit={(e) => handleSubmit(e)} className='form' > 
                        <div className='cont_input' >
                            <label className='input_label'>Name  </label>
                            <input type="text" placeholder="  Name" className='input' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='cont_input' >
                            <label className='input_label'>Username  </label>
                            <input type="text" placeholder="  Username" className='input' onChange={ (e) => setUserName(e.target.value)} />
                        </div>
                        <div>
                            <button className='buttonCreate' type='submit'>Create user!</button>
                        </div>
                    </form>
                </div>
        </div>

    )


}

