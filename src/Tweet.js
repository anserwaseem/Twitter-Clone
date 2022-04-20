import Post from "./Post";
import { Container, Stack, Button } from "react-bootstrap";

function Tweet(props) {
  return (
    <div
      className="tweet"
      style={{
        borderBottomWidth: "1px",
        // borderBottomColor: "rgb(239, 243, 244)",
      }}
    >
      <Container fluid className="mb-3">
        <Stack direction="horizontal" gap={3} className="">
          <Button
            variant="link"
            type="null"
            className="ps-0"
            style={{ minWidth: "56px" }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ width: "20px", height: "20px" }}
              className="ps-0"
            >
              <g>
                <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
              </g>
            </svg>
          </Button>
          <div className="mt-2">
            <h4>
              <strong>Tweet</strong>
            </h4>
          </div>
          <Button
            variant="outline-dark"
            className="rounded-pill ms-auto mt-2"
            style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <strong>Open app</strong>
          </Button>
        </Stack>
      </Container>
      <Post />
    </div>
  );
}

export default Tweet;
