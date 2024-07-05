
import './App.css';
import {useState} from 'react';
import Cell from './Cell';
import List from './List';
import InputC from './InputC'

function App() {

const [Str,setStr]=useState('-------------------------')

const changeString=(S)=>{

     if(S.length!=5){
      alert("Enter 5 lettered word");
      return
     }
     S=S.toUpperCase();
     console.log(S)
      let tem=''
      let idx=0;
      while(idx<25 && Str.charAt(idx)!='-'){
        tem+=Str.charAt(idx);
        idx++;
      }
      tem+=S;
      while(tem.length<25){
        tem+='-';
      }
     console.log(tem.substring(0,5))
      setStr(tem);
      return;

}
    
  return (
   <>
   <section className='app-section'>
    <h1>Can U find the WORD ?</h1>
        <section className='container'>
              <List Str={Str.substring(0,5) }></List>
              <List Str={Str.substring(5,10) }></List>
              <List Str={Str.substring(10,15) }></List>
              <List Str={Str.substring(15,20) }></List>
              <List Str={Str.substring(20,25) }></List>
              </section>
              <InputC changeString={changeString}></InputC>
         
   </section>
   </>
  );
}

export default App;
