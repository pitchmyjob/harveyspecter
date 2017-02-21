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
                          <a href="javascript:void(0)">
                            <i className="site-menu-icon wb-dashboard" aria-hidden="true"></i>
                            <span className="site-menu-title">Dashboard</span>
                            <div className="site-menu-badge">
                              <span className="tag tag-pill tag-success">3</span>
                            </div>
                          </a>
                        </li>

                        <li className="site-menu-item has-sub">
                          <a href="javascript:void(0)">
                            <i className="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                            <span className="site-menu-title">Mes offres</span>
                          </a>
                        </li>

                        <li className="site-menu-item has-sub">
                          <a href="javascript:void(0)">
                            <i className="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                            <span className="site-menu-title">Cv-theque</span>
                          </a>
                        </li>

                        <li className="site-menu-item has-sub">
                          <a href="javascript:void(0)">
                            <i className="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                            <span className="site-menu-title">Page entreprise</span>
                          </a>
                        </li>

                        <li className="site-menu-item has-sub">
                          <a href="javascript:void(0)">
                            <i className="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                            <span className="site-menu-title">Crédits</span>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="site-menubar-footer">
                  <a href="javascript: void(0);" className="fold-show" data-placement="top" data-toggle="tooltip"
                  data-original-title="Settings">
                    <span className="icon wb-settings" aria-hidden="true"></span>
                  </a>
                  <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Lock">
                    <span className="icon wb-eye-close" aria-hidden="true"></span>
                  </a>
                  <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Logout">
                    <span className="icon wb-power" aria-hidden="true" onClick={() => logoutUser()} ></span>

                  </a>
                </div>

            </div>
        )
    }

}
