import React from "react"
import { Chat } from "../chat"
import PropTypes from "prop-types"

// @TODO сделать propTypes //Does
export class ChatList extends React.Component {
  static propTypes = {
    chat: PropTypes.shape({
        titel: PropTypes.string,
    })
}
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  }

  render() {
    const { chats, selectedIndex } = this.state

    return (
      <div>
        {chats.map((chat, index) => (
          // @TODO доделать Chat //Doesn't
          <Chat title={chat} key={index} selected={selectedIndex} />
        ))}
      </div>
    )
  }
}