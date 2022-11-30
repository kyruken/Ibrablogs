import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Error!</h1>
            <p>404 Response</p>

            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}