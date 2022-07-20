import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_VAMPTOPIC } from '../../utils/mutations';
import { QUERY_VAMPTOPICS } from '../../utils/queries';

const VampTopicForm = () => {
    const [vampTopicText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addVampTopic, { error }] = useMutation(ADD_VAMPTOPIC, {
        update(cache, { data: { addVampTopic } }) {
            const { vampTopics } = cache.readQuery({ query: QUERY_VAMPTOPICS });

            cache.writeQuery({
                query: QUERY_VAMPTOPICS,
                data: { vampTopics: [addVampTopic, ...vampTopics] }
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
            await addVampTopic({
                variables: { vampTopicText }
            });
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }

    };
    return (
        <>
            <h3 className='vamp-topic-post-header'>Add a new post!</h3>
            <form className="vamp-topic-post" onSubmit={handleFormSubmit}>
                <label htmlFor='vamp-topic-post-content' className='form-label'>Post Content</label>
                <textarea placeholder="Here's a new VAMP Chat..." value={vampTopicText} className="form-control" onChange={handleChange} name="vamp-topic-post-content" rows="8"></textarea>
                
                <span className={` ${characterCount === 280 ? 'text-error' : ''} character-count`}>
                Character Count: {characterCount}/280
                {error && <span classNAme="">Something went wrong...</span>}
                </span>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    )
}

export default VampTopicForm