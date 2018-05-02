import React, { Component } from 'react';
import './App.css';


export default class ContentItem extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      sometexthere: (<div>Some text here</div>),
      sometexthere_plainText: "Some text here",
    };
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_contentItemArea = {
        background: 'rgba(115, 78, 46, 1.000)',
        border: '1.6px solid #969696',
        pointerEvents: 'none',
     };
    const style_someTextHere = {
        fontSize: 15.2,
        color: 'white',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="ContentItem" style={baseStyle}>
        <div className="background">
          <div className='elContentItemArea' style={style_contentItemArea} />
        </div>
        <div className="foreground">
          <div className='font-robotoMedium  elSomeTextHere' style={style_someTextHere}>
            <div>{this.state.sometexthere}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
