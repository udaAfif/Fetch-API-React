import axios from "axios"
import React, { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"
import Loaders from "../utilities/Loader"
import { ButtonGroup } from "react-bootstrap"

const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCancelled = false
    if (isCancelled === false) {
      setLoading(true)
      fetchPhotos()
    }
    return () => {
      isCancelled = true
    }
  }, [limit])

  const fetchPhotos = () => {
    axios({
      method: "GET",
      url: `${import.meta.env.VITE_TES_DULU}/photos?_limit=${limit}`,
    })
      .then((result) => setDatas(result.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  const handleLimit = (options) => {
    if (options === "+") {
      setLimit((prev) => prev + 1)
    }
    if (options === "-") {
      setLimit((prev) => prev - 1)
    }
  }

  if (loading) return <Loaders />

  return (
    <React.Fragment>
      <h3>{limit} Collection </h3>
      <Carousel>
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                height={450}
                width={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      <ButtonGroup className="d-flex align-items-center justify-content-center mt-2">
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
    </React.Fragment>
  )
}

export default Collection
