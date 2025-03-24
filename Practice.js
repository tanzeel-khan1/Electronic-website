// import React,{useEffect,useState} from "react";
// function Practice(){
//     const [User, setUser]=useState([])
//     useEffect(()=>{
//         fetch("").then((result)=>{
//             result.json().then((res)=>{
//                 setUser(res)
//             })
//         })
//     })
// }
// console.log(user)
import React,{useRef} from "react";
function Practice(){
    let inputRef=useRef(null)
    function handleInput()
    {
        inputRef.current.value="1000"
        inputRef.current.focus();
        inputRef.current.style.color="red"
    }
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleInput}>Click</button>
        </div>
    )
}
export default Practice;