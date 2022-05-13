import { cx } from "@linaria/core";
import { styled } from "@linaria/react";
import * as React from "react";
import { Suspense } from "react";
import { AudioStatus, useAudioManagerContext } from "../audioManager";
import Starfield from "../components/Starfield";
import Cubes from "../components/Cubes";
import Menu from "../components/Menu";
import About from "../components/About";
import Header from "../components/Header";
import DashboardBackground from "../components/DashboardBackground";

import introSrc from "../effects/intro.mp3";

const FileReader = React.lazy(() => import("../components/FileReader"));
// Hook
function usePrevious(value: any) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = React.useRef();
  // Store current value in ref
  React.useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
const FullApp = () => {
  const [hasLoaded, setHasLoaded] = React.useState(false);
  React.useEffect(() => {
    const audioElement = new Audio();
    audioElement.src = introSrc;
    audioElement.play();
    setHasLoaded(true);
  }, []);

  //   getClassNames() {
  //     const isPlaying =
  //       audioManagerSingleton.state.audioStatus === AudioStatus.Playing;
  //     const isPaused =
  //       audioManagerSingleton.state.audioStatus === AudioStatus.Paused;

  //     const hiddenClass = this.state.isUiHidden ? "hidden" : "";
  //     const introClass = audioManagerSingleton ? "intro" : " ";
  //     const pausedClass = isPaused ? "paused" : "";
  //     const playingClass = isPlaying ? "playing" : "";
  //     const languageClass = ["ja-JP", "ja"].includes(navigator.language)
  //       ? "japanese"
  //       : "";

  //     return `${hiddenClass} ${introClass} ${pausedClass} ${playingClass} ${languageClass}`;
  //   }

  const { repeat, audioStatus } = useAudioManagerContext();

  const isPaused = audioStatus === AudioStatus.Paused;
  const isPlaying = audioStatus === AudioStatus.Playing;

  const [showFileInput, setShowFileInput] = React.useState(false);
  const [showAboutModal, setShowAboutModal] = React.useState(false);
  const [hideDash, setHideDash] = React.useState(false);
  const wasHidden = usePrevious(hideDash);

  return (
    <AppWrapper className={cx(hasLoaded && "hasLoaded")}>
      <Header
        showExitAnimation={hideDash}
        showEntranceAnimation={!hideDash && wasHidden}
      />
      <Menu
        isUiHidden={hideDash}
        showEntranceAnimation={!hideDash && wasHidden}
        showIfHidden={() => hideDash && setHideDash(false)}
        toggleMenu={setShowFileInput}
        toggleAbout={() => setShowAboutModal(true)}
        hideDash={() => setHideDash(true)}
        repeat={repeat}
        audioStatus={audioStatus}
      />
      <Cubes
        audioStatus={audioStatus}
        isUiHidden={hideDash}
        isPaused={isPaused}
        isPlaying={isPlaying}
      />
      {showFileInput && (
        <Suspense fallback={null}>
          <FileReader
            addTracks={() => {}}
            removeTrack={() => {}}
            toggleMenu={() => setShowFileInput(false)}
          />
        </Suspense>
      )}
      {showAboutModal && <About toggleAbout={() => setShowAboutModal(false)} />}
      <DashboardBackground />
      <Starfield isUiHidden={false} />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  height: 100%;
  filter: brightness(0);

  &.hasLoaded {
    animation-name: menuBrightness;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards; // animation-delay: 10s;
    animation-timing-function: ease-out;
    animation-delay: 200ms;

    @keyframes menuBrightness {
      from {
        filter: brightness(0);
      }

      to {
        filter: brightness(1);
      }
    }
  }
`;

export default FullApp;
