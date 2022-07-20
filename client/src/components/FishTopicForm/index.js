import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FISHTOPIC } from '../../utils/mutations';
import { QUERY_FISHTOPICS } from '../../utils/queries'

const FishTopicForm = () => {
    const [fishTopicText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addFishTopic, { error }] = useMutation(ADD_FISHTOPIC, {
        update(cache, { data: { addFishTopic } }) {
            const { fishTopics } = cache.readQuery({ query: QUERY_FISHTOPICS });

            cache.writeQuery({
                query: QUERY_FISHTOPICS,
                data: { fishTopics: [addFishTopic, ...fishTopics] }
            });
        }
    });

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length)
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addFishTopic({
                variables: { fishTopicText }

            });

            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        };
    }

    return (
        <>
            <h3 className='fish-topic-post-header'>Add a new post!</h3>
            <form className="fish-topic-post" onSubmit={handleFormSubmit}>
                <label htmlFor='fish-topic-post-content' className='form-label'>Post Content</label>
                <textarea placeholder="Here's a new Fish Tale..." value={fishTopicText} className="form-control" onChange={handleChange} name="fish-topic-post-content" rows="10"></textarea>
                
                <span className={` ${characterCount === 280 ? 'text-error' : ''} character-count`}>
                Character Count: {characterCount}/280
                {error && <span classNAme="">Something went wrong...</span>}
                </span>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    )
}

export default FishTopicForm