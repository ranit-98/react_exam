import React, { useEffect, useState } from "react";
import { GetAllBlogs, getPhoto } from "../Services/API";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState();
  const [isLoading,setIsLoading]=useState(true)
  const getAllBlogs = async () => {
    const res = await GetAllBlogs();
    setAllBlogs(res?.data?.data);
    setIsLoading(false)
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  console.log(allBlogs);
  return (
    <>
      <div className="container">
        {isLoading && <h1 className="text-center">Loading...</h1>}
        <div className="row">
          {allBlogs?.map((blog) => {
            return (
              <>
                <div className="col-md-4">
                  <div class="card" style={{ width: "18rem",height:"28rem",marginTop:"2rem" }}>
                    <img
                      src={`https://restapinodejs.onrender.com/api/blog/image/${blog?._id}`}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{blog?.title}</h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: blog?.postText.slice(0, 100),
                        }}
                      />
                      <Link to={`/blog-details/${blog?._id}`}>...see more</Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
