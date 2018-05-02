import React, { Component } from 'react';
import './App.css';


export default class MainNav extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      homelink: (<div>home</div>),
      homelink_plainText: "home",
      aboutlink: (<div>about</div>),
      aboutlink_plainText: "about",
    };
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_homeLink = {
        fontSize: 15.2,
        color: '#fb9533',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const style_aboutLink = {
        fontSize: 15.2,
        color: '#fb9533',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="MainNav" style={baseStyle}>
        <div className="compContent">
          <div className='font-robotoMedium  elHomeLink' style={style_homeLink}>
            <div>{this.state.homelink}</div>
          </div>
          <div className='font-robotoMedium  elAboutLink' style={style_aboutLink}>
            <div>{this.state.aboutlink}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
