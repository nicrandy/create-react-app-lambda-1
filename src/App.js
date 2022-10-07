import React from "react"
import { Header } from "./components/Header"
import { Myogai } from "./components/Myogai"
import { Dicedemic } from "./components/Dicedemic"
import { Tiffany } from "./components/Tiffany"
import { Wyo3D } from "./components/Wyo3DPrint"


function App() {
  return (
    <div className="App">
      <Header />
      <Myogai />
      <Dicedemic />
      <Tiffany />
      <Wyo3D />
    </div>
  )
}


export default App
