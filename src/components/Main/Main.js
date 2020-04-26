import React from 'react';
import { MainComp } from './MainStyle';

const Main = (props) => {
    return (
      <MainComp>
        {props.children}
      </MainComp>
    );
}

export default Main;