import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_VAMPTOPIC } from '../utils/queries';
import { useParams } from 'react-router-dom';
import VampTopicReactionList from '../components/FishTopicReactionList';
import VampTopicReactionForm from '../components/FishTopicReactionForm';
import Auth from '../utils/auth'

const SingleVampTopic = props => {

    //use useQuery hook to make query request
    const { id: vampTopicId } = useParams();
    const { loading, data } = useQuery(QUERY_VAMPTOPIC, {
        variables: { id: vampTopicId }
    });
    const vampTopic = data?.vampTopic || {};
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>

            <div>
                <p>
                    <span style={{ fontWeight: 700 }}>
                        {vampTopic.username}
                    </span>{' '}
                    thought on {vampTopic.createdAt}
                </p>
                <div className="card-body">
                    <p>{vampTopic.vampTopicText}</p>
                </div>
            </div>
            {vampTopic.fishTopicReactionCount > 0 && <VampTopicReactionList vampTopicReactions={vampTopic.vampTopicReactions} />}
            {Auth.loggedIn() && <VampTopicReactionForm vampTopicId={vampTopic._id} />}
        </div>
    )
}

export default SingleVampTopic;