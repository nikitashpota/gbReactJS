import React from "react";
import { MessageField } from "../message-field"

export class MessageProvider extends React.Component {

    state = {
        conversations: [
            { title: "room1", value: "" },
            { title: "room2", value: "" },
            { title: "room3", value: "" },
            { title: "room4", value: "" },],

        messages: {
            room1: [{
                author: "Bot", messageText: "Привет! Это room1",
                data: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
            }], room2: [{
                author: "Bot", messageText: "Привет! Это room2",
                data: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
            }]
        }
    }

    handlerChangeValue = (event) => {
        const { match } = this.props
        const { params } = match
        const { target: { value } } = event

        this.setState({
            conversations: this.state.conversations.map(conversation => {
                if (params.roomId === conversation.title) {
                    return { ...conversation, value }
                }
                return conversation
            })
        })
    }
    sendMessage = ({ messageText }) => {
        if (!messageText) {
            return
        }

        const { messages } = this.state
        const { match } = this.props
        const { params } = match

        const newMessage = { author: "User", messageText, data: new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) }

        this.setState({
            messages: {
                ...messages,
                [params.roomId]: [...(messages[params.roomId] || []), newMessage]
            },
            conversations: this.state.conversations.map((conversation) =>
                conversation.title === params.roomId
                    ? {
                        ...conversation,
                        value: '',
                    }
                    : conversation,
            ),
        })
    }
    componentDidUpdate = () => {

    }

    render() {
        const { children, match } = this.props

        const { conversations, messages } = this.state
        console.log(match.params.roomId)
        const state = {
            conversations,
            messages: messages[match.params.roomId] || [],
            value: conversations.find(conversation => conversation.title === match.params.roomId,)?.value || "",
        }

        const actions = {
            sendMessage: this.sendMessage,
            handlerChangeValue: this.handlerChangeValue,
        }

        return children([state, actions])



    }
}