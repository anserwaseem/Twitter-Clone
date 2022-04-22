import { Component } from "react";
import { Container, Stack, Button } from "react-bootstrap";
import Happening from "./Happening";
import Post from "./Post";
// import "./App.css";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dp: "./img/mydp.png",
    };
  }

  render() {
    return (
      <div
        className="home fitContent"
        style={{
          borderBottomWidth: "1px",
          // borderBottomColor: "rgb(239, 243, 244)",
        }}
      >
        <Container
          className="mb-3"
          style={{
            position: "sticky",
            top: "-0.5px",
            zIndex: "3",
            backgroundColor: "white",
            opacity: "0.9",
          }}
        >
          <Stack direction="horizontal">
            <div className="me-auto mt-2">
              <h2>
                <strong>Home</strong>
              </h2>
            </div>
            <div className="" style={{ width: "20px", height: "20px" }}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              >
                <g>
                  <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                </g>
              </svg>
            </div>
          </Stack>
        </Container>
        <Happening text="What's happening?" />
        <Link
          to="/tweet"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Post
            home
            dp="./img/dp.png"
            name="Oliver Jumpertz"
            username="oliverjumpertz"
            text="💛 JavaScript explained 💛\n\nYou can't destructure from a nested, undefined object; it leads to a TypeError. You also can't use optional chaining at the end.\n\nIf you combine destructuring with the nullish coalescing operator, though, you can perform this operation safely. ↓"
            image="./img/oliverTweetPicture.jpeg"
          />
        </Link>

        <Link
          to="/tweet"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Post home />
        </Link>
      </div>
    );
  }
}

export default Home;
