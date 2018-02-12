import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import CustomHead from 'components/CustomHead';

const Contact = () => {
  return (
      <div className="contact-container">
        <CustomHead pageTitle="Contact us" />

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
