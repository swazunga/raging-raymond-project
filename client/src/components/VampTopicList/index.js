import React from 'react';
import { Link } from 'react-router-dom';

const VampTopicList = ({ vampTopics, title }) => {
    // if (!vampTopics.length) {
    //     return <h3>No Vamp Chats Yet...</h3>
    // }

    return (
        <>
        <div className='flex-row'>
            <div className='col-12'>
                <h3 className='fish-topic-header'>{title}</h3>
            </div>
        </div>
        
            {vampTopics && vampTopics.map(vampTopic => (
                <div key={vampTopic._id} className="flex-row">
                    <div className='col-12'>
                        <div className='card mb-3'>
                            <h6 className="card-header">
                                <Link to={`/profile/${vampTopic.username}`}>
                                    {vampTopic.username}
                                </Link>{' '}
                                 posted on {vampTopic.createdAt}
                            </h6>
                            <div className="card-body">
                                <p>{vampTopic.vampTopicText}</p>
                                <Link to={`/vampTopic/${vampTopic._id}`}>                                    
                                    Comments: {vampTopic.vampTopicReactionCount} || Click to{' '}
                                    {vampTopic.vampTopicReactionCount ? 'see' : 'start'} the discussion                                    
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default VampTopicList;