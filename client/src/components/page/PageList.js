import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function PageList(props) {
  const params = useParams();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    // Initialize page form
    getPages();
    // eslint-disable-next-line
  }, []);

  const getPages = async () => {
    const res = await axios.get(`/api/page/websites/${params.wid}`);
    setPages(res.data);
  };

  return (
    <div>
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link to={`/user/${params.uid}/website`} className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4">Pages</span>
        </div>
        <Link
          to={`/user/${params.uid}/website/${params.wid}/page/new`}
          className="text-dark"
        >
          <i className="fas fa-plus" />
        </Link>
      </nav>
      <main className="container">
        <ul className="list-group list-group-flush">
          {pages.map(page => (
            <li key={page._id} className="list-group-item">
              <Link
                to={`/user/${params.uid}/website/${params.wid}/page/${page._id}/widget`}
              >
                {page.name}
              </Link>
              <Link
                className="float-right"
                to={`/user/${params.uid}/website/${params.wid}/page/${page._id}`}
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to={`/user/${params.wid}`} className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
