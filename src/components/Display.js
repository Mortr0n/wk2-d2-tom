import React, {useState} from 'react';

const Display = (props) => {

    const {studentList, setStudentList} = props;

    const deleteStudentByName =(studentNameToDelete) => {
        console.log();
        // return a new array where we filter out the student to delete and 
        // set the studentList to that array using setStudentList
        setStudentList(studentList.filter((student)=>{
            return student.name !== studentNameToDelete;
        }))
    }

    return(
        <div>
            <div>
                <h1>Roster : </h1>
                <div style={{display: "flex", color: "green"}}>
                {
                    // using map to list the students out. index is to get rid of an error
                studentList.map((student, index) => (
                    <div key={index} style={{display:"flex", flexDirection:"column", padding:"10px", border:"3px solid black", margin:"5px"}}>
                        <p>{student.name}</p>
                        {
                            student.tallClub === true ?
                            <p>This is a tall one!</p> :
                            <p>Nope, Not tall!</p>
                        }
                        <p>{student.favStack}</p>
                        <button onClick={(e) => deleteStudentByName(student.name)}>Delete</button>
                    </div>
                ))
            }
                </div>
            </div>
        </div>
    )
}

export default Display;