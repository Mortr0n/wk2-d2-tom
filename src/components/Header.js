import React, {useState} from 'react';


const Header = (props) => {

    const { themeMode, setThemeMode } = props;


    const themeHandler = (e) => {
        setThemeMode({
            text: e.target.value + " Mode",
            style: e.target.value,
        })
    }

    // another option for styling css within react
    const styleThemeMode = {
        display: "inline-flex",
        // instead of the dash for the css it needs to be camelCase due to react
        marginRight: "90%",
        marginTop: "10px",
    }

    return(
        <div>
            <div style={styleThemeMode}>
                {/* make sure radio buttons all have the same name in order to only 
                have one checked at a time */}
                <input onClick={themeHandler} type="radio" name="theme" value="Day" />
                <label htmlFor="">Day Mode</label>

                <input onClick={themeHandler} type="radio" name="theme" value="Night" />
                <label htmlFor="">Night Mode</label>

                <input onClick={themeHandler} type="radio" name="theme" value="Sepia" />
                <label htmlFor="">Sepia Mode</label>
            </div>
            <ul style={{display:"flex", listStyle:"none", justifyContent:"space-around", margin:"30px", borderBottom:"3px double black", paddingBottom:"20px"}}>
                <li><a href="#" style={{textDecoration:"none", color:"black"}}>Home</a></li>
                <li><a href="#" style={{textDecoration:"none", color:"black"}}>About</a></li>
                <li><a href="#" style={{textDecoration:"none", color:"black"}}>Contact</a></li>
            </ul>

        </div>


    )
}

export default Header;