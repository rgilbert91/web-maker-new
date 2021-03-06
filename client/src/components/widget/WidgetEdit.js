import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import WidgetHeading from "./WidgetHeading";
import WidgetYoutube from "./WidgetYoutube";
import WidgetImage from "./WidgetImage";
import axios from "axios";

export default function WidgetEdit(props) {
  const history = useHistory();
  const params = useParams();
  const [widget, setWidget] = useState({});

  useEffect(() => {
    // Initialize page form
    getWidget();
    // eslint-disable-next-line
  }, []);

  //  Function for widget form
  const getWidget = async () => {
    const res = await axios.get(`/api/widget/${params.wgid}`);
    setWidget(res.data);
  };

  const onChange = e => {
    setWidget({ ...widget, [e.target.name]: e.target.value });
  };

  const remove = async () => {
    await axios.delete(`/api/widget/${params.wgid}`);
    history.push(
      `/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`
    );
  };

  const update = async e => {
    e.preventDefault();
    const newWidget = widget;
    if (newWidget.widgetType === "HEADING" && !widget.size) {
      widget.size = "1";
    }

    if (
      newWidget.widgetType === "IMAGE" ||
      newWidget.widgetType === "YOUTUBE"
    ) {
      if (!newWidget.width) {
        newWidget.width = "100%";
      } else {
        newWidget.width += "%";
      }
    }

    if (newWidget.widgetType === "YOUTUBE") {
      // split url with "/"
      const urlArray = newWidget.url.split("/");
      //  parse url into embed version
      newWidget.url =
        "https://www.youtube.com/embed/" + urlArray[urlArray.length - 1];
    }
    console.log(newWidget);
    await axios.put("/api/widget", newWidget);
    history.push(
      `/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`
    );
  };

  if (widget.widgetType === "HEADING") {
    return (
      <WidgetHeading
        widget={widget}
        onChange={onChange}
        remove={remove}
        update={update}
      />
    );
  }
  if (widget.widgetType === "IMAGE") {
    return (
      <WidgetImage
        widget={widget}
        onChange={onChange}
        remove={remove}
        update={update}
      />
    );
  }
  if (widget.widgetType === "YOUTUBE") {
    return (
      <WidgetYoutube
        widget={widget}
        onChange={onChange}
        remove={remove}
        update={update}
      />
    );
  }

  return <div></div>;
}
