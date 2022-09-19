// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.jpg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import devpostIcon from "./images/contactIcon/devpost.png"


// Company icon
import TeslaIcon from "./images/Company/Tesla.png"
import NVIDIAIcon from "./images/Company/NVIDIA.jpg"
import EcobeeIcon from "./images/Company/ecobee.png"
import UwaterlooIcon from "./images/Company/Uwaterloo.png"
import KhazanahIcon from "./images/Company/Khazanah.png"
import FordIcon from "./images/Company/Ford.jpg"

// company image
import TeslaImg from "./images/workPhotos/TeslaWork.jpg"
import IssacSim from "./images/workPhotos/IssacSim.jpg"
import Khazanah from "./images/workPhotos/khazanahInnovation.jpg"
import uwaterloo from "./images/workPhotos/uwaterlootaImg.jpg"
import ford from "./images/workPhotos/Ford.jpg"
import ecobee from "./images/workPhotos/ecobeeProduct.png"

export default {

 
  name: "Steven Feng",
 
  headerParagraph:
    "I'm a driven Mechatronics Engineering Student with AI specialization from the University of Waterloo with passion in designing robotics systems and experience in C++ and Python programming for autonomous vehicle, control systems, and IoT.",

  contactEmail: "jy5feng@uwaterloo.ca",

  projects: [
    {
      title: "Tesla", 
      para:
        "I worked on the  body firmware controls team, and developed control applications that run on the new palladium Model S, X, and Tesla Semi", // Add Your Service Type Here
      
      imageSrc:
        TeslaIcon,
      
      url: "/work/tesla/",

      date: "05/2022 - 08/2022 ",

      description:
      ["Brought up lighting fault detection and lighting alerts for Tesla Semi headlamp, rear lights, and trailer lights using C","Designed Semi lighting inspection mode for controlling 19 unique light groups across 3 controllers in C and created SIL test with Python", "Created self tests for checking Semi’s mirror, latch, steering wheel, and horn and fixed various firmware bugs for Model S/X lighting in C"],

      workImg:
        TeslaImg,
    },
    {
      title: "NVIDIA AI", 
      para:
        "I joined NVIDIA AI ISSAC Robotics Sim team, which is a scalable robotics simulation and synthetic data generation tool that powers photorealistic, and physically accurate metaverse for training advance robots.", // Add Your Service Type Here
      
      imageSrc:
        NVIDIAIcon,
   
      url: "/work/nvidia/",
      
      date: "01/2022 - 04/2022 ",

      description:
      ["Developed Quadruped extension for unitree A1 robots on Isaac Sim using Python, connected quadruped gait controlers to the quadruped model, and created ROS, ROS2, and Visual Inertial Odometry examples for Isaac Sim.","Created Isaac Sensor extension for simulating physic based sensors such as the contact sensor and IMU sensors using C++ and Python, written USD schema for the sensors, enabling visualization and modification of sensor parameters during runtime from the GUI", "Drafted user manual and extension documentations using Sphinx, and created unit tests for the quadruped and Isaac sensor extension."],
      
      workImg:
        IssacSim,
    },

    {
      title: "Ecobee", 
      para:
        "Ecobee is a Canadian Smart Thermostat Company, I joined Ecobee as an embedded developer, worked on fixtures that supports thermostats productions and developed computer vision and machine learning algorithms for testing displays", // Add Your Service Type Here
      
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

      para:
        "I joined the Teaching Team for an introductory C++ programming course as a TA, hosted tutorials, graded assessments, created exam questions, and supported the automated testing server using Python.", // Add Your Service Type Here
      
      imageSrc:
        UwaterlooIcon,
      
      url: "/work/uwaterloota/",

      date: "09/2020 - 12/2020 ",

      description:
      ["Designed questions on quizzes, midterm, and final and created automated testing using C++ and python to grade 300+ submissions per assessment and provide instantaneous feedback using Python expect library and regular expression based on the SOLID design principle","Lead lab and help sessions for 300+ students assisted with teaching concepts in C++, such as dynamic memory allocation, Object-Oriented Programming, pointers, and linked lists, leads to a significant increase in student grades"],
      
      
      workImg:
        uwaterloo,
    },
    {
      title: "Khazanah National Americas", 
      para:
        "Khazanah is a National Wealth Fund that primarily invest in Silicon Valley startups, and as an innovation intern, I worked on different projects in the fields of drone, computer vision, AR/VR to better understand and explain the technologies to the investors", // Add Your Service Type Here
      
      imageSrc:
        KhazanahIcon,
      
      url: "/work/khazanah/",

      date: "01/2020 - 04/2020 ",

      description:
      ["Created a VR game based on Atari’s Asteroids for Oculus Go platform, designed game logic, collision physics, and cloud leaderboard using C#, Unity, and Oculus developer toolkit, created asteroid models with blender","Developed novel computer vision-based control for drones using Python OpenCV library, capable of tracking and following an Aruco marker in different lighting conditions up to 10 meters away, and autonomous take-off and land.","Design open-sourced smart germicidal device with UV-C bulbs to sterilize personal devices; won Editor’s Choice Award on Instructable"],
    
      workImg:
        Khazanah,
    
    },
    {
      title: "Ford", 
      para:
        "At Ford Motor Company, I worked on supporting the various chipsets used in the F150 as a member of the manufacturing software team, using tools such as jenkins, NI Teststand, C++, and Python.", // Add Your Service Type Here
      
      imageSrc:
        FordIcon,
     
      url: "/work/ford/",

      date: "05/2019 - 08/2019 ",

      description:
      ["Developed automation pipeline to flash and systematically test devices routinely on the Jenkins platform for over 100 daily tests","Prototyped utility to flash multiple chips simultaneously on TestStand using C#, increasing efficiency by over 2 times"],
      
      workImg:
      ford,
    
    },


  ],

  // About Secton --------------
  aboutParaOne:
    "I am an 4th year mechatronics engineering student from the University of Waterloo with 6 planned coops in various sectors such as robotics, automotive, IoT, and education, and gained valuable experiences with C++, Python, and tools such as .NET, Unity and more.",
  aboutParaTwo:
    "Outside of school, I am a part of WATonomous, the Waterloo's self driving car team where I gained insights in autonomous vehicles and experiences with ROS. In addition, I compete in hackathons and have built 10 unique projects which won numerous awards and learned tools such as Tensorflow and OpenCV.",
  aboutParaThree:
    "In my free time, I play the accordion and clarinet. I am also a fully licensed pilot, and I miss flying!",
  aboutImage:
    "images/SelfPhoto.jpg",


  skills: [
    {
      img: clangIcon,
      para:
        "C, C++, C#",
    },
    {
      img: codeIcon,
      para:
        "Python, MATLAB",
    },
    {
      img: RPIIcon,
      para:
        "Arduino, Raspberry Pi, ESP8266",
    },
    {
      img: openCVIcon,
      para:
        "OpenCV and learning Tensorflow for CNNs",
    },
    {
      img: SolidworksIcon,
      para:
        "Solidworks, AutoCAD, Blender",
    },
    {
      img: rosIcon,
      para:
        "learning ROS, RVIZ, and  ISSAC Sim",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's talk about robots!",
  social: [

    { img: githubIcon, 
      url: "https://github.com/stevenf7" },
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