import { Component } from "react";
import { Container, Stack, Button } from "react-bootstrap";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dp: "./img/dp.png",
      name: "Oliver Jumpertz",
      username: "oliverjumpertz",
      text: "💛 JavaScript explained 💛\n\nYou can't destructure from a nested, undefined object; it leads to a TypeError. You also can't use optional chaining at the end.\n\nIf you combine destructuring with the nullish coalescing operator, though, you can perform this operation safely. ↓",
      date: new Date(),
      likes: 0,
      comments: 0,
      retweets: 0,
    };
  }

  render() {
    // this.setState((dp, name, username, text) => ({
    //   dp: "images/dp.png",
    //   name: "Oliver Jumpertz",
    //   username: "oliverjumpertz",
    //   text: "💛 JavaScript explained 💛\n\nYou can't destructure from a nested, undefined object; it leads to a TypeError. You also can't use optional chaining at the end.\n\nIf you combine destructuring with the nullish coalescing operator, though, you can perform this operation safely. ↓",
    // }));
    return (
      <Container fluid>
        <Stack direction="horizontal" gap={3}>
          <div>
            <img
              src={require("./img/dp.png")}
              style={{ height: "48px", width: "48px" }}
              alt=""
            ></img>
          </div>
          <Stack gap={2}>
            <div>
              <strong>{this.state.name}</strong>
            </div>
            <div>@{this.state.username}</div>
          </Stack>
          <div className="ms-auto">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{
                color: "rgb(83, 100, 113)",
                width: "1.25em",
                height: "1.25em",
              }}
              // class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
            >
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
        </Stack>
        <div style={{ fontSize: "23px" }}>{this.state.text}</div>
      </Container>
    );
  }
}

export default Post;
