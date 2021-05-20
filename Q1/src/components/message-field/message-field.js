import React from "react"
import { Message } from "../message"

class MessageField extends React.Component {
    state = {
        messages: [{ author: "User", value: "Hello!", date: new Date() },]
    }


    sendMessage = () => {
        const { message } = this.state
        this.setState({
            messages: [...messages, { author: "User", value: "Как оно?" }],
        })
    }

    render() {
        const { message } = this.state
        return (<div>
            <button onClick={this.sendMessage}>Отправить</button>
            {messages.map((message, index) => (
                <Message message={message} key={index} />
            ))}
        </div>)
    }
}
