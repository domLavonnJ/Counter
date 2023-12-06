import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, subItem } from '../../store/actions/counterAction'
import './home.css'


const Home = () => {

    const state = useSelector((state: any) => state)
    const dispatch = useDispatch()

    const addIt = () => {
        dispatch(addItem())
    }

    const subIt = () => {
        dispatch(subItem())
    }
    return <div className="page">
        <h1>Counter</h1>
        <h3 className='num_padding'>{state.count}</h3>
        <button className='btn-add' onClick={addIt}> Add </button>
        <button className='btn-sub' onClick={subIt}> Subtract </button>
    </div>
}

export default Home