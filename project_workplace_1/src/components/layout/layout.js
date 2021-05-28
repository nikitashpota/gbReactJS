import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from "./layout.module.css"

export class Layout extends React.Component {
    static propTypes = {
        header: PropTypes.node.isRequired,
        chats: PropTypes.node.isRequired,
        children: PropTypes.node,
    }

    render() {
        const { header, chats, children } = this.props

        return (
            <div >
                <div >{header}</div>

                <div >
                    <div >{chats}</div>
                    <div >{children}</div>
                </div>
            </div>
        )
    }
}