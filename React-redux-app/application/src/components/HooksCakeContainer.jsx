import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import buyCake from '../redux/Cakes/CakeActions'
const HooksCakeContainer = () => {
    const noOfCakes = useSelector(state => state.noOfCakes)
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h1> UseSelector hook </h1>
                <h2>
                    No of cakes - {noOfCakes}
                </h2>
                <button onClick={e=>dispatch(buyCake())}>
                    Buy cake
                </button>
            </div>
        </>

    )
}

export default HooksCakeContainer