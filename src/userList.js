import React from 'react';
import {Link} from 'react-router-dom';

let userList=()=>{
    var users = JSON.parse(localStorage.getItem("myData") || "[]");
    let data=(localStorage.key("myData"))?users.map((data)=>{
        return(
            <div>
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
