import './MainContentTopArea.css';
import React from 'react';

const MainContentTopArea = props => {

    const showTopContent = () => {
        if (!props.avatar) {
            return null;
        } else {
            return (
                <div style={{
                    backgroundColor: `${props.color}`,
                    borderRadius: '10px 10px 0 0'
                }}>
                    <div className="topAreaContainer">
                        <img className="avatarMainContent" src={props.avatar} alt="" />
                        <h1>{props.product}</h1>
                        <div className="nameContainer">
                            <span className="nameOfPerson"
                                  style={{color: `${props.color}`
                            }}>
                                {`${props.firstName} ${props.lastName}`}
                            </span>
                            <img className="personalPic" src={props.personalPic} alt="" />
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {showTopContent()}
        </div>
    )
}

export default MainContentTopArea;