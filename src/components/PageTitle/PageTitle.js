import React from 'react';
import { PageTitleComp } from './PageTitleStyle';

const PageTitle = (props) => {
    return (
      <PageTitleComp>
        {props.title}
      </PageTitleComp>
    );
}

export default PageTitle;