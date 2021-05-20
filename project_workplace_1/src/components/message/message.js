import React from "react"
import PropTypes from "prop-types"

export class Message extends React.Component {
    static propTypes = {
        message: PropTypes.shape({
            message: PropTypes.string,
            value: PropTypes.string,
 
        })
    }
    render() {
        const { message } = this.props
        const { author, value } = message

        return (
            <div>
                <h4>{author}</h4>
                <h3>{value}</h3>

            </div>)
    }
}
