import React from 'react';
import * as aboutConstants from './about-constants.js';
import './About.css';

export class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='about-content-container'>
                <div className="about-content">
                    <div className="about-img-container">
                        <img src={aboutConstants.ABOUT_IMG}></img>
                    </div>
                    <div className="about-p-container">
                        {aboutConstants.ABOUT_CONTENT.map((item) => { return (<><p>{item}</p></>); })}
                        <p className="about-contact-paragraph">
                            Contact: {aboutConstants.CONTACT_EMAIL}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}