import React from 'react';
import * as projectsConstants from './projects-constants.js';
import './Projects.css';
import { SingleItemView } from './SingleItemView.js';

export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectToPreview: undefined,
            selectedProject: undefined
        };
        this.changeProject = this.changeProject.bind(this);
    }

    showProjectPreview = () => {
        if (this.state.projectToPreview && !this.state.selectedProject) {
            return (
                <div className="project-previews-containter">
                    <div className="project-preview">
                        <img alt={this.state.projectToPreview.name} src={this.state.projectToPreview.previewImg}></img>
                        <div className="project-preview-p-container">
                            <p>
                                {this.state.projectToPreview.description}
                            </p>
                        </div>
                    </div>
                </div>);
        } else {
            return;
        }
    }

    showProject = () => {
        if (this.state.selectedProject) {
            return (
                <div className="single-project-container">
                    <a className="projects-clear-item" onClick={this.clearSelectedProject}>X</a>
                    {this.state.selectedProject.works.map((item, index) => {
                        return <SingleItemView key={index} singleItemToShow={item} />;
                    })}
                </div>);
        } else {
            return;
        }
    }

    clearSelectedProject = (event) => {
        event.preventDefault();
        this.setState({
            selectedProject: undefined
        });
    }

    hoverController = (event) => {
        event.preventDefault();
        if (event.dispatchConfig.registrationName === "onMouseEnter") {
            this.setState({
                projectToPreview: projectsConstants.PROJECTS.find((proj) => proj.name === event.currentTarget.innerHTML)
            });
        } else if (event.dispatchConfig.registrationName === "onMouseLeave") {
            this.setState({
                projectToPreview: undefined
            });
        }
    }

    changeProject = (event) => {
        event.preventDefault();
        this.setState({
            selectedProject: projectsConstants.PROJECTS.find((proj) => proj.name === event.currentTarget.innerHTML)
        });
    }

    showSymbolFlakes = () => {
        var items = projectsConstants.PROJECTS;
        var width = Math.floor(100 / items.length);
        if (!this.state.projectToPreview && !this.state.selectedProject) {
            return (
                <div className="flakes-container">
                    {items.map((item, index) => {
                        return (
                            <div style={{ width: width + '%' }} className="symbolflakes" key={index}>
                                <div className="symbolflake">
                                    {projectsConstants.SYMBOLS[Math.floor((Math.random() * projectsConstants.SYMBOLS.length))]}
                                </div>
                                <div className="symbolflake">
                                    {projectsConstants.SYMBOLS[Math.floor((Math.random() * projectsConstants.SYMBOLS.length))]}
                                </div>
                                <div className="symbolflake">
                                    {projectsConstants.SYMBOLS[Math.floor((Math.random() * projectsConstants.SYMBOLS.length))]}
                                </div>
                                <div className="symbolflake">
                                    {projectsConstants.SYMBOLS[Math.floor((Math.random() * projectsConstants.SYMBOLS.length))]}
                                </div>
                                <div className="symbolflake">
                                    {projectsConstants.SYMBOLS[Math.floor((Math.random() * projectsConstants.SYMBOLS.length))]}
                                </div>
                                <div className="symbolflake">
                                    {projectsConstants.SYMBOLS[Math.floor((Math.random() * projectsConstants.SYMBOLS.length))]}
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }

    render() {
        var items = projectsConstants.PROJECTS;
        var buttonWidth = Math.floor(100 / items.length);
        return (
            <>
                {this.showProject()}
                <div className="project-titles-container">
                    {items.map((item, index) => {
                        var buttonClass = this.state.selectedProject && item.name === this.state.selectedProject.name ? "selected-project-button" : "project-button";
                        return (
                            <button className={buttonClass} style={{ width: buttonWidth + '%' }} onClick={this.changeProject} onMouseEnter={this.hoverController} onMouseLeave={this.hoverController} key={index}>{item.name}</button>
                        );
                    })}
                </div>
                {this.showSymbolFlakes()}
                {this.showProjectPreview()}
            </>
        );
    }
}