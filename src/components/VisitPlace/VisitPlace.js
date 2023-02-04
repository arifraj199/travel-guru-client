import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VisitPlace = () => {
    const place = useLoaderData();
    console.log(place);
    return (
        <div>
            <h2>Welcome to the place you want to go</h2>
        </div>
    );
};

export default VisitPlace;