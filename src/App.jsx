import { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./components/Header"
import { useEffect } from "react"
import { Link } from "react-router-dom"

async function getAllEvents(setEvent) {
  try {
    const response = await fetch(
      "https://bi-assignment-backend-mz1c.vercel.app/events"
    )
    if (response.ok) {
      const data = await response.json()
      setEvent(data)
    } else {
      console.log("No event found")
    }
  } catch (error) {
    console.log(error)
  }
}

function App() {
  const [events, setEvents] = useState([])
  const [type, setType] = useState("")
  const [search, setSearch] = useState("")

  // async function deleteEvent(e) {
  //   try {
  //     const response = await fetch(
  //       `https://bi-assignment-backend-chi.vercel.app/deleteEvent/${e.target.id}`,
  //       { method: "DELETE" }
  //     )
  //     if (response.ok) {
  //       console.log("Event deleted Successfully")
  //     } else {
  //       console.log("No event found")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    getAllEvents(setEvents)
  }, [])

  const filteredEvents =
    type === "Both" || type === ""
      ? events
      : events.filter((event) => event.type === type)

  const finalEvents =
    search === ""
      ? filteredEvents
      : filteredEvents.filter((event) => event.title === search || event.eventTags.includes(search))

  function handleChange(e) {
    setType(e.target.value)
  }

  return (
    <>
      <Header setSearch={setSearch} />
      <main className="bg-body-tertiary">
        <div className="container">
          <div className="d-flex justify-content-between py-3">
            <h3 className="fw-bold">Meetup Events</h3>
            <select
              id="eventType"
              className="border border-0"
              onChange={handleChange}
            >
              <option value="">Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="row gy-4">
            {finalEvents.map((event) => (
              <div className="col-md-4" key={event._id}>
                <div className="card border border-0 position-relative p-2">
                  <Link
                    to={`/eventDetails/${event._id}`}
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    <img
                      src={event.bannerUrl}
                      alt=""
                      className="w-100"
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                    <p
                      className="m-0 position-absolute bg-light"
                      style={{ top: "10px", left: "10px" }}
                    >
                      {event.type} Event
                    </p>
                    <small>{event.time.startDateAndTime.join(" . ")}</small>
                    <p className="fw-bold">{event.title}</p>
                  </Link>
                  {/* <button
                    className="btn btn-danger w-50"
                    id={event._id}
                    onClick={deleteEvent}
                  >
                    Remove
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
