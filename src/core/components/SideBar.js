import React from 'react'
import { Link } from 'react-router'

export default class SideBar extends React.Component {
     static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    render() {
        const { logoutUser } = this.props

        return (
            <div className="site-menubar">
                <div className="site-menubar-body">
                    <div>
                        <div>
                            <ul className="site-menu" data-plugin="menu">
                                <li className="site-menu-category">General</li>
                                <li className="site-menu-item has-sub active open">
                                    <Link to="/">
                                        <i className="site-menu-icon wb-dashboard" aria-hidden="true"></i>
                                        <span className="site-menu-title">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="site-menu-item has-sub">
                                    <Link to="/jobs/">
                                        <i className="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                                        <span className="site-menu-title">Mes offres</span>
                                    </Link>
                                </li>
                                <li className="site-menu-item has-sub">
                                    <a href="#">
                                        <i className="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                                        <span className="site-menu-title">Cv-theque</span>
                                    </a>
                                </li>
                                <li className="site-menu-item has-sub">
                                    <Link to="/company/edit/">
                                        <i className="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                                        <span className="site-menu-title">Page entreprise</span>
                                    </Link>
                                </li>
                                <li className="site-menu-item has-sub">
                                    <a href="#">
                                        <i className="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                                        <span className="site-menu-title">Crédits</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="site-menubar-footer">
                    <a href="#" className="fold-show" data-placement="top" data-toggle="tooltip" data-original-title="Settings">
                        <span className="icon wb-settings" aria-hidden="true"></span>
                    </a>
                    <a href="#" data-placement="top" data-toggle="tooltip" data-original-title="Lock">
                        <span className="icon wb-eye-close" aria-hidden="true"></span>
                    </a>
                    <a href="#" data-placement="top" data-toggle="tooltip" data-original-title="Logout">
                        <span className="icon wb-power" aria-hidden="true" onClick={() => logoutUser()} ></span>
                    </a>
                </div>
            </div>
        )
    }
}
