import { NavLink } from "react-router"
import styles from "./Sidebar.module.css"

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <p className={styles["sidebar__brand"]}>Weatherly</p>

      <nav aria-label="Main navigation">
        <ul className={styles["sidebar__nav-list"]}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${styles["sidebar__link"]} ${isActive ? styles["sidebar__link--active"] : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `${styles["sidebar__link"]} ${isActive ? styles["sidebar__link--active"] : ""}`
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `${styles["sidebar__link"]} ${isActive ? styles["sidebar__link--active"] : ""}`
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
