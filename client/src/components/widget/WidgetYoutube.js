import React from "react";
import { Link, useParams } from "react-router-dom";

export default function WidgetYouTube(props) {
  const params = useParams();
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link
            className="text-dark btn"
            to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
          >
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Edit Widget</span>
        </div>
        <button
          to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
          className="text-dark btn"
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
              value={props.widget.name}
              onChange={props.widget.name ? props.widget.name : ""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              className="form-control"
              name="text"
              placeholder="Enter Widget text..."
              value={props.widget.text}
              onChange={props.widget.text ? props.widget.text : ""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              className="form-control"
              name="url"
              placeholder="Enter image address..."
              value={props.widget.url}
              onChange={props.widget.url ? props.widget.url : ""}
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
              value={props.widget.width}
              onChange={props.widget.width ? props.widget.width : "100%"}
            />
          </div>
          <div className="form-group">
            <label htmlFor="upload">Upload</label>
            <input type="file" className="form-control" id="upload" />
          </div>
          <button className="btn btn-primary btn-block">Upload YouTube</button>
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
        <Link to={`/user/${params.uid}`} className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
