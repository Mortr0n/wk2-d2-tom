import React, {useState} from 'react';

const Form = (props) => {
    // Our pieces of stte.  They are being altered below with our synthetic events!

    const {studentList, setStudentList} = props;
    const [name, setName] = useState("");
    const [favStack, setFavStack] = useState("");
    const [tallClub, setTallClub] = useState(false);
    
    const submitHandler=(e) => {
        e.preventDefault();
        setStudentList([...studentList, {
            name,
            favStack,
            tallClub
        }
        ])

    setName("");
    setFavStack("");
    setTallClub(false);
    };

    return(
        <div>
            <h1>Add a Student!</h1>
            <form onSubmit={submitHandler} style={{width:"50%", textAlign:"left", margin:"auto"}}>
                {
                    name.length > 0 && name.length < 3 ?
                    <span>Your name must be at least 3 characters long!</span>
                    : null
                }

                <p>
                    {/* Difference here: htmlFor (jsx) vs for (html) */}
                    <label htmlFor="name">Name: </label>
                    <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>

                
                <p>
                    <label htmlFor="tallclub">Tall? (6 feet +): </label>
                    <input name="tallClub" type="checkbox" checked={tallClub} onChange={(e) => setTallClub(!tallClub)}/>
                </p>

                <p>
                    <label htmlFor="favStack">Favorite MERN... I mean stack: </label>
                    <select name="favStack" value={favStack} onChange={(e) => setFavStack(e.target.value)} >
                        <option default>Select</option>
                        <option value="mern">MERN</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                    </select>
                </p>
                <input type="submit" value="Add Student" style={{margin:"auto"}}/>
            </form>

        </div>

    )
}

export default Form;