import React from 'react';
import EnlearnInput from './EnlearnInput';
import WordsField from './WordsField';
import EnlearnControls from './EnlearnControls';

const EnlearnField = () => {
    return (
        <div className="enlearn--field">
            <EnlearnInput/>
            <div>
                <EnlearnControls/>
                <WordsField/>
            </div>
        </div>
    );
};

export default EnlearnField;