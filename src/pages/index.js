import * as React from "react";
import { createGlobalStyle } from "styled-components";

const logo = require("../images/ds_logo.svg");
const screenshot = require("../images/screenshot.png");

const colors = {
  primary: "#013158",
  background: "#1a1a22",
  white: "#fff",
  black: "#000",
  green: "#00F995",
};

const CssReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const pageStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "stretch",
  color: "#fff",
  fontSize: "18px",
  padding: "24px 48px",
  minHeight: "100vh",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  background: colors.background,
};

const infoContainerStyles = {
  display: "flex",
  flex: 2,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px",
};

const screenshotContainerStyles = {
  display: "flex",
  flex: 2,
};

const screenshotStyles = {
  width: "80%",
  margin: "auto",
  boxShadow: "rgba(0, 0, 0, 0.9) 13px 21px 27px 10px",
};

const headerContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "1em",
};

const brandStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "-25px",
};

const headingStyles = {
  fontSize: "6em",
};

const subHeadingStyles = {
  fontSize: "2em",
  fontWeight: 300,
  fontStyle: "italic",
};

const paragraphStyles = {
  padding: "24px",
  fontWeight: 200,
  width: "80%",
  letterSpacing: "1.25px",
  textAlign: "center",
  margin: "1em",
};

const formStyles = {
  display: "flex",
  width: "80%",
  justifyContent: "center",
};

const inputStyles = {
  flex: 2,
  height: "20px",
  width: "100%",
  border: `0px solid ${colors.black}`,
  borderRadius: "10px",
  padding: "1em",
  backgroundColor: colors.primary,
  color: colors.green,
};

const buttonStyles = {
  backgroundColor: colors.primary,
  width: "100px",
  padding: "1em",
  color: colors.green,
  fontWeight: 800,
  border: `0px solid ${colors.black}`,
  borderRadius: "10px",
  marginLeft: "1em",
};

const boldTextStyles = {
  fontWeight: 800,
};

const IndexPage = () => {
  return (
    <>
      <CssReset />
      <main style={pageStyles}>
        <title>DevStreams.io Beta</title>

        <div style={infoContainerStyles}>
          <div style={headerContainer}>
            <div style={brandStyles}>
              <img
                src={logo}
                height="250"
                width="250"
                alt="DevStreams.io 'D' Logo"
              ></img>
              <h1 style={headingStyles}>DevStreams.io</h1>
            </div>
            <h2 style={subHeadingStyles}>
              Granular tech streams across all platforms.
            </h2>
          </div>

          <p style={paragraphStyles}>
            Thanks to everyone for participating in the open alpha for{" "}
            <b style={boldTextStyles}>DevStreams.io</b>. I will be making
            strides to release a beta in the coming months. You can register
            your email below to{" "}
            <em>
              <b style={boldTextStyles}>sign up for an email alert</b>
            </em>{" "}
            when it is ready!
          </p>

          <form name="email-alert" hidden>
            <input type="hidden" name="form-name" value="email-alert" />
          </form>

          <form
            style={formStyles}
            name="email-alert"
            method="POST"
            data-netlify="true"
            netlify
          >
            <input
              style={inputStyles}
              name="email"
              type="email"
              placeholder="Enter your email to get an alert when its live!"
            ></input>

            <button style={buttonStyles} type="submit">
              Submit
            </button>
          </form>
        </div>

        <div style={screenshotContainerStyles}>
          <img
            src={screenshot}
            style={screenshotStyles}
            alt="DevStreams.io app screenshot"
          ></img>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
