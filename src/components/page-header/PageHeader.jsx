import React from 'react';

import './page-header.scss';



const PageHeader = props => {
    return (
        <div className="page-header">
            <h2 className='text-5xl font-semibold text-yellow-400'>{props.children}</h2>
        </div>
    );
}


export default PageHeader;