import React from 'react';
import {Helmet} from 'react-helmet';

const HelmetComponent = (props) => {
  return (
    <Helmet
      title={props.pageTitle}
      defaultTitle="Kindred | Learn from your neighbour"
      titleTemplate="Kindred | %s">
    </Helmet>
  )
}

export default HelmetComponent;