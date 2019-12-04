import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function PageEdit(props) {
  const params = useParams();
  const history = useHistory();
  const [name, setName] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    // Initialize Page form
    getPage();
    // eslint-disable-next-line
  }, []);

  // function for page form
  const getPage = async () => {
    const res = await axios.get(`/api/page/${params.pid}`);
    setName(res.data.name);
    setTitle(res.data.title);
  };

  const remove = async () => {
    await axios.delete(`/api/page/${params.pid}`);
    history.push(`/user/${params.uid}/website/${params.wid}/page`);
  };
  const update = async e => {
    e.preventDefault();
    const newPage = {
      _id: params.pid,
      name: name,
      title: title,
      websiteId: params.wid
    };
    await axios.put("/api/page", newPage);
    history.push(`/user/${params.uid}/website/${params.pid}/page`);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link
            className="text-dark"
            to={`/user/${params.uid}/website/${params.wid}/page`}
          >
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Edit Page</span>
        </div>
        <Link
          className="text-dark"
          to={`/user/${params.uid}/website/${params.wid}/page`}
        >
          <i className="fas fa-check" />
        </Link>
      </nav>
      <main className="container">
        <form id="pageEditForm" onSubmit={update}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter page name..."
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter page title..."
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-danger btn-block"
            onClick={remove}
          >
            Delete
          </button>
        </form>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to={`/user/${params.uid}`} className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
