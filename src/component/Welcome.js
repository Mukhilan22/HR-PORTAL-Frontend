import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Transition } from "react-transition-group";
import welcomeLogo from './HR welcome logo.png';

const Welcome = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const duration = 500;

  const [isHovered, setIsHovered] = useState(false);
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
    opacity: 0,
    transform: "translateX(-100%)",
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: "translateX(0)" },
    entered: { opacity: 1, transform: "translateX(0)" },
  };

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        padding: "30px",
        minHeight: "93vh",
        backgroundImage: "url('https://directlinedev.com/media/cases/rooney/header/background_1_zM58lsj.wide.jpeg')",
        backgroundSize: "cover",
      }}
    >
      <Grid item>
        {/* Zoomed-in image */}
        <img
          src={welcomeLogo}
          alt="Welcome Image"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            objectFit: "contain",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: isHovered ? "0px 0px 40px 0px white" : "0px 0px 0px 0px white",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsClicked(true)}
        />
      </Grid>
      <Grid item>
        <Transition in={isClicked} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <Typography
                variant="h2"
                style={{
                  fontFamily: "Arial, sans-serif",
                  color: "#FFFFFF",
                  textShadow: "8px 10px 8px #000",
                  marginTop: "20px",
                }}
              >
                Welcome to <span className="spn" style={{ fontFamily: "Impact", color: "#3f8c59", fontWeight: 100 }}>HR</span> Portal
              </Typography>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "Arial, sans-serif",
                  color: "#FFFFFF",
                  textShadow: "8px 10px 8px #000",
                  marginTop: "10px",
                  fontSize: "24px", // Adjust the font size as needed
                  textAlign: "center", // Center the text
                }}
              >
                The only Human Resource that matters
              </Typography>
            </div>
          )}
        </Transition>
      </Grid>
    </Grid>
  );
};
export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        padding: "30px",
        minHeight: "93vh",
        backgroundImage: "url('https://directlinedev.com/media/cases/rooney/header/background_1_zM58lsj.wide.jpeg')",
        backgroundSize: "cover",
      }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
