import React from "react";
import { Heading } from "@chakra-ui/react";
import BlogContainer from "./BlogContainer";
function ManContainer() {
  return (
    <div style={{ height: "100wh" }}>
      <div className="backgroundStyle">
        <div className="heading">
          <Heading as="h1" size="2xl" style={{ width: "80%" }}>
            Blog
          </Heading>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BlogContainer />
      </div>
    </div>
  );
}

export default ManContainer;
