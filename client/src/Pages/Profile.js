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
    console.log(user);
    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page!
            </h4>
        );
    }
    return (
        <>
        <div className='container-flex'>
            <div className="col-12">
                <h2 className="profile-view">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>
            </div>
        </div>
        
        <div className='container'>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <FishTopicList
                        fishTopics={user.fishTopics}
                        title={`${user.username}'s Fishing Posts`}
                    />
                </div>

                <div className="col-12 col-lg-6">
                    <VampTopicList
                        vampTopics={user.vampTopics}
                        title={`${user.username}'s VAMP2 Posts`}
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;