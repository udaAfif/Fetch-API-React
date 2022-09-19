import React, { useEffect, useState } from "react"
import { ButtonGroup, Card, Alert } from "react-bootstrap"
import Modals from "../utilities/modal"
import Loaders from "../utilities/Loader"
import axios from "axios"
import "./posts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

const CollectionPosts = () => {
  const [dataPosts, setDataPosts] = useState([])
  const [limit, setLimit] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCancelled = false
    if (isCancelled === false) {
      setLoading(true)
      axios({
        method: "GET",
        url: `${import.meta.env.VITE_TES_DULU}/posts?_limit=${limit}`,
      })
        .then((result) => setDataPosts(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }

    return () => {
      isCancelled = true
    }
  }, [limit])

  const handleLimit = (option) => {
    if (option === "+") {
      setLimit((Prev) => Prev + 1)
    }
    if (option === "-") {
      setLimit((Prev) => Prev - 1)
    }
  }

  if (loading) return <Loaders />

  return (
    <React.Fragment>
      <Alert variant={"info"} className="mt-4">
        <FontAwesomeIcon icon={faCircleExclamation} className="me-2" />
        Currently showing "{limit}" {limit > 1 && "Post"}
        {limit === 1 && "Post"}
      </Alert>
      <ButtonGroup>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleLimit("+")}
        >
          +
        </button>
        {limit > 1 && (
          <button
            className="btn btn-outline-primary"
            onClick={() => handleLimit("-")}
          >
            -
          </button>
        )}
      </ButtonGroup>

      {dataPosts.map((data, i) => {
        return (
          <Card className="mt-4 mb-4" key={i}>
            <Card.Header as="h5">Posts API</Card.Header>
            <Card.Body>
              <Modals
                activator={({ setShow }) => (
                  <>
                    <Card.Title>Data ke : {data.id} nih cuy</Card.Title>
                    <Card.Text>
                      Title :{" "}
                      <a onClick={() => setShow(true)} className="text">
                        {data.title}
                      </a>
                    </Card.Text>
                  </>
                )}
              >
                <h3>Post ID: {data.id}</h3>
                <strong>User ID</strong>: {data.userId}
                <hr />
                <p>
                  <strong>Title</strong>: {data.title}
                  <br />
                  <br />
                  <strong>Description</strong>: {data.body}
                </p>
              </Modals>
            </Card.Body>
          </Card>
        )
      })}
    </React.Fragment>
  )
}

export default CollectionPosts
