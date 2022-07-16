import React, { useState } from 'react';
import { ADD_VAMPTOPICREACTION } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const VampTopicReactionForm = ({ vampTopicId }) => {
    const [vampTopicReactionBody, setVampTopicReactionBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addVampTopicReaction, { error }] = useMutation(ADD_VAMPTOPICREACTION);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setVampTopicReactionBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addVampTopicReaction({
                variables: { vampTopicReactionBody, vampTopicId }
            })
            setVampTopicReactionBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }

    };
    return (
        <div>
            <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Leave a reaction to this thought..."
                    value={vampTopicReactionBody}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>

                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default VampTopicReactionForm;