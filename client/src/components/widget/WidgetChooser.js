import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import uuid from "uuid";

export default function WidgetChooser(props) {
  const history = useHistory();
  const params = useParams();

  const create = type => {
    // creat newWidget variable
    const newWidget = {
      _id: uuid.v4(),
      widgetType: type,
      pageId: params.pid
    };
    // adding new widget to array
    props.addWidget(newWidget);
    // navigate to widget edit page.
    history.push(
      `/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget/${newWidget._id}`
    );
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link
            to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
            className="text-dark"
          >
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Choose Widget</span>
        </div>
      </nav>
      <main className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <button
              className="btn"
              onClick={create.bind(this, "HEADING")}
              to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget/${params.wgid}`}
            >
              Header
            </button>
          </li>
          <li className="list-group-item">
            <a href="!#">Label</a>
          </li>
          <li className="list-group-item">
            <a href="!#">HTML</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Text Input</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Link</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Button</a>
          </li>
          <li className="list-group-item">
            <button className="btn" onClick={create.bind(this, "IMAGE")}>
              Image
            </button>
          </li>
          <li className="list-group-item">
            <button className="btn" onClick={create.bind(this, "YOUTUBE")}>
              YouTube
            </button>
          </li>
          <li className="list-group-item">
            <a href="!#">Data Table</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Repeater</a>
          </li>
        </ul>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to={`/user/${params.uid}`}>
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}