import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, updateMobile, updateName, updateReset, withdraw } from "./Actions";


const Form=()=>{

    const dispatch=useDispatch()

        const[amount,setAmount]=useState("");
        const[name,setName]=useState("");
        const[mobile,setMobile]=useState(null);
        const[transactionid,setTransactionid]=useState(0)
    return(
        <>
        <div className="container">
            <h2>Form</h2>
            <div className="row">
                <div className="col-4">
                    <input 
                    type="number"
                    className="form-control"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e)=>{
                        const val=e.target.value;
                        setAmount(val)
                       
                    }}  
                     />

                </div>
                <button className="btn btn-primary col-1"
                onClick={()=>{dispatch(deposit(amount))
                   // {type:"deposit", payload:amount}
                   setTransactionid(transactionid+1)
                   dispatch({
                    type:"ADD_TRANSACTION",payload:{
                        id:transactionid,
                        amount:amount,
                        type:"Credited",
                        date:new Date()
                    }
                   })
                setAmount("");
                                  }}
             
                >Deposit</button>


                <button className="btn btn-danger col-1 mx-2"
                onClick={()=>{dispatch(withdraw(amount))
                  //  {type:"withdraw", payload:amount}
                  setTransactionid(transactionid+1)
                   dispatch({
                    type:"ADD_TRANSACTION",payload:{
                        id:transactionid,
                        amount:amount,
                        type:"Debited",
                        date:new Date().toString()
                    }
                   })
                setAmount("");
                                  }}
             
                >Withdraw</button>

            </div>




            <div className="row mt-2">
                <div className="col-4">
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e)=>{
                        const val=e.target.value;
                        setName(val)
                       
                    }}  
                     />

                </div>
                <button className="btn btn-primary col-1"
                onClick={()=>{dispatch(updateName(name))
                    // {type:"namechange", payload:name}
                setName("");
            }}
                >Update</button>
            </div>





            <div className="row mt-2">
                <div className="col-4">
                    <input 
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e)=>{
                        const val=e.target.value;
                        setMobile(val)
                       
                    }}  
                     />

                </div>
                <button className="btn btn-primary col-1"
                onClick={()=>{dispatch(updateMobile(mobile))
                   // {type:"mobilenum", payload:mobile}
                setMobile("");
            }}
                >Mobile</button>
            </div>




            <button className="btn btn-danger col-1"
                onClick={()=>{dispatch(updateReset())
                   // {type:"reset"}
                
            }}
                >Reset</button>
        </div>
        </>
    )
}
export default Form;