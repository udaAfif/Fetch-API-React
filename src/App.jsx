import "./App.css"
import React from "react"
import Image from "./component/albums/image"
import MainLayouts from "./component/layouts/main.layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Posts from "./component/post/posts"
import About from "./component/homepage/header"

const App = () => {
  return (
    <>
      <Router>
        <MainLayouts />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/albums" element={<Image />} />
          <Route path="/posts" element={<Posts />} />
          <Route
            path="*"
            element={
              <h1 className="text-center text-danger  ">404 NOT FOUND</h1>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
