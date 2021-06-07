import React from "react"
import { Chat } from "./chat"
import PropTypes from "prop-types"
import styles from "./chat-list.module.css"
import List from '@material-ui/core/List';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

export class ChatList extends React.Component {

  render() {
    const { conversations, match: { params } } = this.props
    const chatId = params.roomId

    return (
      <>
        < List className={styles.chatList} >
          {
            conversations.map((chat) => {
              return (
                <Link key={chat.title} to={`/chat/${chat.title}`}>
                  <Chat
                    selected={chat.title === chatId}
                    chat={chat}
                  />
                </Link>
              )
            })
          }</List >
      </>
    )
  }
}
