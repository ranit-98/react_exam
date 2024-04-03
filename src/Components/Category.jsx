import React, { useEffect, useState } from "react";
import { getAllCategory } from "../Services/API";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState();
  const [isLoading,setIsLoading]=useState(true)
  const getCategory = async () => {
    const res = await getAllCategory();
    setCategory(res?.data?.data);
    setIsLoading(false)
  };
  useEffect(() => {
    getCategory();
  }, []);
  console.log(category);
  return (
    <>
    {isLoading && <h1 className="text-center">Loading...</h1>}
    <div className="container">
      <table class="table">
        {
            !isLoading &&
            <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category</th>
              <th scope="col" className="text-center">Action</th>
            </tr>
          </thead>
        }
      
        <tbody>
          {category?.map((cat, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{cat?.category}</td>
                  <td >
                  <Link to={`/category-details/${cat?._id}`}><button className="btn btn-primary">Details</button></Link> 
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Category;
