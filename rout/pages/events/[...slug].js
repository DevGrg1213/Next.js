import EventList from '@/components/events/events-list';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react'

function EventFilter() {
    const router = useRouter();
    const filteredData = router.query.slug;
    if(!filteredData){
        return <p>Loading.....</p>
    }
    const year = Number(filteredData[0]);
    const month = Number(filteredData[1]);
    const events = getFilteredEvents({
        year,
        month
    });
    if(!events || events.length < 0 ){
        return <p>No events availabe!!!</p>
    }
    const filterdDate = new Date(year,month - 1).toLocaleDateString('en-US',{
        year:'long',
        month:'numeric'
    });
  return (
    <Fragment>
        <h1 className='center'>{filterdDate}</h1>
        <EventList events={events}/>
    </Fragment>
  )
}

export default EventFilter