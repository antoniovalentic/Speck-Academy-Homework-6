import React from 'react';
import './PageTitle.css';

const PageTitle = (props) => {
    return (
      <>
        <h1 className="PageTitle">{props.title}</h1>
      </>
    );
}

export default PageTitle;