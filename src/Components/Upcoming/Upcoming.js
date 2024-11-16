import React from 'react'
import './Upcoming.css';

const Upcoming = () => {
  return (
    <div>
        <p>Upcoming Performances:</p>

        <table>
            <tr>
                <td>12&#47;6&#47;24</td>
                <td>Rackham Auditorium, Ann Arbor</td>
                <td><a>Buy Tickets</a></td>
            </tr>
            <tr>
                <td>12&#47;9&#47;24</td>
                <td>Grosse Pointe United Methodist Church</td>
                <td><a>Buy Tickets</a></td>
            </tr>
        </table>
    </div>
  )
}

export default Upcoming