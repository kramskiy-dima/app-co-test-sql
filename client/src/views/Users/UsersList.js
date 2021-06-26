import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import axios from "axios";

import routes from "../../routes";
import CreateTable from "./CreateTable";
import Pagination from "./Pagination";
import Loader from "../../components/Loader";

export default function UserList() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const paginationArr = _.chunk(users.data, 50);
  const currentPortion = paginationArr[currentPage - 1];

  useEffect(() => {
    const apiRequest = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/users`);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    apiRequest();
  }, [currentPage]);

  return (
    <>
      <section>
        <div className="container section-users">
          <ul className="nav-links">
            <li className="item">
              <NavLink
                exact
                activeClassName="active-nav-link"
                className="nav-link"
                to={routes.main}
              >
                Main page
              </NavLink>
            </li>
            <li className="item">
              <NavLink
                exact
                activeClassName="active-nav-link"
                className="nav-link"
                to={routes.users}
              >
                User satistics
              </NavLink>
            </li>
          </ul>
          <h2>Users statistics</h2>
          {loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <CreateTable users={currentPortion} />
          )}
          <Pagination
            pageCount={paginationArr.length}
            onPageChange={(page) => setCurrentPage(page + 1)}
          />
        </div>
      </section>
    </>
  );
}
