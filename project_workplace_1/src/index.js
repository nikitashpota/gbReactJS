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
        <Route path="/chat/:roomId" component={(props) =>
          <MessageProvider {...props}>{([state, actions]) => {
            return (<>
              {console.log(actions)}
              <Layout
                header={<Header />}
                chats={<ChatList {...props} {...state} />}
              ><Route path='/chat/:roomId'>
                  {<MessageField {...state}{...actions} />}
                </Route>
              </Layout>
            </>)
          }}
          </MessageProvider>}>
        </Route>
        {/* <Route path="*" component={() => <h1>404</h1>} /> */}
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
)
