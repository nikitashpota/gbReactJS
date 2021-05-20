import React from "react"
import { Message } from "../message"

export class MessageField extends React.Component {
    state = {
        messages: [{ author: "User", value: "Hello!" },]
    }
  
  
    sendMessage = () => {
        const { messages } = this.state //для чего тут нужен masseges
        this.setState({
          messages: [...messages, { author: "User", value:"Hello Hello Hello" }],
        })
    }
  
    render() {
      const { messages, value } = this.state
  
        return <div>
            <button onClick={this.sendMessage}>Отправить</button>
            {messages.map((message, index) => (
            <Message message={message} key={index} />
          ))}
        </div>
    }
  }
