import "./main.layout.css"
import React from "react"
import Container from "react-bootstrap/Container"
import Navigation from "./navigation.layout"

const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
    </React.Fragment>
  )
}
export default MainLayouts
