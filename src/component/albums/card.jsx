import axios from "axios"
import React, { useEffect, useState } from "react"
import Loaders from "../utilities/Loader"
import { ButtonGroup, Alert, Card, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const Coba = () => {
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCancelled = false
    if (isCancelled === false) {
      setLoading(true)
      fetchPhotos()
    }
  }, [limit])

  const fetchPhotos = () => {
    axios({
      method: "GET",
      url: `${import.meta.env.VITE_TES_DULU}/photos?_limit=${limit}`,
    })
      .then((result) => setData(result.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  const handleLimit = (props) => {
    if (props === "+") {
      setLimit((prev) => prev + 1)
    }
    if (props === "-") {
      setLimit((prev) => prev - 1)
    }
  }
  if (loading) return <Loaders />

  return (
    <React.Fragment>
      <Alert variant={"info"} className="mt-4">
        <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
        Currently showing "{limit}" {limit > 1 && "Post"}
        {limit === 1 && "Post"}
      </Alert>

      <ButtonGroup>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            handleLimit("+")
          }}
        >
          +
        </button>
        {limit > 1 && (
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              handleLimit("-")
            }}
          >
            -
          </button>
        )}
      </ButtonGroup>

      <Row xs={1} md={3} className="g-4 mt-4 mb-4">
        {data.map((data, i) => {
          return (
            <Col className="d-flex" key={i}>
              <Card>
                <Card.Img
                  style={{ height: "auto" }}
                  variant="top"
                  src={data.url}
                />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </React.Fragment>
  )
}
export default Coba
