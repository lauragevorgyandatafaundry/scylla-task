import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Blog from "./Blog";
import "./RelatedMaterials.css";

function RelatedMaterials() {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([
    "how_artifical_int",
    "interview_with_olivier",
    "edge_ai_solutions",
  ]);
  return (
    <div className="relatedList">
      {blogs &&
        blogs.map((item) => (
          <Blog
            key={item + "rm"}
            blog_name={item}
            title={t(item + "_title")}
            small_info={t(item + "_smallInfo")}
            pic_url={t(item + "_url")}
            mediaNeed={true}
          />
        ))}
    </div>
  );
}

export default RelatedMaterials;
