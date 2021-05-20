
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
// import { MessageField } from "./components"

class Message extends React.Component {
  static propTypes = {
    message: PropTypes.shape({
      author: PropTypes.string,
      value: PropTypes.string,
      date: PropTypes.date,
    }),
  }

  render() {
    const { message } = this.props
    const { author, value } = message

    return (
      <div>
        <h3>{value}</h3>
        <h3>{author}</h3>
        <hr />
      </div>
    )
  }
}

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

const App = () => {
  return (
    <div>
      <MessageField />
    </div>
  )
}

ReactDOM.render(
  <><App /></>,
  document.getElementById("root"),
)