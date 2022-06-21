import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ko'

const localizer = momentLocalizer(moment);

class Test extends Component {
  constructor() {
    super();
    const now = new Date();
    const events = [
      {
          id: 0,
          title: '[일반전형]원서접수',
          start: new Date(2022, 9, 3),
          end: new Date(2022, 10, 19),
      },
      {
        id: 2,
        title:'[일반전형]면접(유선) 대상자 발표',
        start: new Date(2022, 10, 21),
        end: new Date(2022, 10, 22)
      }
    ]
    this.state = {
      name: 'React',
      events
    };
  }

  render() {
    return (
      <div>
        <p>
          A test for the React Big Calendar.
        </p>
        <div style={{ height: '500pt'}}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }
}

export default Test