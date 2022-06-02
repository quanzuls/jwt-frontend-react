import React from 'react';
import './NotFound404.scss';

const NotFound404 = () => {
    return (
        <div className='notFound'>
            <section class="error-container">
                <span>4</span>
                <span><span class="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div class="link-container">
                <a target="_blank" href="/" class="more-link">Visit the original homepage</a>
            </div>
        </div>);
}

export default NotFound404;