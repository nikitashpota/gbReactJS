import React from "react"
import ReactDOM from "react-dom"

import { Layout, MessageField, ChatList, Header, MessageProvider } from "./components"
import styles from "./index.module.css"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { Chat } from "./pages"

const theme = createMuiTheme({})

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Link to="/chat/room1/">Test1</Link>
      <Link to="/chat/room2/">Test2</Link>
      <Switch>
        <Route path={["/chat/:roomId", "/chat"]}>
          {(params) => {
            <MessageProvider>
              {([state, actions]) => (<div><Layout header={<Header />}
                chats={<ChatList />} messages={<MessageField />} />
              </div>
              )}
            </MessageProvider>
          }}
        </Route>
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
)
{/* <Layout header={<Header />}
          chats={<ChatList />} messages={<MessageField />}{...props} />} */}