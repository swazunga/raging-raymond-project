import React from 'react';
import { Link } from 'react-router-dom';

const FishTopicList = ({ fishTopics, title }) => {
    // if (!fishTopics.length) {
    //     return <h3>No Fish Tales Yet...</h3>
    // }

    return (
        <div>
            <h3>{title}</h3>
            {fishTopics &&
                fishTopics.map(fishTopic => (
                    <div key={fishTopic._id} className="card mb-3">
                        <p className="card-header">
                            <Link
                                to={`/profile/${fishTopic.username}`}
                                style={{ fontWeight: 700 }}
                            >
                                {fishTopic.username}
                            </Link> {' '}
                            thought on {fishTopic.createdAt}
                        </p>
                        <div className="card-body">
                            <Link to={`/fishTopic/${fishTopic._id}`}>
                                <p>{fishTopic.fishTopicText}</p>
                                <p>
                                    Fish Tale Reactions: {fishTopic.fishTopicReactionsCount} || Click to{' '}
                                    {fishTopic.fishTopicReactionCount ? 'see' : 'start'} the discussion!
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    )
};

export default FishTopicList;