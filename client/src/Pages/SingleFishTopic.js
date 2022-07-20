
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FISHTOPIC } from '../utils/queries';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

import FishTopicReactionList from '../components/FishTopicReactionList';
import FishTopicReactionForm from '../components/FishTopicReactionForm';

import Auth from '../utils/auth'
import Hero from '../components/Hero';


const SingleFishTopic = (props) => {
    const { id: fishTopicId } = useParams();

    const { loading, data } = useQuery(QUERY_FISHTOPIC, {
        variables: { id: fishTopicId },
    });
    const fishTopic = data?.fishTopic || {};

    if (loading) {
        return <div>Loading...</div>
    }

    console.log(fishTopic);
    return (
        <>
        <Hero/>
        <div className='container min-height'>
            <div className='row justify-content-evenly'>
                <div className='col-12 col-md-6'>
                    <div className="card mb-3">
                        <h6 className="card-header">
                            <Link to={`/profile/${fishTopic.username}`}>
                                {fishTopic.username}
                            </Link> {' '}
                            posted on {fishTopic.createdAt}
                        </h6>
                        <div className="card-body">
                            <p>{fishTopic.fishTopicText}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row'>
                <div className='col-12'>
                    <h3 className='reaction-header'>Fish Post Comments</h3>
                </div>


                <div className='col-12 col-lg-6 order-lg-3 order-sm-1'>
                    {fishTopic.fishTopicReactionCount > 0 && <FishTopicReactionList fishTopicReactions={fishTopic.fishTopicReactions} />}
                </div>
                
                <div className='col-lg-1 order-lg-2 d-sm-none d-lg-block'></div>

                {Auth.loggedIn() && <FishTopicReactionForm fishTopicId={fishTopic._id} />}    
            </div>
        </div>
        </>
    );
};

export default SingleFishTopic;