import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import "./Blog.css";

function Blog(props) {
  const { title, small_info, pic_url, blog_name, mediaNeed } = props;
  const history = useHistory();
  const moreInfo = () => {
    console.log(blog_name);
    history.push({
      pathname: "/blog",
      state: { id: blog_name }, // depends which param we must use for fetch all information about that topic
    });
  };
  return (
    <div className={mediaNeed ? "" : "cardStyle"} onClick={moreInfo}>
      <div className="blogImage">
        <img src={pic_url} style={{width: "100%"}}/>
      </div>
      <div>
        <Heading as="h2" size="lg" style={{ width: "100%" }}>
          {title}
        </Heading>
        <div className="text_padding">
          <Text as="samp" fontSize="lg">
            {small_info}
          </Text>
        </div>
        <div className="read_more">
          <Text color="blue.500" as="samp" _hover={{ color: "#286496" }}>
            Read more <Icon as={BsArrowRight} />
          </Text>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Blog);
