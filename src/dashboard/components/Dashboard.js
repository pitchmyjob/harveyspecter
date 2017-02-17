import React from 'react'
import { Link } from 'react-router'

import NotificationListContainer from '../../notification/containers/NotificationListContainer'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div style={{width: '50%', float: 'left'}}>
                    Dashboard
                    <ul>
                        <li><Link to="/company/profile/">Modification profil de l'entreprise</Link></li>
                        <li><Link to="/collaborators/">Collaborateurs</Link></li>
                        <li><Link to="/me/edit/">Modifier mon profil</Link></li>
                    </ul>
                </div>
                <div style={{width: '50%', float: 'left'}}>
                    <NotificationListContainer />
                </div>
            </div>
        )
    }
}
