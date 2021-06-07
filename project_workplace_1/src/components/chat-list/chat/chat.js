import React from "react"
import PropTypes from "prop-types"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export class Chat extends React.Component {
    render() {
        const { chat, selected } = this.props
        const { title } = chat
        return <ListItem button><ListItemText primary={title} /></ListItem>
    }
}