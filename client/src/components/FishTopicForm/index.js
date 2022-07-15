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
        <div>
            <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span classNAme="ml-2">Something went wrong...</span>}
            </p>
            <form className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Here's a new Fish Tale..."
                    value={fishTopicText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FishTopicForm