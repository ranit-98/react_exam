import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogdetails, setBlogDetails] = useState();
  const getBlogDetails = async () => {
    const res = await axios.get(
      `https://restapinodejs.onrender.com/api/blogdetails/${id}`
    );
    setBlogDetails(res?.data.data);
  };
  useEffect(() => {
    getBlogDetails();
  }, []);
  console.log(blogdetails);
  return (
    <>
      <img
        src={`https://restapinodejs.onrender.com/api/blog/image/${id}`}
        class="card-img-top"
        alt="..."
        style={{height:"30rem",width:"80rem",marginLeft:"5rem"}}
      />
      <h1>{blogdetails?.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: blogdetails?.postText,
        }}
      />
    </>
  );
};

export default BlogDetails;
