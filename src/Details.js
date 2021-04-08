import { useParams } from 'react-router';
import useFetchData from './useFetchData';

const Details = () => {
    const { id } = useParams();

    const { data, isPending} = useFetchData('http://localhost:5000/data/'+ id)
    return ( <div>
        <h1>Preview all the details here</h1>  
        {isPending && <div>Loading...</div>}
        <br></br>
        {data && (
            <article className="article-data">
                <h2>{data.name}</h2>
                <h3>{data.age}</h3>
                <p>{data.desc}</p>
                <h4>{data.day}</h4>
            </article>
        )}      
    </div> );
}
 
export default Details;