import React from "react"
import PropTypes from "prop-types"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export class Chat extends React.Component {
    static propTypes = {
        chat: PropTypes.shape({
            titel: PropTypes.string,
        })
    }
    render() {
        const { title, handleListItemClick, selected } = this.props
        return <ListItem button><ListItemText primary={title} /></ListItem>
    }
}