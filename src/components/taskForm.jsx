import {useState, useEffect} from 'react'
import './taskForm.css'

const taskForm = () => {

  return (
    <>
    <div className='form-container'>
        <h2>MANAGER</h2>
        <div className='task-count'>
            <p>Total Tasks:0</p>
            <p>Completed Tasks:0</p>
        </div>

            <div className='render-tasks'>

            </div>
            <div className='mini-form'>
                <input id='input-field' type="text" placeholder='Add a Task'/>
                <input id='submit' type="button" value="Add" />
            </div>


    </div>
    </>
  )
}

export default taskForm