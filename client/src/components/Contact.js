import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
        <div className="contact">
          <div 
            className="typeform-widget" 
            data-url="https://andytran.typeform.com/to/n1v2bS" 
            data-transparency="50" 
            data-hide-headers={true}
            data-hide-footer={true} 
            style={{
              width: '100%',
              height: '500px'
            }}>
          </div>         
        </div>
      )
  }
}

export default Contact;


