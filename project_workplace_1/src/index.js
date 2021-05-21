import React from "react"
import ReactDOM from "react-dom"
import { MessageField } from "./components"
import styles from "./css/index.module.css"

const App = () => {
  return (
    <div>
      <MessageField />
    </div>
  )
}

ReactDOM.render(
  <><App className={styles} /></>,
  document.getElementById("root"),
)