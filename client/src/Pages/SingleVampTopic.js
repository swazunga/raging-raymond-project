import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_VAMPTOPIC } from '../utils/queries';
import { useParams } from 'react-router-dom';
import VampTopicReactionList from '../components/VampTopicReactionList';
import VampTopicReactionForm from '../components/VampTopicReactionForm';
import Auth from '../utils/auth'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const SingleVampTopic = props => {

    //use useQuery hook to make query request
    const { id: vampTopicId } = useParams();
    const { loading, data } = useQuery(QUERY_VAMPTOPIC, {

        variables: { id: vampTopicId }
    });
    console.log('data: ', data);
    const vampTopic = data?.vampTopic || {};
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
        <Hero/>

        <div className='container min-height'>
            <div className='row justify-content-evenly'>
                <div className='col-12 col-md-6'>
                    <div className="card mb-3">
                        <h6 className="card-header">
                            <Link to={`/profile/${vampTopic.username}`}>
                                {vampTopic.username}
                            </Link> {' '}
                            posted on {vampTopic.createdAt}
                        </h6>
                        <div className="card-body">
                            <p>{vampTopic.vampTopicText}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row'>
                <div className='col-12'>
                    <h3 className='reaction-header'>Vamp Post Comments</h3>
                </div>


                <div className='col-12 col-lg-6 order-lg-3 order-sm-1'>
                    {vampTopic.vampTopicReactionCount > 0 && <VampTopicReactionList vampTopicReactions={vampTopic.vampTopicReactions} />}
                </div>
                
                <div className='col-lg-1 order-lg-2 d-sm-none d-lg-block'></div>

                {Auth.loggedIn() && <VampTopicReactionForm vampTopicId={vampTopic._id} />}    
            </div>
        </div>

        {/* <div>

            <div>
                <p>
                    <span style={{ fontWeight: 700 }}>
                        {vampTopic.username}
                    </span>{' '}
                    thought on {vampTopic.createdAt}
                </p>
                <div className="card-body">
                    <p>{vampTopic.vampTopicText}</p>
                </div>
            </div>
            {vampTopic.vampTopicReactionCount > 0 && <VampTopicReactionList vampTopicReactions={vampTopic.vampTopicReactions} />}
            {Auth.loggedIn() && <VampTopicReactionForm vampTopicId={vampTopic._id} />}
        </div> */}
        </>
    )
}

export default SingleVampTopic;