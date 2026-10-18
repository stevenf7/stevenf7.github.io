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
import googleScholarIcon from "./images/contactIcon/gscholar.png"
import orcidIcon from "./images/contactIcon/orcid.svg"

// Company icon
import TeslaIcon from "./images/company/Tesla.webp"
import NVIDIAIcon from "./images/company/NVIDIA.webp"
import EcobeeIcon from "./images/company/ecobee.webp"
import UwaterlooIcon from "./images/company/Uwaterloo.webp"
import KhazanahIcon from "./images/company/Khazanah.webp"
import FordIcon from "./images/company/Ford.webp"

// Company media
import TeslaImg from "./images/workPhotos/TeslaWork_v2.mp4"
import IsaacSim from "./images/workPhotos/isaac_quadruped.mp4"
import Khazanah from "./images/workPhotos/khazanah.mp4"
import uwaterloo from "./images/workPhotos/uwaterlootaImg.webp"
import ford from "./images/workPhotos/Ford.webp"
import ecobee from "./images/workPhotos/ecobeeProduct.webp"

// School images
import WaterlooLogo from "./images/school/University-of-Waterloo.png"
import AirLabLogo from "./images/school/airlab_logo_extended.jpg"
import StanfordLogo from "./images/school/stanford.webp"
import WaterlooImg from "./images/school/waterloo_eng_img.webp"
import AirLabImg from "./images/school/airlab_img.webp"
import StanfordImg from "./images/school/stanford_img.webp"

export const getText = (textObj, language = "en") => {
  if (typeof textObj === "string") return textObj
  if (textObj && typeof textObj === "object") {
    return (
      textObj[language] ||
      textObj.en ||
      textObj.zh ||
      Object.values(textObj)[0] ||
      ""
    )
  }
  return textObj || ""
}

