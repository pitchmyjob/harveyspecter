import React from 'react'

import Loader from './Loader'
import NavBarContainer from '../containers/NavBarContainer'
import SideBarContainer from '../containers/SideBarContainer'

export default class LayoutLogged extends React.Component {
    render() {
        const { fetched, errorRetrieve } = this.props.currentUser

        if (errorRetrieve) {
            this.props.router.push('/login/')
        }
        else if (fetched) {
            return (
                <div>
                    <NavBarContainer />
                    <SideBarContainer />
                    <div className="page">{this.props.children}</div>
                </div>
            )
        }

        return <Loader />
    }
}
