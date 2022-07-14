import React from 'react';
import { Link } from 'react-router-dom';

const FishTopicReactionList = ({ fishTopicReactions }) => {
    return (
        <div>
            <div>
                <span>Fish Tale Reactions</span>
            </div>
            <div>
                {fishTopicReactions &&
                    fishTopicReactions.map(fishTopicReaction => (
                        <p key={fishTopicReaction._id}>
                            {fishTopicReaction.fishTopicReactionBody} {'// '}
                            <Link to={`/profile/${fishTopicReaction.username}`} style={{ fontWeight: 700 }}>
                                {fishTopicReaction.username} on {fishTopicReaction.createdAt}
                            </Link>
                        </p>
                    ))}
            </div>
        </div>


    )
}

export default FishTopicReactionList;