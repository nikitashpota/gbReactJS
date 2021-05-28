import React from "react"
import { Chat } from "./chat"
import PropTypes from "prop-types"
import styles from "./chat-list.module.css"
import List from '@material-ui/core/List'
import { Input, InputAdornment, withStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom"

export class ChatList extends React.Component {
  // static propTypes = {
  //   chat: PropTypes.shape({
  //     titel: PropTypes.string,
  //   })
  // }
  // state = {
  //   chats: ["Чат 1", "Чат 2", "Чат 3",],
  //   selectedIndex: 0,
  //   name: "",
  // }

  // addChat = (name = "Чат " + this.state.chats.length + 1) => {
  //   if (!name) {
  //     return
  //   }
  //   const chats = this.state.chats
  //   this.setState({
  //     chats: [...chats, name],
  //     name: ""
  //   })
  // }

  render() {
    const {
      conversations,
      allMessages,
      match: { params },
    } = this.props

    const chatId = params.roomId

    return (
      <List component="nav">
        {conversations.map((chat) => {
          const currentMessage = allMessages[chat.title]

          return (
            <Link key={chat.title} to={`/chat/${chat.title}`}>
              <Chat
                selected={chat.title === chatId}
                chat={chat}
                lastMessage={currentMessage[currentMessage.length - 1]}
              />
            </Link>
          )
        })}
      </List>
      // <div>
      //   <Input type="text" placeholder="..."
      //     type="text"
      //     value={this.state.name}
      //     onChange={(e) => { this.setState({ name: e.target.value }) }}
      //     endAdornment={
      //       <InputAdornment position="end">
      //         <AddIcon className={styles.Button}
      //           onClick={() => {
      //             this.addChat(this.state.name)
      //           }}></AddIcon>
      //       </InputAdornment>
      //     }></Input>
      //   <List className={styles.chatList}>
      //     {chats.map((chat, index) => (
      //       <Chat title={chat} key={index} selected={selectedIndex} />
      //     ))}
      //   </List>
      // </div>
    )
  }
}