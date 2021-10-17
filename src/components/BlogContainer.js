import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Blog from "./Blog";

function BlogContainer() {
  const { t } = useTranslation();
  const [limit, setLimit] = useState(5);
  const [blogs, setBlogs] = useState([
    "how_artifical_int",
    "interview_with_olivier",
    "edge_ai_solutions",
    "scylla_ai_power",
    "best_practices_for_campus",
    "scylla_lauches",
    "key_steps_in_active",
    "leveraging_ai_video",
  ]);
  const [tempBlog, setTempBlogs] = useState([]);
  useEffect(() => {
    setTempBlogs(0, limit);
  }, []);
  useEffect(() => {
    limit < blogs.length
      ? setTempBlogs(blogs.slice(0, limit))
      : setTempBlogs(blogs.slice(0));
  }, [limit]);
  return (
    <div style={{ width: "80%" }}>
      {tempBlog &&
        tempBlog.map((item) => (
          <Blog
            key={item}
            blog_name={item}
            title={t(item + "_title")}
            small_info={t(item + "_smallInfo")}
            pic_url={t(item + "_url")}
          />
        ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {blogs && blogs.length > 0 && limit < blogs.length && (
          <Button
            colorScheme="blue"
            onClick={() => {
              setLimit(limit + 5);
            }}
            borderRadius="none"
            width="200px"
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
}

export default BlogContainer;
