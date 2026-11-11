import styles from "./App.module.css"
import Home from "./pages/Home/Home.jsx"
import { Route, Routes } from "react-router"

function App() {
  return (
    <main className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
