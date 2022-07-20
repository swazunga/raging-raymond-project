import React from 'react';
import { Link } from 'react-router-dom';

const VampTopicReactionList = ({ vampTopicReactions }) => {
    return (


        <div className='reaction-container'>
            {vampTopicReactions && vampTopicReactions.map(vampTopicReaction => (
                <div key={vampTopicReaction._id} className='reaction'>
                    <h6 className='reaction-info'>                   
                        <Link to={`/profile/${vampTopicReaction.username}`}>
                        {vampTopicReaction.username}
                        </Link>
                        <span>   commented on {vampTopicReaction.createdAt}</span>
                    </h6>
                    <p className='reaction-content'>{vampTopicReaction.vampTopicReactionBody}</p>
                </div>
            ))}
        </div>




        // <div>
        //     <div>
        //         <span>Vamp Chat Reactions</span>
        //     </div>
        //     <div>
        //         {vampTopicReactions &&
        //             vampTopicReactions.map(vampTopicReaction => (
        //                 <p key={vampTopicReaction._id}>
        //                     {vampTopicReaction.vampTopicReactionBody} {'// '}
        //                     <Link to={`/profile/${vampTopicReaction.username}`} style={{ fontWeight: 700 }}>
        //                         {vampTopicReaction.username} on {vampTopicReaction.createdAt}
        //                     </Link>
        //                 </p>
        //             ))}
        //     </div>
        // </div>


    )
}

export default VampTopicReactionList;