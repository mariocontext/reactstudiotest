import React, { Component } from 'react';
import './App.css';
import MainNav from './MainNav';


export default class CMainHeader extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      headertitle: (<div>Header Title<br /></div>),
      headertitle_plainText: "Header Title\n",
    };
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_mainHeader = {
        background: 'rgba(215, 215, 215, 1.000)',
        pointerEvents: 'none',
     };
    const style_headerTitle = {
        fontSize: 20.3,
        color: '#4a494a',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="CMainHeader" style={baseStyle}>
        <div className="background">
          <div className='elMainHeader' style={style_mainHeader} />
        </div>
        <div className="foreground">
          <div className='hasNestedComps elMainNav'>
            <MainNav appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
          <div className='font-robotoMedium  elHeaderTitle' style={style_headerTitle}>
            <div><div dangerouslySetInnerHTML={{__html: this.state.headertitle.replace(/\n/g, '<br>')}}></div></div>
          </div>
        </div>
      </div>
    )
  }
  

}
