import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_VAMPTOPIC } from '../utils/queries';
import { useParams } from 'react-router-dom';
import VampTopicReactionList from '../components/VampTopicReactionList';
import VampTopicReactionForm from '../components/VampTopicReactionForm';
import Auth from '../utils/auth'
import Hero from '../components/Hero';

const SingleVampTopic = props => {

    //use useQuery hook to make query request
    const { id: vampTopicId } = useParams();
    const { loading, data } = useQuery(QUERY_VAMPTOPIC, {

        variables: { id: vampTopicId }
    });
    console.log('data: ', data);
    const vampTopic = data?.vampTopic || {};
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
        <Hero/>
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
            {vampTopic.vampTopicReactionCount > 0 && <VampTopicReactionList vampTopicReactions={vampTopic.vampTopicReactions} />}
            {Auth.loggedIn() && <VampTopicReactionForm vampTopicId={vampTopic._id} />}
        </div>
        </>
    )
}

export default SingleVampTopic;