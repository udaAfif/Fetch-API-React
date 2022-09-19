import { Spinner } from "react-bootstrap"

const Loaders = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="danger" />
      </div>
    </div>
  )
}

export default Loaders
