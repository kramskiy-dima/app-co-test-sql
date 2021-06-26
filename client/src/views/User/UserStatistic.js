import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import routes from "../../routes";
import Charts from "./Charts";
import Dropdown from "./Dropdown";
import Loader from "../../components/Loader";

export default function UserStatistic() {
  const [loading, setLoading] = useState(true);
  const [fromFilter, setFromFilter] = useState("");
  const [toFilter, setToFilter] = useState("");
  const [user, setUser] = useState();
  let params = useParams();

  useEffect(() => {
    const apiRequest = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(` /user/${params.id}`);
        setUser(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    apiRequest();
  }, [params.id]);

  const ChartsContainer = ({ user, fromFilter, toFilter }) => {
    let fromFormated,
      toFormated = "";

    if (fromFilter !== "")
      fromFormated = moment(fromFilter, "MMMM Do, YYYY").format("YYYY-MM-DD");

    if (toFilter !== "")
      toFormated = moment(toFilter, "MMMM Do, YYYY").format("YYYY-MM-DD");

    return (
      <div className="charts-container">
        <h3 className="section-subtitle">Clicks</h3>
        <div className="chart-wrapper">
          <Charts
            name="Clicks"
            labels={user.map((item) => item.date)}
            data={user.map((item) => item.clicks)}
            fromFilter={fromFormated}
            toFilter={toFormated}
          />
        </div>
        <br />
        <h3 className="section-subtitle">Views</h3>
        <div className="chart-wrapper">
          <Charts
            name="Views"
            labels={user.map((item) => item.date)}
            data={user.map((item) => item.page_views)}
            fromFilter={fromFormated}
            toFilter={toFormated}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <div className="container section-user-statistic">
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
              <li className="item">
                <NavLink
                  exact
                  activeClassName="active-nav-link"
                  className="nav-link"
                  to={`${user[0].id}`}
                >
                  {`${user[0].first_name} ${user[0].last_name}`}
                </NavLink>
              </li>
            </ul>

            <h2 className="user-title">{`${user[0].first_name} ${user[0].last_name}`}</h2>
            <div className="dropdown-container">
              <Dropdown
                title="From"
                list={user.map((item) =>
                  moment(item.date).format("MMMM Do, YYYY")
                )}
                onChange={(item) => setFromFilter(item)}
              />
              <Dropdown
                title="To"
                list={user.map((item) =>
                  moment(item.date).format("MMMM Do, YYYY")
                )}
                onChange={(item) => setToFilter(item)}
              />
            </div>
            {!loading && (
              <ChartsContainer
                user={user}
                fromFilter={fromFilter}
                toFilter={toFilter}
              />
            )}
          </div>
        </section>
      )}
    </>
  );
}
