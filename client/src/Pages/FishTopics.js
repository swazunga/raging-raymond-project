import React from 'react';
import FishTopicList from '../components/FishTopicList';

import { useQuery } from '@apollo/client';
import { QUERY_FISHTOPICS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
import FishTopicForm from '../components/FishTopicForm';

const FishTopics = () => {
    const { loading, data } = useQuery(QUERY_FISHTOPICS);
    const fishTopics = data?.fishTopics || [];

    const loggedIn = Auth.loggedIn();

    return (
        <main>
            <div className="flex-row justify-space-between">
                {loggedIn && (
                    <div className="col-12 mb-3">
                        <FishTopicForm />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>

                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <FishTopicList
                            fishTopics={fishTopics}
                            title="Some Feed for Fish Tales..."
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default FishTopics;