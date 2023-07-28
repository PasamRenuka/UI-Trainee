import { useState } from "react";

const CartDisplay = ({ data, setCart }) => {
  const [deleteCount, setdeleteCount] = useState(0);

  const sum = (arr) => {
    let total = 0;
    arr?.forEach((num) => {
      total += num.price;
    });
    return total;
  };
  let TotalPrice = sum(data);
  const handleCartDelete = (index) => {
    const delitem = data?.filter((_, i) => i !== index);
    setCart(delitem);
    setdeleteCount(deleteCount + 1);
  };
  return (
    <div>
      {data.length > 0 ? (
        <table className="cartTable">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product, index) => (
              <tr key={index}>
                <td>{product?.name}</td>
                <td>{product?.price}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleCartDelete(index)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tr>
            <td className="Total">
              <b>Total</b>
            </td>

            <td colspan="2" style={{ textAlign: "center" }}>
              {" "}
              <b>{TotalPrice} </b>
            </td>
          </tr>
        </table>
      ) : (
        <p className="para">No items in Cart</p>
      )}
    </div>
  );
};
export default CartDisplay;
