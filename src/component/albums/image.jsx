// children component
import { Container } from "react-bootstrap"
import React from "react"
import Collection from "./collection.albums"
import Coba from "./card"
const Image = () => {
  return (
    <React.Fragment>
      <Container>
        {/* <Collection /> */}
        <Coba />
      </Container>
    </React.Fragment>
  )
}

export default Image
