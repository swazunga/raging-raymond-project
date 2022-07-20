import React from 'react';
import { Link } from 'react-router-dom';

const FishTopicList = ({ fishTopics, title }) => {
    // if (!fishTopics.length) {
    //     return <h3>No Fish Tales Yet...</h3>
    // }

    return (
        <>
            <div className='flex-row'>
                <div className='col-12'>
                    <h3 className='fish-topic-header'>{title}</h3>
                </div>
            </div>
            
            {fishTopics && fishTopics.map(fishTopic => (
                <div key={fishTopic._id} className='flex-row'>
                    <div className='col-12'>
                        <div className="card mb-3">
                            <h6 className="card-header">
                                <Link to={`/profile/${fishTopic.username}`}>
                                    {fishTopic.username}
                                </Link> {' '}
                                 posted on {fishTopic.createdAt}
                            </h6>
                            <div className="card-body">
                                <p>{fishTopic.fishTopicText}</p>
                                <Link to={`/fishTopic/${fishTopic._id}`}>
                                        Comments: {fishTopic.fishTopicReactionCount} || Click to{' '}
                                        {fishTopic.fishTopicReactionCount ? 'see' : 'start'} the discussion!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default FishTopicList;