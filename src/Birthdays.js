import { Link } from "react-router-dom";

const Birthdays = ({data,title}) => {
    return ( 
        <div className="maindata">
            <h2>{title}</h2>
            {data.map((info)=>(
                <div className="user-info" key={info.id}>
                    <Link to={`/data/${info.id}`}>
                        <h2>{info.name}</h2>
                        <h4>{info.age}</h4>
                        <p>{info.desc}</p>       
                    </Link>             
                </div>
            ))}
        </div> 
    );
}
 
export default Birthdays;