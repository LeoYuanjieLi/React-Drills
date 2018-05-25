import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          showImage: false
        }
    }
  
    toggleImage(value) {
      this.setState({
        showImage: value
      })
    }

    render() {
      
      
      
      
      
        // Show the button to start with
        if (!this.state.showImage) {
          return (
            <div onClick={() => this.toggleImage(true)}>
              <SurpriseButton />
            </div>
          );
        }
      
      
        return (
          <div onClick={() => this.toggleImage(false)}>
            <SurpriseImage />
          </div>  
        
        )
        
    }
}
