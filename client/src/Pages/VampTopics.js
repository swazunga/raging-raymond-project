import React from 'react';
import VampTopicList from '../components/VampTopicList';

import { useQuery } from '@apollo/client';
import { QUERY_VAMPTOPICS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth'
import VampTopicForm from '../components/VampTopicForm';
import Hero from '../components/Hero';

const VampTopics = () => {
    const { loading, data } = useQuery(QUERY_VAMPTOPICS);
    const vampTopics = data?.vampTopics || [];

    const loggedIn = Auth.loggedIn();

    return (
        <>
        <Hero/>
        <div className='container'>
            <div className="row justify-content-evenly">
                {loggedIn && (
                    <div className="col-sm-12 col-lg-6 mb-3">
                        <VampTopicForm />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn ? 'col-lg-6' : 'col-lg-8'}`}>

                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <VampTopicList
                            vampTopics={vampTopics}
                            title="Vamp Posts"
                        />
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default VampTopics;