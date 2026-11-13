import styles from "./App.module.css"
import Home from "./pages/Home/Home.jsx"
import Favorities from "./pages/Favorites/Favorites.jsx"
import Settings from "./pages/Settings/Settings.jsx"
import { Route, Routes } from "react-router"
import Sidebar from "./components/Sidebar/Sidebar.jsx"

function App() {
  return (
    <main className={styles.app}>
      <div className={styles["app__layout"]}>
        <Sidebar />

        <div className={styles["app__content"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorities />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </main>
  )
}

export default App
