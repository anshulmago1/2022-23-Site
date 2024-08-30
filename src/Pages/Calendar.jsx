import React from 'react';
import Page from '../Components/Page';

function Calendar() {
  return (
    <Page>
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="md:text-7xl text-5xl font-bold mb-8 text-center text-gray-900">
          CSNHS Calendar
        </h1>
        <p className="md:text-xl text-lg mb-8 text-center text-gray-600">
          Stay up to date with our club events, meetings, and important dates.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=csnhsclements%40gmail.com&ctz=America%2FChicago&bgcolor=%23ffffff&color=%23039BE5&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1" 
            style={{border: 0}}
            width="100%" 
            height="600" 
            title="CSNHS Calendar"
            className="w-full rounded-lg"
          ></iframe>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Can't see the calendar? <a href="https://calendar.google.com/calendar/embed?src=csnhsclements%40gmail.com&ctz=America%2FChicago" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-all">View it directly on Google Calendar</a>.
          </p>
          <p className="text-gray-500 text-sm">
            To add this calendar to your own Google Calendar, click the "+ Google Calendar" button at the bottom right of the calendar.
          </p>
        </div>
      </div>
    </Page>
  );
}

export default Calendar;