import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetCategoryDetails } from '../Services/API'

const CategoryDetails = () => {
    const {id}=useParams()
    const [categoryDetails,setCategoryDetails]=useState()
    const [isLoading,setIsLoading]=useState(true)
    const getCategoryDetails=async()=>{
        const res=await GetCategoryDetails(id)
        setCategoryDetails(res?.data?.data);
        setIsLoading(false)
    }
    useEffect(()=>{
        getCategoryDetails()
    },[])
    console.log(categoryDetails);
  return (
    <>
    <div className="container">
    {isLoading && <h1 className="text-center">Loading...</h1>}
        <div className="row">
        {
        categoryDetails?.map((catDetails)=>{
           return(
            <>
            <div className="col-md-6">
            <div class="card" style={{ width: "18rem" }}>
            <img
              src={`https://restapinodejs.onrender.com/api/blog/image/${catDetails?._id}`}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{catDetails?.title}</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: catDetails?.postText.slice(0, 100),
                }}
              />
        
                 </div>
          </div>
          </div>
            </>
           ) 
        })
    }

        </div>
    </div>
   
    </>
  )
}

export default CategoryDetails
