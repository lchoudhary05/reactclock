import React, { useState } from 'react'

function Clock(){
    var date = new Date()
    var [curr, setCurr] = useState(date.toLocaleTimeString())

    const clicked = ()=>{
         date = new Date()
        setCurr(date.toLocaleTimeString())
    }
    
    return(<div style={{textAlign:'center',justifyContent:'center'}}>
        <h1>{curr}</h1>
        <br/>
        <button style={{color:'#ecf5bf', backgroundColor:'#394a37'}} onClick={clicked}> Get Time</button>
    </div>



    )

}
export default Clock