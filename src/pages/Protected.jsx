import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Protected = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        const res = await publicRequest.patch(
          "users/updatePassword",
          {
            passwordCurrent: "tomek124",
            password: "tomek123",
            passwordConfirm: "tomek123",
          },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        setData(res);
      }
    };
    fetchData();
  });
  console.log(data);
  return <div>Protected</div>;
};

export default Protected;
