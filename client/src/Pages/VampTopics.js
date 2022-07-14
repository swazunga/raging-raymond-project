import React from 'react';
import VampTopicList from '../components/VampTopicList';

import { useQuery } from '@apollo/client';
import { QUERY_VAMPTOPICS } from '../utils/queries';

const VampTopics = () => {
    const { loading, data } = useQuery(QUERY_VAMPTOPICS);
    const vampTopics = data?.vampTopics || [];

    return (
        <main>
            <div className="flex-row justify-space-between">
                <div className="col-12 mb-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <VampTopicList
                            vampTopics={vampTopics}
                            title="Some Feed for Thought(s)..."
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default VampTopics;