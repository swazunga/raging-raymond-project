import React, { useState } from 'react';
import { ADD_FISHTOPICREACTION } from '../../utils/mutations'
import { useMutation } from '@apollo/client';

const FishTopicReactionForm = ({ fishTopicId }) => {
    const [fishTopicReactionBody, setFishTopicReactionBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addFishTopicReaction, { error }] = useMutation(ADD_FISHTOPICREACTION);


    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setFishTopicReactionBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addFishTopicReaction({
                variables: { fishTopicReactionBody, fishTopicId }

            });

            setFishTopicReactionBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        };
    }
    return (
        <div>
            <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Leave a reaction to this thought..."
                    value={fishTopicReactionBody}
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

export default FishTopicReactionForm;