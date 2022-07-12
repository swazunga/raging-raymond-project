import React from 'react';

const VampTopicList = ({ vampTopics, title }) => {
    if (!vampTopics.length) {
        return <h3>No Vamp Chats Yet...</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            {vampTopics &&
                vampTopics.map(vampTopic => (
                    <div key={vampTopic._id} className="card mb-3">
                        <p className="card-header">
                            {vampTopic.username}
                            thought on {vampTopic.createdAt}
                        </p>
                        <div className="card-body">
                            <p>{vampTopic.vampTopicText}</p>
                            <p className="mb-0">
                                Vamp Chat Reactions: {vampTopic.vampTopicReactionsCount} || Click to{' '}
                                {vampTopic.vampTopicReactionCount ? 'see' : 'start'} the discussion
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    )
};

export default VampTopicList;