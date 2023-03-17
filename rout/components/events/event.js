import React from 'react'
import classes from './event.module.css'
import Button from '../ui/Button';
function Event({event}) {
    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    const formattedLocation = event.location.replace(',','\n');
  return (
    <li className={classes.item}>
            <img src={`/${event.image}`}/>
        <div className={classes.content}>
        <div className={classes.summary}>
        <h2>{event.title}</h2>
        <div className={classes.date}>
            <time>{humanReadableDate}</time>
        </div>
        <div>
            <address>{formattedLocation}</address>
        </div>
        </div>
        <div className={classes.actions}>
            <Button link={`/events/${event.id}`}>Explore event</Button>
        </div>
    </div>
    </li>
  )
}

export default Event