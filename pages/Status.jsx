import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Update from './Update';

const Status = () => {
    const [issue, setStatus] = useState([])

    useEffect(()=>{
        const fetchAllStatus = async ()=>{
            try{
                const res = await axios.get("http://localhost:3300/issue")
                setStatus(res.data);
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllStatus()
    },[])

    return (
        <div>
            <h1>Test ERP</h1>
            <div className="Status">
                {Status.map(Status=>(
                    <div key={Status.IssueID} className="Status">
                        {Status.Employee_code}
                        <h2>{Status.Filled_by} </h2>
                        <h3>{Status.Date}</h3>
                        <h4>{Status.Designation}</h4>
                        <h5>{Status.Department}</h5>
                        <h6>{Status.Type}</h6>
                        <p>{Status.Issue_Description}</p>
                        <span>{Status.Current_status}</span>
                    </div>
                ))}
            </div>
        </div>
)};

export default Status