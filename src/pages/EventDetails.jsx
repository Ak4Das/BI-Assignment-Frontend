import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import locationIcon from "../assets/pin.png"
import clockIcon from "../assets/clock.png"
import { NavLink } from "react-router-dom"

async function getAllEvents(setEvents) {
  try {
    const response = await fetch(
      "https://bi-assignment-backend-chi.vercel.app/events"
    )
    if (response.ok) {
      const data = await response.json()
      setEvents(data)
    } else {
      console.log("No event found")
    }
  } catch (error) {
    console.log(error)
  }
}

export default function EventDetails() {
  const { id } = useParams()

  const [events, setEvents] = useState([])

  useEffect(() => {
    getAllEvents(setEvents)
  }, [])

  const event = events.find((event) => event._id === id)

  return (
    <>
      <header className="bg-body-tertiary">
        <div className="container">
          <nav className="navbar py-3">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand text-danger" style={{fontFamily:"lexendDeca"}}>
                Meetup
              </NavLink>
            </div>
          </nav>
          <hr className="m-0" />
        </div>
      </header>
      {event && (
        <main className="bg-body-tertiary py-4" style={{minHeight:"100vh"}}>
          <div className="container">
            <div
              className="d-md-flex justify-content-between"
              style={{ gap: "100px" }}
            >
              <section>
                <h1>{event.title}</h1>
                <p className="m-0">Hosted By: </p>
                <p className="m-0 mb-3 fw-bold">{event.hostedBy}</p>
                <p className="m-0">Type: </p>
                <p className="m-0 mb-3 fw-bold">{event.type}</p>
                <img src={event.bannerUrl} alt="" className="img-fluid"/>
                <p className="fs-3 fw-bold mt-3">Details: </p>
                <p style={{ maxWidth: "900px" }}>
                  {event.details}
                </p>
                <p className="fs-3 fw-bold">Additional Information: </p>
                <p>
                  <strong>Dress Code: </strong>
                  {event.dressCode}
                </p>
                <p>
                  <strong>Age Restriction: </strong>
                  {event.ageRestrictions}
                </p>
                <p className="fs-3 fw-bold">Event Tags: </p>
                <div className="d-flex gap-3">
                {event.eventTags.map((tag) => (
                  <button className="btn btn-danger">{tag}</button>
                ))}
                </div>
              </section>
              <section>
                <div className="bg-body p-3">
                  <div className="mb-2 d-flex align-items-center gap-2">
                    <img src={clockIcon} alt="" style={{ width: "10px" }} />
                    <div>
                      <span>{event.time.startDateAndTime.join(" at ")}</span> to
                      <span> {event.time.endDateAndTime.join(" at ")}</span>
                    </div>
                  </div>
                  <div className="mb-2 d-flex align-items-center gap-2">
                    <img src={locationIcon} alt="" style={{ width: "10px" }} />
                    <span>{event.place}</span>
                  </div>
                  <p>
                    <span>₹ </span>
                    {event.price}INR
                  </p>
                </div>
                <p className="fs-3 fw-bold">Speakers: </p>
                <div className="d-flex gap-3">
                  {event.speakers.map((speaker) => (
                    <div
                      key={speaker.name}
                      className="text-center bg-body p-2"
                      style={{ width: "120px", height: "100px" }}
                    >
                      <img
                        src={speaker.profileImage}
                        alt={speaker.name}
                        className="rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <p className="m-0" style={{ fontSize: "15px" }}>
                        {speaker.name}
                      </p>
                      <p className="m-0" style={{ fontSize: "10px" }}>
                        {speaker.position}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
