import React from "react"
import { MessageField, ChatList, Header } from "../"
import styles from "./layout.module.css"

export class Layout extends React.Component {
    render() {
        return (
            <div className={styles.layoutGrid}>
                <Header />
                <ChatList />
                <MessageField />
            </div>
        )
    }
}