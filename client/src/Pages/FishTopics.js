import React from 'react';
import FishTopicList from '../components/FishTopicList';

import { useQuery } from '@apollo/client';
import { QUERY_FISHTOPICS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
import FishTopicForm from '../components/FishTopicForm';
import Hero from "../components/Hero";

const FishTopics = () => {
    const { loading, data } = useQuery(QUERY_FISHTOPICS);
    const fishTopics = data?.fishTopics || [];

    const loggedIn = Auth.loggedIn();

    return (
    <>
        <Hero/>
        <div className='container'>
            <div className="row justify-content-evenly">
                {loggedIn && (
                
                    <div className="col-sm-12 col-lg-6 mb-3">
                        <FishTopicForm />
                    </div>

                )}
                <div className={`col-12 mb-3 ${loggedIn ? 'col-lg-6' : 'col-lg-8'}`}>

                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <FishTopicList
                            fishTopics={fishTopics}
                            title="Fishing Posts"
                        />
                    )}
                </div>
            </div>
        </div>
    </>
    );
};

export default FishTopics;