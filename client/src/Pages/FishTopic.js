import { useQuery } from '@apollo/client';
import { QUERY_FISHTOPICS } from '../utils/queries';
import FishTopicList from '../components/FishTopicList';

const FishTopic = () => {
    //use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_FISHTOPICS);
    const fishTopics = data?.fishTopics || [];
    console.log(fishTopics)

    return (
        <div className='container min-height'>
            <main>
                <div className='flex-row justify-space-between'>
                    <div className='col-12 mb-3'>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <FishTopicList fishTopics={fishTopics} title="Some Fish Tales..." />
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FishTopic;