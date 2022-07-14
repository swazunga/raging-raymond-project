
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FISHTOPIC } from '../utils/queries';
import { useParams } from 'react-router-dom';
import FishTopicReactionList from '../components/FishTopicReactionList';

const SingleFishTopic = (props) => {
    const { id: fishTopicId } = useParams();

    const { loading, data } = useQuery(QUERY_FISHTOPIC, {
        variables: { id: fishTopicId },
    });
    const fishTopic = data?.fishTopic || {};

    if (loading) {
        return <div>Loading...</div>
    }
    console.log(fishTopicId)
    console.log(fishTopic.username)
    return (
        <div>
            <div>
                <p>
                    <span>
                        {fishTopic.username}
                    </span>{' '}
                    thought on {fishTopic.createdAt}
                </p>
                <div>
                    <p>{fishTopic.fishTopicText}</p>
                </div>
            </div>
            {fishTopic.fishTopicReactionCount > 0 && <FishTopicReactionList fishTopicReactions={fishTopic.fishTopicReactions} />}
        </div>
    );
};

export default SingleFishTopic;