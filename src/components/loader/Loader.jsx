import React from 'react';

import './loader.css';

function Loading() {
    return (
        <div className='loadingWrapper'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading