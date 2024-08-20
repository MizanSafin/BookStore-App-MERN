import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Books from "./components/Books"
import LogIn from "./components/LogIn"
import Dashboard from "./components/Dashboard"
import AddStudent from "./components/AddStudent"
import { useEffect, useState } from "react"
import LogOut from "./components/LogOut"
import AddBook from "./components/AddBook"
import axios from "axios"
import UpdateBook from "./components/UpdateBook"
import DeleteBook from "./components/DeleteBook"

function App() {
  const [role, setRole] = useState("")
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios
      .get("http://localhost:4142/auth/verify", { withCredentials: true })
      .then((res) => {
        if (res.data.login === true) {
          return setRole(res.data.role)
        }
        return setRole("")
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar role={role} />
        <Routes>
          <Route path="/" element={<Home setRole={setRole} />} />
          <Route path="/books" element={<Books role={role} />} />
          <Route path="/login" element={<LogIn setRole={setRole} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<AddStudent />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/logout" element={<LogOut setRole={setRole} />} />
          <Route path="/update-book/:id" element={<UpdateBook />} />
          <Route path="/delete-book/:id" element={<DeleteBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
