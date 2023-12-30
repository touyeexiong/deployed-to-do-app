import React from 'react'

const ListItem = ({task}) => {
  return (
    <div className='list-item'>
      <p>{task.title}</p>
    </div>
  )
}

export default ListItem
