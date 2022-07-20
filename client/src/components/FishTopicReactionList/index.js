import React from 'react';
import { Link } from 'react-router-dom';

const FishTopicReactionList = ({ fishTopicReactions }) => {
    return (
        <div className='reaction-container'>
            {fishTopicReactions && fishTopicReactions.map(fishTopicReaction => (
                <div key={fishTopicReaction._id} className='reaction'>
                    <h6 className='reaction-info'>                   
                        <Link to={`/profile/${fishTopicReaction.username}`}>
                        {fishTopicReaction.username}
                        </Link>
                        <span>   commented on {fishTopicReaction.createdAt}</span>
                    </h6>
                    <p className='reaction-content'>{fishTopicReaction.fishTopicReactionBody}</p>
                </div>
            ))}
        </div>


    )
}

export default FishTopicReactionList;