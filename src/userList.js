import React from 'react';
import {Link} from 'react-router-dom';

let userList=()=>{
    var users = JSON.parse(localStorage.getItem("myData") || "[]");
    let data=(localStorage.key("myData"))?users.map((data)=>{
        return(
            <div className="container topText">
            <li>{data.firstName} {data.lastName} </li>
            {!data.imagePreviewUrl ? (
             <div className='ImageThumbnail'>No Picture Available</div>
                 ) : (
                <img className='ImageThumbnail' src={data.imagePreviewUrl} />
                )}     
            </div>
        );
    }):<div>user list is empty</div>;

    return (
        <div>
        <div className="topText text-center">
            <h2>User Details</h2>
        </div>
        {data}
        <Link to="/">Back</Link>
        </div>
    );
        
}
let userDetails=(props)=>{
     return (        
        <ul>
            {userList()}
        </ul>
    );
}

export default userDetails;
