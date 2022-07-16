import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import FishTopicList from '../components/FishTopicList';
import VampTopicList from '../components/VampTopicList';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth'

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });
    console.log('data: ', data);

    const user = data?.me || data?.user || {};
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to={`/profile`} />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(user)
    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page!
            </h4>
        );
    }
    return (
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
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