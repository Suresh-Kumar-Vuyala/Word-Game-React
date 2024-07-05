import React,{useState} from 'react';








const Cell=(props)=>{
 
    const {char1,temp}=props;
    const[char,setChar]=useState(char1)
    var color='white';
    if(char1=='-'){
        color='white'
    }
    else if(char1==temp){
        color='#32CD32'
    }
    else{
        color='#FF5733'
    }

    var style={
        backgroundColor:color,
    }

    return (
        <>
        <section className="cell-section"  style={style}>
           { (char1!='-') && <p> {char1}</p>   }
           
        </section>

        
        </>
    )
}

export default Cell;

