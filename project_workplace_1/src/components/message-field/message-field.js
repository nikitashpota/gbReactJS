import React from "react"
import { Message } from "../message"
import styles from "./message-field.module.css"
import { Input,InputAdornment,withStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

export class MessageField extends React.Component {
  state = {
    messages: [{ author: "Bot", value: "Привет!" }],
    value: "",
  }
  
  componentDidUpdate(_, state) {
    const { messages } = this.state

    let lastMessage = messages[messages.length - 1]
    let { author } = lastMessage
    let { value } = lastMessage

    if (author !== undefined && author !== "Bot" && state.messages !== messages) {
      setTimeout(() => {
        this.setState({
          messages: [...messages, { author: "Bot", value: `${author} написал: "${value}"` }],
        })
      }, 5000)

    }
  }

  sendMessage = () => {
    const messages = this.state.messages
    let value = this.state.value
    this.setState({
      messages: [...messages, { author: "User", value: value }],
      value: ""
    })
  }

  handlerPressInput = ({code}) =>{
    const value = this.state.value
    if(code === "Enter")
      {this.sendMessage}
  }

  render() {
    const { messages, value } = this.state

    return <div className={styles.messager}>
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}

      <div className={styles.messagerBlock}>
      <Input className={styles.messagerInput}
        type="text" placeholder="..." 
        value = {this.state.value} 
        onChange={(e) => {this.setState({value: e.target.value} )}}
        onKeyPress={this.handlerPressInput}
        endAdornment={
          <InputAdornment position="end">
              <SendIcon className={styles.messagerButton} onClick={this.sendMessage}></SendIcon>
          </InputAdornment>
        }
      ></Input>

      
      </div>

    </div >
  }
}
