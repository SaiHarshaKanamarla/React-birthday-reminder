import { useState } from "react"
import { useHistory } from "react-router";

const Addday = () => {

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [date,setDate] = useState('');
    const [desc,setDesc] = useState('');
    const [isPending,setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {   
        e.preventDefault();
        const data = {name,age,date,desc};
        setPending(true);

        fetch('http://localhost:5000/data',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(()=>{
            console.log("birthday added");
            setPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
            <br></br><br></br>
                <label>Enter Person Name   </label>
                <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
                <br></br>
                <br></br>
                <label>Enter Person age   </label>
                <input type="number" required value={age} onChange={(e)=>setAge(e.target.value)} />
                <br></br><br></br>
                <label>Enter BirthDay   </label>
                <input type="text" required value={date} onChange={(e)=>setDate(e.target.value)} />
                <br></br><br></br>
                <label>Description   </label>
                <input type="text" required value={desc} onChange={(e)=>setDesc(e.target.value)} />
                <br></br><br></br>
                {!isPending && <button>Add Birthday</button>}
                {isPending && <button disabled>Adding a new birthday</button>}
            </form>
            
        </div>
     );
}
 
export default Addday;