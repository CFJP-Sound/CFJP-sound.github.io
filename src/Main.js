import React from 'react';
import * as mainConstants from './main-constants.js';
import * as navBarOptions from './nav-menu-constants.js';
import './Main.css';
import { NavMenu } from './NavMenu.js'

// 1. Import new components here
import { Projects } from './Projects.js'
import { Discography } from './Discography.js'
import { About } from './About.js'

export class Main extends React.Component {

    //2. Add new components here like: ComponentName: ComponentName
    components = {
        Projects: Projects,
        Discography: Discography,
        About: About
    };

    constructor(props) {
        super(props);
        this.state = {
            pageToShow: navBarOptions.NAV_BAR[0]
        };
    }

    changePage = (pageToChangeTo) => {
        this.setState({
            pageToShow: pageToChangeTo
        });
        console.log(`nav to (From Main): ${pageToChangeTo}!`);
    }

    render() {
        const ComponentName = this.components[this.state.pageToShow];
        return (
            <div className='main'>
                <div className='page-header'>
                    <div className="app-header">
                        <NavMenu itemClick={this.changePage} selectedPage={this.state.pageToShow} />
                    </div>
                    <img className="banner" src={mainConstants.BANNER}></img>
                </div>
                <div className="component-container">
                    <ComponentName />
                </div>
            </div>
        );
    }
}