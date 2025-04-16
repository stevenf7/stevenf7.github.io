// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.jpg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"
import isaacsIcon from "./images/skillsIcon/isaacsim.png"
import airplaneIcon from "./images/skillsIcon/airplane.svg"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import devpostIcon from "./images/contactIcon/devpost.png"


// Company icon
import TeslaIcon from "./images/company/Tesla.png"
import NVIDIAIcon from "./images/company/NVIDIA.jpg"
import EcobeeIcon from "./images/company/ecobee.png"
import UwaterlooIcon from "./images/company/Uwaterloo.png"
import KhazanahIcon from "./images/company/Khazanah.png"
import FordIcon from "./images/company/Ford.jpg"

// company image
import TeslaImg from "./images/workPhotos/TeslaWork_v2.gif"
import IsaacSim from "./images/workPhotos/isaac_quadruped.gif"
import Khazanah from "./images/workPhotos/khazanah.gif"
import uwaterloo from "./images/workPhotos/uwaterlootaImg.jpg"
import ford from "./images/workPhotos/Ford.jpg"
import ecobee from "./images/workPhotos/ecobeeProduct.jpg"

// School images
import WaterlooLogo from "./images/school/University-of-Waterloo.png"
import AirLabLogo from "./images/school/airlab_logo_extended.jpg"
import StanfordLogo from "./images/school/stanford.png"
import WaterlooImg from "./images/school/waterloo_eng_img.jpg"
import AirLabImg from "./images/school/airlab_img.jpg"
import StanfordImg from "./images/school/stanford_img.jpg"


