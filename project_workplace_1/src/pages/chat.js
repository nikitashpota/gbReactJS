import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import {
  Layout,
  Header,
  ChatList,
  MessageField,
  MessagesNotFound,
  MessageProvider,
} from "../components"

export class Chat extends Component {
  render() {
    return (
      <Switch>
        <Route path="/chat" component={(props) => <MessageProvider {...props} />}></Route>
        <Route
          exact={true}
          path="*"
          component={() => <h1>такого чата нет</h1>}
        />
      </Switch>
    )
  }
}

