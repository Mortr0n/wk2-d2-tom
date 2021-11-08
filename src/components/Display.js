import React, {useState} from 'react';

const Display = (props) => {

    const {studentList} = props;

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
                    </div>
                ))
            }

                </div>
            </div>



        </div>

    )

}

export default Display;