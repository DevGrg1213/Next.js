import React from 'react'
import Event from './event'
import classes from './event-list.module.css'
function EventList({events}) {
  return (
    <ul className={classes.list}>
        {events.map(event=> <Event key={event.id} event={event}/>)}
    </ul>
  )
}

export default EventList