const siteData = {
  seo: {
    title: {
      en: "Ji Yuan (Steven) Feng | Robotics Simulation Engineer at NVIDIA",
      zh: "冯纪元 | NVIDIA 机器人仿真工程师"
    },
    resumeTitle: {
      en: "Resume | Ji Yuan (Steven) Feng",
      zh: "简历 | 冯纪元"
    },
    notFoundTitle: {
      en: "404: Page Not Found",
      zh: "404: 页面未找到"
    },
    description: {
      en: "Portfolio of Ji Yuan (Steven) Feng, Robotics Simulation Engineer at NVIDIA working on Isaac Lab, Isaac Sim, OpenUSD digital twins, humanoid learning, and ROS simulation pipelines.",
      zh: "冯纪元个人作品集：NVIDIA 机器人仿真工程师，专注于 Isaac Lab、Isaac Sim、OpenUSD 数字孪生、人形机器人强化学习与 ROS 仿真流程。"
    }
  },

  name: {
    en: "Ji Yuan 'Steven' Feng",
    zh: "冯纪元"
  },

  heroEyebrow: {
    en: "Robotics Simulation Engineer at NVIDIA · Stanford EE M.S. · UWaterloo Mechatronics",
    zh: "NVIDIA 机器人仿真工程师 · 斯坦福电子工程硕士在读 · 滑铁卢机电工程"
  },

  heroTitle: {
    en: "Building high-fidelity robot digital twins, reinforcement learning workflows, and ROS simulation pipelines.",
    zh: "专注于高保真机器人数字孪生、强化学习训练流程与 ROS 仿真部署。"
  },

  headerParagraph: {
    en: "At NVIDIA, I work across Isaac Lab and Isaac Sim on humanoid and legged robot learning, OpenUSD asset composition, synthetic sensors, and software-in-the-loop deployment.",
    zh: "在英伟达，我负责 Isaac Lab 与 Isaac Sim 的人形与足式机器人学习、OpenUSD 资产构建、合成传感器与软件在环部署。"
  },

  heroSpecialties: {
    en: [
      "Robotics Engineer",
      "Pilot",
      "Code Monkey",
      "Accordionist",
      "Simulation Developer",
      "Student",
      "Clarinetist",
      "Firmware Developer"
    ],
    zh: [
      "机器人工程师",
      "飞行员",
      "程序猿",
      "学生",
      "单簧管演奏者",
      "固件开发工程师"
    ]
  },

  nav: {
    home: { en: "Home", zh: "首页" },
    nvidia: { en: "NVIDIA", zh: "英伟达" },
    publications: { en: "Publications", zh: "论文与演讲" },
    work: { en: "Experience", zh: "经历" },
    projects: { en: "Projects", zh: "项目" },
    education: { en: "Education", zh: "教育" },
    contact: { en: "Contact", zh: "联系" },
    resume: { en: "Resume", zh: "简历" },
    skipToContent: { en: "Skip to main content", zh: "跳转到主要内容" }
  },

  sections: {
    nvidia: { en: "NVIDIA Robotics Simulation", zh: "NVIDIA 机器人仿真工作" },
    publications: { en: "Publications & Talks", zh: "论文与技术演讲" },
    education: { en: "Education & Research", zh: "教育与科研" },
    internships: { en: "Internship Experience", zh: "实习经历" },
    projects: { en: "Hobbies, Projects & Internships", zh: "爱好、项目与实习经历" },
    skills: { en: "Technical Skills", zh: "技术栈" },
    contact: { en: "Contact", zh: "联系" }
  },

  buttons: {
    selectedWork: { en: "Explore NVIDIA Work", zh: "查看 NVIDIA 工作" },
    resumeCta: { en: "View Resume", zh: "查看简历" },
    connect: { en: "LinkedIn", zh: "领英联系" },
    explore: { en: "Details", zh: "查看详情" },
    readMore: { en: "Read More", zh: "了解更多" },
    viewPublication: { en: "View Publication", zh: "查看链接" },
    viewAllDemos: { en: "View all 16 NVIDIA demos & talks", zh: "展开全部 16 个 NVIDIA 演示与演讲" },
    showFewerDemos: { en: "Show featured NVIDIA overview", zh: "收起完整演示列表" },
    viewAllProjects: { en: "View internships & other projects", zh: "展开实习经历与更多项目" },
    showFewerProjects: { en: "Show selected projects only", zh: "仅显示代表性项目" },
    close: { en: "Close", zh: "关闭" }
  },

  footer: {
    madeBy: { en: "Made by", zh: "作者" }
  },

  modal: {
    highlights: { en: "Highlights", zh: "工作亮点" },
    previous: { en: "Prev", zh: "上一个" },
    next: { en: "Next", zh: "下一个" },
    visitSite: { en: "Visit site", zh: "访问网站" }
  },

  contactEmail: "jy5feng@uwaterloo.ca",

  nvidiaTime: {
    en: "Robotics Simulation Engineer · 2023 to Present",
    zh: "机器人仿真工程师 · 2023年至今"
  },

  nvidiaLead: {
    en: "Full-time robotics simulation work spanning Isaac Lab policy training, Isaac Sim digital twins, OpenUSD robot composition, ROS 2 software-in-the-loop pipelines, and developer talks at NVIDIA GTC, ACM SIGGRAPH, and ROSCon.",
    zh: "全职负责 Isaac Lab 策略训练、Isaac Sim 高保真数字孪生、OpenUSD 机器人资产组合、ROS 2 软件在环流程，并在 NVIDIA GTC、ACM SIGGRAPH 与 ROSCon 发表技术演讲。"
  },

  nvidiaExperience: [
    {
      en: "In Isaac Lab, I develop scalable humanoid and legged robot models and reinforcement-learning locomotion and manipulation workflows.",
      zh: "在 Isaac Lab 中开发可扩展的人形与足式机器人模型，以及基于强化学习的运动与操作训练流程。"
    },
    {
      en: "In Isaac Sim, I build high-fidelity OpenUSD digital twins, physics-based sensor models, and ROS / ROS 2 inference pipelines for software-in-the-loop testing.",
      zh: "在 Isaac Sim 中构建高保真 OpenUSD 数字孪生、物理传感器模型，以及面向软件在环测试的 ROS / ROS 2 推理管道。"
    },
    {
      en: "Through GTC labs, SIGGRAPH courses, ROSCon sessions, and white papers, I turn simulation best practices into reproducible workflows for robotics developers.",
      zh: "通过 GTC 实验课、SIGGRAPH 课程、ROSCon 演讲与技术白皮书，将仿真最佳实践转化为机器人开发者可复用的工作流。"
    }
  ],

  nvidiaFeaturedDemo: {
    media: "gr1ImitationVideo",
    type: "video",
    badge: {
      en: "Featured NVIDIA Demo · Isaac Lab",
      zh: "重点演示 · Isaac Lab"
    },
    title: {
      en: "GR1 humanoid robot imitation-learning policy",
      zh: "GR1 人形机器人模仿学习策略"
    },
    description: {
      en: "Full-body humanoid motion policy trained and evaluated in simulation to reproduce expressive human-like movement while maintaining balance.",
      zh: "在仿真环境中训练与评估全身人形运动策略，在保持平衡的同时复现类人动作。"
    },
    tags: ["Isaac Lab", "Humanoid Control", "Imitation Learning", "PhysX"]
  },

  nvidiaCaseStudies: [
    {
      id: "humanoids",
      media: "agilityWalkVideo",
      type: "video",
      category: {
        en: "Humanoid & Legged Learning",
        zh: "人形与足式强化学习"
      },
      title: {
        en: "Locomotion and whole-body learning in Isaac Lab",
        zh: "Isaac Lab 中的行走与全身控制策略"
      },
      summary: {
        en: "Built scalable humanoid and legged simulation environments and trained reinforcement-learning policies for walking, imitation, and dynamic recovery.",
        zh: "构建可扩展的人形与足式机器人仿真环境，训练行走、模仿学习与动态恢复等强化学习策略。"
      },
      highlights: {
        en: [
          "GR1 imitation learning, H1 walking training, H1 dynamic flip experiments, and Agility humanoid locomotion.",
          "Co-authored the Isaac Lab GPU-accelerated simulation framework white paper."
        ],
        zh: [
          "涵盖 GR1 模仿学习、H1 行走训练、H1 动态空翻实验与 Agility 人形行走策略。",
          "参与撰写 Isaac Lab GPU 加速机器人学习框架白皮书。"
        ]
      },
      tags: ["Isaac Lab", "Reinforcement Learning", "Humanoids", "PyTorch"],
      link: {
        text: { en: "Read Isaac Lab White Paper", zh: "阅读 Isaac Lab 白皮书" },
        url: "https://arxiv.org/abs/2511.04831"
      }
    },
    {
      id: "digital-twins",
      media: "robotStackVideo",
      type: "video",
      category: {
        en: "OpenUSD Digital Twins & ROS 2",
        zh: "OpenUSD 数字孪生与 ROS 2"
      },
      title: {
        en: "End-to-end URDF-to-USD and software-in-the-loop workflows",
        zh: "从 URDF 到 USD 的端到端软件在环仿真流程"
      },
      summary: {
        en: "Connected robot asset authoring, physics tuning, synthetic sensors, and ROS 2 autonomy stacks for repeatable simulation testing in Isaac Sim.",
        zh: "打通机器人资产构建、物理调参、合成传感器与 ROS 2 自主栈，在 Isaac Sim 中实现可重复的软件在环测试。"
      },
      highlights: {
        en: [
          "Covers full robot stacks, Franka MoveIt motion planning, outdoor mobile navigation, and Ackermann steering models.",
          "Presented at ROSCon 2026, ACM SIGGRAPH 2025, and NVIDIA GTC 2025."
        ],
        zh: [
          "覆盖完整机器人软件栈、Franka MoveIt 运动规划、户外移动导航与阿克曼转向模型。",
          "相关工作发表于 ROSCon 2026、ACM SIGGRAPH 2025 与 NVIDIA GTC 2025。"
        ]
      },
      tags: ["Isaac Sim", "OpenUSD", "ROS 2", "SIL Testing"],
      link: {
        text: { en: "View SIGGRAPH Digital Twin Paper", zh: "查看 SIGGRAPH 数字孪生论文" },
        url: "https://dl.acm.org/doi/10.1145/3721251.3734066"
      }
    },
    {
      id: "manipulation",
      media: "destrahVideo",
      type: "video",
      category: {
        en: "Manipulation & Contact Physics",
        zh: "灵巧操作与接触物理"
      },
      title: {
        en: "Dexterous hands, articulated arms, and PhysX tuning",
        zh: "灵巧机械手、机械臂操作与 PhysX 物理调优"
      },
      summary: {
        en: "Configured and tuned articulated hands, grippers, and manipulation scenes where joint drives, contact physics, and USD structure determine task fidelity.",
        zh: "配置并调优灵巧手、夹爪与操作场景，使关节驱动、接触物理与 USD 资产结构满足高精度操作仿真。"
      },
      highlights: {
        en: [
          "Dextrah manipulation, RL drawer opening, high-fidelity claw grasping, and industrial arm pick-and-place.",
          "Led to ACM SIGGRAPH 2026 and NVIDIA GTC 2026 sessions on tuning robot assets."
        ],
        zh: [
          "包括 Dextrah 灵巧操作、强化学习拉抽屉、高精度机械爪抓取与机械臂抓放。",
          "延伸为 ACM SIGGRAPH 2026 与 NVIDIA GTC 2026 的机器人资产调优课程。"
        ]
      },
      tags: ["OpenUSD", "PhysX", "Dexterous Manipulation", "Asset Tuning"],
      link: {
        text: { en: "View SIGGRAPH 2026 Hand Course", zh: "查看 SIGGRAPH 2026 灵巧手论文" },
        url: "https://dl.acm.org/doi/10.1145/3799820.3812501"
      }
    },
    {
      id: "talks",
      media: "gtcDexterousHands",
      type: "image",
      category: {
        en: "Conferences & Developer Education",
        zh: "国际会议与开发者课程"
      },
      title: {
        en: "GTC, SIGGRAPH, ROSCon, and Newton physics demos",
        zh: "GTC、SIGGRAPH、ROSCon 演讲与 Newton 物理引擎展示"
      },
      summary: {
        en: "Authored hands-on labs, conference talks, and live booth demonstrations teaching robotics engineers how to build and validate simulation-ready robots.",
        zh: "编写实践课程、会议演讲与现场展示，向机器人工程师讲解如何构建与验证可用于仿真的机器人系统。"
      },
      highlights: {
        en: [
          "Talks span GTC 2025/2026, SIGGRAPH 2025/2026, ROSCon 2026, and live Newton physics engine showcases.",
          "Focused on practical OpenUSD composition, sensor setup, and policy deployment."
        ],
        zh: [
          "涵盖 GTC 2025/2026、SIGGRAPH 2025/2026、ROSCon 2026 以及 Newton 下一代物理引擎展示。",
          "聚焦 OpenUSD 资产组合、传感器配置与策略部署实践。"
        ]
      },
      tags: ["NVIDIA GTC", "ACM SIGGRAPH", "ROSCon", "Newton"],
      link: {
        text: { en: "View GTC 2026 Session", zh: "查看 GTC 2026 课程" },
        url: "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-dlit81697/"
      }
    }
  ],

  nvidiaCarouselItems: [
    {
      media: "gr1ImitationVideo",
      type: "video",
      category: { en: "Humanoid IL", zh: "人形模仿学习" },
      title: {
        en: "GR1 humanoid robot imitation-learning policy",
        zh: "GR1 人形机器人模仿学习策略"
      },
      description: {
        en: "GR1 humanoid robot demonstrating imitation-learning capabilities for coordinated human-like movement.",
        zh: "GR1 人形机器人展示模仿学习能力，实现协调的类人动作。"
      }
    },
    {
      media: "agilityWalkVideo",
      type: "video",
      category: { en: "Humanoid RL", zh: "人形学习" },
      title: {
        en: "Agility humanoid robot locomotion policy",
        zh: "Agility 人形机器人行走策略"
      },
      description: {
        en: "Agility humanoid robot executing a learned bipedal walking policy in simulation.",
        zh: "Agility 人形机器人在仿真中执行学习到的双足行走策略。"
      }
    },
    {
      media: "h1TrainVideo",
      type: "video",
      category: { en: "Humanoid RL", zh: "人形学习" },
      title: {
        en: "Training H1 humanoids to walk in parallel",
        zh: "并行训练 H1 人形机器人行走"
      },
      description: {
        en: "Multi-environment reinforcement-learning training run for Unitree H1 locomotion in Isaac Lab.",
        zh: "在 Isaac Lab 中进行宇树 H1 行走策略的多环境并行强化学习训练。"
      }
    },
    {
      media: "h1FlipGif",
      type: "video",
      category: { en: "Humanoid RL", zh: "人形学习" },
      title: {
        en: "H1 humanoid front-flip experiment",
        zh: "H1 人形机器人前空翻实验"
      },
      description: {
        en: "Dynamic whole-body control failure case during an H1 front-flip experiment in simulation.",
        zh: "H1 机器人在仿真中尝试前空翻时的动态全身控制实验。"
      }
    },
    {
      media: "destrahVideo",
      type: "video",
      category: { en: "Manipulation", zh: "灵巧操作" },
      title: {
        en: "Dextrah dexterous manipulation task",
        zh: "Dextrah 灵巧操作任务"
      },
      description: {
        en: "Dexterous hand-arm system performing coordinated object manipulation in Isaac Sim.",
        zh: "灵巧手与机械臂系统在 Isaac Sim 中执行协同物体操作。"
      }
    },
    {
      media: "frankaDrawerVideo",
      type: "video",
      category: { en: "Manipulation", zh: "灵巧操作" },
      title: {
        en: "Reinforcement-learning drawer manipulation",
        zh: "基于强化学习的拉抽屉操作"
      },
      description: {
        en: "Franka arm policy learning articulated drawer opening with contact-rich interaction.",
        zh: "Franka 机械臂通过强化学习完成含接触约束的抽屉开启任务。"
      }
    },
    {
      media: "claw",
      type: "video",
      category: { en: "Manipulation", zh: "灵巧操作" },
      title: {
        en: "High-fidelity claw grasping simulation",
        zh: "高精度机械爪抓取仿真"
      },
      description: {
        en: "Contact and drive tuning for stable grasping in an articulated claw mechanism.",
        zh: "针对关节机械爪进行接触与驱动调优，实现稳定抓取。"
      }
    },
    {
      media: "urLousdVideo",
      type: "video",
      category: { en: "OpenUSD & ROS", zh: "OpenUSD 与 ROS" },
      title: {
        en: "OpenUSD robotic arm pick-and-place workflow",
        zh: "OpenUSD 机械臂抓取与放置工作流"
      },
      description: {
        en: "Demonstrating OpenUSD asset composition with Isaac Sim for industrial manipulation workflows.",
        zh: "展示 OpenUSD 资产组合与 Isaac Sim 集成的工业机械臂工作流。"
      }
    },
    {
      media: "frankaMoveitVideo",
      type: "video",
      category: { en: "OpenUSD & ROS", zh: "OpenUSD 与 ROS" },
      title: {
        en: "Franka ROS 2 MoveIt integration",
        zh: "Franka 机器人 ROS 2 MoveIt 集成"
      },
      description: {
        en: "Closed-loop motion planning between MoveIt and an Isaac Sim Franka digital twin.",
        zh: "MoveIt 与 Isaac Sim 中 Franka 数字孪生之间的闭环运动规划。"
      }
    },
    {
      media: "carterOutdoorVideo",
      type: "video",
      category: { en: "OpenUSD & ROS", zh: "OpenUSD 与 ROS" },
      title: {
        en: "Outdoor mobile robot software-in-the-loop test",
        zh: "户外移动机器人软件在环测试"
      },
      description: {
        en: "Carter mobile robot navigating an outdoor simulation environment for ROS software-in-the-loop validation.",
        zh: "Carter 移动机器人在户外仿真场景中进行 ROS 软件在环验证。"
      }
    },
    {
      media: "leatherbackVideo",
      type: "video",
      category: { en: "OpenUSD & ROS", zh: "OpenUSD 与 ROS" },
      title: {
        en: "Ackermann steering vehicle simulation",
        zh: "阿克曼转向车辆仿真"
      },
      description: {
        en: "Wheeled RC vehicle simulation validating Ackermann steering kinematics and control.",
        zh: "验证阿克曼转向运动学与控制算法的轮式遥控车仿真。"
      }
    },
    {
      media: "gtcDexterousHands",
      type: "image",
      category: { en: "Talks", zh: "技术演讲" },
      title: {
        en: "GTC 2026: Configuring and tuning dexterous hands",
        zh: "GTC 2026：灵巧机械手配置与调优演讲"
      },
      description: {
        en: "Presenting OpenUSD and PhysX workflows for tuning articulated robotic hands at NVIDIA GTC 2026.",
        zh: "在 NVIDIA GTC 2026 介绍使用 OpenUSD 与 PhysX 调优灵巧机械手的方法。"
      }
    },
    {
      media: "siggraphTalk",
      type: "image",
      category: { en: "Talks", zh: "技术演讲" },
      title: {
        en: "SIGGRAPH 2025: Humanoid reinforcement-learning talk",
        zh: "SIGGRAPH 2025：人形机器人强化学习演讲"
      },
      description: {
        en: "Presenting simulation and humanoid control workflows at ACM SIGGRAPH 2025.",
        zh: "在 ACM SIGGRAPH 2025 介绍机器人仿真与人形控制工作流。"
      }
    },
    {
      media: "gtc_lousd",
      type: "image",
      category: { en: "Talks", zh: "技术演讲" },
      title: {
        en: "GTC 2025: Building robot digital twins with OpenUSD",
        zh: "GTC 2025：使用 OpenUSD 构建机器人数字孪生"
      },
      description: {
        en: "Teaching USD composition best practices for robotics simulation at NVIDIA GTC 2025.",
        zh: "在 NVIDIA GTC 2025 讲授面向机器人仿真的 USD 资产组合最佳实践。"
      }
    },
    {
      media: "gtc_sil",
      type: "image",
      category: { en: "Talks", zh: "技术演讲" },
      title: {
        en: "GTC 2025: ROS software-in-the-loop simulation lab",
        zh: "GTC 2025：ROS 与 Isaac Sim 软件在环课程"
      },
      description: {
        en: "Leading a hands-on lab on ROS integration and software-in-the-loop testing with Isaac Sim.",
        zh: "主持 ROS 集成与 Isaac Sim 软件在环测试的实践课程。"
      }
    },
    {
      media: "newton",
      type: "image",
      category: { en: "Talks", zh: "技术演讲" },
      title: {
        en: "GTC 2025: Demonstrating the Newton physics engine",
        zh: "GTC 2025：展示下一代物理引擎 Newton"
      },
      description: {
        en: "Demonstrating Newton, the next-generation robotics physics engine, at the NVIDIA GTC 2025 booth.",
        zh: "在 NVIDIA GTC 2025 展台演示下一代机器人物理引擎 Newton。"
      }
    }
  ],

  publications: [
    {
      id: 7,
      title: {
        en: "Simulating a Dextrous Hand For Robotics With OpenUSD",
        zh: "使用 OpenUSD 进行机器人灵巧手仿真"
      },
      subtitle: {
        en: "ACM SIGGRAPH, 2026",
        zh: "ACM SIGGRAPH，2026"
      },
      media: "dextrousHandImage",
      projectLink: "https://dl.acm.org/doi/10.1145/3799820.3812501",
      type: "ACM"
    },
    {
      id: 8,
      title: {
        en: "From URDF to USD: A Complete Pipeline for High-Fidelity ROS 2 Simulation in NVIDIA Isaac Sim",
        zh: "从 URDF 到 USD：NVIDIA Isaac Sim 高保真 ROS 2 仿真完整流程"
      },
      subtitle: {
        en: "ROSCon 2026",
        zh: "ROSCon 2026"
      },
      media: "robotStackVideo",
      projectLink: null,
      type: "ROScon"
    },
    {
      id: 0,
      title: {
        en: "Configure and Tune Robot Assets With OpenUSD and PhysX",
        zh: "使用 OpenUSD 与 PhysX 配置和调优机器人资产"
      },
      subtitle: {
        en: "NVIDIA GTC 2026",
        zh: "NVIDIA GTC 2026"
      },
      media: "destrahVideo",
      projectLink: "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-dlit81697/",
      type: "NVIDIA"
    },
    {
      id: 1,
      title: {
        en: "Quantifying Human Mental State in Interactive pHRI: Maintaining Balancing",
        zh: "量化交互式物理人机交互中的人类心理状态：保持平衡"
      },
      subtitle: {
        en: "IEEE Robotics and Automation Letters, 2025",
        zh: "IEEE Robotics and Automation Letters，2025"
      },
      media: "hriLabGif",
      projectLink: "https://ieeexplore.ieee.org/document/10873829",
      type: "IEEE"
    },
    {
      id: 2,
      title: {
        en: "Learn OpenUSD: Robotics Best Practices",
        zh: "学习 OpenUSD：机器人仿真最佳实践"
      },
      subtitle: {
        en: "ACM SIGGRAPH, 2025",
        zh: "ACM SIGGRAPH，2025"
      },
      media: "urLousdVideo",
      projectLink: "https://dl.acm.org/doi/10.1145/3721251.3736528",
      type: "ACM"
    },
    {
      id: 3,
      title: {
        en: "Digital Twin Robotics: Immersive Software-in-the-Loop Testing with OpenUSD, Isaac Sim, and ROS",
        zh: "数字孪生机器人：基于 OpenUSD、Isaac Sim 与 ROS 的沉浸式软件在环测试"
      },
      subtitle: {
        en: "ACM SIGGRAPH, 2025",
        zh: "ACM SIGGRAPH，2025"
      },
      media: "h1SilVideo",
      projectLink: "https://dl.acm.org/doi/10.1145/3721251.3734066",
      type: "ACM"
    },
    {
      id: 4,
      title: {
        en: "Isaac Lab: A GPU-Accelerated Simulation Framework for Multi-Modal Robot Learning",
        zh: "Isaac Lab：面向多模态机器人学习的 GPU 加速仿真框架"
      },
      subtitle: {
        en: "NVIDIA White Paper, 2025",
        zh: "NVIDIA 技术白皮书，2025"
      },
      media: "h1TrainVideo",
      projectLink: "https://arxiv.org/abs/2511.04831",
      type: "NVIDIA"
    },
    {
      id: 5,
      title: {
        en: "Software-in-the-Loop Testing for Robots With OpenUSD, Isaac Sim, and ROS I",
        zh: "使用 OpenUSD、Isaac Sim 与 ROS 进行机器人软件在环测试"
      },
      subtitle: {
        en: "NVIDIA GTC 2025",
        zh: "NVIDIA GTC 2025"
      },
      media: "carterOutdoorVideo",
      projectLink: "https://www.nvidia.com/en-us/on-demand/session/gtc25-dlit71326/",
      type: "NVIDIA"
    },
    {
      id: 6,
      title: {
        en: "Learn OpenUSD: Robotics Best Practices I",
        zh: "学习 OpenUSD：机器人最佳实践课程"
      },
      subtitle: {
        en: "NVIDIA GTC 2025",
        zh: "NVIDIA GTC 2025"
      },
      media: "clawVideo",
      projectLink: "https://www.nvidia.com/en-us/on-demand/session/gtc25-dlit71288/",
      type: "NVIDIA"
    }
  ],

  education: [
    {
      title: {
        en: "University of Waterloo",
        zh: "滑铁卢大学"
      },
      date: "B.A.Sc. · Mechatronics Engineering",
      para: {
        en: "Bachelor of Applied Science in Mechatronics Engineering with AI Option, with Distinction",
        zh: "机械电子工程应用科学学士学位，人工智能方向，优秀毕业生"
      },
      imageSrc: WaterlooLogo,
      workImg: WaterlooImg,
      url: "https://uwaterloo.ca/mechanical-mechatronics-engineering/",
      description: [
        {
          en: "GPA: 3.7, specialized in robotics, artificial intelligence, control systems, and embedded systems",
          zh: "GPA: 3.7，专攻机器人、人工智能、控制系统和嵌入式系统"
        },
        {
          en: "Clubs: WATonomous / SAE AutoDrive Challenge (Level 4 Autonomous Vehicle), Waterloop (Hyperloop)",
          zh: "社团：WATonomous / SAE 自动驾驶挑战赛（四级自动驾驶车辆）、Waterloop（超级高铁）"
        },
        {
          en: "Scholarships: President's Scholarship, Sandford Fleming Foundation Award, Term Dean's Honours List",
          zh: "奖学金：校长奖学金、Sandford Fleming 基金会奖、学期院长荣誉榜"
        }
      ]
    },
    {
      title: {
        en: "Active & Interactive Robotics Lab",
        zh: "主动与交互机器人实验室（UWaterloo）"
      },
      date: "Undergraduate Research · IEEE RA-L",
      para: {
        en: "Researched human perception of robot behaviors under Dr. Yue Hu; published in IEEE Robotics and Automation Letters",
        zh: "在胡越博士指导下研究人类对机器人行为的感知，成果发表于 IEEE Robotics and Automation Letters"
      },
      imageSrc: AirLabLogo,
      workImg: AirLabImg,
      url: "https://ieeexplore.ieee.org/document/10873829",
      description: [
        {
          en: "N. Abdulazeem, N. Sichert, J. Y. Feng and Y. Hu, 'Quantifying Human Mental State in Interactive pHRI: Maintaining Balancing,' IEEE Robotics and Automation Letters, vol. 10, no. 3, pp. 2958-2965, March 2025",
          zh: "N. Abdulazeem, N. Sichert, J. Y. Feng 和 Y. Hu，'量化交互式 pHRI 中的人类心理状态：保持平衡'，IEEE Robotics and Automation Letters，第10卷第3期，2025年3月"
        },
        {
          en: "Designed and ran experiments analyzing how active versus passive robot behaviors affect human cognition during balancing tasks",
          zh: "协助设计与执行实验，分析主动与被动机器人行为对平衡任务中人类认知状态的影响"
        },
        {
          en: "Developed pose-tracking scripts and ROS control workflows for the Sawyer robot manipulator",
          zh: "开发参与者姿态追踪脚本，并使用 ROS 控制 Sawyer 机械臂"
        }
      ]
    },
    {
      title: {
        en: "Stanford University",
        zh: "斯坦福大学"
      },
      date: "M.S. in Electrical Engineering · In Progress",
      para: {
        en: "Master of Science in Electrical Engineering (In Progress)",
        zh: "电子工程理学硕士学位（进行中）"
      },
      imageSrc: StanfordLogo,
      workImg: StanfordImg,
      url: "https://www.stanford.edu/",
      description: [
        {
          en: "Coursework focused on control systems, perception, and reinforcement learning for autonomous mobile robots",
          zh: "课程专注于自主移动机器人的控制系统、感知与强化学习"
        },
        {
          en: "Courses: CS 237A Principles of Robot Autonomy I, CS 237B Principles of Robot Autonomy II, EE 227 Robot Perception",
          zh: "课程：CS 237A 机器人自主原理 I、CS 237B 机器人自主原理 II、EE 227 机器人感知"
        }
      ]
    }
  ],

  projects: [
    {
      title: {
        en: "Tesla",
        zh: "特斯拉"
      },
      position: {
        en: "Body Controls Firmware Intern - Tesla",
        zh: "车身控制固件实习生 - Tesla"
      },
      para: {
        en: "Developed lighting firmware and software-in-the-loop tests for new Model S/X and Tesla Semi, including Semi Light Test.",
        zh: "为新款 Model S/X 和 Tesla Semi 开发照明固件与软件在环测试，包括 Semi Light Test。"
      },
      imageSrc: TeslaIcon,
      date: "05/2022 - 08/2022",
      description: [
        {
          en: 'Designed the "Semi Light Test" feature for controlling 19 unique light groups across 4 controllers in C, showcased at the Tesla Semi Delivery Event',
          zh: '使用 C 语言设计“Semi Light Test”功能，通过 4 个控制器协同控制 19 个灯组，并在 Tesla Semi 交付活动上展示'
        },
        {
          en: 'Built Python simulations and software-in-the-loop tests for Semi lighting controllers, and authored specifications in Polarion',
          zh: '使用 Python 建立 Semi 照明控制器仿真与软件在环测试（SIL），并在 Polarion 上编写技术规范'
        },
        {
          en: "Implemented lighting fault detection and CAN alerts for Tesla Semi headlamps, rear lamps, and trailer lights in C",
          zh: "通过 CAN 网络使用 C 语言实现 Tesla Semi 前照灯、尾灯和拖车灯的故障检测与警报"
        },
        {
          en: "Created self-tests for Semi mirror, latch, steering wheel, and horn systems and resolved Model S/X lighting firmware bugs in C",
          zh: "创建 Semi 车镜、门锁、方向盘和喇叭自检功能，并修复 Model S/X 照明固件缺陷"
        }
      ],
      workImg: TeslaImg
    },
    {
      title: {
        en: "NVIDIA",
        zh: "英伟达"
      },
      position: {
        en: "Robotics Simulation Engineer Intern - NVIDIA",
        zh: "机器人仿真工程师实习生 - NVIDIA"
      },
      para: {
        en: "Built physics-based Isaac Sim sensors and quadruped simulation extensions before returning full-time.",
        zh: "在全职加入前，于实习期间开发 Isaac Sim 物理传感器与四足机器人仿真扩展。"
      },
      imageSrc: NVIDIAIcon,
      date: "01/2022 - 04/2022",
      description: [
        {
          en: "Developed the Unitree A1 quadruped extension in Isaac Sim using Python, integrating gait controllers and ROS, ROS 2, and visual-inertial odometry examples",
          zh: "使用 Python 为 Isaac Sim 开发宇树 A1 四足机器人扩展，集成步态控制器并创建 ROS、ROS 2 与视觉惯性里程计示例"
        },
        {
          en: "Created the Isaac Sensor extension for physics-based contact and IMU sensors in C++ and Python, authoring USD schemas for runtime inspection and tuning",
          zh: "使用 C++ 和 Python 开发接触传感器与 IMU 等物理传感器扩展，并编写 USD Schema 支持运行时可视化与调参"
        },
        {
          en: "Wrote Sphinx documentation and unit tests for the quadruped and Isaac sensor extensions",
          zh: "使用 Sphinx 编写用户手册与扩展文档，并为四足与传感器扩展建立单元测试"
        }
      ],
      workImg: IsaacSim
    },
    {
      title: {
        en: "ecobee",
        zh: "ecobee"
      },
      position: {
        en: "Embedded Systems Developer Intern - ecobee",
        zh: "嵌入式系统开发实习生 - ecobee"
      },
      para: {
        en: "Built production test fixtures and computer-vision/ML inspection algorithms for smart thermostat manufacturing.",
        zh: "为智能恒温器产线构建测试治具与计算机视觉/机器学习检测算法。"
      },
      imageSrc: EcobeeIcon,
      date: "05/2021 - 08/2021",
      description: [
        {
          en: "Built a C++ and OpenCV display-inspection pipeline detecting discoloration, 0.5 mm alignment offsets, dead pixels under 0.2 mm, and connector defects",
          zh: "使用 C++ 与 OpenCV 构建显示检测流程，可检测变色、0.5 mm 对齐偏移、0.2 mm 以下坏点与连接不良"
        },
        {
          en: "Prototyped CNN-based LCD inspection with TensorFlow reaching 98% accuracy and winning the Best Internal Impact Award",
          zh: "使用卷积神经网络与 TensorFlow 构建 LCD 检测原型，准确率达 98%，获最佳内部影响奖"
        },
        {
          en: "Designed and built firmware-flashing and ZPL label-printing software in C++/CLI and .NET with MongoDB test logging",
          zh: "使用 C++/CLI 与 .NET 开发固件刷写与 ZPL 标签打印软件，并通过 MongoDB 记录测试结果"
        },
        {
          en: "Documented and deployed the station software at Wistron for Design Validation Test, supporting 80,000+ units per month at production scale",
          zh: "编写文档并在纬创工厂部署设计验证测试系统，支持满产每月 80,000+ 台设备刷写"
        }
      ],
      workImg: ecobee
    },
    {
      title: {
        en: "University of Waterloo ECE",
        zh: "滑铁卢大学电子与计算机工程系"
      },
      position: {
        en: "Undergraduate Teaching Assistant - University of Waterloo",
        zh: "本科课程助教 - 滑铁卢大学"
      },
      para: {
        en: "Taught introductory C++ tutorials, built automated grading tools, and designed assessments for 300+ students.",
        zh: "负责 C++ 入门课程实验与辅导，开发自动评测工具并参与 300+ 名学生的课程考核设计。"
      },
      imageSrc: UwaterlooIcon,
      date: "09/2020 - 12/2020",
      description: [
        {
          en: "Designed quiz, midterm, and final questions and built C++/Python automated grading tools for 300+ submissions per assessment",
          zh: "设计测验、期中与期末题目，并使用 C++ 和 Python 构建面向 300+ 份作业的自动评分与即时反馈系统"
        },
        {
          en: "Led weekly lab and help sessions covering dynamic memory, object-oriented programming, pointers, and linked lists",
          zh: "主持实验与答疑课程，讲解动态内存管理、面向对象编程、指针与链表等核心概念"
        }
      ],
      workImg: uwaterloo
    },
    {
      title: {
        en: "Khazanah Nasional Americas",
        zh: "国库控股美洲分部"
      },
      position: {
        en: "Innovation Developer Intern - Khazanah",
        zh: "创新开发实习生 - Khazanah"
      },
      para: {
        en: "Built autonomous drone, computer-vision, and VR prototypes for emerging-technology evaluation.",
        zh: "构建自主无人机、计算机视觉与 VR 原型，支持前沿技术评估。"
      },
      imageSrc: KhazanahIcon,
      date: "01/2020 - 04/2020",
      description: [
        {
          en: "Created an Asteroids-inspired VR game for Oculus Go using C#, Unity, Blender, and Oculus SDK with custom physics and cloud leaderboards",
          zh: "使用 C#、Unity、Blender 和 Oculus SDK 为 Oculus Go 开发 VR 游戏，包含碰撞物理与云端排行榜"
        },
        {
          en: "Developed Python OpenCV drone control for ArUco marker tracking up to 10 m away with autonomous takeoff and landing",
          zh: "使用 Python OpenCV 开发无人机视觉控制，支持 10 米内 ArUco 标记跟踪及自主起降"
        },
        {
          en: "Designed an open-source UV-C sterilization device that won the Instructables Editor's Choice Award",
          zh: "设计并开源 UV-C 智能消毒设备，获 Instructables 编辑选择奖"
        }
      ],
      workImg: Khazanah
    },
    {
      title: {
        en: "Ford Motor Company",
        zh: "福特汽车公司"
      },
      position: {
        en: "Manufacturing Software Developer Intern - Ford",
        zh: "制造软件开发实习生 - Ford"
      },
      para: {
        en: "Automated F-150 Lightning infotainment firmware flashing and hardware-in-the-loop validation.",
        zh: "使用 Jenkins、TestStand、C# 和 Python 自动化 F-150 Lightning 车载系统刷写与测试。"
      },
      imageSrc: FordIcon,
      date: "05/2019 - 08/2019",
      description: [
        {
          en: "Developed a Jenkins automation pipeline to flash and test infotainment devices across 100+ daily regression runs",
          zh: "开发 Jenkins 自动化流水线，每日执行 100+ 次车载设备刷写与回归测试"
        },
        {
          en: "Prototyped a parallel chip-flashing utility in C# and TestStand, doubling station throughput",
          zh: "使用 C# 与 TestStand 构建多芯片并行刷写工具，将刷写效率提升 2 倍以上"
        },
        {
          en: "Reproduced and debugged infotainment audio issues using TestStand and .NET test harnesses",
          zh: "使用 TestStand 与 .NET 测试平台复现并定位信息娱乐芯片音频问题"
        }
      ],
      workImg: ford
    }
  ],

  personalNote: {
    en: "Outside of work, I play clarinet with the San Jose Metropolitan Band, keep up with my accordion, and am back in the classroom taking courses at Stanford. The rest of the time I am out on a hiking trail, scouting good spots to fly my drone, or wandering around the city.",
    zh: "工作之余，我在圣何塞市立管乐团吹单簧管，平时也会拉手风琴，同时在斯坦福继续修读课程。其余时间，我大多在山间徒步、寻找飞无人机的地方，或在城市里散步探索。"
  },

  projectsCarouselItems: [
    {
      media: "capstoneVideo",
      type: "video",
      featured: true,
      tag: { en: "Multi-Robot SLAM", zh: "多机器人 SLAM" },
      title: {
        en: "Autonomous Multi-Robot Warehouse SLAM",
        zh: "自主多机器人仓库探索与 SLAM"
      },
      subtitle: {
        en: "UWaterloo Mechatronics Capstone · ROS & Gazebo",
        zh: "滑铁卢大学机电工程毕业设计 · ROS 与 Gazebo"
      },
      description: {
        en: "Built a multi-robot exploration and SLAM system capable of mapping an 80,000 sq ft virtual warehouse through coordinated frontier-based autonomy.",
        zh: "构建多机器人协同探索与 SLAM 系统原型，通过自主协同完成约 7,500 平方米虚拟仓库的建图。"
      },
      buttons: [
        {
          text: { en: "GitHub", zh: "GitHub" },
          url: "https://github.com/FireScopeRobotics"
        }
      ]
    },
    {
      media: "pilotImg",
      type: "image",
      featured: true,
      tag: { en: "Aviation", zh: "航空飞行" },
      title: {
        en: "Fixed-Wing, Glider & Drone Pilot",
        zh: "固定翼、滑翔机与无人机飞行员"
      },
      subtitle: {
        en: "Transport Canada PPL (2017) & Glider License (2016) · CA + US Drone Certificates",
        zh: "加拿大私人飞机执照（2017）与滑翔机执照（2016）· 加美无人机执照"
      },
      description: {
        en: "Certified to fly single-engine aircraft, gliders, and unmanned aerial systems across North America—hands-on flight dynamics experience that informs my aerial robotics work.",
        zh: "具备北美单发固定翼飞机、滑翔机及无人机飞行资质，将真实飞行动力学经验融入飞行机器人研发。"
      },
      buttons: []
    },
    {
      media: "airplaneImage",
      type: "image",
      featured: true,
      tag: { en: "Aerial Robotics", zh: "飞行机器人" },
      title: {
        en: "Custom Remote-Controlled Aircraft",
        zh: "自研遥控固定翼飞机"
      },
      subtitle: {
        en: "Raspberry Pi & ESP8266 · Two-Person Hardware/Firmware Build",
        zh: "树莓派与 ESP8266 · 双人硬件与飞控自研项目"
      },
      description: {
        en: "Designed and fabricated a fixed-wing airplane from scratch, covering both the mechanical airframe and onboard wireless flight-control architecture.",
        zh: "从零设计并制造固定翼飞机，完成气动机身结构与机载无线飞控软件架构开发。"
      },
      buttons: [
        {
          text: { en: "GitHub", zh: "GitHub" },
          url: "https://github.com/The-Airplane-Project/Remote-Controlled-Airplane"
        }
      ]
    },
    {
      media: "watoImage",
      type: "image",
      featured: false,
      tag: { en: "Autonomous Driving", zh: "自动驾驶" },
      title: {
        en: "WATonomous Level 4 Autonomous Vehicle",
        zh: "WATonomous 四级自动驾驶车队"
      },
      subtitle: {
        en: "SAE AutoDrive Challenge · Chevrolet Bolt EV Platform",
        zh: "SAE AutoDrive 自动驾驶挑战赛 · 雪佛兰 Bolt 平台"
      },
      description: {
        en: "Developed ROS nodes for local trajectory planning and the Model Predictive Control (MPC) stack for University of Waterloo's self-driving vehicle team.",
        zh: "为滑铁卢大学自动驾驶车队开发基于 ROS 的局部轨迹规划与模型预测控制（MPC）算法栈。"
      },
      buttons: [
        {
          text: { en: "Team Website", zh: "车队官网" },
          url: "https://www.watonomous.ca/"
        }
      ]
    },
    {
      media: "wearableImg",
      type: "image",
      featured: false,
      tag: { en: "1st Place Hackathon", zh: "黑客松第一名" },
      title: {
        en: "Wearable Assistive & Safety Hardware",
        zh: "可穿戴辅助导航与骑行安全硬件"
      },
      subtitle: {
        en: "1st Place Overall — MakeUofT 2019",
        zh: "总冠军（第一名）—— MakeUofT 2019"
      },
      description: {
        en: "VisionSense haptically guides users with visual impairments around obstacles, while NightLight uses motion sensing to trigger turn signals for cyclists at night.",
        zh: "VisionSense 通过触觉反馈帮助视障用户避障；NightLight 通过运动传感在夜间自动触发骑行转向灯。"
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
      media: "webappImg",
      type: "image",
      featured: false,
      tag: { en: "Cloud & ML Award", zh: "谷歌云奖项" },
      title: {
        en: "Intelibatch & Purrtector Web Applications",
        zh: "Intelibatch 与 Purrtector 网络应用"
      },
      subtitle: {
        en: "Best Use of Google Cloud Award — nwHacks 2021",
        zh: "Google Cloud 最佳使用奖 —— nwHacks 2021"
      },
      description: {
        en: "Intelibatch predicts regional COVID-19 case trends with React, Flask, and TensorFlow to optimize pooled testing. Purrtector is a Chrome extension that rewards sustainable habits.",
        zh: "Intelibatch 使用 React、Flask 与 TensorFlow 预测疫情趋势并优化混检规模；Purrtector 通过数字宠物鼓励环保习惯。"
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
      media: "mte380Img",
      type: "image",
      featured: false,
      tag: { en: "Mechatronics", zh: "机电系统" },
      title: {
        en: "Autonomous Line-Following Robot",
        zh: "自主循线机器人"
      },
      subtitle: {
        en: "2nd Highest Score · UWaterloo MTE 380 Competition",
        zh: "滑铁卢大学 MTE 380 课程竞赛第二高分"
      },
      description: {
        en: "Led mechanical CAD in SolidWorks, managed the bill of materials, and coordinated mechanical, electrical, and firmware integration as project manager.",
        zh: "负责 SolidWorks 机械设计与物料清单管理，并作为项目经理统筹机械、电气与固件集成。"
      },
      buttons: [
        {
          text: { en: "GitHub", zh: "GitHub" },
          url: "https://github.com/B-O-F-A"
        }
      ]
    },
    {
      media: "hisecurityImage",
      type: "image",
      featured: false,
      tag: { en: "Computer Vision", zh: "计算机视觉" },
      title: {
        en: "HiSecurity Pan-Tilt Face Tracker",
        zh: "HiSecurity 云台人脸追踪系统"
      },
      subtitle: {
        en: "Hack the North 2019",
        zh: "Hack the North 2019"
      },
      description: {
        en: "Built a motorized camera system using OpenCV, scikit-learn, and onboard stepper motors to physically track and identify faces in real time.",
        zh: "使用 OpenCV、scikit-learn 与步进电机云台构建实时人脸识别与物理跟踪摄像头系统。"
      },
      buttons: [
        {
          text: { en: "Devpost", zh: "查看项目" },
          url: "https://devpost.com/software/acs-htn2019"
        }
      ]
    },
    {
      media: "vexImg",
      type: "image",
      featured: false,
      tag: { en: "Competitive Robotics", zh: "机器人竞赛" },
      title: {
        en: "VEX Robotics Competition",
        zh: "VEX 机器人竞赛"
      },
      subtitle: {
        en: "Alberta Provincial Finalists (2017, 2018)",
        zh: "阿尔伯塔省锦标赛决赛队伍（2017、2018）"
      },
      description: {
        en: "Built holonomic drives and reverse double four-bar lifts, and programmed custom PID controllers in C across three competition seasons.",
        zh: "在三个赛季中设计全向底盘与反向双四杆机构，并使用 C 语言从零实现 PID 控制器。"
      },
      buttons: [
        {
          text: { en: "News Feature", zh: "新闻报道" },
          url: "https://globalnews.ca/video/3355924/sir-winston-churchill-students-head-to-vex-robotics-world-championship/"
        }
      ]
    }
  ],

  skills: [
    {
      title: { en: "Systems & GPU", zh: "系统与并行计算" },
      img: clangIcon,
      para: "C, C++, C#, CUDA"
    },
    {
      title: { en: "Simulation & Scientific", zh: "仿真与科学计算" },
      img: codeIcon,
      para: "Python, MATLAB, R"
    },
    {
      title: { en: "Embedded Hardware", zh: "嵌入式硬件" },
      img: RPIIcon,
      para: "Arduino, Raspberry Pi, ESP8266"
    },
    {
      title: { en: "Perception & Learning", zh: "感知与机器学习" },
      img: openCVIcon,
      para: "OpenCV, TensorFlow, PyTorch"
    },
    {
      title: { en: "CAD & 3D Assets", zh: "机械设计与三维资产" },
      img: SolidworksIcon,
      para: "SolidWorks, AutoCAD, Blender"
    },
    {
      title: { en: "Robot Middleware", zh: "机器人中间件" },
      img: rosIcon,
      para: "ROS, ROS 2, Gazebo"
    },
    {
      title: { en: "NVIDIA Robotics", zh: "NVIDIA 机器人平台" },
      img: isaacsIcon,
      para: "Isaac Sim, Isaac Lab, OpenUSD"
    },
    {
      title: { en: "Aviation Credentials", zh: "飞行资质" },
      img: airplaneIcon,
      para: {
        en: "Private Pilot, Glider Pilot, Drone Operator (CA + US)",
        zh: "私人飞行执照、滑翔机执照、无人机执照（加拿大 + 美国）"
      }
    }
  ],

  contactSubHeading: {
    en: "Let's chat about robotics, simulation, or physical AI.",
    zh: "欢迎交流机器人、仿真系统或具身智能。"
  },

  social: [
    {
      img: githubIcon,
      label: "GitHub",
      url: "https://github.com/stevenf7"
    },
    {
      img: googleScholarIcon,
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?hl=en&user=0YSkT7UAAAAJ"
    },
    {
      img: orcidIcon,
      label: "ORCID",
      url: "https://orcid.org/0009-0006-0001-1668"
    },
    {
      img: linkedinIcon,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/stevenfeng7/"
    }
  ]
}

export default siteData