export default {

 
  name: "Ji Yuan Feng",
 
  headerParagraph:
    "I am a robotics systems engineer passionate about bringing autonomous and biomimetic robots to life.",

  contactEmail: "jy5feng@uwaterloo.ca",

  education: [
    {
      title: "University of Waterloo",
      para: "Bachelor of Applied Science in Mechatronics Engineering with AI Option, with Distinction",
      imageSrc: WaterlooLogo,
      workImg: WaterlooImg,
      url: "https://uwaterloo.ca/mechanical-mechatronics-engineering/",
      description: [
        "GPA: 3.7, specialized in robotics, control systems, and embedded systems",
        "Clubs: SAE AutoDrive Challenge (Level 4 Autonomous Vehicle), Waterloop (Hyperloop)",
        "Scholarships: President's Scholarship, Sanford Flaming Foundation Award, Term Dean's Honor List"
      ],
    },
    {
      title: "Active Robotics Interaction Lab",
      para: "Researched human perception of robot behaviors under Dr. Yue Hu, paper published in IEEE Robotics and Automation Letters",
      imageSrc: AirLabLogo,
      workImg: AirLabImg,
      url: "https://airlab.stanford.edu/",
      description: [
        "N. Abdulazeem, N. Sichert, J. Y. Feng and Y. Hu, 'Quantifying Human Mental State in Interactive pHRI: Maintaining Balancing,' in IEEE Robotics and Automation Letters, vol. 10, no. 3, pp. 2958-2965, March 2025",
        "Brainstormed and assisted with conducting experiments to analyze the effect of active vs passive robot behavior on user's cognition during balancing tasks",
        "Developed scripts to track participant's pose and worked with the Sawyer robot using ROS"
      ],
    },
    {
      title: "Stanford University",
      para: "Robotics and Autonomous Systems Graduate Certificate (In Progress)",
      imageSrc: StanfordLogo,
      workImg: StanfordImg,
      url: "https://www.stanford.edu/",
      description: [
        "Classes focus on classical control theories and reinforcement learning for mobile robots",
        "Classes: CS 237A Principles or Robot Autonomy I, CS 237B Principles or Robot Autonomy II"
      ],
    }
  ],

  projects: [
    {
      title: "Tesla", 
      position: "Body Controls Developer - Tesla",
      para:
        "Developed lighting apps for new Model S/X and Tesla Semi, including Tesla Light Test.",      
      imageSrc:
        TeslaIcon,
      
      url: "/work/tesla/",

      date: "05/2022 - 08/2022 ",

      description: [
        'Designed "Semi Lighting Test" feature for controlling 19 unique light groups across 4 controllers in C, displayed at the Tesla Semi Delivery Event by Elon Musk',
        'Set up simulations for the Semi Truck lighting controllers in Python and created Software In a Loop tests using Python, drafted "Semi Light Test" specs on Polarion',
        'Brought up lighting fault detection and lighting alerts for Tesla Semi headlamps, rear lights, and trailer lights using C via CAN network',
        'Created self-tests for checking Semi\'s mirror, latch, steering wheel, and horn and fixed various firmware bugs for Model S/X lighting in C'
      ],

      workImg:
        TeslaImg,
    },
    {
      title: "NVIDIA", 
      position: "Robotics Simulation Engineer - NVIDIA",
      para:
        "Built realistic sensors and simulated quadruped robots in NVIDIA Isaac Sim's robotics platform.",
      imageSrc:
        NVIDIAIcon,
   
      url: "/work/nvidia/",
      
      date: "01/2022 - 04/2022 ",

      description:
      ["Developed Quadruped extension for unitree A1 robots on Isaac Sim using Python, connected quadruped gait controlers to the quadruped model, and created ROS, ROS2, and Visual Inertial Odometry examples for Isaac Sim.",
      "Created Isaac Sensor extension for simulating physic based sensors such as the contact sensor and IMU sensors using C++ and Python, written USD schema for the sensors, enabling visualization and modification of sensor parameters during runtime from the GUI", 
      "Drafted user manual and extension documentations using Sphinx, and created unit tests for the quadruped and Isaac sensor extension."],
      
      workImg:
        IsaacSim,
    },

    {
      title: "ecobee", 
      position: "Embedded Systems Developer - ecobee",
      para:
        "Built production test fixtures and CV/ML algorithms for smart thermostat display testing.",
      
      imageSrc:
        EcobeeIcon  ,    
     
      url: "/work/ecobee/",

      date: "05/2021 - 08/2021 ",

      description:
      ["Built display testing pipeline using C++ OpenCV to detect discoloration, misalignment, dead pixels, and poor connections, capable of detecting alignment offsets of 0.5mm and dead pixels under 0.2mm", " Prototyped LCD tests using Convolutional Neural Network and TensorFlow with 98% accuracy, won Best Internal Impact Award" , "Gathered requirements, designed, and developed customer firmware flash and label printer software for the smart thermostats using C++/CLI and .NET framework, logging results using MongoDB, printing labels using ZPL","Drafted documentation and deployed customer firmware flash and label printer software at Wistron factory for Design Validation Test, projected to flash 80000+ units per month in full production"],
   
      workImg:
        ecobee,
    },
    {
      title: "University of Waterloo, Faculty of Electrical and Computer Engineering", 
      position: "Teaching Assistant - University of Waterloo",
      para:
        "TA for intro C++ course; led tutorials, graded, designed exams.",
      
      imageSrc:
        UwaterlooIcon,
      
      url: "/work/uwaterloo/",

      date: "09/2020 - 12/2020 ",

      description:
      ["Designed questions on quizzes, midterm, and final and created automated testing using C++ and python to grade 300+ submissions per assessment and provide instantaneous feedback using Python expect library and regular expression based on the SOLID design principle","Lead lab and help sessions for 300+ students assisted with teaching concepts in C++, such as dynamic memory allocation, Object-Oriented Programming, pointers, and linked lists, leads to a significant increase in student grades"],
      
      
      workImg:
        uwaterloo,
    },
    {
      title: "Khazanah National Americas", 
      position: "Innovation Developer - Khazanah",
      para:
        "Explored drone, CV, and AR/VR tech to support investor understanding and decision-making.",
      
      imageSrc:
        KhazanahIcon,
      
      url: "/work/khazanah/",

      date: "01/2020 - 04/2020 ",

      description:
      ["Created a VR game based on Atari's Asteroids for Oculus Go platform, designed game logic, collision physics, and cloud leaderboard using C#, Unity, and Oculus developer toolkit, created asteroid models with blender","Developed novel computer vision-based control for drones using Python OpenCV library, capable of tracking and following an Aruco marker in different lighting conditions up to 10 meters away, and autonomous take-off and land.","Design open-sourced smart germicidal device with UV-C bulbs to sterilize personal devices; won Editor's Choice Award on Instructable"],
    
      workImg:
        Khazanah,
    
    },
    {
      title: "Ford Motor Company", 
      position: "Manufacturing Software Developer - Ford",
      para:
        "Supported F150 Lightning development and testing using Jenkins, TestStand, C#, Python.",      
      imageSrc:
        FordIcon,
     
      url: "/work/ford/",

      date: "05/2019 - 08/2019 ",

      description:
      ["Developed automation pipeline to flash and systematically test devices routinely on the Jenkins platform for over 100 daily tests",
      "Prototyped utility in C# to flash multiple chips simultaneously on TestStand using C#, increasing efficiency by over 2 times",
      "Debugged audio issues for infotainment chips with TestStand and .Net Framework by recreating issues in controlled settings"],
      
      workImg:
      ford,
    
    },


  ],

// About Section --------------
aboutParaOne:
  "Ji Yuan is a robotics engineer specializing in simulation development, with a focus on building high-fidelity virtual environments to accelerate robotic testing and deployment. His work aims to bridge the sim-to-real gap by designing accurate and efficient simulation frameworks. He is particularly interested in reinforcement learning and imitation learning, exploring novel control policies that enhance robotic capabilities and promote safer, more human-like interactions.",

aboutParaTwo:
  "He earned his Bachelor's degree in Mechatronics Engineering, AI Option, with Distinction, from the University of Waterloo. At Waterloo, he conducted human-robot interaction research at the Active Robotics Interaction Lab under Dr. Yue Hu, resulting in a publication in IEEE Robotics and Automation Letters. He was also deeply involved in the university's robotics community, contributing to the self-driving car team WATonomous, the Formula Electric race car team, and the Hyperloop team.",

nvidiaTime: "2023 to Present",

nvidiaExperience: [
  "At NVIDIA, Ji Yuan developed a sim-to-sim transfer pipeline between Isaac Lab and Isaac Sim to enable reinforcement learning-based locomotion for robots such as H1, Spot, and Anymal. He created a digital twin library of over 30 robots and optimized physical sensors like contact sensors and IMUs using a tensor backend and CUDA for faster, unified data processing. He also improved URDF and MJCF importers to better represent robot dynamics and streamline asset property management.",
  "In addition, he helped establish stereo vision SLAM and ROS pipelines for simulated warehouse workflows and delivered multiple talks at NVIDIA GTC on digital twin composition and ROS integration."
],


  skills: [
    {
      img: clangIcon,
      para:
        "C, C++, C#, CUDA",
    },
    {
      img: codeIcon,
      para:
        "Python, MATLAB, R",
    },
    {
      img: RPIIcon,
      para:
        "Arduino, Raspberry Pi, ESP8266",
    },
    {
      img: openCVIcon,
      para:
        "OpenCV, Tensorflow, Pytorch",
    },
    {
      img: SolidworksIcon,
      para:
        "Solidworks, AutoCAD, Blender",
    },
    {
      img: rosIcon,
      para:
        "ROS, ROS2, Gazebo",
    },
    {
      img: isaacsIcon,
      para:
        "Isaac Sim, Isaac Lab",
    },
    {
      img: airplaneIcon,
      para:
        "Private Pilot, Glider Pilot License",
    },
    
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's chat about robots!",
  social: [

    { img: githubIcon, 
      url: "https://github.com/stevenf7"
    },
    {
      img: devpostIcon,
      url: "https://devpost.com/TheRealStevenFeng",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/stevenfeng7/",
    },

  ],

  // End Contact Section ---------------
}