import React from "react"
import ReactDOM from "react-dom"
import { MessageField , ChatList} from "./components"
import styles from "./index.module.css"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({})

const App = () => {
  return (
    <div>
      <MessageField />
      <ChatList />
    </div>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <><App className={styles} /></>
  </ThemeProvider>,
  document.getElementById("root"),
)