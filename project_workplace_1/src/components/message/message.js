import React from "react"
import PropTypes from "prop-types"
import styles from "../../css/index.module.css"

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
            <div className={styles.messager__userfield}>
                <h4 className={styles.messager__author}>{author}</h4>
                <h3 className={styles.messager__text}>{value}</h3>

            </div>)
    }
}
