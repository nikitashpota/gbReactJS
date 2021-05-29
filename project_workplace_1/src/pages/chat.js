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
        <Route path={["/chat/:roomId", "/chat"]} component={Common} />
        <Route
          exact={true}
          path="*"
          component={() => <h1>такого чата нет</h1>}
        />
      </Switch>
    )
  }
}

class Common extends React.Component {
  render() {
    // получаем параметры
    const id = this.props.match?.params.roomId;
    console.log("this.props.match");
    console.log(this.props.match);
    return (
      <h2>
        id: {id}
      </h2>
    );
  }
}