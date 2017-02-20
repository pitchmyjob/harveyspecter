import React from 'react'
import { Link } from 'react-router'

import NotificationListContainer from '../../notification/containers/NotificationListContainer'

export default class Dashboard extends React.Component {
    render() {
        const { logoutUser } = this.props

        return (
            <div>
                <div style={{width: '50%', float: 'left'}}>
                    Dashboard - <button onClick={() => logoutUser()}>Me déconnecter</button>
                    <ul>
                        <li>
                            Company :
                            <ul>
                                <li><Link to="/company/edit/">Modification du profil</Link></li>
                                <li><Link to="/collaborators/">Les collaborateurs</Link></li>
                                <li><Link to="/jobs/">Les offres</Link></li>
                            </ul>
                        </li>
                        <li>
                            Current user :
                            <ul>
                                <li><Link to="/me/edit/">Modifier mon profil</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div style={{width: '50%', float: 'left'}}>
                    <NotificationListContainer />
                </div>
            </div>
        )
    }
}
