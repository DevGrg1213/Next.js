import React from 'react'
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';
function EventsById() {
    const router = useRouter();
    const item = getEventById(router.query.eventid);
  return (
    <div>{item.description}</div>
  )
}

export default EventsById