import React, { Component } from 'react';
import './App.css';
import ContentItem from './ContentItem';


export default class CMainContent extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      contenttitle: (<div>Content</div>),
      contenttitle_plainText: "Content",
    };
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_mainContent = {
        background: 'rgba(143, 18, 253, 1.000)',
        pointerEvents: 'none',
     };
    const style_contentTitle = {
        fontSize: 20.3,
        color: '#fb9533',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="CMainContent" style={baseStyle}>
        <div className="background">
          <div className='elMainContent' style={style_mainContent} />
        </div>
        <div className="layoutFlow">
          <div className='hasNestedComps elCContentItem'>
            <div>
              <ContentItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elCContentItem2'>
            <div>
              <ContentItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elCContentItem3'>
            <div>
              <ContentItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='font-robotoMedium  elContentTitle' style={style_contentTitle}>
            <div>{this.state.contenttitle}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
