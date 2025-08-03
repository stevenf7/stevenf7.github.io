// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.svg"
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


// Helper function for getting text in current language
export const getText = (textObj, language = 'en') => {
  // If it's already a string, return as-is (backward compatibility)
  if (typeof textObj === 'string') return textObj;
  
  // If it's an object with language keys, return the appropriate language
  if (textObj && typeof textObj === 'object') {
    return textObj[language] || textObj.en || textObj.zh || Object.values(textObj)[0] || '';
  }
  
  // Fallback
  return textObj || '';
};

export default {

 
  name: {
    en: "Ji Yuan 'Steven' Feng",
    zh: "冯纪元"
  },
 
  headerParagraph: {
    en: "I am a robotics systems engineer passionate about bringing autonomous and biomimetic robots to life.",
    zh: "我是一名机器人系统工程师，致力于将自主和仿生机器人带入现实。"
  },

  // Navigation labels
  nav: {
    home: { en: "Home", zh: "首页" },
    work: { en: "Work", zh: "工作" },
    projects: { en: "Projects", zh: "项目" },
    contact: { en: "Contact", zh: "联系" },
    resume: { en: "Resume", zh: "简历" }
  },

  // Section titles  
  sections: {
    about: { en: "About", zh: "关于我" },
    nvidia: { en: "NVIDIA", zh: "英伟达" },
    publications: { en: "Publications", zh: "发表论文" },
    education: { en: "Education", zh: "教育背景" },
    internships: { en: "Internships", zh: "实习经历" },
    projects: { en: "Projects", zh: "项目展示" },
    skills: { en: "Skills", zh: "技能" },
    contact: { en: "Contact", zh: "联系方式" }
  },

  contactEmail: "jy5feng@uwaterloo.ca",

  education: [
    {
      title: "University of Waterloo",
      para: {
        en: "Bachelor of Applied Science in Mechatronics Engineering with AI Option, with Distinction",
        zh: "机电工程应用科学学士学位，人工智能选项，优等生"
      },
      imageSrc: WaterlooLogo,
      workImg: WaterlooImg,
      url: "https://uwaterloo.ca/mechanical-mechatronics-engineering/",
      description: [
        {
          en: "GPA: 3.7, specialized in robotics, control systems, and embedded systems",
          zh: "GPA: 3.7，专攻机器人技术、控制系统和嵌入式系统"
        },
        {
          en: "Clubs: SAE AutoDrive Challenge (Level 4 Autonomous Vehicle), Waterloop (Hyperloop)",
          zh: "社团：SAE自动驾驶挑战赛（四级自动驾驶车辆）、Waterloop（超级高铁）"
        },
        {
          en: "Scholarships: President's Scholarship, Sanford Flaming Foundation Award, Term Dean's Honor List",
          zh: "奖学金：校长奖学金、桑福德弗莱明基金会奖、学期院长荣誉榜"
        }
      ],
    },
    {
      title: "Active Robotics Interaction Lab",
      para: {
        en: "Researched human perception of robot behaviors under Dr. Yue Hu, paper published in IEEE Robotics and Automation Letters",
        zh: "在胡越博士指导下研究人类对机器人行为的感知，论文发表于IEEE机器人与自动化快报"
      },
      imageSrc: AirLabLogo,
      workImg: AirLabImg,
      url: "https://airlab.stanford.edu/",
      description: [
        {
          en: "N. Abdulazeem, N. Sichert, J. Y. Feng and Y. Hu, 'Quantifying Human Mental State in Interactive pHRI: Maintaining Balancing,' in IEEE Robotics and Automation Letters, vol. 10, no. 3, pp. 2958-2965, March 2025",
          zh: "N. Abdulazeem, N. Sichert, J. Y. Feng 和 Y. Hu, '量化交互式pHRI中的人类心理状态：保持平衡,' IEEE机器人与自动化快报, 第10卷, 第3期, 第2958-2965页, 2025年3月"
        },
        {
          en: "Brainstormed and assisted with conducting experiments to analyze the effect of active vs passive robot behavior on user's cognition during balancing tasks",
          zh: "头脑风暴并协助进行实验，分析主动与被动机器人行为对用户在平衡任务中认知的影响"
        },
        {
          en: "Developed scripts to track participant's pose and worked with the Sawyer robot using ROS",
          zh: "开发脚本跟踪参与者姿态，并使用ROS与Sawyer机器人协作"
        }
      ],
    },
    {
      title: "Stanford University",
      para: {
        en: "Robotics and Autonomous Systems Graduate Certificate (In Progress)",
        zh: "机器人与自主系统研究生证书（进行中）"
      },
      imageSrc: StanfordLogo,
      workImg: StanfordImg,
      url: "https://www.stanford.edu/",
      description: [
        {
          en: "Classes focus on classical control theories and reinforcement learning for mobile robots",
          zh: "课程专注于移动机器人的经典控制理论和强化学习"
        },
        {
          en: "Classes: CS 237A Principles or Robot Autonomy I, CS 237B Principles or Robot Autonomy II",
          zh: "课程：CS 237A 机器人自主原理I，CS 237B 机器人自主原理II"
        }
      ],
    }
  ],

  projects: [
    {
      title: "Tesla", 
      position: "Body Controls Developer - Tesla",
      para: {
        en: "Developed lighting apps for new Model S/X and Tesla Semi, including Tesla Light Test.",
        zh: "为新Model S/X和Tesla Semi开发照明应用，包括Tesla Light Test。"
      },      
      imageSrc:
        TeslaIcon,
      
      url: "/work/tesla/",

      date: "05/2022 - 08/2022 ",

      description: [
        {
          en: 'Designed "Semi Lighting Test" feature for controlling 19 unique light groups across 4 controllers in C, displayed at the Tesla Semi Delivery Event by Elon Musk',
          zh: '使用C语言设计"Semi照明测试"功能，控制4个控制器中的19个独特灯组，在埃隆·马斯克的Tesla Semi交付活动中展示'
        },
        {
          en: 'Set up simulations for the Semi Truck lighting controllers in Python and created Software In a Loop tests using Python, drafted "Semi Light Test" specs on Polarion',
          zh: '使用Python为Semi卡车照明控制器设置仿真，创建软件在环测试，在Polarion上起草"Semi照明测试"规范'
        },
        {
          en: 'Brought up lighting fault detection and lighting alerts for Tesla Semi headlamps, rear lights, and trailer lights using C via CAN network',
          zh: '通过CAN网络使用C语言为Tesla Semi前照灯、尾灯和拖车灯启动照明故障检测和照明警报'
        },
        {
          en: 'Created self-tests for checking Semi\'s mirror, latch, steering wheel, and horn and fixed various firmware bugs for Model S/X lighting in C',
          zh: '创建自检功能检查Semi的镜子、门锁、方向盘和喇叭，并修复Model S/X照明的各种固件错误'
        }
      ],

      workImg:
        TeslaImg,
    },
    {
      title: "NVIDIA", 
      position: "Robotics Simulation Engineer - NVIDIA",
      para: {
        en: "Built realistic sensors and simulated quadruped robots in NVIDIA Isaac Sim's robotics platform.",
        zh: "在NVIDIA Isaac Sim机器人平台上构建逼真传感器和模拟四足机器人。"
      },
      imageSrc:
        NVIDIAIcon,
   
      url: "/work/nvidia/",
      
      date: "01/2022 - 04/2022 ",

      description: [
        {
          en: "Developed Quadruped extension for unitree A1 robots on Isaac Sim using Python, connected quadruped gait controlers to the quadruped model, and created ROS, ROS2, and Visual Inertial Odometry examples for Isaac Sim.",
          zh: "使用Python为Isaac Sim上的宇树A1机器人开发四足动物扩展，将四足步态控制器连接到四足模型，并为Isaac Sim创建ROS、ROS2和视觉惯性里程计示例。"
        },
        {
          en: "Created Isaac Sensor extension for simulating physic based sensors such as the contact sensor and IMU sensors using C++ and Python, written USD schema for the sensors, enabling visualization and modification of sensor parameters during runtime from the GUI",
          zh: "使用C++和Python创建Isaac传感器扩展，用于模拟基于物理的传感器，如接触传感器和IMU传感器，为传感器编写USD模式，允许在运行时从GUI可视化和修改传感器参数"
        },
        {
          en: "Drafted user manual and extension documentations using Sphinx, and created unit tests for the quadruped and Isaac sensor extension.",
          zh: "使用Sphinx编写用户手册和扩展文档，并为四足动物和Isaac传感器扩展创建单元测试。"
        }
      ],
      
      workImg:
        IsaacSim,
    },

    {
      title: "ecobee", 
      position: "Embedded Systems Developer - ecobee",
      para: {
        en: "Built production test fixtures and CV/ML algorithms for smart thermostat display testing.",
        zh: "为智能恒温器显示测试构建生产测试夹具和CV/ML算法。"
      },
      
      imageSrc:
        EcobeeIcon  ,    
     
      url: "/work/ecobee/",

      date: "05/2021 - 08/2021 ",

      description: [
        {
          en: "Built display testing pipeline using C++ OpenCV to detect discoloration, misalignment, dead pixels, and poor connections, capable of detecting alignment offsets of 0.5mm and dead pixels under 0.2mm",
          zh: "使用C++ OpenCV构建显示测试管道，检测变色、错位、坏点和连接不良，能够检测0.5mm的对齐偏移和0.2mm以下的坏点"
        },
        {
          en: "Prototyped LCD tests using Convolutional Neural Network and TensorFlow with 98% accuracy, won Best Internal Impact Award",
          zh: "使用卷积神经网络和TensorFlow原型化LCD测试，准确率达98%，获得最佳内部影响奖"
        },
        {
          en: "Gathered requirements, designed, and developed customer firmware flash and label printer software for the smart thermostats using C++/CLI and .NET framework, logging results using MongoDB, printing labels using ZPL",
          zh: "收集需求，设计和开发智能恒温器的客户固件刷写和标签打印软件，使用C++/CLI和.NET框架，通过MongoDB记录结果，使用ZPL打印标签"
        },
        {
          en: "Drafted documentation and deployed customer firmware flash and label printer software at Wistron factory for Design Validation Test, projected to flash 80000+ units per month in full production",
          zh: "起草文档并在纬创工厂部署客户固件刷写和标签打印软件进行设计验证测试，预计在全面生产中每月刷写80000+台设备"
        }
      ],
   
      workImg:
        ecobee,
    },
    {
      title: "University of Waterloo, Faculty of Electrical and Computer Engineering", 
      position: "Teaching Assistant - University of Waterloo",
      para: {
        en: "TA for intro C++ course; led tutorials, graded, designed exams.",
        zh: "C++入门课程助教；指导辅导课，评分，设计考试。"
      },
      
      imageSrc:
        UwaterlooIcon,
      
      url: "/work/uwaterloo/",

      date: "09/2020 - 12/2020 ",

      description: [
        {
          en: "Designed questions on quizzes, midterm, and final and created automated testing using C++ and python to grade 300+ submissions per assessment and provide instantaneous feedback using Python expect library and regular expression based on the SOLID design principle",
          zh: "设计测验、期中和期末考试题目，使用C++和Python创建自动化测试系统，基于SOLID设计原则使用Python expect库和正则表达式为每次评估的300+份提交提供即时反馈"
        },
        {
          en: "Lead lab and help sessions for 300+ students assisted with teaching concepts in C++, such as dynamic memory allocation, Object-Oriented Programming, pointers, and linked lists, leads to a significant increase in student grades",
          zh: "为300+学生领导实验室和辅导课程，协助教授C++概念，如动态内存分配、面向对象编程、指针和链表，显著提高了学生成绩"
        }
      ],
      
      
      workImg:
        uwaterloo,
    },
    {
      title: "Khazanah National Americas", 
      position: "Innovation Developer - Khazanah",
      para: {
        en: "Explored drone, CV, and AR/VR tech to support investor understanding and decision-making.",
        zh: "探索无人机、计算机视觉和AR/VR技术，支持投资者理解和决策制定。"
      },
      
      imageSrc:
        KhazanahIcon,
      
      url: "/work/khazanah/",

      date: "01/2020 - 04/2020 ",

      description: [
        {
          en: "Created a VR game based on Atari's Asteroids for Oculus Go platform, designed game logic, collision physics, and cloud leaderboard using C#, Unity, and Oculus developer toolkit, created asteroid models with blender",
          zh: "为Oculus Go平台创建基于雅达利小行星的VR游戏，使用C#、Unity和Oculus开发工具包设计游戏逻辑、碰撞物理和云排行榜，使用Blender创建小行星模型"
        },
        {
          en: "Developed novel computer vision-based control for drones using Python OpenCV library, capable of tracking and following an Aruco marker in different lighting conditions up to 10 meters away, and autonomous take-off and land.",
          zh: "使用Python OpenCV库开发基于计算机视觉的新型无人机控制，能够在不同光照条件下跟踪和跟随10米范围内的Aruco标记，并实现自主起降。"
        },
        {
          en: "Design open-sourced smart germicidal device with UV-C bulbs to sterilize personal devices; won Editor's Choice Award on Instructable",
          zh: "设计开源智能杀菌设备，使用UV-C灯泡消毒个人设备；在Instructable上获得编辑选择奖"
        }
      ],
    
      workImg:
        Khazanah,
    
    },
    {
      title: "Ford Motor Company", 
      position: "Manufacturing Software Developer - Ford",
      para: {
        en: "Supported F150 Lightning development and testing using Jenkins, TestStand, C#, Python.",
        zh: "使用Jenkins、TestStand、C#、Python支持F150 Lightning开发和测试。"
      },      
      imageSrc:
        FordIcon,
     
      url: "/work/ford/",

      date: "05/2019 - 08/2019 ",

      description: [
        {
          en: "Developed automation pipeline to flash and systematically test devices routinely on the Jenkins platform for over 100 daily tests",
          zh: "在Jenkins平台上开发自动化管道，例行刷写和系统测试设备，每日测试超过100次"
        },
        {
          en: "Prototyped utility in C# to flash multiple chips simultaneously on TestStand using C#, increasing efficiency by over 2 times",
          zh: "使用C#在TestStand上原型化同时刷写多个芯片的实用程序，效率提高超过2倍"
        },
        {
          en: "Debugged audio issues for infotainment chips with TestStand and .Net Framework by recreating issues in controlled settings",
          zh: "通过在受控环境中重现问题，使用TestStand和.Net Framework调试信息娱乐芯片的音频问题"
        }
      ],
      
      workImg:
      ford,
    
    },


  ],

// About Section --------------
aboutParaOne: {
  en: "I am a robotics engineer with expertise in simulation development, narrowing the sim-to-real gap by creation of high-fidelity virtual environments to accelerate robotic testing and deployment. I am particularly passionate about reinforcement learning and imitation learning, exploring control strategies that enable safer, more human-like interactions.",
  zh: "我是一名机器人工程师，专精于仿真开发，通过创建高保真虚拟环境缩小仿真到现实的差距，加速机器人测试和部署。我特别热衷于强化学习和模仿学习，探索能够实现更安全、更类人交互的控制策略。"
},
aboutParaTwo: {
  en: "I earned my Bachelor's degree in Mechatronics Engineering from the University of Waterloo. I also conducted human-robot interaction research at the Active Robotics Interaction Lab under Dr. Yue Hu, with a publication on IEEE Robotics and Automation Letters.",
  zh: "我在滑铁卢大学获得了机电工程学士学位。我还在胡越博士指导下的主动机器人交互实验室进行了人机交互研究，并在IEEE机器人与自动化快报上发表了论文。"
},
aboutParaThree: {
  en: "When I'm not building robots, you can find me snowboarding, playing tennis, or exploring new cuisines around the city.",
  zh: "当我不在制造机器人时，你可以看到我在滑雪、打网球，或者在城市里探索新的美食。"
},

nvidiaTime: {
  en: "2023 to Present",
  zh: "2023年至今"
},

nvidiaExperience: [
  {
    en: "At NVIDIA, I worked on both Isaac Lab and Isaac Sim, focusing on distinct facets of robotic simulation. In Isaac Lab, I developed scalable humanoid and legged robot models and designed reinforcement learning-based locomotion policies. In Isaac Sim, I concentrated on high-fidelity simulation, building realistic digital twins, synthetic sensor models, and inference pipelines for deploying trained policies through ROS and Isaac Sim. I also presented several talks at NVIDIA GTC on robot composition and software-in-the-loop simulation pipelines.",
    zh: "在英伟达，我负责Isaac Lab和Isaac Sim的工作，专注于机器人仿真的不同方面。在Isaac Lab中，我开发了可扩展的人形和足式机器人模型，并设计了基于强化学习的运动策略。在Isaac Sim中，我专注于高保真仿真，构建逼真的数字孪生、合成传感器模型，以及通过ROS和Isaac Sim部署训练策略的推理管道。我还在NVIDIA GTC上就机器人组合和软件在环仿真管道发表了多次演讲。"
  }
],

// NVIDIA Carousel Items
nvidiaCarouselItems: [
  {
    media: "h1FlipGif", // Will be imported in component
    type: 'video',
    title: {
      en: "H1 humanoid robot tries to backflip",
      zh: "H1人形机器人尝试后空翻"
    },
    description: {
      en: "H1 attempted a backflip, but it didn't go as planned.",
      zh: "H1机器人尝试后空翻，但没有按计划进行。"
    }
  },
  {
    media: "h1TrainVideo",
    type: 'video',
    title: {
      en: "Training H1 humanoids to walk",
      zh: "训练H1人形机器人行走"
    },
    description: {
      en: "H1 robot during training phase.",
      zh: "H1机器人训练阶段。"
    }
  },
  {
    media: "urLousdVideo",
    type: 'video',
    title: {
      en: "Robotics arm pick and place example",
      zh: "机械臂抓取和放置示例"
    },
    description: {
      en: "Demonstrating OpenUSD integration with Isaac Sim for robotics applications and digital twin workflows.",
      zh: "展示OpenUSD与Isaac Sim的集成，用于机器人应用和数字孪生工作流。"
    }
  },
  {
    media: "frankaMoveitVideo",
    type: 'video',
    title: {
      en: "Franka robot simulation",
      zh: "Franka机器人仿真"
    },
    description: {
      en: "Franka robot demonstrating MoveIt integration.",
      zh: "Franka机器人展示MoveIt集成。"
    }
  },
  {
    media: "frankaDrawerVideo",
    type: 'video',
    title: {
      en: "Reinforcement learning based drawer manipulation",
      zh: "基于强化学习的抽屉操作"
    },
    description: {
      en: "Franka robot performing drawer manipulation task.",
      zh: "Franka机器人执行抽屉操作任务。"
    }
  },
  {
    media: "claw",
    type: 'video',
    title: {
      en: "High fidelity claw simulation",
      zh: "高保真度爪子仿真"
    },
    description: {
      en: "Claw robot grasping task.",
      zh: "爪式机器人抓取任务。"
    }
  },
  {
    media: "leatherbackVideo",
    type: 'video',
    title: {
      en: "Ackermann steering simulation",
      zh: "阿克曼转向仿真"
    },
    description: {
      en: "RC car simulation",
      zh: "遥控车仿真"
    }
  },
  {
    media: "carterOutdoorVideo",
    type: 'video',
    title: {
      en: "Outdoor robot simulation",
      zh: "户外机器人仿真"
    },
    description: {
      en: "Robot outdoor simulation",
      zh: "机器人户外仿真"
    }
  },
  {
    media: "agilityWalkVideo",
    type: 'video',
    title: {
      en: "Agility humanoid robot locomotion policy",
      zh: "Agility人形机器人运动策略"
    },
    description: {
      en: "Agility humanoid robot demonstrating walking capabilities.",
      zh: "Agility人形机器人展示行走能力。"
    }
  },
  {
    media: "gtc_lousd",
    type: 'image',
    title: {
      en: "Giving a presentation on building robot digital twins at GTC 2025",
      zh: "在GTC 2025上演讲构建机器人数字孪生"
    },
    description: {
      en: "Giving a lecture at GTC 2025 on USD composition.",
      zh: "在GTC 2025上就USD组合发表演讲。"
    }
  },
  {
    media: "gtc_sil",
    type: 'image',
    title: {
      en: "ROS software-in-the-loop simulation lab at GTC 2025",
      zh: "GTC 2025上的ROS软件在环仿真实验室"
    },
    description: {
      en: "Giving a lecture at GTC 2025 on ROS integration with Isaac Sim.",
      zh: "在GTC 2025上就ROS与Isaac Sim集成发表演讲。"
    }
  },
  {
    media: "newton",
    type: 'image',
    title: {
      en: "Presenting the next generation simulator Newton at GTC 2025",
      zh: "在GTC 2025上展示下一代仿真器Newton"
    },
    description: {
      en: "Presenting Newton, next generation robotics simulator at our both at NVIDIA GTC 2025.",
      zh: "在NVIDIA GTC 2025的展台上展示Newton下一代机器人仿真器。"
    }
  }
],

// Projects Carousel Items
projectsCarouselItems: [
  {
    media: "airplaneImage",
    type: 'image',
    title: {
      en: "Airplane Project (2020)",
      zh: "飞机项目 (2020)"
    },
    subtitle: {
      en: "The sky is calling!",
      zh: "天空在召唤！"
    },
    description: {
      en: "In this project, I built a remote controlled airplane from scratch using raspberry pi and esp8266 modules, and designed software and mechanical architectures from scratch in a team of two.",
      zh: "在这个项目中，我和另一位团队成员从零开始使用树莓派和esp8266模块制作了一架遥控飞机，并从头设计了软件和机械架构。"
    },
    buttons: [
      {
        text: { en: "Read More", zh: "了解更多" },
        url: "https://github.com/The-Airplane-Project/Remote-Controlled-Airplane"
      }
    ]
  },
  {
    media: "watoImage",
    type: 'image',
    title: {
      en: "Watonomous",
      zh: "Watonomous"
    },
    subtitle: {
      en: "Bolty!",
      zh: "Bolty!"
    },
    description: {
      en: "Watonomous is a University of Waterloo design team that turns a chevy bolt to a level 4 autonomous vehicle. At Watonomous, I worked on local planning for the vehicle, particularly with the MPC controller and gained valuable experience with ROS.",
      zh: "Watonomous是滑铁卢大学的设计团队，将雪佛兰Bolt改造成四级自动驾驶车辆。在Watonomous，我负责车辆的局部规划，特别是MPC控制器，并积累了宝贵的ROS经验。"
    },
    buttons: [
      {
        text: { en: "Read more", zh: "了解更多" },
        url: "https://www.watonomous.ca/"
      }
    ]
  },
  {
    media: "capstoneVideo",
    type: 'video',
    title: {
      en: "Capstone Project (2023)",
      zh: "毕业设计项目 (2023)"
    },
    subtitle: {
      en: "Multi-robot exploration and SLAM in a simulated warehouse",
      zh: "虚拟仓库中的多机器人探索和SLAM"
    },
    description: {
      en: "Initial prototype of a single robot SLAM system for exploring and mapping a 80000 sqft virtual warehouse.",
      zh: "用于探索和绘制80000平方英尺虚拟仓库的单机器人SLAM系统初始原型。"
    },
    buttons: [
      {
        text: { en: "Read more", zh: "了解更多" },
        url: "https://github.com/FireScopeRobotics"
      }
    ]
  },
  {
    media: "webappImg",
    type: 'image',
    title: {
      en: "Webapp Hackathon Projects",
      zh: "网络应用黑客马拉松项目"
    },
    subtitle: {
      en: "Best Use of Google Cloud Award (Purrtector, NWHacks 2021)",
      zh: "谷歌云最佳使用奖 (Purrtector, NWHacks 2021)"
    },
    description: {
      en: "Intelibatch (left) is a webapp for displaying and predicting COVID19 cases across North America using React (front end), Flask (back end), and Tensorflow (prediction) to compute the optimal batch size for repeated testing. Purrtector (right) is a chrome extension for encouraging planet positive behaviors by rewarding users with digital pets using React and Flask.",
      zh: "Intelibatch（左）是一个使用React（前端）、Flask（后端）和Tensorflow（预测）显示和预测北美COVID19病例的网络应用，用于计算重复测试的最佳批次大小。Purrtector（右）是一个Chrome扩展，通过使用React和Flask奖励用户数字宠物来鼓励环保行为。"
    },
    buttons: [
      {
        text: { en: "Intelibatch", zh: "Intelibatch" },
        url: "https://devpost.com/software/pool-sampler"
      },
      {
        text: { en: "Purrtector", zh: "Purrtector" },
        url: "https://devpost.com/software/purrtech"
      }
    ]
  },
  {
    media: "wearableImg",
    type: 'image',
    title: {
      en: "Wearable Hackathon Projects",
      zh: "可穿戴设备黑客马拉松项目"
    },
    subtitle: {
      en: "1st Place (VisionSense, MakeUofT 2019)",
      zh: "第一名 (VisionSense, MakeUofT 2019)"
    },
    description: {
      en: "VisionSense (left) is an IoT outfit to haptically guide users with visual impairments/obstructions while monitoring their environment. Nightlight (right) is a wearable that allows bike users to signal turns at night via motion-sensing technologies which will activate turn lights.",
      zh: "VisionSense（左）是一套物联网设备，通过触觉引导视觉障碍用户，同时监控环境。Nightlight（右）是一款可穿戴设备，允许骑行者通过运动感应技术在夜间发出转向信号，激活转向灯。"
    },
    buttons: [
      {
        text: { en: "VisionSense", zh: "VisionSense" },
        url: "https://devpost.com/software/visionsense"
      },
      {
        text: { en: "NightLight", zh: "NightLight" },
        url: "https://devpost.com/software/team-18-go-team"
      }
    ]
  },
  {
    media: "mte380Img",
    type: 'image',
    title: {
      en: "BOFA, the Line Follower Robot",
      zh: "BOFA，循线机器人"
    },
    subtitle: {
      en: "2nd highest competition mark",
      zh: "竞赛第二高分"
    },
    description: {
      en: "Lead the mechanical design for a line following robot using SolidWorks, drafted Bill of Material, and oversee software, mechanical, and electrical developments as project manager",
      zh: "使用SolidWorks领导循线机器人的机械设计，制定物料清单，作为项目经理监督软件、机械和电气开发"
    },
    buttons: [
      {
        text: { en: "Read More", zh: "了解更多" },
        url: "https://github.com/B-O-F-A"
      }
    ]
  },
  {
    media: "hisecurityImage",
    type: 'image',
    title: {
      en: "HiSecurity!",
      zh: "HiSecurity!"
    },
    subtitle: {
      en: "Hack the north, 2019",
      zh: "Hack the north, 2019"
    },
    description: {
      en: "This camera system which utilizes machine vision (OpenCV and Sktlearn) to physically track and identify faces using the stepper motors onboard. The handy ui also enables users to track the system remotely and in real time.",
      zh: "这个摄像头系统利用机器视觉（OpenCV和Sklearn）通过板载步进电机物理跟踪和识别人脸。便捷的用户界面还允许用户远程实时跟踪系统。"
    },
    buttons: [
      {
        text: { en: "Read More", zh: "了解更多" },
        url: "https://devpost.com/software/acs-htn2019"
      }
    ]
  },
  {
    media: "vexImg",
    type: 'image',
    title: {
      en: "VEX Robotics",
      zh: "VEX机器人竞赛"
    },
    subtitle: {
      en: "Finalists, Alberta Provincial Championship 2017 and 2018",
      zh: "阿尔伯塔省锦标赛决赛选手 2017和2018年"
    },
    description: {
      en: "Over the three years, we explored various robotics systems such as holonomic drives, reverse double four bar lifts, and even learned C programming and programed PID controllers from scratch in a team of three.",
      zh: "在三年中，我们三人团队探索了各种机器人系统，如全向驱动、反向双四杆举升机构，甚至学习了C编程并从零开始编程PID控制器。"
    },
    buttons: [
      {
        text: { en: "Read More", zh: "了解更多" },
        url: "https://globalnews.ca/video/3355924/sir-winston-churchill-students-head-to-vex-robotics-world-championship/"
      }
    ]
  },
  {
    media: "pilotImg",
    type: 'image',
    title: {
      en: "Pilot",
      zh: "飞行员"
    },
    subtitle: {
      en: "\"Oh! I slipped the surly bonds of earth and danced the skies on bright yellow wings.\"",
      zh: "\"啊！我挣脱了大地的束缚，在明亮的黄色翅膀上舞动天空。\""
    },
    description: {
      en: "I finally touched the sky when I earned my glider pilot license in 2016 and private pilot license in 2017. This was an breathtaking experiences that inspires me to build robotics airplanes to this date.",
      zh: "当我在2016年获得滑翔机飞行员执照和2017年获得私人飞行员执照时，我终于触摸到了天空。这是一次令人屏息的经历，至今仍激励着我制造机器人飞机。"
    },
    buttons: []
  }
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

  contactSubHeading: {
  en: "Let's chat about robots!",
  zh: "让我们聊聊机器人吧！"
},
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