import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-{mode} text-white'>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li>
            {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              What We Offer?
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Web Development</a>
              <a className="dropdown-item" href="/">App Development</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Mobile App Developemnt</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/">Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/">About</a>
          </li> */}
          </ul>

          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={props.ToggleMode}  role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label text-dark" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
          </div>
        </div>
      </nav>

    </div>
  )
}
