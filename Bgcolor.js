import React ,{ useState } from 'react'
import "./Bgcolor.css"
import Select from 'react-select'
 function Bgcolor() {
    var colors=[
    {
       value:1,
       label:"lime"
    },
    {
        value:2,
        label:"lavender"
    },
    {
        value:3,
        label:"crimson"
    },
    {
        value:4,
        label:"darkblue"
    },
    {
        value:5,
        label:"teal"
    },
    {
        value:6,
        label:"rebeccapurple"
    },
    {
        value:7,
        label:"ghostwhite"
    },
    {
        value:8,
        label:"aquamarine"
    },
    {
        value:9,
        label:"aliceblue"
    },
    
    ];
    var [setbgcolor,ddlvalue]=useState(colors.label);
    var ddlhandle = e =>
    {
        ddlvalue(e.label);
    }
  return (
    
    <div>
       <center ><span className='heading'>COLOR CHANGER</span></center>
    <div className='wrapper'>
        <style>{'p {background-color:'+ setbgcolor +';}'}</style>
       <center>
        <hr></hr>
       
       <div className='optionsss'><Select options={colors} onChange={ddlhandle}>  </Select></div><br></br>
        <p><div className="head">The Background color is : {setbgcolor}</div><br></br></p>
       </center>
    </div>
    </div>
    
  )
}

export default Bgcolor;