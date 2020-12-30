import './MainContentDescriptionArea.css';
import React from 'react';

const MainContentDescriptionArea = props => {

    const showDesc = () => {
        if (!props.product) {
            return null;
        } else {
            return (
                <div>
                    <h2>{props.product}</h2>
                    <p>{props.productDesc}</p>
                    <p className="makeLightGrey">{props.webAddress}</p>
                </div>
            )
        }
    }
console.log(props)
    return (
        <div>
            {showDesc()}
        </div>
    )
}

export default MainContentDescriptionArea;