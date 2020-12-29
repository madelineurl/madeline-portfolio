import React from "react"
import Particles from "react-tsparticles"

const Background = () => {
  return (
    <Particles
        style={{
          position: `absolute`,
          zIndex: 0
        }}
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 30,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 120,
                duration: 50,
                opacity: 0.7,
                size: 15,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: "#0241a1",
            },
            links: {
              color: "#E4E5E5",
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
  );
};

export default Background;
