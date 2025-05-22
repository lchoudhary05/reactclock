import React, { useState } from 'react'

function Clock(){
    var date = new Date()
    var [curr, setCurr] = useState(date.toLocaleTimeString())

    const clicked = ()=>{
         date = new Date()
        setCurr(date.toLocaleTimeString())
    }

    setInterval(clicked,1000)
    
    return(<div style={{textAlign:'center',justifyContent:'center'}}>
        <h1>{curr}</h1>
    </div>



    )

}
export default Clock