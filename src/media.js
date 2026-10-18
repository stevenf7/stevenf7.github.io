import { resolveAsset } from "./data";

// NVIDIA showcase
import gr1ImitationVideo from "./images/nvidia/gr1_imitation.mp4";
import h1FlipGif from "./images/nvidia/h1_Flip.mp4";
import leatherbackVideo from "./images/nvidia/Leatherback.mp4";
import h1TrainVideo from "./images/nvidia/h1_Train.mp4";
import frankaMoveitVideo from "./images/nvidia/Franka Moveit.mp4";
import frankaDrawerVideo from "./images/nvidia/Franka Drawer.mp4";
import carterOutdoorVideo from "./images/nvidia/Carter Outdoor.mp4";
import agilityWalkVideo from "./images/nvidia/Agility Walk.mp4";
import robotStackVideo from "./images/nvidia/Robot Stack2.mp4";
import gtc_lousd from "./images/nvidia/IMG_2228.webp";
import gtc_sil from "./images/nvidia/gtc_sil.webp";
import newton from "./images/nvidia/newton.webp";
import claw from "./images/nvidia/claw.mp4";
import siggraphTalk from "./images/nvidia/IMG_2877.webp";
import gtcDexterousHands from "./images/nvidia/IMG_8301.webp";

// Publications
import hriLabGif from "./images/publications/hri_lab.gif";
import destrahVideo from "./images/publications/destrah.mp4";
import urLousdVideo from "./images/publications/ur_lousd.mp4";
import h1SilVideo from "./images/publications/h1_sil.mp4";

// Projects
import airplaneImage from "./images/ProjectPhotos/airplane.webp";
import watoImage from "./images/ProjectPhotos/Wato.webp";
import hisecurityImage from "./images/ProjectPhotos/HiSecurity2.webp";
import pilotImg from "./images/ProjectPhotos/Pilot.webp";
import vexImg from "./images/ProjectPhotos/VEX.webp";
import wearableImg from "./images/ProjectPhotos/wearableHacks.webp";
import webappImg from "./images/ProjectPhotos/WebappProjects.webp";
import mte380Img from "./images/ProjectPhotos/mte380.webp";
import capstoneVideo from "./images/ProjectPhotos/capstone.mp4";

const resolveAll = (sources) =>
  Object.fromEntries(
    Object.entries(sources).map(([key, asset]) => [key, resolveAsset(asset)])
  );

// Keys are referenced by the `media` fields in src/data.js.
export const NVIDIA_MEDIA = resolveAll({
  gr1ImitationVideo,
  h1FlipGif,
  h1TrainVideo,
  urLousdVideo,
  destrahVideo,
  frankaMoveitVideo,
  frankaDrawerVideo,
  claw,
  leatherbackVideo,
  carterOutdoorVideo,
  agilityWalkVideo,
  robotStackVideo,
  gtc_lousd,
  gtc_sil,
  newton,
  siggraphTalk,
  gtcDexterousHands,
});

export const PUBLICATION_MEDIA = resolveAll({
  hriLabGif,
  destrahVideo,
  urLousdVideo,
  h1SilVideo,
  h1TrainVideo,
  carterOutdoorVideo,
  clawVideo: claw,
  dextrousHandImage: gtcDexterousHands,
  robotStackVideo,
});

export const PROJECT_MEDIA = resolveAll({
  airplaneImage,
  watoImage,
  capstoneVideo,
  webappImg,
  wearableImg,
  mte380Img,
  hisecurityImage,
  vexImg,
  pilotImg,
});
