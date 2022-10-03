import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router'

const ProfileBio = ({currentProfile}) => {
    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentUser = useSelector((state) => state.currentUserReducer)
   
    
   const [btnText,setBtnText]=useState("Detect your location by clicking here")
    const handleFun= ()=>{
        
        if(navigator.geolocation){ 
            setBtnText("Detect your location by clicking here  ")
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }else{
            setBtnText("Your browser not support");
        }
    }
    function onSuccess(position){
        setBtnText("Detecting your location...");
        let {latitude, longitude} = position.coords; 
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=8e4e8ac9745744debd5b0dc1e257ea85`)
        
        .then(response => response.json()).then(response =>{
            let allDetails = response.results[0].components; 
            console.table(allDetails);
            let {county, postcode, country} = allDetails; 
            setBtnText(`${county} ${postcode}, ${country}`) 
        }).catch(()=>{ 
            setBtnText("Something went wrong");
        });
    }

    function onError(error){
        if(error.code === 1){
            setBtnText("You denied the request");
        }else if(error.code === 2){ 
            setBtnText("Location is unavailable");
        }else{ 
            setBtnText("Something went wrong");
        }
        // button.setAttribute("disabled", "true"); 
    }
    return (
        <div>
            <div>
                {
                    currentProfile?.tags.length !== 0 ? (
                        <>
                            <h4>Tags watched</h4>
                            {
                                currentProfile?.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                        </>
                    ) : (
                        <p>0 tags watched</p>
                    )
                }
            </div>
            <div>
                {
                    currentProfile?.about ? (
                        <>
                            <h4>About</h4>
                            <p>{currentProfile?.about}</p>
                        </>
                    ) : (
                        <p>No bio found</p>
                    )
                }
            </div>
            
            <div>
            {
                            currentUser?.result._id === id && ( <h4>Your location</h4>)}
                
                
                {
                            currentUser?.result._id === id && (
             <div className='location' onClick={()=>handleFun()}>{btnText}</div>)}
             
                
            </div><br /> 
            <div>
            {
                            currentUser?.result._id === id && ( <b>Or see yourself in google map </b> )}<br /><br />
        {
                            currentUser?.result._id === id && (<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d916.1192294824741!2d85.315535!3d23.298449!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1664603773639!5m2!1sen!2sin" width="400" height="300" ></iframe>    )}        </div>
        </div>
                           
    )
}

export default ProfileBio
