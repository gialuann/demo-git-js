import { useState } from "react";
import './index1.css'
function Sum() {
    const [num1,setNum1] = useState(0); 
    const [num2,setNum2] = useState(0); 
    const [Sum,setSum] = useState(0); 
    const [Nhan,setNhan] = useState(0);
    const calSum = ()=>{
        setSum(parseInt(num1)+parseInt(num2));
    }
    const calNhan = ()=>{
        setNhan(parseInt(num1)*parseInt(num2));
    }
    return (
        

        <div>
            <input type ="text" id ="input1" value={num1} onChange={e=>setNum1(e.target.value)}/> 
            <br></br>
            <input type ="text" id ="input2"value={num2} onChange={e=>setNum2(e.target.value)}/> 
            <br></br>
            <input type ="button" value="calculate" onClick={calSum}/>
            <p>Sum is : {Sum}</p>
            <br></br>
            <input type ="button" value="calculate" onClick={calNhan}/>
            <p>Nhan is : {Nhan}</p>
        </div>
    )
}
export default Sum;