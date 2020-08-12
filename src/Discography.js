import React from 'react';
import * as discographyConstants from './discography-constants';
import './Discography.css';
import { SingleItemView } from './SingleItemView.js';

export class Discography extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleItemToShow: undefined
        };
        this.setSingleItem = this.setSingleItem.bind(this);
    }

    setSingleItem = (event) => {
        event.preventDefault();
        this.setState({
            singleItemToShow: discographyConstants.DISCOGRAPHY_ITEMS[event.currentTarget.id]
        });
        console.log("SHOW SINGLE ITEM PAGE: " + event.currentTarget.id);
        window.scrollTo(0, 0);
    }

    showSingleItem = () => {
        if (this.state.singleItemToShow) {
            return (
                <>
                    <a className="discography-clear-item" onClick={this.clearSingleItem}>X</a>
                    <SingleItemView singleItemToShow={this.state.singleItemToShow} clearSingleItem={this.clearSingleItem} showPayWhatYouWant="true" />
                </>
            );
        } else {
            return (<></>);
        }
    }

    clearSingleItem = (event) => {
        event.preventDefault();
        this.setState({
            singleItemToShow: undefined
        });
    }

    render() {
        var items = discographyConstants.DISCOGRAPHY_ITEMS;
        return (
            <>
                <div className="single-item-view">
                    {this.showSingleItem()}
                </div>
                <div className='array-view-discography'>
                    {items.map((item, index) => {
                        return (
                            <button key={index} id={index} onClick={this.setSingleItem}><img alt={item.title} src={item.previewImg}></img></button>
                        );
                    })}
                </div>
            </>
        );
    }
}