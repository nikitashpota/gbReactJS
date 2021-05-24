import React from "react"
import ReactDOM from "react-dom"

import { Layout, MessageField, ChatList, Header } from "./components"
import styles from "./index.module.css"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({})

const App = () => {
  return (
    <div>
      <Layout header={<Header />} chatList={<ChatList />} messageField={<MessageField />} />
    </div>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <><App /></>
  </ThemeProvider>,
  document.getElementById("root"),
)