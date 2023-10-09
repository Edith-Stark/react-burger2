import React, { useState } from "react";
import img3 from "../Assets/table.jpg";
import "./Menu.css";
import Calendar from "react-calendar";
export default function ReserveTable() {
  const [info, setInfo] = useState({});
  const [date, setDate] = useState(new Date());
  const [reserve, setReserve] = useState({});
  const reservationHandler = () => {
    setReserve({ ...info, id: Date.now() });
    console.log(reserve);
  };
  return (
    <div className=" -mt-8 ">
      <div className="relative">
        <div className="     ">
          <h1 className="textColor ml-mreservetitle p-10 pb-8  text-2xl underline font-semibold  ">
            {" "}
            Reservation
          </h1>
          <div className="grid grid-cols-3 ">
            <div className="mt-3 ml-10 ">
              <h1 className=" font font-semibold text-white pb-2">
                Select a Date
              </h1>
              <Calendar className="" onChange={setDate} value={date} />
            </div>
            <div>
              <div className="ml-16 mt-3">
                <h1 className=" font font-semibold text-white">Name</h1>
                <input
                  className="w-wsm70 h-8 mt-2 px-2 rounded text-black  focus:outline-none bg-gray-200"
                  type="text"
                  required
                  value={info.name}
                  placeholder="Enter your name"
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
                />
              </div>

              <div className="mt-3 ml-16">
                <h1 className=" font font-semibold text-white">Time of Day</h1>
                <select
                  onChange={(e) => setInfo({ ...info, time: e.target.value })}
                  className="w-wsm70 h-8 mt-2 px-2 rounded  text-black  focus:outline-none  bg-gray-200"
                >
                  <option>Morning</option>
                  <option>lunch time</option>
                  <option>Dinner</option>
                </select>
              </div>
              <div className="mt-3 ml-16">
                <h1 className=" font font-semibold text-white">Table</h1>
                <select
                  onChange={(e) => setInfo({ ...info, table: e.target.value })}
                  className="w-wsm70 h-8 mt-2 px-2 rounded  text-black  focus:outline-none  bg-gray-200"
                >
                  <option>Normal (5-6 people)</option>
                  <option>Family Size (More than 10 people)</option>
                  <option>For Couples (Table for 2)</option>
                </select>
              </div>
              <div className="mt-8 ml-16">
                <button
                  onClick={reservationHandler}
                  className="w-wsm70 bg-red-500 h-10 p-2"
                >
                  Make a Reservation
                </button>
              </div>
            </div>
            <div>
              <div>
                <h1 className="m-10 mb-5 ml-16 font-semibold text-gray-300 underline  text-xl italic">
                  Details
                </h1>
                <div className="text-lg text-yellow-600 ">
                  <p> Name: {reserve.name}</p>
                  <p> Date: {date.toDateString()}</p>
                  <p>Time of Day: {reserve.time}</p>
                  <p> Table for: {reserve.table}</p>
                  <p> ID: {reserve.id} </p>
                  <p className="text-xs italic text-gray-400">
                    {" "}
                    Please bring this Id with you to avoid any complications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
