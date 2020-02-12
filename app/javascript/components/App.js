import React, { Component } from "react"
import Apartments from "./Apartments"
import ApartmentShow from "./apartmentshow"
import ApartmentsNew from "./apartmentsnew"

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {
  Nav, NavItem, NavLink as Link, Navbar
} from 'reactstrap';

let apartmentId = ""

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      apartments: [],
      success: false
    }
    this.getApartments()
  }
  componentDidMount(){
    this.getApartments()
  }

  createApartment = (apartment) => {
    console.log("Function is called correctly");
    return fetch('http://localhost:3000/apartments', {
      body: JSON.stringify(apartment),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST"
    })
    .then((response) => {
      if(response.ok){
        this.getApartments()
        this.setState({ success: true })
      }
    })
  }

  getApartments = () => {
    return fetch('http://localhost:3000/apartments',
    {method: "GET"}
    ).then((response) => {
      if(response.ok){
        return(response.json())
      }
    })
    .then((apartmentsArray) => {
      this.setState({apartments: apartmentsArray})
    })
    
  }

  render () {
      const {
        logged_in,
        sign_in_route,
        sign_out_route,
        current_user
      } = this.props
    const { apartments } = this.state

    return (
      <Router>
        {this.state.success &&
          <Redirect to="/apartments" />
        }
          <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {!logged_in &&
            <div>
              <a className="navbar-brand" href="#">Find your dream apartment!</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link type="button" href="/" className="nav-link" href="#">Find Apartments</Link>
                </li>
                <li className="nav-item">
                <Link className="btn btn-primary btn-md d-flex justify-content-end" href={sign_in_route}>Sign In</Link>
                </li>
              </ul>
            </div>
            </div>
            }
            </Nav>
          <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {logged_in &&
              <div>
                <a className="navbar-brand" href="#">Find your dream apartment!</a>
                <div className="collapse navbar-collapse" id="navbarColor02">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link type="button" className="nav-link" href="/apartments">Find Apartments</Link>
                    </li>
                    <li>
                      <Link type="button" className="nav-link" href="/apartmentsnew">Create new apartment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn btn-primary btn-md d-flex justify-content-end" href={sign_out_route}>Sign Out</Link>
                    </li>
                  </ul>
                </div>
              </div>
            }
          </Nav>
            <Switch>
              <Route path="/apartments" exact render={() => <Apartments apartments={apartments} />} />
          <Route path="/apartments/:id" render={(props) => <ApartmentShow {...props} apartments={apartments} />} />
              <Route path="/apartmentsnew" exact render={() => <ApartmentsNew current_user={current_user} onSubmit={this.createApartment} />} />
            </Switch>
      </Router>
    );
  }
}

export default App
