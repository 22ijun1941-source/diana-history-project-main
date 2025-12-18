import { loadFull } from "tsparticles";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";

export function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    (async function () {
      await initParticlesEngine(async (engine) => {
        await loadFull(engine);
      });
      setInit(true);
    })();
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "#0d47a1",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          // onClick: {
          //     enable: true,
          //     mode: "push",
          // },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          // resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 250,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
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
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.2, max: 1 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }
}
