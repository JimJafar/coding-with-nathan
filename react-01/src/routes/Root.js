import "./Root.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import React from "react";
import TopMenu from "../components/TopMenu";

export default function Root() {
  const [selectedDate, setSelectedDate] = React.useState();

  return (
    <div className="App">
      <TopMenu />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {selectedDate && <p>Selected date: {selectedDate.toISOString()}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="marginTop">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </header>
    </div>
  );
}
