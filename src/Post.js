import { Component } from "react";
import {
  Container,
  Stack,
  Row,
  Dropdown,
  Modal,
  CloseButton,
} from "react-bootstrap";
import SVG from "./SVG";
import { Link } from "react-router-dom";
import Happening from "./Happening";
import PostHeader from "./PostHeader";

class Post extends Component {
  constructor(props) {
    super(props);
    // const [like, setLike] = useState(0);
    this.state = {
      id: 0,
      dp: "./img/dp.png",
      name: "Oliver Jumpertz",
      username: "oliverjumpertz",
      text: "💛 JavaScript explained 💛\n\nYou can't destructure from a nested, undefined object; it leads to a TypeError. You also can't use optional chaining at the end.\n\nIf you combine destructuring with the nullish coalescing operator, though, you can perform this operation safely. ↓",
      image: "./img/oliverTweetPicture.jpeg",
      date: new Date(),
      comments: 22,
      retweets: 11,
      quoteTweets: 58,
      likes: 65,
      show: false,
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
      <Container className="fitContent">
        <Row>
          <Stack direction="horizontal" gap={3}>
            <PostHeader
              dp={this.state.dp}
              name={this.state.name}
              username={this.state.username}
              home={this.props?.home}
            />
            <div className="ms-auto hoverBlue rounded-circle p-1">
              {/* <Link to="tweet"> */}
              <Dropdown
                className="d-inline"
                autoClose="outside"
                // style={{
                //   backgroundColor: "grey",
                //   borderColor: "inherit",
                // }}
              >
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "unset",
                    borderColor: "unset",
                  }}
                  id="dropdown-autoclose-outside"
                  className="border-0"
                >
                  <SVG
                    path={
                      <g>
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    }
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu align={"end"} style={{ marginRight: "40px" }}>
                  <Dropdown.Item href="#">
                    <Stack direction="horizontal" gap={3}>
                      <SVG
                        path={
                          <g>
                            <path d="M23.152 3.483h-2.675V.81c0-.415-.336-.75-.75-.75s-.75.335-.75.75v2.674H16.3c-.413 0-.75.336-.75.75s.337.75.75.75h2.677V7.66c0 .413.336.75.75.75s.75-.337.75-.75V4.982h2.675c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.646-4.513S4.15 3.342 3.77 6.168c-.27 2.025-.007 3.462.807 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z"></path>
                          </g>
                        }
                      />
                      <span>Follow @{this.state.username}</span>
                    </Stack>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* </Link> */}
              {/* <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  color: "rgb(83, 100, 113)",
                  width: "1.25em",
                  height: "1.25em",
                }}
              >
                <g>
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </g>
              </svg> */}
            </div>
          </Stack>
        </Row>
        <Row className={`me-4 ${this.props?.home && "ms-5"}`}>
          <div className={`pb-3 ${this.props?.home ? "fs-6" : "fs-4"}`}>
            {this.state.text}
          </div>
        </Row>
        <Row className={`me-4 ${this.props?.home && "ms-5"}`}>
          <div>
            <img
              src={require(`${this.state.image}`)}
              alt=""
              className="w-100"
              style={{ borderRadius: "20px" }}
            ></img>
          </div>
        </Row>
        {!this.props?.home && (
            <Row>
              <div
                className="text-decoration-underline border-bottom py-3"
                style={{ color: "rgb(83, 100, 113)" }}
              >
                {formatAMPM(this.state.date)}
              </div>
            </Row>
          ) && (
            <Row>
              <Stack
                direction="horizontal"
                gap={4}
                className="border-bottom py-3"
              >
                <div>
                  <strong>{this.state.retweets}</strong>
                  <span> Retweets</span>
                </div>
                <div>
                  <strong>{this.state.quoteTweets}</strong>
                  <span> Quote Tweets</span>
                </div>
                <div>
                  <strong>{this.state.likes}</strong>
                  <span> Likes</span>
                </div>
              </Stack>
            </Row>
          )}
        <Row className="border-bottom">
          <Stack
            direction="horizontal"
            gap={4}
            className="justify-content-evenly py-3"
            // style={{ color: "rgb(83, 100, 113)" }}
          >
            <Stack direction="horizontal">
              <div
                onClick={() => {
                  this.setState({ show: true });
                }}
              >
                <SVG
                  path={
                    <g>
                      <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                    </g>
                  }
                  // fill="rgb(83, 100, 113)"
                />
              </div>

              <Modal
                style={{ borderRadius: "15px" }}
                scrollable
                show={this.state.show}
                onHide={() => {
                  this.setState({ show: false });
                }}
              >
                <CloseButton className="m-3" />
                <Modal.Body>
                  <Stack direction="horizontal">
                    <PostHeader
                      dp={this.state.dp}
                      name={this.state.name}
                      username={this.state.username}
                      home
                    />
                  </Stack>
                  <div className="line ms-4 ps-4">
                    <div className={"pb-3 fs-6"}>{this.state.text}</div>

                    <div>
                      replying to{" "}
                      <a href="#" className="text-decoration-none">
                        @{this.state.username}
                      </a>
                    </div>
                  </div>
                  <Happening text="Tweet your reply" reply />
                </Modal.Body>
              </Modal>
              {this.props?.home && (
                <span className="ms-2">{this.state.comments}</span>
              )}
            </Stack>

            <Stack direction="horizontal">
              <SVG
                path={
                  <g>
                    <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                  </g>
                }
              />
              {this.props?.home && (
                <span className="ms-2">{this.state.retweets}</span>
              )}
            </Stack>
            <Stack direction="horizontal">
              <SVG
                path={
                  <g>
                    <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                  </g>
                }
              />
              {this.props?.home && (
                <span className="ms-2">{this.state.likes}</span>
              )}
            </Stack>
            <SVG
              path={
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                </g>
              }
            />
          </Stack>
        </Row>
        {!this.props?.home && (
          <Row>
            <Happening text={"Tweet your reply"} reply></Happening>
          </Row>
        )}
      </Container>
    );
  }
}

function formatAMPM(date) {
  console.log(date);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime =
    hours +
    ":" +
    minutes +
    " " +
    ampm +
    " . " +
    date.toLocaleString("default", { month: "short" }) +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();
  return strTime;
}

export default Post;
