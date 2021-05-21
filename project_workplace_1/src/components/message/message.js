import React from "react"
import PropTypes from "prop-types"
import classNames from 'classnames';
import styles from "../../index.module.css"

function OutputMessage(props) {
    const { message } = this.props
    const { author, value } = message
    return <h4 className={styles.messager__author}>{author}</h4>;
}
  
function InputMessage(props) {
    const { message } = this.props
    const { author, value } = message
    return <h4 className={styles.messager__author} className={styles.messager__author_right}>{author}</h4>;
}


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


        if(author === "Bot"){
            return (
                <div className={styles.messager__userfield}>
                    <h4 className={classNames(styles.messager__author, styles.messager__author_right)} >{author}</h4>
                    <h3 className={styles.messager__text}>{value}</h3>
                </div>)
        }
        else{
            return (
                <div className={styles.messager__userfield}>
                    <h4 className={styles.messager__author}>{author}</h4>
                    <h3 className={styles.messager__text}>{value}</h3>
                </div>)
        
        }

    }
}
