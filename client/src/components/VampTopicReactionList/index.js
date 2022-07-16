import React from 'react';
import { Link } from 'react-router-dom';

const VampTopicReactionList = ({ vampTopicReactions }) => {
    return (
        <div>
            <div>
                <span>Vamp Chat Reactions</span>
            </div>
            <div>
                {vampTopicReactions &&
                    vampTopicReactions.map(vampTopicReaction => (
                        <p key={vampTopicReaction._id}>
                            {vampTopicReaction.vampTopicReactionBody} {'// '}
                            <Link to={`/profile/${vampTopicReaction.username}`} style={{ fontWeight: 700 }}>
                                {vampTopicReaction.username} on {vampTopicReaction.createdAt}
                            </Link>
                        </p>
                    ))}
            </div>
        </div>


    )
}

export default VampTopicReactionList;