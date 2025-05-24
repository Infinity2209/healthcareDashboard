import React from 'react';

const Schedule = () => {
  return (
    <section className="schedule">
      <div className="schedule-header">
        <h3>October 2021</h3>
        <div className="week-navigation">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>
      <div className="calendar">
        <div className="calendar-day">
          <div className="date">25</div>
          <div className="day">Mon</div>
          <div className="time">10:00</div>
          <div className="time">11:00</div>
          <div className="time">12:00</div>
        </div>
        <div className="calendar-day">
          <div className="date">26</div>
          <div className="day">Tues</div>
          <div className="time inactive">08:00</div>
          <div className="time active">09:00</div>
          <div className="time">10:00</div>
        </div>
        <div className="calendar-day">
          <div className="date">27</div>
          <div className="day">Wed</div>
          <div className="time">12:00</div>
          <div className="time">13:00</div>
          <div className="time">14:00</div>
        </div>
        <div className="calendar-day">
          <div className="date">28</div>
          <div className="day">Thurs</div>
          <div className="time active">10:00</div>
          <div className="time">11:00</div>
          <div className="time">12:00</div>
        </div>
        <div className="calendar-day">
          <div className="date">29</div>
          <div className="day">Fri</div>
          <div className="time">14:00</div>
          <div className="time">15:00</div>
          <div className="time">16:00</div>
        </div>
        <div className="calendar-day">
          <div className="date">30</div>
          <div className="day">Sat</div>
          <div className="time active">12:00</div>
          <div className="time">14:00</div>
          <div className="time">15:00</div>
        </div>
        <div className="calendar-day">
          <div className="date">31</div>
          <div className="day">Sun</div>
          <div className="time active">09:00</div>
          <div className="time">10:00</div>
          <div className="time">11:00</div>
        </div>
      </div>
      <div className="appointments">
        <div className="appointment dentist">
          <div className="title">Dentist</div>
          <div className="time">09:00-11:00</div>
          <div className="doctor">Dr. Cameron Williamson</div>
        </div>
        <div className="appointment physio">
          <div className="title">Physiotherapy Appointment</div>
          <div className="time">11:00-12:00</div>
          <div className="doctor">Dr. Kevin Djones</div>
        </div>
      </div>
      <div className="upcoming-schedule">
        <h4>The Upcoming Schedule</h4>
        <div className="schedule-day">
          <div className="day-label">On Thursday</div>
          <div className="schedule-cards">
            <div className="schedule-card">
              <div className="title">Health checkup complete</div>
              <div className="time">11:00 AM</div>
            </div>
            <div className="schedule-card">
              <div className="title">Ophthalmologist</div>
              <div className="time">14:00 PM</div>
            </div>
          </div>
        </div>
        <div className="schedule-day">
          <div className="day-label">On Saturday</div>
          <div className="schedule-cards">
            <div className="schedule-card">
              <div className="title">Cardiologist</div>
              <div className="time">12:00 AM</div>
            </div>
            <div className="schedule-card">
              <div className="title">Neurologist</div>
              <div className="time">16:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
