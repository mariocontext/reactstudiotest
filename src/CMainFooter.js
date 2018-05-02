import React, { Component } from 'react';
import './App.css';


export default class CMainFooter extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      footertitle: (<div>Footer Title</div>),
      footertitle_plainText: "Footer Title",
    };
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_mainFooter = {
        background: 'transparent',
        border: '1.6px solid #969696',
        pointerEvents: 'none',
     };
    const style_footerTitle = {
        fontSize: 20.3,
        color: '#fb9533',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="CMainFooter" style={baseStyle}>
        <div className="background">
          <div className='elMainFooter' style={style_mainFooter} />
        </div>
        <div className="foreground">
          <div className='font-robotoMedium  elFooterTitle' style={style_footerTitle}>
            <div>{this.state.footertitle}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
