import React from 'react'
import { Link } from 'react-router'

import NotificationNavBar from '../../notification/components/NotificationNavBar'

export default class NavBar extends React.Component {
    componentDidMount() {
        this.props.listNotification()
        this.props.retrieveCounterNotification()
    }

    render() {
        const { currentUser, notificationList, notificationCounter, marketAsReadNotification } = this.props

        return (
            <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-inverse" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggler hamburger hamburger-close navbar-toggler-left hided" data-toggle="menubar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="hamburger-bar"></span>
                    </button>
                    <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-collapse" data-toggle="collapse">
                        <i className="icon wb-more-horizontal" aria-hidden="true"></i>
                    </button>
                    <div className="navbar-brand navbar-brand-center site-gridmenu-toggle">
                        <img className="navbar-brand-logo" src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/base/assets/images/logo.png" title="Remark" alt="Remark" />
                        <span className="navbar-brand-text hidden-xs-down"> Remark</span>
                    </div>
                    <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-search" data-toggle="collapse">
                        <span className="sr-only">Toggle Search</span>
                        <i className="icon wb-search" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="navbar-container container-fluid">
                    <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
                        <ul className="nav navbar-toolbar">
                            <li className="nav-item hidden-float" id="toggleMenubar">
                                <a className="nav-link" data-toggle="menubar" href="#" role="button">
                                    <i className="icon hamburger hamburger-arrow-left">
                                        <span className="sr-only">Toggle menubar</span>
                                        <span className="hamburger-bar"></span>
                                    </i>
                                </a>
                            </li>
                            <li className="nav-item hidden-sm-down" id="toggleFullscreen">
                                <a className="nav-link icon icon-fullscreen" data-toggle="fullscreen" href="#" role="button">
                                    <span className="sr-only">Toggle fullscreen</span>
                                </a>
                            </li>
                            <li className="nav-item hidden-float">
                                <a className="nav-link icon wb-search" data-toggle="collapse" href="#" data-target="#site-navbar-search" role="button">
                                    <span className="sr-only">Toggle Search</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
                            <NotificationNavBar notifications={notificationList} counter={notificationCounter} onMarkAsRead={marketAsReadNotification} />
                            <li className="nav-item dropdown ">
                                <a className="nav-link" data-toggle="dropdown" href="#" title="Messages" aria-expanded="false" data-animation="scale-up" role="button">
                                    <i className="icon wb-envelope" aria-hidden="true"></i>
                                    <span className="tag tag-pill tag-info up">3</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                                    <div className="dropdown-menu-header" role="presentation">
                                        <h5>MESSAGES</h5>
                                        <span className="tag tag-round tag-info">New 3</span>
                                    </div>
                                    <div className="list-group" role="presentation">
                                        <div data-role="container">
                                            <div data-role="content">
                                                <a className="list-group-item" href="#" role="menuitem">
                                                    <div className="media">
                                                        <div className="media-left p-r-10">
                                                            <span className="avatar avatar-sm avatar-online">
                                                                <img src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/global/portraits/2.jpg" alt="..." />
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">Mary Adams</h6>
                                                            <div className="media-meta">
                                                                <time>30 minutes ago</time>
                                                            </div>
                                                            <div className="media-detail">Anyways, i would like just do it</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="list-group-item" href="#" role="menuitem">
                                                    <div className="media">
                                                        <div className="media-left p-r-10">
                                                            <span className="avatar avatar-sm avatar-off">
                                                                <img src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/global/portraits/3.jpg" alt="..." />
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">Caleb Richards</h6>
                                                            <div className="media-meta">
                                                                <time>12 hours ago</time>
                                                            </div>
                                                            <div className="media-detail">I checheck the document. But there seems</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="list-group-item" href="#" role="menuitem">
                                                    <div className="media">
                                                        <div className="media-left p-r-10">
                                                            <span className="avatar avatar-sm avatar-busy">
                                                                <img src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/global/portraits/4.jpg" alt="..." />
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">June Lane</h6>
                                                            <div className="media-meta">
                                                                <time>2 days ago</time>
                                                            </div>
                                                            <div className="media-detail">Lorem ipsum Id consectetur et minim</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="list-group-item" href="#" role="menuitem">
                                                    <div className="media">
                                                        <div className="media-left p-r-10">
                                                            <span className="avatar avatar-sm avatar-away">
                                                                <img src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/global/portraits/5.jpg" alt="..." />
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="media-heading">Edward Fletcher</h6>
                                                            <div className="media-meta">
                                                                <time>3 days ago</time>
                                                            </div>
                                                            <div className="media-detail">Dolor et irure cupidatat commodo nostrud nostrud.</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-menu-footer" role="presentation">
                                        <a className="dropdown-menu-footer-btn" href="#" role="button">
                                            <i className="icon wb-settings" aria-hidden="true"></i>
                                        </a>
                                        <a className="dropdown-item" href="#" role="menuitem">
                                            See all messages
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false" data-animation="scale-up" role="button">
                                    <span className="avatar avatar-online">
                                        <img src={currentUser.photo} alt="..." />
                                        <i></i>
                                    </span>
                                </a>
                                <div className="dropdown-menu" role="menu">
                                    <Link to="/me/edit/" className="dropdown-item" role="menuitem"><i className="icon wb-user" aria-hidden="true"></i> Mon profil</Link>
                                    <a className="dropdown-item" href="#" role="menuitem"><i className="icon wb-payment" aria-hidden="true"></i> Billing</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-search-overlap" id="site-navbar-search">
                        <form role="search">
                            <div className="form-group">
                                <div className="input-search">
                                    <i className="input-search-icon wb-search" aria-hidden="true"></i>
                                    <input type="text" className="form-control" name="site-search" placeholder="Search..." />
                                    <button type="button" className="input-search-close icon wb-close" data-target="#site-navbar-search" data-toggle="collapse" aria-label="Close"></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
