import axios from "axios";

const LogIn_API=`https://restapinodejs.onrender.com/api/login `
const Register_API=`https://restapinodejs.onrender.com/api/register`
const ALlBlogs_API=`https://restapinodejs.onrender.com/api/allBlog`
const Photo_API=`https://restapinodejs.onrender.com/api/blog/image`
const AllCategory_API=`https://restapinodejs.onrender.com/api/showallcategory`
const Category_Details_API=`https://restapinodejs.onrender.com/api/category/post`
export const logInPost=async(data)=>{
    try{
        return await axios.post(LogIn_API,data)
    }catch(error){
       return error
    }
}
export const RegisterPost=async(data)=>{
    try{
        return await axios.post(Register_API,data)
    }catch(error){
        console.log(error);
        
    }
}
export const GetAllBlogs=async()=>{
    try{
        return await axios.get(ALlBlogs_API)
    }catch(error){
        return error
    }
}
export const getPhoto=async(id)=>{
    try{
        return await axios.get(`${Photo_API}/${id}`)
    }catch(error){
        return error
    }
}

export const getAllCategory=async()=>{
    try{
        return await axios.get(AllCategory_API)
    }catch(error){
        return error
    }
}
export const GetCategoryDetails=async(id)=>{
    try{
        return await axios.get(`${Category_Details_API}/${id}`)
    }catch(error){
        return error
    }
}