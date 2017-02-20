import React from 'react'
import NavBarContainer from '../containers/NavBarContainer'
import SideBarContainer from '../containers/SideBarContainer'


export default class LayoutLogged extends React.Component {

    render() {
        return (
            <div className="full-height">
                <NavBarContainer />
                <SideBarContainer />
                <div className="page"> {this.props.children}</div>
            </div>
        )
    }

}
