import { useState } from "react"
import { Link } from "react-router-dom"

export default function AddEventForm() {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    hostedBy: "",
    bannerUrl: "",
    details: "",
    dressCode: "",
    ageRestrictions: "",
    time: {
      startDateAndTime: [],
      endDateAndTime: [],
    },
    place: "",
    price: 0,
    speakers: [],
  })

  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  const [speaker1ProfileImage, setSpeaker1ProfileImage] = useState("")
  const [speaker1Name, setSpeaker1Name] = useState("")
  const [speaker1Position, setSpeaker1Position] = useState("")
  const [speaker2ProfileImage, setSpeaker2ProfileImage] = useState("")
  const [speaker2Name, setSpeaker2Name] = useState("")
  const [speaker2Position, setSpeaker2Position] = useState("")
  const [speaker3ProfileImage, setSpeaker3ProfileImage] = useState("")
  const [speaker3Name, setSpeaker3Name] = useState("")
  const [speaker3Position, setSpeaker3Position] = useState("")
  const [firstTag, setFirstTag] = useState("")
  const [secondTag, setSecondTag] = useState("")

  function handleChangeOne(e) {
    const { name, value } = e.target
    setFormData((preValue) => {
      return name === "price"
        ? { ...preValue, [name]: Number(value) }
        : { ...preValue, [name]: value }
    })
  }

  function handleChangeTwo(e) {
    const { name, value } = e.target
    if (name === "startDate") {
      setStartDate(value)
    }
    if (name === "endDate") {
      setEndDate(value)
    }
    if (name === "startTime") {
      setStartTime(value)
    }
    if (name === "endTime") {
      setEndTime(value)
    }
    if (name === "speaker1ProfileImage") {
      setSpeaker1ProfileImage(value)
    }
    if (name === "speaker1Name") {
      setSpeaker1Name(value)
    }
    if (name === "speaker1Position") {
      setSpeaker1Position(value)
    }
    if (name === "speaker2ProfileImage") {
      setSpeaker2ProfileImage(value)
    }
    if (name === "speaker2Name") {
      setSpeaker2Name(value)
    }
    if (name === "speaker2Position") {
      setSpeaker2Position(value)
    }
    if (name === "speaker3ProfileImage") {
      setSpeaker3ProfileImage(value)
    }
    if (name === "speaker3Name") {
      setSpeaker3Name(value)
    }
    if (name === "speaker3Position") {
      setSpeaker3Position(value)
    }
    if (name === "firstTag") {
      setFirstTag(value)
    }
    if (name === "secondTag") {
      setSecondTag(value)
    }
  }

  const [message, setMessage] = useState("")
  const [color, setColor] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const FormData = {
        ...formData,
        time: {
          startDateAndTime: [startDate, startTime],
          endDateAndTime: [endDate, endTime],
        },
        speakers: [
          {
            profileImage: speaker1ProfileImage,
            name: speaker1Name,
            position: speaker1Position,
          },
          {
            profileImage: speaker2ProfileImage,
            name: speaker2Name,
            position: speaker2Position,
          },
          {
            profileImage: speaker3ProfileImage,
            name: speaker3Name,
            position: speaker3Position,
          },
        ],
        eventTags: [firstTag, secondTag],
      }

      const response = await fetch(
        "https://bi-assignment-backend-chi.vercel.app/addEvent",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(FormData),
        }
      )

      if (response.ok) {
        const data = await response.json()
        data && setMessage("Event added successfully")
        data && setColor("text-success")
      } else {
        setMessage("Failed to add Event")
        setColor("text-danger")
      }
    } catch (error) {
      setMessage("Failed to add Event")
      setColor("text-danger")
    }
  }

  return (
    <>
      <main className="bg-body-tertiary py-3">
        <div className="container">
          <h1 className="my-3 text-success">Add Event</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              className="w-100"
              onChange={handleChangeOne}
            />
            <br />
            <br />
            <label htmlFor="type">Type: </label>
            <br />
            <input
              type="text"
              id="type"
              name="type"
              className="w-100"
              onChange={handleChangeOne}
            />
            <br />
            <br />
            <label htmlFor="hostedBy">Hosted By: </label>
            <br />
            <input
              type="text"
              id="hostedBy"
              name="hostedBy"
              className="w-100"
              onChange={handleChangeOne}
            />
            <br />
            <br />
            <label htmlFor="bannerUrl">Banner URL: </label>
            <br />
            <input
              type="text"
              id="bannerUrl"
              name="bannerUrl"
              className="w-100"
              onChange={handleChangeOne}
            />
            <br />
            <br />
            <label htmlFor="details">Details: </label>
            <br />
            <input
              type="text"
              id="details"
              name="details"
              className="w-100"
              onChange={handleChangeOne}
            />
            <br />
            <br />
            <label htmlFor="dressCode">Dress Code: </label>
            <br />
            <input
              type="text"
              id="dressCode"
              name="dressCode"
              className="w-100"
              onChange={handleChangeOne}
            />
            <br />
            <br />
            <label htmlFor="ageRestrictions">Age Restriction: </label>
            <br />
            <input
              type="text"
              id="ageRestrictions"
              name="ageRestrictions"
              className="w-100"
              onChange={handleChangeOne}
            />
            <br />
            <br />
            <label htmlFor="startDate">Start Date: </label>
            <br />
            <input
              type="text"
              id="startDate"
              name="startDate"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <label htmlFor="startTime">Start Time: </label>
            <br />
            <input
              type="text"
              id="startTime"
              name="startTime"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <label htmlFor="endDate">End Date: </label>
            <br />
            <input
              type="text"
              id="endDate"
              name="endDate"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <label htmlFor="endTime">End Time: </label>
            <br />
            <input
              type="text"
              id="endTime"
              name="endTime"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <label htmlFor="place">Place: </label>
            <br />
            <input
              type="text"
              id="place"
              className="w-100"
              name="place"
              onChange={handleChangeOne}
            />
            <br />
            <br />
            <label htmlFor="price">Price: </label>
            <br />
            <input
              type="number"
              id="price"
              className="w-100"
              name="price"
              onChange={handleChangeOne}
            />
            <br />
            <br />
            <label htmlFor="speaker1">Speaker - 1</label>
            <br />
            <br />
            <input
              type="text"
              placeholder="Profile Image"
              id="speaker1"
              name="speaker1ProfileImage"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Name"
              id="speaker1"
              name="speaker1Name"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Position"
              id="speaker1"
              name="speaker1Position"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <label htmlFor="speaker2">Speaker - 2</label>
            <br />
            <br />
            <input
              type="text"
              placeholder="Profile Image"
              id="speaker2"
              name="speaker2ProfileImage"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Name"
              id="speaker2"
              name="speaker2Name"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Position"
              id="speaker2"
              name="speaker2Position"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <label htmlFor="speaker3">Speaker - 3</label>
            <br />
            <br />
            <input
              type="text"
              placeholder="Profile Image"
              id="speaker3"
              name="speaker3ProfileImage"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Name"
              id="speaker3"
              name="speaker3Name"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Position"
              id="speaker3"
              name="speaker3Position"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <label htmlFor="eventTag">Event Tags: </label>
            <br />
            <br />
            <input
              type="text"
              placeholder="First Tag"
              id="eventTag"
              name="firstTag"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Second Tag"
              id="eventTag"
              name="secondTag"
              className="w-100"
              onChange={handleChangeTwo}
            />
            <br />
            <br />
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary">Add Event</button>
              <h4 className={color}>{message}</h4>
              <Link to="/" className="btn btn-primary">
                Back To Home
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
