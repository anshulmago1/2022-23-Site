import React from "react";

function MeetingDates() {
  return (
    <div className="w-full flex flex-col place-content-center items-center">
      <div className="flex flex-col place-content-center h-96">
        <h1 className="text-9xl my-96">CSNHS</h1>
      </div>
      <table className="table-auto w-3/4 bg-slate-700  border py-3 px-3 border-slate-500 border-collapse">
        <thead>
          <tr>
            <td className="border py-3 px-3  border-slate-500">Date</td>
            <td className="border py-3 px-3  border-slate-500">Event</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border py-3 px-3  border-slate-500">1/1/22</td>
            <td
              className="
              border py-3 px-3 
              border-slate-500"
            >
              normal meeting
            </td>
          </tr>
          <tr>
            <td className="border py-3 px-3  border-slate-500">1/1/22</td>
            <td
              className="
              border py-3 px-3 
              border-slate-500"
            >
              normal meeting
            </td>
          </tr>
          <tr>
            <td className="border py-3 px-3  border-slate-500">1/1/22</td>
            <td
              className="
              border py-3 px-3 
              border-slate-500"
            >
              normal meeting
            </td>
          </tr>
          <tr>
            <td className="border py-3 px-3  border-slate-500">1/1/22</td>
            <td
              className="
              border py-3 px-3 
              border-slate-500"
            >
              normal meeting
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MeetingDates;
