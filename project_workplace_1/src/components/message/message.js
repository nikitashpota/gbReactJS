import React from "react"
import PropTypes from "prop-types"
import classNames from 'classnames';
import styles from "../../index.module.css"

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
                <div className={styles.messagerUserfield}>
                    <h4 className={author === "Bot" ? classNames(styles.messagerAuthor, styles.messagerAuthorRight): styles.messagerAuthor}>{author}</h4>
                    <h3 className={styles.messagerText}>{value}</h3>
                </div>)
    }
}
