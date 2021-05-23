import React from "react"
import PropTypes from "prop-types"

export class Chat extends React.Component {
    static propTypes = {
        chat: PropTypes.shape({
            titel: PropTypes.string,
        })
    }
    render() {
    const { title, handleListItemClick, selected } = this.props
    // handleListItemClick нужен для <ListItem handleListItemClick selected/> (из материал)
    return <div>{title}</div>
    }
}