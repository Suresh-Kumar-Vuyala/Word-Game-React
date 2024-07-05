import React,{useState} from 'react';
import Cell from './Cell';





const List=(props)=>{

    // const [Str,setStr]=useState(props.Str);
    // console.log(Str)


    return (
        <>
        <section className='list-section'>
             <Cell char1={props.Str.charAt(0)} temp="Z" ></Cell>
             <Cell char1={props.Str.charAt(1)} temp="E" ></Cell>
             <Cell char1={props.Str.charAt(2)} temp="B"></Cell>
             <Cell char1={props.Str.charAt(3)} temp="R"></Cell>
             <Cell char1={props.Str.charAt(4)} temp="A"></Cell>
             </section>
        </>
    )
}


export default List;
