import React from "react"
import { Chat } from "./chat"
import PropTypes from "prop-types"
import styles from "./chat-list.module.css"
import List from '@material-ui/core/List';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

// @TODO сделать propTypes //Does
export class ChatList extends React.Component {
  state = {
    chats: ["Чат 1", "Чат 2", "Чат 3", "Чат 4", "Чат 5"],
    selectedIndex: 0,
  }

  render() {
    const { chats, selectedIndex } = this.state

    return (
      <List className={styles.chatList}>
        {chats.map((chat, index) => (
          <Chat title={chat} key={index} selected={selectedIndex} />
        ))}
      </List>
    )
  }
}