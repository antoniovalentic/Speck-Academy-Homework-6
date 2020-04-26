import React from 'react';
import LoaderComponent from 'react-loader-spinner';
import { LoaderStyle } from './LoaderStyle';

const Loader = (props) => {  
    return (
        <LoaderStyle>
            <LoaderComponent
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </LoaderStyle>
    );
}

export default Loader;