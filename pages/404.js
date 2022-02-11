import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Error 404</h2>
            <p>This page cannot be found or is not build yet.</p>
            <Link href="/" alt="home">Back to Homepage...</Link>
        </div>
    );
};

NotFound.displayName = "Error"

export default NotFound;