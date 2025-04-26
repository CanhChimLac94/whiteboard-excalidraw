import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
import { useNavigate } from "react-router-dom";

export default function ReactBigCalendar() {
  const navigate = useNavigate();
  const [eventsData, setEventsData] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Enter New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "end", padding: "1rem" }}>
        <button style={{
          background: "#70b1ec",
          border: "none",
          color: "#fff",
          width: "max-content",
          fontWeight: "bold",
          padding: ".5rem",
          borderRadius: ".25rem"
        }}
          className="excalidraw-button collab-button"
          onClick={() => navigate('/')}
        >
          White board
        </button>
      </div>
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
