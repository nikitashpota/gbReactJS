import React from "react";
import { Children } from "react";

export class MessageProvider extends React.Component {
    // state = {
    //     conversations: [
    //         { titel: "room1", value: "" },
    //         { titel: "room2", value: "" },
    //     ],
    //     messages: [
    //         { author: "Bot", value: "Привет! Это Чат 1", data: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) },
    //         { author: "Bot", value: "Привет! Это Чат 2", data: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) }
    //     ]
    // }

    // handleChangeValue = (event) => {
    //     const { match } = this.props
    //     const { params } = match // :roomId - передаем в Route

    //     const {
    //         target: { value },
    //     } = event // ивент инпута

    //     this.setState({
    //         conversations: this.state.conversations.map((conversation) => {
    //             if (params.roomId === conversation.title) {
    //                 return { ...conversation, value }
    //             }

    //             return conversation
    //         }),
    //     })
    // }

    // sendMessage = ({ author, message }) => {
    //     if (!message) {
    //         return
    //     }

    //     const { messages, conversations } = this.state
    //     const { match } = this.props
    //     const { params } = match // :roomId - передаем в Route

    //     const newMessage = { author, message, date: new Date() }

    //     this.setState({
    //         messages: {
    //             ...messages,
    //             [params.roomId]: [...(messages[params.roomId] || []), newMessage],
    //         },
    //         conversations: conversations.map((conversation) =>
    //             conversation.title === params.roomId
    //                 ? {
    //                     ...conversation,
    //                     value: "",
    //                 }
    //                 : conversation,
    //         ),
    //     })
    // }

    // componentDidUpdate(_, prevState) {
    //     const {
    //         match: { params },
    //     } = this.props
    //     const { messages } = this.state

    //     if (!params.roomId) {
    //         return
    //     }

    //     const currentMessages = messages[params.roomId]
    //     const prevMessages = prevState.messages[params.roomId]

    //     const lastMessage = currentMessages[currentMessages.length - 1]

    //     if (lastMessage?.author !== "Bot" && currentMessages !== prevMessages) {
    //         setTimeout(() => {
    //             this.sendMessage({ author: "Bot", message: "Как дела ?" })
    //         }, 500)
    //     }
    // }

    // render() {
    //     const { children, match } = this.props
    //     const { params } = match

    //     const { conversations, messages } = this.state

    //     const state = {
    //         conversations, // их будет использовать ChatList[]
    //         allMessages: messages,
    //         messages: messages[params.roomId] || [], // roomId это id текущей комнаты,=
    //         value:
    //             conversations.find(
    //                 (conversation) => conversation.title === params.roomId,
    //             )?.value || "",
    //     }

    //     const actions = {
    //         sendMessage: this.sendMessage,
    //         handleChangeValue: this.handleChangeValue,
    //     }

    //     // патерн render-prop
    //     return children([state, actions])
    // }

    state = {
        conversations: [{ titel: "room1", value: "" },
        { titel: "room2", value: "" },
        { titel: "room3", value: "" }],

        messages: {
            room1: [{
                author: "Bot", message: "Привет! Это room1",
                data: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
            }], room2: [{
                author: "Bot", message: "Привет! Это room2",
                data: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
            }]
        }
    }

    handleChangeValue = (event) => {
        const { target: { value } } = event
        const { match } = this.props
        const { params } = match

        this.setState({
            conversations: this.conversations.map(conversation => {
                if (params.roomId === conversation.titel) {
                    return { ...conversation, value }
                }
                return conversation
            })
        })
    }
    sendMessage = ({ message }) => {
        if (!message) {
            return
        }

        const { messages } = this.state
        const { match } = this.props
        const { params } = match

        const newMessage = { author: "Kot", message, data: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) }

        this.setState({
            messages: {
                ...messages,
                [params.roomId]: [...(messages[params.roomId] || []), newMessage]
            }
        })

    }
    componentDidUpdate = () => {

    }

    render() {
        const { children, match } = this.props

        const { conversations, message } = this.state
        console.log(match.params.roomId)
        const state = {
            conversations,
            messages: messages[match.params.roomId] || [],
            value: conversations.find(conversation => conversation.titel === match.params.roomId,)?.value || "",
        }

        const actions = {
            sendMessage: this.sendMessage,
            handleChangeValue: this.handleChangeValue,
        }
        // return (
        //     <>
        //         <h2>This is message-provider</h2>
        //         {this.props.children}
        //     </>
        // );

        return children([state, actions])
    }
}