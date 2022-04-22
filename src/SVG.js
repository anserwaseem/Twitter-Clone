import { Row } from "react-bootstrap";
function SVG(props) {
  return (
    // <a href="#">
    // <div style={{ width: "20px", height: "20px" }}>
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ width: "20px", height: "20px" }}
      // fill="rgb(29, 155, 240)"
    >
      {/* fill={this.props?.fill ? `${this.props.fill}` : "rgb(29, 155, 240)"} */}
      {props.path}
    </svg>
    // </div>
    // </a>
  );
}
export default SVG;
