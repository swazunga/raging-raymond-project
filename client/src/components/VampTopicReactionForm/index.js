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

        <div className='col-12 col-lg-5 order-lg-1 order-sm-2'>

            <form className="reaction-form" onSubmit={handleFormSubmit}>
                <label htmlFor='vamp-topic-comment-content' className='form-label'>Comment Content</label>
                <textarea placeholder="Leave a comment on this post..." value={vampTopicReactionBody} className="form-control" onChange={handleChange} rows="8" name='vamp-topic-comment-content'></textarea>

                <span className={` ${characterCount === 280 ? 'text-error' : ''} character-count`}>
                Character Count: {characterCount}/280
                {error && <span classNAme="">Something went wrong...</span>}
                </span>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VampTopicReactionForm;