import React from 'react';
import { Link } from 'react-router-dom';

const FishTopicList = ({ fishTopics, title }) => {
    // if (!fishTopics.length) {
    //     return <h3>No Fish Tales Yet...</h3>
    // }
    console.log(fishTopics);
    return (
        <>
            <div className='row-flex'>
                <div className='col-12'>
                    <h3>{title}</h3>
                </div>
            </div>
            
            {fishTopics && fishTopics.map(fishTopic => (
                <div key={fishTopic._id} className='row-flex'>
                    <div className='col-12'>
                        <div className="card mb-3">
                            <div className="card-header">
                                <Link to={`/profile/${fishTopic.username}`}>
                                    {fishTopic.username}
                                </Link> {' '}
                                <p> posted on {fishTopic.createdAt} </p>
                            </div>
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