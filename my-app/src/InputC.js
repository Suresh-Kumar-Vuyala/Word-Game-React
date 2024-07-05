import React,{useState} from 'react';





const InputC=(props)=>{


    const[value,setValue]=useState('')

    const change=(e)=>{
        setValue(e.target.value)
        return;
    }

    return (
        <>
         <section className='input-section'>
              <input maxLength='5' minLength='5' onChange={change}></input>
              <button onClick={()=>{props.changeString(value)}}>Submit</button>
          </section>
        
        </>
    )
}


export default InputC;