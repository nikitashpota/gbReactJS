import React from "react"
import { Chat } from "../chat"
import PropTypes from "prop-types"
import styles from "./chat-list.module.css"
import List from '@material-ui/core/List';

// @TODO сделать propTypes //Does
export class ChatList extends React.Component {
  static propTypes = {
    chat: PropTypes.shape({
      titel: PropTypes.string,
    })
  }
  state = {
    chats: ["Чат 1", "Чат 2", "Чат 3", "Чат 4", "Чат 5"],
    selectedIndex: 0,
  }

  render() {
    const { chats, selectedIndex } = this.state

    return (
      <List className={styles.chatList}>
        {chats.map((chat, index) => (
          // @TODO доделать Chat //Doesn't
          <Chat title={chat} key={index} selected={selectedIndex} />
        ))}
      </List>
    )
  }
}