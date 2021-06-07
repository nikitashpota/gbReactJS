import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import styles from "./header.module.css"
import { Profile } from "./profile"

export class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>Header
                <Link to="/profile/">Profile</Link>

                <Switch>
                    <Route exact path="/profile/" render={(props) => (Profile(...props))} />
                </Switch>

            </div>
        )
    }
}