import React from 'react';
import { Link } from 'react-router-dom';

const VampTopicList = ({ vampTopics, title }) => {
    // if (!vampTopics.length) {
    //     return <h3>No Vamp Chats Yet...</h3>
    // }

    return (
        <div>
            <h3>{title}</h3>
            {vampTopics &&
                vampTopics.map(vampTopic => (
                    <div key={vampTopic._id} className="card mb-3">
                        <p className="card-header">
                            <Link
                                to={`/profile/${vampTopic.username}`}
                                style={{ fontWeight: 700 }}

                            >
                                {vampTopic.username}
                            </Link>{' '}
                            thought on {vampTopic.createdAt}
                        </p>
                        <div className="card-body">
                            <Link to={`/vampTopic/${vampTopic._id}`}>
                                <p>{vampTopic.vampTopicText}</p>
                                <p className="mb-0">
                                    Vamp Chat Reactions: {vampTopic.vampTopicReactionsCount} || Click to{' '}
                                    {vampTopic.vampTopicReactionCount ? 'see' : 'start'} the discussion
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    )
};

export default VampTopicList;