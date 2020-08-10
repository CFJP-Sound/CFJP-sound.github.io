import React from 'react';
import './SingleItemView.css';

export class SingleItemView extends React.Component {
    constructor(props) {
        super(props);
    }

    displayContent = () => {
        var item = this.props.singleItemToShow;
        var type = item.type ? item.type : 'img';
        if (type === "video") {
            return (<iframe className="display-video" src={item.externalLocation} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>);
        } else {
            return (<img className="display-img" alt={item.title} src={item.previewImg}></img>);
        }
    }

    displayPayWhatYouWant = () => {
        if (this.props.showPayWhatYouWant) {
            return (
                <p><a href={this.props.singleItemToShow.externalLocation} target="_blank">Pay what you want!</a></p>
            );
        } else {
            return (<></>);
        }
    }

    render() {
        return (
            <>
                <div className='single-item-view'>
                    <h1>{this.props.singleItemToShow.title}</h1>
                    <div className="content-display">
                        {this.displayContent()}
                        <br />
                        <p>{this.props.singleItemToShow.description}</p>
                        {this.displayPayWhatYouWant()}
                    </div>
                </div>
                <hr className="item-splitter" />
            </>
        );
    }
}