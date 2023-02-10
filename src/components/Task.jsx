import React from 'react'
 import TaskList from './TaskList';

const Task = () => {
  return (
    <div className='space-x-2 space-y-2 grid grid-row-2'>
        <div className='card'>
            <h1 className='text-2xl text-blue-600'>Tasks</h1>
            <TaskList />
        </div>
       <div className='card'>
       <div className='bg-gray-200 h-44'></div>
       </div>
       <div className='card'>
       <div className='bg-gray-200 h-40'></div>
       </div>
    </div>
  )
}

export default Task