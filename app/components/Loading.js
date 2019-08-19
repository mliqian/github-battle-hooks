import React from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center"
  }
};

export default function Loading({ speed, text }) {
  let [content, setContent] = React.useState(text);
  let timerId = React.useRef();
  React.useEffect(() => {
    timerId.current = window.setInterval(() => {
      setContent(content => (content === text + "..." ? text : content + "."));
    }, speed);
    return function clear() {
      window.clearInterval(timerId.current);
    };
  }, []);
  return <p style={styles.content}>{content}</p>;
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300
};
