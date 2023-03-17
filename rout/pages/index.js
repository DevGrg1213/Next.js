import React from 'react'
import EventList from '@/components/events/events-list'
import { getFeaturedEvents} from '@/dummy-data'
function HomePage() {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventList events={events}/>
    </div>
  )
}

export default HomePage