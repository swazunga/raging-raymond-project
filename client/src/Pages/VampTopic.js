import { useQuery } from '@apollo/client';
import { QUERY_VAMPTOPICS } from '../utils/queries';
import VampTopicList from '../components/VampTopicList';

const VampTopic = () => {
    //use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_VAMPTOPICS);
    const vampTopics = data?.vampTopics || [];
    console.log(vampTopics)

    return (
        <div className='container min-height'>
        <main>
            <div className='flex-row justify-space-between'>
                <div className='col-12 mb-3'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <VampTopicList vampTopics={vampTopics} title="Some Vamp Chats..." />
                    )}
                </div>
            </div>
        </main>
        </div>
    )
}

export default VampTopic;