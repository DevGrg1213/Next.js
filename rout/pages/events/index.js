import React, { Fragment } from 'react'
import { getAllEvents, getFilteredEvents } from '@/dummy-data'
import EventList from '@/components/events/events-list';
import EventSearch from '@/components/events/event-search';
import { useRouter } from 'next/router';
function AllEvents() {
  const router = useRouter();
  const events = getAllEvents();
  const handleSearchFilter=(year,month) =>{
    router.push(`/events/${year}/${month}`)
  }
  return (
    <Fragment>
    <EventSearch onSubmit={handleSearchFilter}/>
    <EventList events={events}/>
    </Fragment>
  )
}

export default AllEvents