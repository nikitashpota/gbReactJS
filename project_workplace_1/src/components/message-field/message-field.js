import React from "react"
import { Message } from "../message"
import styles from "../../index.module.css"

export class MessageField extends React.Component {
  state = {
    messages: [],
  }

  componentDidUpdate() {

    const { messages } = this.state

    let lastMessage = messages[messages.length - 1]
    let { author } = lastMessage
    let { value } = lastMessage

    if (author !== undefined && author !== "Bot") {
      setTimeout(() => {
        this.setState({
          messages: [...messages, { author: "Bot", value: `${author} написал: "${value}"` }],
        })
      }, 1000)
    }

  }

  sendMessage = () => {
    const { messages } = this.state
    let text = this.input.value
    this.setState({
      messages: [...messages, { author: "User", value: text }],
    })
    this.input.value = ""
  }

  render() {
    const { messages, value } = this.state

    return <div className={styles.messager}>
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}

      <div className={styles.messagerBlock}>
      <input className={styles.messagerInput} type="text" placeholder="..." ref={ref => this.input = ref}></input>
      <button className={styles.messagerButton} onClick={this.sendMessage}>Отправить</button>
      </div>

    </div >
  }
}
