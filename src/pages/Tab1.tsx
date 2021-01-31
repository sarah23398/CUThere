import React, {useRef} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
//import { INITIAL_EVENTS, createEventId } from '../event-utils'
import '../main.css'
import axios from 'axios'
import { batteryDeadOutline } from 'ionicons/icons'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


export default class Tab1 extends React.Component {  

  state = {
    weekendsVisible: true,
    currentEvents: [],
    userData: {
      courses: [

      ]
    },
    courseInfo: [
      
      {'course-id': "",
        assignments: [
        {
          name: "",
          deadline: "" 
        }
      ],
      exam: [
        {
          name: "",
          from: "",
          to: "" 
        }
      ],
      'ta-office-hours': 
      [
        {
        day: "",
        name: "",
        to: "",
        from: ""
        }
      ],
      'class-times': 
      [
        {
        day: "",
        to: "",
        from: ""
        }
      ]
    },
    ],
    events: [
      {
        id: createEventId(),
        title: 'All-day event',
        start: todayStr
      },
      {
        id: createEventId(),
        title: 'Timed event',
        start: todayStr + 'T12:00:00'
      },
    
    ]

  }

  componentDidMount() {
    console.log("Hello World")
    axios.get('/api/users')
    .then(res => {
      
      this.setState({userData: res.data[0]}); 

      this.state.userData.courses.forEach(async (course) => {
        
        axios.get(`/api/courses/${course}`)
        .then(res => {

          let course = res.data;
          
          this.setState({ 
            courseInfo: [...this.state.courseInfo, course] 
          });

          this.state.courseInfo.forEach(course => {
      
            course.assignments.forEach(assignment => {
              
              console.log("Assignment: " + assignment.deadline.replace(/T.*$/, ''));
              console.log(todayStr);
              
              this.setState({
                events: [...this.state.events, {
                  id: createEventId(),
                  title: assignment.name, 
                  // new Date().toISOString().replace(/T.*$/, '')
                  start: assignment.deadline.replace(/T.*$/, ''),
                  
                }]
              })

            });

            course.exam.forEach(exam => {
              
              this.setState({
                events: [...this.state.events, {
                  id: createEventId(),
                  title: exam.name, 
                  // new Date().toISOString().replace(/T.*$/, '')
                  start: exam.from,
                  end: exam.to,
                  
                }]
              })

            });
            
            course['ta-office-hours'].forEach(officeHours => {
              //console.log(officeHours.name)
              this.setState({
                events: [...this.state.events, {
                  id: createEventId(),
                  daysOfWeek: [officeHours.day],
                  title: officeHours.name, 
                  // new Date().toISOString().replace(/T.*$/, '')
                  startTime: officeHours.from,
                  endTime: officeHours.to,
                  //startRecur: todayStr
                  
                }]
              })

            });

            course['class-times'].forEach(lecture => {
              //console.log(officeHours.name)
              this.setState({
                events: [...this.state.events, {
                  id: createEventId(),
                  daysOfWeek: [lecture.day],
                  title: course['course-id'], 
                  // new Date().toISOString().replace(/T.*$/, '')
                  startTime: lecture.from,
                  endTime: lecture.to,
                  //startRecur: todayStr
                  
                }]
              })

            });
            
          });
          
          
        })
        .catch(err => {
          console.log(err);
        });

      });
      

    })
    .catch(err => {
      console.log(err);
    });

  };
  

  render() {
    return (
      <div className='demo-app'>
        {this.renderSidebar()}
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            events = {this.state.events}
            initialEvents={this.state.events} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo:any) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo:any) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events:any) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo:any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event:any) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}



function createEventId() {
  return String(eventGuid++)
}