import React, {useState} from 'react';

const Form = (props) => {
    // Our pieces of stte.  They are being altered below with our synthetic events!

    const {studentList, setStudentList} = props;
    const [name, setName] = useState("");
    const [favStack, setFavStack] = useState("");
    const [tallClub, setTallClub] = useState(false);
    
    const submitHandler=(e) => {
        // prevent the default refresh of the page on submit
        e.preventDefault();
        // copy the studentList Array and then add the new student object.  Using the short form of
        // name: name, favStack:favStack, tallClub:tallClub
        setStudentList([...studentList, {
            name,
            favStack,
            tallClub
        }
        ])
        // Set the form items back to the original settings (blank and unchecked)
    setName("");
    setFavStack("");
    setTallClub(false);
    };

    return(
        <div>
            <h1>Add a Student!</h1>
            <form onSubmit={submitHandler} style={{width:"50%", textAlign:"left", margin:"auto"}}>
                {/* for validations use ternary and you can return null if it meets the specs */}
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
                    {/* set tallClub to whatever it isn't when the checkbox is checked !tallClub */}
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