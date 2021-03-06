import React from "react";
import { Link, useParams } from "react-router-dom";

export default function WidgetImage(props) {
  const params = useParams();

  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link
            className="text-dark"
            to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
          >
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Edit Widget</span>
        </div>
        <button
          form="widgetForm"
          className="text-dark btn"
          to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
        >
          <i className="fas fa-check" />
        </button>
      </nav>
      <main className="container">
        <form id="widgetForm" onSubmit={props.update}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter widget name..."
              value={props.widget.name ? props.widget.name : ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              className="form-control"
              name="text"
              placeholder="Enter Widget text..."
              value={props.widget.text ? props.widget.text : ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              className="form-control"
              name="url"
              placeholder="Enter image address..."
              value={props.widget.url ? props.widget.url : ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="width">Width</label>
            <input
              type="range"
              className="form-control"
              min={1}
              max={100}
              name="width"
              value={props.widget.width ? props.widget.width : "100"}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="upload">Upload</label>
            <input type="file" className="form-control" id="upload" />
          </div>
          <button className="btn btn-primary btn-block">Upload Image</button>
          <button
            type="button"
            onClick={props.remove}
            className="btn btn-danger btn-block"
          >
            Delete
          </button>
        </form>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to="/user/:uid" className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
