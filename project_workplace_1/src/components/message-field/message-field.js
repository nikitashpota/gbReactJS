import React from "react"
import { Message } from "../message"
import styles from "./message-field.module.css"
import { Input,InputAdornment,withStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

export class MessageField extends React.Component {
  state = {
    messages: [{ author: "Bot", value: "Привет!", data:new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}],
    value: "",
  }
  
  componentDidUpdate(_, state) {
    const { messages } = this.state

    const lastMessage = messages[messages.length - 1]
    const { author } = lastMessage
    const { value } = lastMessage
    const data = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    if (author !== undefined && author !== "Bot" && state.messages !== messages) {
      setTimeout(() => {
        this.setState({
          messages: [...messages, { author: "Bot", value: `${author} написал: "${value}"`, data: data }],
        })
      }, 700)

    }
  }

  sendMessage = () => {
    const messages = this.state.messages
    const value = this.state.value
    const data = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    this.setState({
      messages: [...messages, { author: "User", value: value, data: data }],
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
