import { NavLink } from "react-router-dom"

export default function Header({ setSearch }) {
  function handleChange(e) {
    const { value } = e.target
    setSearch(value)
  }

  return (
    <header className="bg-body-tertiary">
      <div className="container">
        <nav className="navbar py-3">
          <div className="container-fluid">
            <a className="navbar-brand text-danger">Meetup</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by event title and tags"
                aria-label="Search"
                onChange={handleChange}
              />
              <NavLink
                to="/addEvent"
                className="btn btn-outline-success"
                style={{ minWidth: "100px" }}
              >
                Add Event
              </NavLink>
            </form>
          </div>
        </nav>
        <hr className="m-0" />
      </div>
    </header>
  )
}
