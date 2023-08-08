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
  const getUniqueData = (arr) => {
    const countMap = new Map();
    arr.forEach((item) => {
      const id = item.id;
      countMap.set(id, (countMap.get(id) || 0) + 1);
    });
    const uniqueData = arr.filter((item, index) => {
      return index === arr.findIndex((obj) => obj.id === item.id);
    });
    return uniqueData.map((item) => ({
      ...item,
      occurrences: countMap.get(item.id),
    }));
  };
  const uniqueData = getUniqueData(data);
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
            <th>S/No </th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {console.log(uniqueData)}
            {uniqueData?.map((product, index) => (
              <tr key={index}>
                 <td>{index+1}</td>
                <td className="Name">{product?.name}</td>
                <td>{product?.price}</td>
                <td>{product?.occurrences}</td>
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
            <td colspan="2" className="Total">
              <b>Total</b>
            </td>

            <td colspan="3" style={{ textAlign: "center" }}>
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
