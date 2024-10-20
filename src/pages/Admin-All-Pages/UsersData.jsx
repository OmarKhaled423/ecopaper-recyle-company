import React, { useContext } from "react";
import { UserContext } from "../Admin__pages/AdminPage";

const UsersData = () => {
  const { user } = useContext(UserContext);
  const [UserData, LoadingUserData] = user;

  return (
    <div>
      <h1 style={{ fontSize: "18px", paddingBlock: "10px", fontWeight: 600 }}>
        All users data {UserData.length}
      </h1>
      {LoadingUserData ? (
        UserData.length > 0 ? (
          <table style={{ width: "100%", borderCollapse: "separate" }}>
            <thead>
              <tr>
                <th
                  style={{
                    background: "#000",
                    color: "#fff",
                    textAlign: "left",
                    padding: "8px 1rem",
                    fontWeight: 400,
                  }}
                >
                  User Index
                </th>
                <th
                  style={{
                    background: "#000",
                    color: "#fff",
                    textAlign: "left",
                    padding: "8px 1rem",
                    fontWeight: 400,
                  }}
                >
                  User ID
                </th>
                <th
                  style={{
                    background: "#000",
                    color: "#fff",
                    textAlign: "left",
                    padding: "8px 1rem",
                    fontWeight: 400,
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    background: "#000",
                    color: "#fff",
                    textAlign: "left",
                    padding: "8px 1rem",
                    fontWeight: 400,
                  }}
                >
                  User Email
                </th>
              </tr>
            </thead>
            <tbody>
              {UserData.map((user, ind) => (
                <tr key={ind}>
                  <td
                    style={{
                      background: "#ddd",
                      color: "#000",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    {ind < 10 ? `0${ind + 1}` : ind + 1}
                  </td>
                  <td
                    style={{
                      background: "#ddd",
                      color: "#000",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    {user._id}
                  </td>
                  <td
                    style={{
                      background: "#ddd",
                      color: "#000",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    {user.name}
                  </td>
                  <td
                    style={{
                      background: "#ddd",
                      color: "#000",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    {user.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div
            style={{
              background: "#000",
              paddingBlock: "10px",
              color: "#fff",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            No data exist
          </div>
        )
      ) : (
        <div
          style={{
            background: "#000",
            paddingBlock: "10px",
            color: "#fff",
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          User data is loading...
        </div>
      )}
    </div>
  );
};

export default UsersData;
