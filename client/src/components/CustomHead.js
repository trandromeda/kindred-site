import React from 'react';
import {Helmet} from 'react-helmet';

const HelmetComponent = (props) => {
  return (
    <Helmet
      title={props.pageTitle}
      defaultTitle="Kindred | Learn from your neighbour"
      titleTemplate="Kindred | %s">
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content={props.type} />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content={props.image} />
      <meta property="og:description" content={props.description} />
    </Helmet>
  )
}

export default HelmetComponent;