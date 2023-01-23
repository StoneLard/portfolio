import React from 'react';
import { Link } from 'react-router-dom';
import WordsList from './WordsList';
import EnlearnField from './EnlearnField';




const EnLearn = () => {
    return (
        <div className="wrapper english--learn">
            <h1 className="heading">Let's learn English!</h1>
            <div className="container">
                <EnlearnField/>
                <WordsList/>
            </div>
            <div className="back--button">
                <Link to="/">Back</Link>
            </div>
        </div>
    );
};

export default EnLearn;