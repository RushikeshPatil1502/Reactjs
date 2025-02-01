import React, { useReducer } from 'react'
import Button from '../02-List-Practice/Button'

const initialState = {
    showtext : true
}

const SHOW_TEXT = 'SHOW_TEXT'
const HIDE_TEXT = 'HIDE_TEXT'

function reducer(state,action){
    switch (action.type) {
        case SHOW_TEXT:
            return {
                ...state,
                showtext: true
            }
        case HIDE_TEXT:
            return {
                ...state,
                showtext: false
            }
        default:
            return state
    }
}

function UseReducerExample() {
    const [state,dispatch] = useReducer(reducer , initialState)
  return (
    <div className='mt-10'>
        {
            state.showtext ? <h3>UseReducer</h3> : <h3></h3>
        }
        
        <Button clickFunction={()=> dispatch({type: SHOW_TEXT})} buttonDescription='show text'/>
        <Button clickFunction={()=> dispatch({type: HIDE_TEXT})} buttonDescription='hide text'/>     
    </div>
  )
}

export default UseReducerExample