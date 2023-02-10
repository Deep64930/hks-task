import React from 'react'
import Sidebar from './Sidebar';
import Leftbar from './Leftbar';

import Task from './Task';

const Content = () => {
  return (
    <div className=' grid grid-cols-3  border space-y-2  space-x-2 flex-wrap '>
        <Sidebar />
        <Task />
        <Leftbar />
    </div>
  )
}

export default Content