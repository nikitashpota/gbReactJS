import React from "react"
import { MessageField, ChatList, Header } from "../"
import styles from "./layout.module.css"

export const Layout = ({ header, chats, children }) => {
    return (
        <div className={styles.layoutGrid}>
            {header}
            {chats}
            {children}
        </div>
    )
}
