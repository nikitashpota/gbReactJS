
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    withStyles,
} from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"
import { format } from "date-fns"
import PropTypes from "prop-types"
import React, { Component } from "react"

const StyledListItem = withStyles(() => ({
    root: {
        "&.Mui-selected": {

            backgroundColor: "#2b5278",
        },
        "&.Mui-selected:hover": {
            backgroundColor: "#2b5278",
        },
    },
}))(ListItem)

export class Chat extends React.Component {
    static propTypes = {
        selected: PropTypes.bool.isRequired,
    }
    render() {
        const { handleListItemClick, selected, chat, lastMessage } = this.props
        const { title } = chat
        const time = lastMessage?.date ? format(lastMessage.date, "HH:mm:ss") : null
        // handleListItemClick нужен для <ListItem handleListItemClick selected/> (из материал)
        return <StyledListItem
            button={true}
            selected={selected}
            onClick={handleListItemClick}
        >
            <ListItemIcon>
                <AccountCircle fontSize="large" />
            </ListItemIcon>
            <div >
                <ListItemText primary={title} />
                {lastMessage ? (
                    <ListItemText
                        primary={`${lastMessage.author}: ${lastMessage.message}`}
                    />
                ) : (
                    <ListItemText primary="Нет сообщений" />
                )}
                <ListItemText primary={time} />
            </div>
        </StyledListItem>
    }
}