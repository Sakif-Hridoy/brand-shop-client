import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = (props) => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  console.log(loadedProducts);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b8a10-brandshop-server-side-sakif-hridoy-main.vercel.app/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, data.deletedId);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingProducts = products.filter(
                (product) => product._id !== id
              );
              setProducts(remainingProducts);
            }
          });
      }
    });
  };
  
  return (
    <div>
      <div className="overflow-x-hidden">
        <table className="table ml-20">
          {/* head */}
          <thead>
            <tr>
              <th className="text-3xl">Name</th>
              <th className="text-3xl">Brand</th>
              <th className="text-3xl">Price</th>
              <th className="text-3xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product) => (
              <tr  key={product.brand}>
                <td className="text-2xl">{product.name}</td>
                <td className="text-2xl">{product.brand}</td>
                <td className="text-2xl">{product.price}$</td>
                <td className="text-2xl">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn bg-red-500 hover:bg-red-700 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

MyCart.propTypes = {};

export default MyCart;
