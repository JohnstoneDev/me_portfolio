import { Routes, Route } from "react-router-dom"
import { HomePage } from "../Pages/Home"

export const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  )
}

