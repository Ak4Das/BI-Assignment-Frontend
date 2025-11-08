import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.jsx"
import AddEventForm from "./pages/AddEventForm.jsx"
import EventDetails from "./pages/EventDetails.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/addEvent",
    element: <AddEventForm/>
  },
  {
    path: "/eventDetails/:id",
    element: <EventDetails/>
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
)
