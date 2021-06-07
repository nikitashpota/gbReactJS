import React from "react"
import { Message } from "./message"
import styles from "./message-field.module.css"
import { Input, InputAdornment, withStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

export class MessageField extends React.Component {

  // componentDidUpdate(_, state) {
  //   const { messages } = this.state

  //   const lastMessage = messages[messages.length - 1]
  //   const { author } = lastMessage
  //   const { value } = lastMessage
  //   const data = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
  //   if (author !== undefined && author !== "Bot" && state.messages !== messages) {
  //     setTimeout(() => {
  //       this.setState({
  //         messages: [...messages, { author: "Bot", value: `${author} написал: "${value}"`, data: data }],
  //       })
  //     }, 700)
  //   }
  // }

  handlerChangeValue = (event) => {
    this.props.handlerChangeValue(event)
  }

  handlerSendMessage = () => {

    const { sendMessage, value } = this.props
    sendMessage({ author: "Kot", messageText: value })
  }


  handlerPressInput = (event) => {
    if (event.code == "Enter") {
      this.handlerSendMessage()
    }
  }

  render() {
    const { messages, value } = this.props
    console.log("01", messages)
    return (<div className={styles.messager}>

      {messages.map((message, index) => (<Message message={message} key={index} />))}

      <Input className={styles.messagerInput}

        type="text"
        placeholder="..."

        value={value}
        onChange={this.handlerChangeValue}
        onKeyUp={this.handlerPressInput}
        endAdornment={
          <InputAdornment position="end">
            <SendIcon className={styles.messagerButton} onClick={this.handlerSendMessage}></SendIcon>
          </InputAdornment>
        }
      ></Input>
    </div >)
  }
}
