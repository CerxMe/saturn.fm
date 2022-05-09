import { v4 as uuidv4 } from "uuid";
import { ActionTypes, RepeatValues, PlayerState, Track } from "./types";
import Track2 from "../songs/Cookies/02.mp3";
import Track3 from "../songs/Cookies/03.mp3";
import Track4 from "../songs/Cookies/04.mp3";
import CookiesCover from "../songs/Cookies/cover.png";

const htmlAudioElement = new Audio();

export const defaultState = {
  audioElement: htmlAudioElement,
  repeat: RepeatValues.Off,
  hasPendingSrcChange: false,
  currentTrackIndex: 0,
  tracks: defaultTracks,
  playerState: PlayerState.Idle,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionTypes.currentTrackIndex:
      return { ...state, currentTrackIndex: action.payload };
    case ActionTypes.playerState:
      return { ...state, playerState: action.payload };
    case ActionTypes.setStopped:
      return {
        ...state,
        currentTrackIndex: 0,
        playerState: PlayerState.Stopped,
      };
    case ActionTypes.repeat:
      return { ...state, repeat: action.payload };
    case ActionTypes.addTracks:
      return {
        ...state,
        tracks: [
          ...state.tracks,
          // sort new tracks before adding them
          ...action.payload.sort((a: Track, b: Track) => {
            if (a.album > b.album) return 1;
            if (a.album < b.album) return -1;
            if (a.track > b.track) return 1;
            if (a.track < b.track) return -1;
          }),
        ],
      };
    // case ActionTypes.setNewTrackOrder:

    default:
      return state;
  }
};



export const defaultTracks = [
  {
    file: Track2,
    track: 1,
    album: "Music for Touching",
    artist: "Cookies",
    title: "Go Back",
    href: "",
    albumArtUrl: CookiesCover,
    isDefault: true,
    srcPath: "",
    id: uuidv4(),
  },
  {
    file: Track3,
    track: 2,
    album: "Music for Touching",
    artist: "Cookies",
    title: "July Seventeen",
    href: "",
    albumArtUrl: CookiesCover,
    isDefault: true,
    srcPath: "",
    id: uuidv4(),
  },
  {
    file: Track4,
    track: 3,
    album: "Music for Touching",
    artist: "Cookies",
    title: "Crybaby (A)",
    href: "",
    albumArtUrl: CookiesCover,
    isDefault: true,
    srcPath: "",
    id: uuidv4(),
  },
];
