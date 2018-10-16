import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className="navbar fixed">
                <div className="wrapper navbar">
                    <i className="material-icons black-text">search</i>
                    <div className="wrapper input">             
                        <input
                            type="text"
                            placeholder="O que deseja?"
                            className="search-input"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;