import React from "react"
import ReactDOM from "react-dom"

import { Layout, MessageField, ChatList, Header } from "./components"
import styles from "./index.module.css"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Chat } from "./pages"

const theme = createMuiTheme({})

// const App = () => {
//   return (
//     <div>
//       <Layout header={<Header />} chatList={<ChatList />} messageField={<MessageField />} />
//     </div>
//   )
// }

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={(props) => <Chat />} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
)