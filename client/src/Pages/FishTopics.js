import React from 'react';
import FishTopicList from '../components/FishTopicList';

import { useQuery } from '@apollo/client';
import { QUERY_FISHTOPICS } from '../utils/queries';

const FishTopics = () => {
    const { loading, data } = useQuery(QUERY_FISHTOPICS);
    const fishTopics = data?.fishTopics || [];

    return (
        <main>
            <div className="flex-row justify-space-between">
                <div className="col-12 mb-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <FishTopicList
                            fishTopics={fishTopics}
                            title="Some Feed for Thought(s)..."
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default FishTopics;