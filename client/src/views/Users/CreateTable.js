import { useHistory } from "react-router-dom";
import { memo } from "react";

const createTable = memo(({ users }) => {
  let history = useHistory();

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP Address</th>
            <th>Total clicks</th>
            <th>Total page views</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} onClick={() => history.push(`/user/${user.id}`)}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.ip_address}</td>
              <td>{user.clicks}</td>
              <td>{user.page_views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default createTable;
