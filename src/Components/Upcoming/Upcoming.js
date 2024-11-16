import React from 'react'
import './Upcoming.css';

const Upcoming = () => {
  return (
    <div>
        <p id='performanceHeader'>Upcoming Performances:</p>

        <table id='performanceTable'>
            <tr>
                <td>12&#47;6&#47;24</td>
                <td>Rackham Auditorium, Ann Arbor</td>
                <td><a>On Sale Soon</a></td>
            </tr>
            <tr>
                <td>12&#47;9&#47;24</td>
                <td>Grosse Pointe United Methodist Church</td>
                <td className='performanceButton'><a href='https://www.eventbrite.com/e/christmas-on-lakeshore-2024-an-evening-of-a-cappella-tickets-1073998060109?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl'>Buy Tickets</a></td>
            </tr>
        </table>
    </div>
  )
}

export default Upcoming