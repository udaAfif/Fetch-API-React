import { Container } from "react-bootstrap"
import Collections from "./collection.post"
import React from "react"

const Posts = () => {
  return (
    <React.Fragment>
      <Container className="mt-4 mb-4">
        <Collections />
      </Container>
    </React.Fragment>
  )
}

export default Posts
