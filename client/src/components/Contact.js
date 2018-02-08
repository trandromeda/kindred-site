import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const Contact = () => {
  return (
      <div className="contact-container">
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

export default Contact;
