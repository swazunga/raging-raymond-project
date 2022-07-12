import React from 'react';

const FishTopicList = ({ fishTopics, title }) => {
    if (!fishTopics.length) {
        return <h3>No Fish Tales Yet...</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            {fishTopics &&
                fishTopics.map(fishTopic => (
                    <div key={fishTopic._id} className="card mb-3">
                        <p className="card-header">
                            {fishTopic.username}
                            thought on {fishTopic.createdAt}
                        </p>
                        <div className="card-body">
                            <p>{fishTopic.fishTopicText}</p>
                            <p className="mb-0">
                                Fish Tale Reactions: {fishTopic.fishTopicReactionsCount} || Click to{' '}
                                {fishTopic.fishTopicReactionCount ? 'see' : 'start'} the discussion
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    )
};

export default FishTopicList;