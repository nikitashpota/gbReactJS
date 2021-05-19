
import React from "react"
import ReactDOM from "react-dom"


class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Введите сообщение...'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.messageList = [];
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.messageList.push(<p>{this.state.value}</p>);
    // alert('Сочинение отправлено: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{this.messageList}</h3>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

// const Message = ({ message }) => {
//   return (
//     <React.Fragment>
//       <h3>{message}</h3>
//     </React.Fragment>
//   )
// }


// const MessageField = ({ messages }) => {
//   return messages.map((message, index) => (
//     <Message message={message} key={index} isVisible={true} />
//   ))
// }

// const textMessage = "Данное сообщение размещенно Иностранным Агентом"
// const textMessage2 = "А это нет!"

// let listMessage = [];
// listMessage.push(textMessage);
// listMessage.push(textMessage2);

// const Result = () => {
//   return (
//     <div>
//       <MessageField messages={listMessage} />
//       <Toggle />
//     </div>
//   )
// }

ReactDOM.render(
  <EssayForm />,
  document.getElementById("root"),
)

