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
        <div className='col-12 col-lg-5 order-lg-1 order-sm-2'>

            <form className="reaction-form" onSubmit={handleFormSubmit}>
                <label htmlFor='fish-topic-comment-content' className='form-label'>Comment Content</label>
                <textarea placeholder="Leave a comment on this post..." value={fishTopicReactionBody} className="form-control" onChange={handleChange} rows="8" name='fish-topic-comment-content'></textarea>

                <span className={` ${characterCount === 280 ? 'text-error' : ''} character-count`}>
                Character Count: {characterCount}/280
                {error && <span classNAme="">Something went wrong...</span>}
                </span>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FishTopicReactionForm;