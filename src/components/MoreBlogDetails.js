import React, { useEffect, useState } from "react";
import { Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./MoreBlogDetails.css";
import RelatedMaterials from "./RelatedMaterials";

function MoreBlogDetails() {
  const { t } = useTranslation();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setTitle(t(location?.state?.id + "_title"));
    setImageUrl(t(location?.state?.id + "_url"));
  }, [location?.state?.id]);
  return (
    <div style={{ height: "100wh" }}>
      <div
        className="backgroundStyle"
        style={{
          marginTop: "-7rem",
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="headingMore">
          <Heading
            as="h1"
            size="2xl"
            color="whiteAlpha.900"
            style={{ width: "80%", textAlign: "center" }}
          >
            {t(title)}
          </Heading>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            marginTop: "4rem",
            whiteSpace: "break-spaces",
          }}
        >
          <Heading fontSize="lg" as="samp">
            Driven by the proliferation of IoT devices, advances in machine
            learning and the overall progress of technology, edge computing and
            edge AI are now undergoing rapid development. It is predicted that
            by 2024 the edge AI software market alone{" "}
            <Text as="u">
              will grow from $346.5 million to about $1.1 billion
            </Text>{" "}
            , while the total global edge computing market{" "}
            <Text as="u">will increase by 37.4 percent per year</Text> and will
            be worth $43.4 billion by 2027.
          </Heading>
          <br />
          <div className="marginStyle">
            <Heading fontSize="lg" as="samp">
              The potential for edge intelligent solutions is huge. Edge AI
              applications vary from surveillance cameras with video analytics
              and smartwatches to autonomous vehicles and smart cities. Numerous
              enterprises across industries are beginning to show a significant
              adoption of edge devices with intelligent analysis to drive new
              levels of performance and productivity.
            </Heading>
          </div>
          <div className="marginStyle">
            <Text as="samp">
              Traditionally, data gathered at the edge is transmitted to the
              main server or a cloud for further processing and analysis. This
              process takes time and can be costly. Deploying edge AI for
              physical security helps to curb these issues as well as meet the
              need for real-time predictions. In a critical situation, the
              ability to detect, analyze and immediately respond to an emerging
              threat is of vital importance as it helps mitigate risks and
              prevent escalation of potentially dangerous scenarios. Let’s
              explore how edge AI works and what makes it beneficial for
              organizations.
            </Text>
          </div>
        </div>
      </div>
      {/* images we must get from BE */}
      <div
        className="bannerStyle"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="marginStyle">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80%",
            }}
          >
            <Heading as="h1" size="lg">
              Related materials
            </Heading>
            <RelatedMaterials />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreBlogDetails;
