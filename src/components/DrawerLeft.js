import React from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import "./DrawerLeft.css";

function DrawerLeft(props) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = props;
  return (
    <div>
      <>
        <div onClick={onOpen}>
          <svg
            fill="white"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            height="2em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent backgroundColor="black">
            <DrawerHeader>
              <img
                className="minor_logo"
                src="https://www.scylla.ai/static/7c2c2d6dccf829dae2225bdee0d513fa/61ca6/logo-light.webp"
                alt="scyllaLogo"
              />
            </DrawerHeader>
            <DrawerCloseButton color="white" />
            <DrawerBody>
              <Accordion style={{ color: "white" }}>
                <AccordionItem className="accordionStyle">
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {t("solutions")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    className="accordionStyle"
                  >Here must be nested links</AccordionPanel>
                </AccordionItem>

                <AccordionItem className="accordionStyle">
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {t("industries")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    className="accordionStyle"
                  > Here must be nested links</AccordionPanel>
                </AccordionItem>
                <AccordionItem className="accordionStyle">
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {t("case_studies")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>
                <AccordionItem className="accordionStyle">
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {t("company")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>
                <AccordionItem className="accordionStyle">
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {t("resources")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>
                <AccordionItem className="accordionStyle">
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {t("contact_us")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
}

export default DrawerLeft;
