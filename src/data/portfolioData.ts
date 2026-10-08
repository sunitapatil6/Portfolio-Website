export interface Patent {
  id: number;
  title: string;
  appNumber: string;
  filingDate: string;
  publicationDate: string;
  category: 'Healthcare & AI' | 'Vision & Biometrics' | 'Cybersecurity & Systems' | 'IoT & Smart Tech' | 'Robotics & Assistive';
  summary?: string;
}

export interface Publication {
  id: number;
  type: 'journal' | 'conference';
  title: string;
  venue: string;
  year: number;
  indexing?: string[];
  doi?: string;
  url?: string;
  details?: string;
  highlight?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  status?: string;
  rank?: string;
}

export interface ExperienceItem {
  designation: string;
  institution: string;
  location: string;
  duration: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  grade?: string;
}

export interface WorkshopOrganized {
  title: string;
  role: string;
  location: string;
  date: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Prof. Sunita Ramesh Patil",
    formalName: "Ms. Sunita Ramesh Patil",
    title: "Assistant Professor in Department of Computer Engineering",
    institution: "Dr. D. Y. Patil Institute of Technology (DYPIT), Pimpri, Pune",
    previousInstitution: "Dr. D. Y. Patil College of Engineering, Talegaon, Pune",
    affiliationShort: "DYPIT, Pimpri · Savitribai Phule Pune University (SPPU)",
    experienceYears: "15+ Years",
    totalExperienceFormatted: "15 Years 7 Months in Higher Education",
    primaryEmail: "sunitapatil6@gmail.com",
    institutionalEmail: "Sunita.patil@dypvp.edu.in",
    phoneNumbers: ["+91 9284480140", "+91 7875503877"],
    address: "Flat No. 202, Suvali Apt, Near Treasure Society, Pimple Gurav, Pune - 411061, Maharashtra, India",
    dateOfBirth: "24th January 1988",
    maritalStatus: "Married",
    journalEditorial: {
      name: "Scienxt Journal of Neural Networks and Deep Learning",
      role: "Journal Editor & Reviewer",
      url: "https://scienxt.com/editorial-board-sjnndl/"
    },
    bioSummary: "Experienced Assistant Professor and Ph.D. Scholar with over 15 years of academic and research excellence in Computer Engineering. Inventor of 23 published patents and author of 45+ peer-reviewed publications across Scopus, Web of Science, Q1 Elsevier, and IEEE proceedings. Author of the university curriculum textbook 'Augmented & Virtual Reality' for SPPU. Dedicated educator specializing in Deep Learning, Cognitive Computing, AI Healthcare Diagnostics, and Cloud Security.",
    strengths: [
      "Good Academician & Mentor with 15+ years classroom impact",
      "Confident Administrator across NAAC, NBA, DAC & Exam bodies",
      "Prolific Researcher with 23 Patents and 45+ Research Papers",
      "Curriculum Revision Coordinator for SPPU BE-IT Pattern",
      "Empathetic Student Counselor & Project Guide"
    ]
  },

  metrics: [
    { label: "Patents Published", value: "23", caption: "Indian Patent Office" },
    { label: "Research Publications", value: "45+", caption: "Scopus, Q1 & IEEE" },
    { label: "Teaching Experience", value: "15.5+", caption: "Years in Academia" },
    { label: "Book Published", value: "1", caption: "SPPU Syllabus Course" },
    { label: "Govt Copyrights", value: "3", caption: "Literary & Software Works" }
  ],

  awards: [
    {
      title: "Durga Shakti Award",
      year: "2025",
      org: "Prestigious Institutional & Social Recognition",
      description: "Conferred for outstanding dedication to education, research leadership, and societal impact."
    },
    {
      title: "Best Paper Award",
      year: "2024",
      org: "8th IEEE ICCUBEA 2024",
      description: "Awarded for the paper 'Early Detection of Cognitive Skill Impairments using Machine Learning'."
    },
    {
      title: "1st Rank in Master of Engineering",
      year: "2014",
      org: "University of Pune",
      description: "Graduated with 1st rank honors across the university in M.E. postgraduate degree."
    },
    {
      title: "Topper Rank in Graphology Course",
      year: "2025",
      org: "Specialized Analysis Program",
      description: "Secured top merit rank in behavioral handwriting analysis and psychology profiling."
    },
    {
      title: "Elite Grade in NPTEL - Introduction to Research",
      year: "2019",
      org: "IIT Madras / NPTEL (MHRD Govt of India)",
      description: "Secured elite academic ranking in research design, ethics, and publication rigor."
    },
    {
      title: "Elite Grade in NPTEL - Introduction to R Programming",
      year: "2018",
      org: "IIT Kanpur / NPTEL (MHRD Govt of India)",
      description: "Secured elite ranking in statistical computing and data analysis."
    }
  ],

  education: [
    {
      degree: "Ph.D. in Computer Science & Engineering (Pursuing)",
      institution: "Amity University, Mumbai",
      year: "In Progress",
      score: "9.3 SGPA",
      status: "Doctoral Research",
      rank: "Research Scholar in Deep Learning & Cognitive Computing"
    },
    {
      degree: "Master of Engineering (M.E.) in Computer Engineering",
      institution: "University of Pune",
      year: "May 2014",
      score: "7.8 CGPA",
      status: "Graduated",
      rank: "Secured 1st Rank in Master of Engineering"
    },
    {
      degree: "Bachelor of Engineering (B.E.) in Information Technology / Computer",
      institution: "University of Mumbai",
      year: "May 2009",
      score: "71.00%",
      status: "First Class with Distinction",
      rank: "Degree Awarded"
    },
    {
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "Maharashtra State Board",
      year: "June 2005",
      score: "75.50%",
      status: "Distinction",
      rank: "State Board Merit"
    },
    {
      degree: "Secondary School Certificate (SSC - 10th)",
      institution: "Maharashtra State Board",
      year: "May 2003",
      score: "74.60%",
      status: "Distinction",
      rank: "State Board Merit"
    }
  ] as EducationItem[],

  workExperience: [
    {
      designation: "Assistant Professor",
      institution: "Dr. D. Y. Patil Institute of Technology (DYPIT), Pimpri, Pune",
      location: "Pimpri, Pune",
      duration: "27 Dec 2021 – Present",
      isCurrent: true,
      responsibilities: [
        "Delivering core lectures for B.E. and T.E. in Machine Learning, Cloud Computing, Core/Adv Java, and Data Analytics.",
        "Serving as Department Academic Coordinator (DAC) overseeing academic schedules, syllabi compliance, and student performance.",
        "Leading B.E. Final Year Project Coordination, mentoring capstone innovations, patent filings, and IEEE publications.",
        "Coordinating NBA Criteria-10 and NAAC Criteria-4 documentation, audit compliance, and quality frameworks.",
        "Acting as Curriculum Design Member for School of Technology and Research, Pimpri, Pune.",
        "Managing Departmental Financial Budgets and research resource allocations."
      ]
    },
    {
      designation: "Assistant Professor",
      institution: "Dr. D. Y. Patil College of Engineering, Talegaon, Pune",
      location: "Talegaon Dabhade, Pune",
      duration: "12 Feb 2012 – 24 Dec 2021 (~10 Years)",
      isCurrent: false,
      responsibilities: [
        "Taught undergraduate courses in Software Engineering, Java Programming, Operating Systems, and Web Engineering.",
        "Spearheaded NAAC Criteria-3 and Criteria-4 departmental documentation and assessment cycles.",
        "Coordinated Smart India Hackathon (SIH 2017 & SIH 2022) college chapters and mentored winning student squads.",
        "Served as SPPU In-Semester Exam Coordinator continuously from A.Y. 2015 to A.Y. 2021.",
        "Organized national conferences NCACIT-15, NCACIT-16, and NCACIT-18.",
        "Led syllabus revision as SPPU BE-IT 2015 Pattern Revision Coordinator."
      ]
    },
    {
      designation: "Lecturer",
      institution: "Institute of Advanced Studies in Education (IASE), Aundh, Pune",
      location: "Aundh, Pune",
      duration: "Feb 2010 – March 2011",
      isCurrent: false,
      responsibilities: [
        "Delivered computer engineering fundamentals, programming laboratories, and student mentorship.",
        "Conducted laboratory practicals in C/C++ and database management."
      ]
    }
  ] as ExperienceItem[],

  book: {
    title: "Augmented & Virtual Reality",
    courseSpecification: "SPPU Course 2019 - T.E. (Comp) Sem-VI (Elective-II)",
    publisher: "Technical Publications",
    isbn: "9789355850744",
    publicationDate: "April 2022",
    description: "A comprehensive university textbook curated specifically for Savitribai Phule Pune University (SPPU) Third Year Computer Engineering students. Covers spatial tracking, stereoscopic display technologies, AR/VR mathematical models, real-time rendering pipelines, interactive virtual environments, and cutting-edge industrial applications.",
    topics: [
      "Fundamentals of Virtual Reality & Sensory Modalities",
      "Geometric Modeling & Real-Time Rendering Pipelines",
      "Head-Mounted Displays, Optics & Spatial Audio",
      "Augmented Reality Tracking & Pose Estimation (SLAM)",
      "Interactive 3D Frameworks & Game Engine Integrations",
      "Medical, Defense & Industrial Metaverse Applications"
    ]
  },

  patents: [
    {
      id: 1,
      title: "Anonymous Complaints Resolver System",
      appNumber: "202621053827",
      filingDate: "28/04/2026",
      publicationDate: "19/06/2026",
      category: "Cybersecurity & Systems",
      summary: "Cryptographically secured, privacy-preserving whistleblowing and dispute resolution engine with zero-knowledge verification."
    },
    {
      id: 2,
      title: "Enhancing Visual Clarity in Satellite Imagery for Remote Sensing and Analysis",
      appNumber: "202621053847",
      filingDate: "28/04/2026",
      publicationDate: "19/06/2026",
      category: "Vision & Biometrics",
      summary: "Deep super-resolution neural network pipeline for atmospheric distortion correction and multi-spectral image dehazing."
    },
    {
      id: 3,
      title: "Heart Attack Risk Prediction using Retinal Images",
      appNumber: "202621053896",
      filingDate: "28/04/2026",
      publicationDate: "19/06/2026",
      category: "Healthcare & AI",
      summary: "Non-invasive cardiovascular disease forecasting through microvascular retinal fundus image analysis and attention networks."
    },
    {
      id: 4,
      title: "AutoAttend: Manage Attendance Effortlessly",
      appNumber: "202621056921",
      filingDate: "05/05/2026",
      publicationDate: "03/07/2026",
      category: "Vision & Biometrics",
      summary: "Automated real-time multi-face recognition attendance logging system with anti-spoofing and liveness detection."
    },
    {
      id: 5,
      title: "Magic Mirror",
      appNumber: "202621057309",
      filingDate: "06/05/2026",
      publicationDate: "03/07/2026",
      category: "IoT & Smart Tech",
      summary: "Interactive smart reflective surface with integrated health vitals monitoring, ambient notifications, and voice UI."
    },
    {
      id: 6,
      title: "Health Helper - Medical Data Storage and Analysis System",
      appNumber: "202621057321",
      filingDate: "06/05/2026",
      publicationDate: "03/07/2026",
      category: "Healthcare & AI",
      summary: "Federated health record storage and longitudinal analytics framework with end-to-end homomorphic encryption."
    },
    {
      id: 7,
      title: "AI-Powered Blind Reading",
      appNumber: "202621057374",
      filingDate: "06/05/2026",
      publicationDate: "03/07/2026",
      category: "Robotics & Assistive",
      summary: "Wearable edge AI device translating printed text in vernacular languages into tactile and natural auditory synthesis."
    },
    {
      id: 8,
      title: "Secure Information Sharing using Nested Steganography",
      appNumber: "202621058757",
      filingDate: "08/05/2026",
      publicationDate: "03/07/2026",
      category: "Cybersecurity & Systems",
      summary: "Multi-layered payload embedding across high-entropy image carriers resilient against statistical steganalysis."
    },
    {
      id: 9,
      title: "Intelligent Book Recommendation System using AI and Deep Learning",
      appNumber: "202521022648",
      filingDate: "13/03/2025",
      publicationDate: "28/03/2025",
      category: "Cybersecurity & Systems",
      summary: "Contextual semantic graph embedding and reader sentiment analysis for precise literature and textbook discovery."
    },
    {
      id: 10,
      title: "AI-Driven Cyber Attack Detection",
      appNumber: "202521022739",
      filingDate: "13/03/2025",
      publicationDate: "28/03/2025",
      category: "Cybersecurity & Systems",
      summary: "Real-time anomaly and zero-day intrusion detection engine operating over high-speed network packet streams."
    },
    {
      id: 11,
      title: "ShellDB - Elite Technology for Unyielding Data Breach Countermeasures",
      appNumber: "202521023350",
      filingDate: "17/03/2025",
      publicationDate: "28/03/2025",
      category: "Cybersecurity & Systems",
      summary: "Containerized database protection architecture isolating malicious network activity with dynamic honeypot traps."
    },
    {
      id: 12,
      title: "A Nutrition Recommender System using Web Development, Machine Learning, and Generative AI",
      appNumber: "202521025798",
      filingDate: "21/03/2025",
      publicationDate: "04/04/2025",
      category: "Healthcare & AI",
      summary: "Personalized dietary planning utilizing generative foundation models and user biomarker telemetry."
    },
    {
      id: 13,
      title: "AI-Driven Advanced PPE Compliance Monitoring",
      appNumber: "202521025884",
      filingDate: "21/03/2025",
      publicationDate: "04/04/2025",
      category: "Vision & Biometrics",
      summary: "Computer vision surveillance inspecting helmet, vest, and safety glove compliance across hazardous industrial sites."
    },
    {
      id: 14,
      title: "Louvain algorithm and Anti-Benford Approach for Fraud Detection in Financial Networks",
      appNumber: "202521025821",
      filingDate: "21/03/2025",
      publicationDate: "04/04/2025",
      category: "Cybersecurity & Systems",
      summary: "Graph community clustering coupled with Benford's Law anomaly detection for tracing illicit money laundering loops."
    },
    {
      id: 15,
      title: "Smart Water Bottle with Hydration Monitoring and Alert System",
      appNumber: "202521040735",
      filingDate: "28/04/2025",
      publicationDate: "23/05/2025",
      category: "IoT & Smart Tech",
      summary: "IoT connected hydration apparatus tracking volumetric fluid intake and temperature with companion app alerts."
    },
    {
      id: 16,
      title: "Garden Expert",
      appNumber: "202521020621",
      filingDate: "07/03/2025",
      publicationDate: "21/03/2025",
      category: "IoT & Smart Tech",
      summary: "Automated smart agricultural soil nutrient probe and botanical disease identification platform."
    },
    {
      id: 17,
      title: "Smart Knee Pain Relief System",
      appNumber: "202521037301",
      filingDate: "17/04/2025",
      publicationDate: "09/05/2025",
      category: "Healthcare & AI",
      summary: "Therapeutic wearable device utilizing adaptive thermal compression and biofeedback for musculoskeletal pain relief."
    },
    {
      id: 18,
      title: "Human Face Recognition for Video Surveillance Using Deep Learning",
      appNumber: "202321059490",
      filingDate: "05/09/2023",
      publicationDate: "13/10/2023",
      category: "Vision & Biometrics",
      summary: "Deep convolutional embedding model for low-resolution, occluded face detection in live CCTV streams."
    },
    {
      id: 19,
      title: "Diabetes Prediction System Using Ensemble Random Forest Logistic Regression And K-Nearest Neighbor",
      appNumber: "202321059491",
      filingDate: "05/09/2023",
      publicationDate: "13/10/2023",
      category: "Healthcare & AI",
      summary: "High-accuracy ensemble diagnostic pipeline combining non-linear trees and metric classifiers for early diabetic risk."
    },
    {
      id: 20,
      title: "Sign Language Detection and Recognition Using Machine Learning",
      appNumber: "202321059460",
      filingDate: "05/09/2023",
      publicationDate: "13/10/2023",
      category: "Robotics & Assistive",
      summary: "Vision-based continuous gesture recognition translating Indian Sign Language into textual and spoken language."
    },
    {
      id: 21,
      title: "Autonomous Path Finding Robot",
      appNumber: "202321059465",
      filingDate: "05/09/2023",
      publicationDate: "13/10/2023",
      category: "Robotics & Assistive",
      summary: "Self-navigating robotic rover with obstacle avoidance, LiDAR point clouds, and dynamic A* trajectory planning."
    },
    {
      id: 22,
      title: "Improved Multi-Label Drug-Drug Interaction Prediction using Capsule Network Using Biomedical Knowledge Graph Embedding",
      appNumber: "202321059458",
      filingDate: "05/09/2023",
      publicationDate: "13/10/2023",
      category: "Healthcare & AI",
      summary: "Hierarchical capsule network capturing multi-relational pharmaceutical interactions across biomedical ontologies."
    },
    {
      id: 23,
      title: "Machine Learning Based Music Recommendation System Using Facial Expressions",
      appNumber: "202321059454",
      filingDate: "05/09/2023",
      publicationDate: "13/10/2023",
      category: "Vision & Biometrics",
      summary: "Real-time affective emotion classifier mapping facial action units into mood-aligned acoustic playlists."
    }
  ] as Patent[],

  copyrights: [
    {
      regNumber: "11594/2022-CO/L",
      year: "2022",
      title: "Traffic flow Prediction using Machine learning",
      category: "Literary Work",
      govtBody: "Copyright Office, Govt of India"
    },
    {
      regNumber: "11599/2022-CO/L",
      year: "2022",
      title: "Vehicle Number Plate Detection",
      category: "Literary Work",
      govtBody: "Copyright Office, Govt of India"
    },
    {
      regNumber: "11862/2022-CO/L",
      year: "2022",
      title: "The use of a Hybrid Algorithm to interpret Hand Gesture for the blind and deaf people",
      category: "Literary Work",
      govtBody: "Copyright Office, Govt of India"
    }
  ],

  publications: [
    // Journals
    {
      id: 101,
      type: "journal",
      title: "Early detection of cognitive decline with deep learning and graph-based modeling",
      venue: "MethodsX (Elsevier), Volume 14, 103405",
      year: 2025,
      indexing: ["Scopus", "Web of Science (WOS)", "ESCI", "Q1 Journal"],
      doi: "10.1016/j.mex.2025.103405",
      url: "https://doi.org/10.1016/j.mex.2025.103405",
      details: "ISSN: 2215-0161. Comprehensive neurocomputational framework leveraging graph attention networks on multi-modal cognitive assessment datasets.",
      highlight: true
    },
    {
      id: 102,
      type: "journal",
      title: "Deep Reinforced Cognitive Analytics Algorithm (DRCAM): An advanced Method to early detection of Cognitive skill impairment using Deep Learning and Reinforcement Learning",
      venue: "MethodsX (Elsevier), Volume 14, 103277",
      year: 2025,
      indexing: ["Scopus", "Web of Science (WOS)", "ESCI", "Q1 Journal"],
      doi: "10.1016/j.mex.2025.103277",
      url: "https://doi.org/10.1016/j.mex.2025.103277",
      details: "ISSN: 2215-0161. Introduces DRCAM, combining reinforcement policy gradients with deep feature extraction for longitudinal tracking.",
      highlight: true
    },
    {
      id: 103,
      type: "journal",
      title: "Comparative Analysis on Diabetes Prediction System Using Ensemble Random Forest, Logistic Regression And K-Nearest Neighbor",
      venue: "International Journal of Research and Analytical Reviews (IJRAR), Vol. 10, Issue 2",
      year: 2023,
      indexing: ["UGC Approved", "E-ISSN: 2348-1269"],
      url: "https://www.ijrar.org/papers/IJRAR23B2062.pdf",
      details: "Rigorous clinical parameter benchmark demonstrating ensemble bagging superiority."
    },
    {
      id: 104,
      type: "journal",
      title: "Human Face Recognition For Video Surveillance Using Deep Learning",
      venue: "International Journal of Novel Research and Development (IJNRD), Vol. 8, Issue 5",
      year: 2023,
      indexing: ["ISSN: 2456-4184"],
      url: "https://www.ijnrd.org/papers/IJNRD2305584.pdf",
      details: "CNN-based robust real-time facial surveillance under variable lux illumination."
    },
    {
      id: 105,
      type: "journal",
      title: "A Review On Data Storage And Security Issues In Cloud Computing",
      venue: "Journal of Emerging Technologies and Innovative Research (JETIR), Vol. 9, Issue 12, pp. c38-c40",
      year: 2022,
      indexing: ["UGC Approved", "ISSN: 2349-5162"],
      url: "http://www.jetir.org/papers/JETIR2212207.pdf",
      details: "Analysis of homomorphic encryption, dynamic data deduplication, and multi-cloud risks."
    },
    {
      id: 106,
      type: "journal",
      title: "Traffic Flow Prediction Using Machine Learning",
      venue: "International Journal of Research and Analytical Reviews (IJRAR), Vol. 9, Issue 2",
      year: 2022,
      indexing: ["UGC Approved", "E-ISSN: 2348-1269"],
      url: "https://www.ijrar.org/viewfull.php?&p_id=IJRAR22B3074",
      details: "Spatiotemporal traffic density forecasts using recurrent sequence architectures."
    },
    {
      id: 107,
      type: "journal",
      title: "Healthcare Support System For Consultation Using Data Mining And Predictive Analysis",
      venue: "International Journal Of Creative Research Thoughts (IJCRT), Vol. 8, Issue 5",
      year: 2020,
      indexing: ["UGC Approved", "ISSN: 2320-2882"],
      url: "http://ijcrt.org/viewfulltext.php?&p_id=IJCRT2005343",
      details: "Doctor consultation recommender driven by symptom extraction and associative mining."
    },
    {
      id: 108,
      type: "journal",
      title: "A Survey of health care support system for consultation using data Mining and Predictive Analytics",
      venue: "International Journal of Engineering Development and Research (IJEDR), Vol. 7, Issue 4",
      year: 2019,
      indexing: ["UGC Approved", "ISSN: 2321-9939"],
      url: "https://www.ijedr.org/papers/IJEDR1904013.pdf"
    },
    {
      id: 109,
      type: "journal",
      title: "A Review Paper of Cloud Data Storage Security Issues",
      venue: "International Journal of Scientific Research and Engineering Development (IJSRED), Vol. 2, Issue 1",
      year: 2019,
      indexing: ["ISSN: 2581-7175"],
      url: "http://www.ijsred.com/volume2/issue1/IJSRED-V2I1P2.pdf"
    },
    {
      id: 110,
      type: "journal",
      title: "Online Marketing Of Wood Product",
      venue: "Journal of Emerging Technologies and Innovative Research (JETIR), Vol. 5, Issue 6",
      year: 2018,
      indexing: ["UGC Approved", "ISSN: 2349-5162"],
      url: "http://www.jetir.org/view?paper=JETIR1806194"
    },
    {
      id: 111,
      type: "journal",
      title: "Achieving Flatness: Selecting the Honeywords from Existing User Passwords",
      venue: "International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE), Vol. 6, Issue 11",
      year: 2017,
      indexing: ["ISSN: 2278-1021"],
      url: "https://ijarcce.com/upload/2017/november-17/IJARCCE%2052.pdf"
    },
    {
      id: 112,
      type: "journal",
      title: "A Survey paper on Public Integrity Auditing for Shared Dynamic Cloud Data Using HMAC Algorithm",
      venue: "International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE), Vol. 6, Issue 3",
      year: 2017,
      indexing: ["ISO 3297:2007 Certified"],
      url: "https://ijarcce.com/upload/2017/march-17/IJARCCE%20121.pdf"
    },
    {
      id: 113,
      type: "journal",
      title: "Internet Of Things Futuristic Vision And Challenges",
      venue: "North Asian International Research Journal of Sciences, Engineering & I.T., Vol. 3, Issue 3",
      year: 2017,
      indexing: ["ISSN: 2454-7514"],
      url: "http://www.nairjc.com/setup/science-engineering-it/sei233.pdf"
    },
    {
      id: 114,
      type: "journal",
      title: "Online Java Compiler With Security Editor",
      venue: "International Research Journal of Engineering and Technology (IRJET), Vol. 04, Issue 02",
      year: 2017,
      indexing: ["e-ISSN: 2395-0056"],
      url: "https://www.irjet.net/archives/V4/i2/IRJET-V4I2261.pdf"
    },
    {
      id: 115,
      type: "journal",
      title: "IOT Based Electric Bill Generation",
      venue: "International Journal of Advanced Research in Computer and Communication Engineering, Vol. 6, Issue 2",
      year: 2017,
      indexing: ["ISSN: 2278-1021"],
      url: "https://ijarcce.com/upload/2017/february-17/IJARCCE%2057.pdf"
    },
    {
      id: 116,
      type: "journal",
      title: "A Two-Fold Approach to Store and Share Secrete Data for Groups in Cloud",
      venue: "International Journal of Engineering Trends and Technology (IJETT), Vol. 2, Issue 2",
      year: 2015,
      indexing: ["ISSN: 2350-0808"]
    },
    {
      id: 117,
      type: "journal",
      title: "Emergency Vehicles Communication by VANET",
      venue: "International Journal of Engineering Trends and Technology (IJETT), Vol. 2, Issue 2",
      year: 2015,
      indexing: ["ISSN: 2350-0808"],
      url: "https://www.ijett.in/index.php/IJETT/article/view/96/77"
    },
    {
      id: 118,
      type: "journal",
      title: "Client Server Based Secure Chat Application Using Peer To Peer Network Architecture",
      venue: "International Journal of Emerging Trends in Engineering and Basic Sciences (IJEEBS), Vol. 2, Issue 1, pp. 223-230",
      year: 2015,
      indexing: ["ISSN: 2349-6967"]
    },
    {
      id: 119,
      type: "journal",
      title: "Security Using Biometrics Template And Visual Cryptography: A Two Fold Approach",
      venue: "International Journal of Emerging Trends in Engineering and Basic Sciences (IJEEBS), Vol. 2, Issue 1, pp. 685-692",
      year: 2015,
      indexing: ["ISSN: 2349-6967"],
      url: "https://pdfs.semanticscholar.org/f354/cf6c68da8d108a3b2ae5361223713ace0b55.pdf"
    },
    {
      id: 120,
      type: "journal",
      title: "RS-MONA: Reliable and Scalable secure method to store and share secrete data for groups in cloud",
      venue: "International Journal of Computer Applications (IJCA), Vol. 102, No. 3",
      year: 2014,
      indexing: ["UGC Approved", "ISSN: 0975-8887"],
      url: "https://www.ijcaonline.org/archives/volume102/number3/17794-8595"
    },
    {
      id: 121,
      type: "journal",
      title: "Reliable and Scalable approach to Store and Share-Sensitive Data for Dynamic Groups in the Cloud",
      venue: "International Journal of Advanced Research in Computer Science and Software Engineering (IJARCSSE), Vol. 4, Issue 5",
      year: 2014,
      indexing: ["ISSN: 2277-128X"],
      url: "http://ijarcsse.com/Before_August_2017/docs/papers/Volume_4/5_May2014/V4I5-0840.pdf"
    },
    {
      id: 122,
      type: "journal",
      title: "A Survey Paper on RS-MONA: Reliable and Scalable Approach for Secure Multi-Owner Data Sharing for Dynamic Groups in the Cloud",
      venue: "International Journal of Engineering Research and Technology (IJERT), Vol. 2, Issue 12",
      year: 2013,
      indexing: ["ISSN: 2278-0181"]
    },

    // Conferences
    {
      id: 201,
      type: "conference",
      title: "CA-AI: Automated Personalized CA Assistant",
      venue: "IEEE International Conference on Emerging Smart Computing and Informatics (ESCI)",
      year: 2026,
      indexing: ["IEEE", "Scopus Indexed"],
      doi: "10.1109/ESCI68015.2026.11493177",
      highlight: true
    },
    {
      id: 202,
      type: "conference",
      title: "Real-Time Fabric Identification and Tactile Attribute Estimation Overlay Tool for E-Commerce Apparel RGB Images Using AI",
      venue: "IEEE International Conference on Communication, Computing and Emerging Technologies (IC3ET), pp. 776–782",
      year: 2026,
      indexing: ["IEEE", "Scopus Indexed"],
      highlight: true
    },
    {
      id: 203,
      type: "conference",
      title: "Lung Cancer Detection Using Machine Learning Algorithms",
      venue: "3rd International Conference on Advances in Computation, Communication and Information Technology (ICAICCIT), pp. 928–931",
      year: 2025,
      indexing: ["Scopus Indexed"]
    },
    {
      id: 204,
      type: "conference",
      title: "MSX-GAT-DDI: A Modality-Aware Multi-Source Graph Attention Framework for Explainable Drug-Drug Interaction Prediction",
      venue: "3rd International Conference on Advances in Computation, Communication and Information Technology (ICAICCIT), pp. 291–297",
      year: 2025,
      indexing: ["Scopus Indexed"],
      highlight: true
    },
    {
      id: 205,
      type: "conference",
      title: "PhishSecure: Enhancing Web Safety with ML",
      venue: "IEEE International Conference on Blockchain and Distributed Systems Security (ICBDS)",
      year: 2025,
      indexing: ["IEEE", "Scopus Indexed"]
    },
    {
      id: 206,
      type: "conference",
      title: "A Survey Paper Early Detection of Cognitive Skill Impairment",
      venue: "IEEE Pune Section International Conference (PuneCon 2025), Pune, India",
      year: 2025,
      indexing: ["IEEE", "Scopus Indexed"],
      doi: "10.1109/PuneCon67554.2025.11378977"
    },
    {
      id: 207,
      type: "conference",
      title: "Smart Nutrition Analysis: AI-Based Food Quality Assessment",
      venue: "9th IEEE International Conference on Computing Communication Control and Automation (ICCUBEA-2025)",
      year: 2025,
      indexing: ["IEEE", "Scopus Indexed"],
      url: "https://ieeexplore.ieee.org/document/11284152"
    },
    {
      id: 208,
      type: "conference",
      title: "Nutritionist GenAI Site: Personalized Dietary Recommendations",
      venue: "9th IEEE International Conference on Computing Communication Control and Automation (ICCUBEA-2025)",
      year: 2025,
      indexing: ["IEEE", "Scopus Indexed"],
      url: "https://ieeexplore.ieee.org/document/11284127"
    },
    {
      id: 209,
      type: "conference",
      title: "Convolution Neural Network-Based Acne Detection and Classification: A Novel Based Approach for Automated Dermatological Analysis",
      venue: "4th International Research Conference on Emerging Information Technology and Engineering Solutions (EITES 2025)",
      year: 2025,
      indexing: ["IEEE", "Scopus Indexed"],
      url: "https://ieeexplore.ieee.org/document/11206179"
    },
    {
      id: 210,
      type: "conference",
      title: "Advanced PPE Compliance with AI Driven Insights",
      venue: "5th IEEE International Conference for Intelligent Technologies (CONIT 2025), Hubballi, Karnataka",
      year: 2025,
      indexing: ["IEEE", "Scopus Indexed"],
      url: "https://ieeexplore.ieee.org/document/11167141"
    },
    {
      id: 211,
      type: "conference",
      title: "Shell DB: Implementing Database Security via Containerized way to protect data breaches and recognizing malicious activity in Infrastructure network using ML model",
      venue: "1st IEEE Global Conference on Cognitive Computing and Communication Technology (GC4T-25)",
      year: 2025,
      indexing: ["IEEE", "Scopus In Process"]
    },
    {
      id: 212,
      type: "conference",
      title: "Early Detection of Cognitive Skill Impairment Using Deep Learning Models: A Comparative Analysis of CNN, RNN, GPT, LSTM, and GRU",
      venue: "3rd International Conference on Futuristic Technologies (INCOFT-2025)",
      year: 2025,
      indexing: ["ScitePress", "Scopus In Process"],
      url: "https://www.scitepress.org/Papers/2025/135900/135900.pdf"
    },
    {
      id: 213,
      type: "conference",
      title: "Detection of Cyber Attacks Using AI/ML",
      venue: "3rd International Conference on Futuristic Technologies (INCOFT-2025)",
      year: 2025,
      indexing: ["ScitePress", "Scopus In Process"],
      url: "https://www.scitepress.org/Link.aspx?doi=10.5220/0013586100004664"
    },
    {
      id: 214,
      type: "conference",
      title: "Early Detection of Cognitive Skill Impairments using Machine Learning",
      venue: "8th IEEE International Conference on Computing Communication Control and Automation (ICCUBEA-2024)",
      year: 2024,
      indexing: ["IEEE", "Scopus Indexed", "BEST PAPER AWARD"],
      url: "https://ieeexplore.ieee.org/abstract/document/10774837",
      highlight: true
    },
    {
      id: 215,
      type: "conference",
      title: "A Review Paper on Intelligent Health Prediction System Using Data Mining",
      venue: "3rd International Conference on Advances in Engineering, Technology and Business Management (ICATBM-2022)",
      year: 2022,
      indexing: ["Peer Reviewed"]
    },
    {
      id: 216,
      type: "conference",
      title: "Smart Framework of Electricity Billing system for Conservation of energy",
      venue: "5th IEEE International Conference on Computing Communication Control and Automation (ICCUBEA-2019)",
      year: 2019,
      indexing: ["IEEE", "Scopus Indexed"],
      doi: "10.1109/ICCUBEA47591.2019.9128787"
    },
    {
      id: 217,
      type: "conference",
      title: "E-Smart Voting System with Secure Data Identification using Cryptography",
      venue: "3rd IEEE International Conference for Convergence in Technology (I2CT)",
      year: 2018,
      indexing: ["IEEE", "Scopus Indexed"],
      url: "https://ieeexplore.ieee.org/abstract/document/8529497"
    },
    {
      id: 218,
      type: "conference",
      title: "Online Marketing of Wood Product",
      venue: "3rd National Conference on Advancements in Computer and Information Technology (NCACIT-18)",
      year: 2018,
      indexing: ["National Conference"]
    },
    {
      id: 219,
      type: "conference",
      title: "Two-way authentication scheme to provide for public auditing for shared data in cloud",
      venue: "National Conference on Advancements in Computer & Information Technology (NCACIT-2016)",
      year: 2016,
      indexing: ["National Conference"]
    },
    {
      id: 220,
      type: "conference",
      title: "Client Server Based Secure Chat Application Using Peer-To-Peer Network Architecture",
      venue: "National Conference on Advancements in Computer & Information Technology (NCACIT-2015)",
      year: 2015,
      indexing: ["National Conference"]
    },
    {
      id: 221,
      type: "conference",
      title: "RS-MONA: Reliable and Scalable Approach for Secure Multi-Owner Data Sharing for Dynamic Groups in the Cloud",
      venue: "3rd Post Graduate Conference for Computer Engineering (cPGCON 2014)",
      year: 2014,
      indexing: ["State PG Conference"]
    },
    {
      id: 222,
      type: "conference",
      title: "Consistent and Scalable approach for Secure Data Sharing in Cloud",
      venue: "EXPLORIA 2014 National Management Research Conference (MIT School of Management, Pune)",
      year: 2014,
      indexing: ["National Conference"]
    },
    {
      id: 223,
      type: "conference",
      title: "A Survey Paper on RS-MONA: Reliable and Scalable Approach for Secure Multi-Owner Data Sharing for Dynamic Groups in the Cloud",
      venue: "AICTE Sponsored TECHNOSPIRE 2014 National Symposium, Kopargaon",
      year: 2014,
      indexing: ["AICTE Symposium"]
    }
  ] as Publication[],

  subjectsTaught: [
    { name: "Machine Learning", code: "ML", level: "Final Year / B.E.", icon: "Brain" },
    { name: "Cloud Computing", code: "CC", level: "Final Year / B.E.", icon: "Cloud" },
    { name: "Data Science & Big Data Analytics", code: "DSBDA", level: "Third Year / T.E.", icon: "BarChart" },
    { name: "Core Java & Advanced Java", code: "JAVA", level: "Undergraduate", icon: "Code" },
    { name: "Web Engineering & Technology", code: "WET", level: "Undergraduate", icon: "Globe" },
    { name: "Operating Systems & System Programming", code: "OS/SP", level: "Second/Third Year", icon: "Cpu" },
    { name: "Software Engineering", code: "SE", level: "Undergraduate", icon: "Layers" },
    { name: "Problem Solving & Object Oriented Programming", code: "OOP", level: "Second Year", icon: "Terminal" },
    { name: "Business Analytics & Intelligence", code: "BAI", level: "Undergraduate", icon: "TrendingUp" },
    { name: "Project Based Learning (PBL)", code: "PBL", level: "Hands-on Studio", icon: "Sparkles" },
    { name: "Seminar & Technical Communication", code: "STC", level: "Academic Rigor", icon: "FileText" }
  ],

  certifications: [
    { title: "AI Fluency for Educators", issuer: "AI Fluency Global Initiative", date: "June 2026" },
    { title: "AI Claude 101", issuer: "Anthropic / AI Education Hub", date: "June 2026" },
    { title: "AI Fluency: Framework & Foundations", issuer: "AI Fluency Program", date: "June 2026" },
    { title: "NPTEL: Deep Learning", issuer: "IIT Madras / NPTEL (Govt of India)", date: "March 2026" },
    { title: "Code Without Barriers", issuer: "Microsoft Certification", date: "March 2025" },
    { title: "NPTEL: Introduction to Research (Elite Grade)", issuer: "IIT Madras / NPTEL", date: "Feb-April 2019", grade: "Elite Grade" },
    { title: "NPTEL: Introduction to R Programming (Elite Grade)", issuer: "IIT Kanpur / NPTEL", date: "Aug-Sept 2018", grade: "Elite Grade" },
    { title: "COVID-19 Contact Tracing", issuer: "Johns Hopkins University (Coursera)", date: "July 2020" },
    { title: "Programming for Everybody (Getting started with Python)", issuer: "University of Michigan (Coursera)", date: "July 2020" },
    { title: "Introduction to Big Data", issuer: "University of California San Diego (Coursera)", date: "June 2020" }
  ] as CertificationItem[],

  technicalSkills: {
    dataAnalytics: ["Microsoft Power BI", "Data Wrangling", "Exploratory Data Analysis"],
    languages: ["Python", "Java", "Advanced Java", "R", "C", "C++", "PHP", "HTML5/CSS3"],
    systemsAndPlatforms: ["Linux / Ubuntu", "Windows OS", "Docker / Containers"],
    toolsAndProductivity: ["LaTeX", "Microsoft Office Suite (Word, Excel, PowerPoint)", "Git", "Google Workspace"]
  },

  academicResponsibilities: [
    {
      role: "Department Academic Coordinator (DAC)",
      period: "Current",
      desc: "Manages overall departmental academic calendar, teaching plans, instructional quality, and curriculum progress."
    },
    {
      role: "B.E. Final Year Project Coordinator",
      period: "2021 – Present",
      desc: "Steers 40+ capstone engineering research teams, promoting patent filings, product prototypes, and conference indexing."
    },
    {
      role: "Curriculum Design Member",
      period: "Current",
      desc: "Active curriculum drafting member at School of Technology and Research, Pimpri, Pune."
    },
    {
      role: "NBA Criteria-10 Coordinator",
      period: "2022 – Present",
      desc: "Coordinates accreditation compliance, governance, and institutional continuous improvement metrics."
    },
    {
      role: "NAAC Criteria-4 Coordinator",
      period: "Current",
      desc: "Leads infrastructure and learning resources evaluation for National Assessment and Accreditation Council."
    },
    {
      role: "Departmental Financial Budget Coordinator",
      period: "2022 – Present",
      desc: "Prepares academic budget requests, laboratory modernization funding, and research expense audits."
    },
    {
      role: "SPPU BE-IT 2015 Pattern Syllabus Revision Coordinator",
      period: "SPPU University Level",
      desc: "Served as University-appointed Syllabus Revision Coordinator for Savitribai Phule Pune University."
    },
    {
      role: "Question Paper Setter for TY B.Tech (IT504)",
      period: "Govt. Level",
      desc: "Appointed Question Paper Setter for Government College of Engineering, Karad."
    },
    {
      role: "Smart India Hackathon Coordinator",
      period: "2017 & 2022",
      desc: "Mentored and coordinated university-level student hackathon delegations."
    },
    {
      role: "SPPU In-Semester Examination Coordinator",
      period: "A.Y. 2015 – 2021",
      desc: "Administered university continuous assessment protocols for over 6 academic years."
    }
  ],

  workshopsOrganized: [
    {
      title: "One-week International FDP on Industry-Integrated AI & ML: Tools, Trends, and Agentive AI Evolution",
      role: "Lead Coordinator",
      location: "DYPIT, Pimpri, Pune",
      date: "7th – 11th January 2026"
    },
    {
      title: "Two Days International Conference on Next Generation Computing (ICNGC-2025)",
      role: "Organizing Committee",
      location: "DYPIT, Pimpri, Pune",
      date: "21st – 22nd April 2025"
    },
    {
      title: "One Day Internal Smart India Hackathon 2022",
      role: "Coordinator",
      location: "DYPIT, Pimpri, Pune",
      date: "10th March 2022"
    },
    {
      title: "3-Week SDP on 'Core JAVA Technology'",
      role: "Faculty Trainer & Resource Person",
      location: "DYPIT, Pimpri, Pune",
      date: "25/07/2022 to 06/08/2022"
    },
    {
      title: "National Conference on Advancements in Computer & IT (NCACIT-2018)",
      role: "Organizing Member",
      location: "DYPCOE, Ambi",
      date: "9th & 10th Feb 2018"
    },
    {
      title: "3-Day National Level Workshop on Internet of Things using Arduino & Raspberry Pi",
      role: "Coordinator",
      location: "DYPCOE, Ambi",
      date: "27th – 29th Sept 2017"
    },
    {
      title: "FDP on Research Methodology",
      role: "Organizing Member",
      location: "DYPCOE, Ambi",
      date: "28th – 30th April 2017"
    },
    {
      title: "Workshop on PHP Technology",
      role: "Resource Person / Trainer",
      location: "Zeal College of Engineering Research, Pune",
      date: "30th September 2015"
    }
  ]
};
