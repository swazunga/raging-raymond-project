import React from 'react';
import { useParams } from 'react-router-dom';

import FishTopicList from '../components/FishTopicList';
import VampTopicList from '../components/VampTopicList';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam },
    });

    const user = data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(user)
    return (
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {user.username}'s profile.
                </h2>
            </div>

            <div className="flex-row justify-space-between mb-3">
                <div className="col-12 mb-3 col-lg-8">
                    <FishTopicList
                        fishTopics={user.fishTopics}
                        title={`${user.username}'s fish tales...`}
                    />
                </div>

                <div className="col-12 col-lg-3 mb-3">
                    <VampTopicList
                        vampTopics={user.vampTopics}
                        title={`${user.username}'s vamp chats...`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;