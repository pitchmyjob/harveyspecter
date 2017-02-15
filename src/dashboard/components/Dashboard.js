import React from 'react'
import { Link } from 'react-router'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                Dashboard
                <ul>
                    <li><Link to="/profile/">Modification profil de l'entreprise</Link></li>
                    <li><Link to="/collaborators/">Collaborateurs</Link></li>
                </ul>
            </div>
        )
    }
}
