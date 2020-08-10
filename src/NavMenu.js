import React from 'react';
import * as navMenuConstants from './nav-menu-constants.js';
import './NavMenu.css';

export class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    changePage = (event) => {
        event.preventDefault();
        this.setState({
            selectedNavItem: event.currentTarget.innerText
        });
        this.props.itemClick(event.currentTarget.innerText);
    }

    render() {
        var menuItems = navMenuConstants.NAV_BAR;
        var selectedNavItem = this.props.selectedPage;
        return (
            <div className="nav-bar">
                <>
                    {menuItems.map((item, index) => {
                        var className = item === selectedNavItem ? "selected-nav-item" : "nav-item";
                        return (
                            <a className={className} onClick={this.changePage} key={index}>{item}</a>
                        );
                    })}
                </>
            </div>
        );
    }
}