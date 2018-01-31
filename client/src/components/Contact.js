import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class Contact extends Component {
  shouldComponentUpdate () {
    console.log('should');
  }
  
  componentDidMount () {
    console.log('mount');
  }

  render() {
    return (
        <div className="contact">
          <ReactTypeformEmbed 
          url={'https://andytran.typeform.com/to/n1v2bS'} 
          hideHeaders={true}
          hideFooter={true}
          style={{
            width: "100%",
            height: "500px",
            position: "relative"
          }}
          />
        </div>
      )
  }
}

export default Contact;
