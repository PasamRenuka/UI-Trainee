import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { requestApi } from "./actions";

const DataDisplay = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestApi());
  }, []);
  const userData = useSelector((state) => state?.datas.data);
  const Error1 = useSelector((state) => state?.error);
  console.log(Error1, "kkk");
  // console.log(userData);
  return (
    <div>
      {Error1 ? (
        <p>Error: {Error1}</p>
      ) : (
        <div>
          <h1>API Fetching Data</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default DataDisplay;
