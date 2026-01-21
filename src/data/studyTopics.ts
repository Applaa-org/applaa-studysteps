export interface StudyStep {
  id: number;
  title: string;
  description: string;
  content: string;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  resources: string[];
  completed: boolean;
}

export interface StudyTopic {
  id: number;
  title: string;
  description: string;
  category: string;
  totalSteps: number;
  estimatedDuration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  progress: number;
  steps: StudyStep[];
  image: string;
  tags: string[];
}

export const studyTopics: StudyTopic[] = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the fundamentals of React, from components to state management and hooks.",
    category: "Web Development",
    totalSteps: 8,
    estimatedDuration: "4 hours",
    difficulty: "beginner",
    progress: 0,
    image: "https://picsum.photos/400/300?random=1",
    tags: ["React", "JavaScript", "Frontend"],
    steps: [
      {
        id: 1,
        title: "What is React?",
        description: "Understanding React's core concepts and philosophy",
        content: "React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Meta and the community. React uses a component-based architecture where UIs are broken down into reusable pieces.",
        estimatedTime: "30 minutes",
        difficulty: "beginner",
        resources: ["React Documentation", "Official Tutorial"],
        completed: false
      },
      {
        id: 2,
        title: "Setting Up Your Environment",
        description: "Install Node.js, npm, and create your first React app",
        content: "To start with React, you need Node.js installed on your system. Once installed, you can use Create React App or Vite to bootstrap a new React project. We'll cover both approaches and help you choose the right one.",
        estimatedTime: "45 minutes",
        difficulty: "beginner",
        resources: ["Node.js Guide", "Vite Documentation"],
        completed: false
      },
      {
        id: 3,
        title: "Components and JSX",
        description: "Learn about React components and JSX syntax",
        content: "Components are the building blocks of React applications. JSX is a syntax extension that allows you to write HTML-like code in JavaScript. Understanding these concepts is crucial for React development.",
        estimatedTime: "60 minutes",
        difficulty: "beginner",
        resources: ["JSX Guide", "Component Patterns"],
        completed: false
      },
      {
        id: 4,
        title: "Props and State",
        description: "Understanding data flow in React applications",
        content: "Props allow you to pass data from parent to child components, while state enables components to manage their own data. Learn how to use both effectively to build dynamic applications.",
        estimatedTime: "45 minutes",
        difficulty: "intermediate",
        resources: ["Props Documentation", "State Management Guide"],
        completed: false
      },
      {
        id: 5,
        title: "Handling Events",
        description: "Learn how to handle user interactions in React",
        content: "Events in React are similar to DOM events but with some syntax differences. Learn how to handle clicks, form submissions, and other user interactions properly.",
        estimatedTime: "30 minutes",
        difficulty: "beginner",
        resources: ["Event Handling Guide"],
        completed: false
      },
      {
        id: 6,
        title: "Conditional Rendering",
        description: "Display different content based on conditions",
        content: "Learn various techniques for conditionally rendering components and elements in React, including using if statements, ternary operators, and logical operators.",
        estimatedTime: "30 minutes",
        difficulty: "intermediate",
        resources: ["Conditional Rendering Guide"],
        completed: false
      },
      {
        id: 7,
        title: "Lists and Keys",
        description: "Render lists of data efficiently",
        content: "Learn how to render lists of data using the map() method and understand the importance of keys for performance and identity in React lists.",
        estimatedTime: "30 minutes",
        difficulty: "intermediate",
        resources: ["Lists and Keys Documentation"],
        completed: false
      },
      {
        id: 8,
        title: "Forms and Controlled Components",
        description: "Build interactive forms with controlled components",
        content: "Learn how to create forms in React using controlled components, handle form submissions, and manage form state effectively.",
        estimatedTime: "45 minutes",
        difficulty: "intermediate",
        resources: ["Forms Guide", "Controlled Components"],
        completed: false
      }
    ]
  },
  {
    id: 2,
    title: "Python Fundamentals",
    description: "Master Python programming from basics to advanced concepts.",
    category: "Programming",
    totalSteps: 10,
    estimatedDuration: "6 hours",
    difficulty: "beginner",
    progress: 0,
    image: "https://picsum.photos/400/300?random=2",
    tags: ["Python", "Programming", "Backend"],
    steps: [
      {
        id: 1,
        title: "Python Installation and Setup",
        description: "Install Python and set up your development environment",
        content: "Python is a versatile programming language known for its simplicity and readability. We'll start by installing Python on your system and setting up a proper development environment with an IDE or code editor.",
        estimatedTime: "30 minutes",
        difficulty: "beginner",
        resources: ["Python.org Installation Guide", "VS Code Python Extension"],
        completed: false
      },
      {
        id: 2,
        title: "Basic Syntax and Variables",
        description: "Learn Python's basic syntax and how to work with variables",
        content: "Python's syntax is clean and straightforward. Learn about variables, data types, and basic operations. We'll cover integers, floats, strings, and the fundamental operations you can perform with them.",
        estimatedTime: "45 minutes",
        difficulty: "beginner",
        resources: ["Python Variables Guide", "Data Types Documentation"],
        completed: false
      },
      {
        id: 3,
        title: "Control Flow",
        description: "Master if statements, loops, and conditional logic",
        content: "Control flow structures allow your programs to make decisions and repeat actions. Learn about if-elif-else statements, for loops, while loops, and how to control program flow.",
        estimatedTime: "60 minutes",
        difficulty: "beginner",
        resources: ["Control Flow Guide", "Loop Examples"],
        completed: false
      },
      {
        id: 4,
        title: "Functions and Modules",
        description: "Organize your code with functions and modules",
        content: "Functions are reusable blocks of code that perform specific tasks. Learn how to define functions, pass arguments, return values, and organize your code into modules for better structure.",
        estimatedTime: "60 minutes",
        difficulty: "intermediate",
        resources: ["Functions Guide", "Modules Documentation"],
        completed: false
      },
      {
        id: 5,
        title: "Data Structures",
        description: "Work with lists, tuples, dictionaries, and sets",
        content: "Python provides powerful built-in data structures. Learn about lists, tuples, dictionaries, and sets, and when to use each one for optimal performance and readability.",
        estimatedTime: "75 minutes",
        difficulty: "intermediate",
        resources: ["Data Structures Guide", "List Comprehensions"],
        completed: false
      },
      {
        id: 6,
        title: "File Handling",
        description: "Read from and write to files in Python",
        content: "Learn how to work with files in Python, including reading text files, writing data, handling different file formats, and managing file paths properly.",
        estimatedTime: "45 minutes",
        difficulty: "intermediate",
        resources: ["File I/O Guide", "Pathlib Documentation"],
        completed: false
      },
      {
        id: 7,
        title: "Error Handling",
        description: "Handle exceptions and errors gracefully",
        content: "Learn how to handle errors and exceptions in Python using try-except blocks, raise custom exceptions, and write more robust code that can handle unexpected situations.",
        estimatedTime: "45 minutes",
        difficulty: "intermediate",
        resources: ["Exception Handling Guide"],
        completed: false
      },
      {
        id: 8,
        title: "Object-Oriented Programming",
        description: "Understand classes, objects, and OOP principles",
        content: "Python supports object-oriented programming. Learn about classes, objects, inheritance, encapsulation, and polymorphism to write more organized and maintainable code.",
        estimatedTime: "90 minutes",
        difficulty: "advanced",
        resources: ["OOP in Python", "Class Design Patterns"],
        completed: false
      },
      {
        id: 9,
        title: "Working with Libraries",
        description: "Use external libraries to extend Python's functionality",
        content: "Python's ecosystem includes thousands of libraries. Learn how to install packages using pip, work with popular libraries like NumPy and Pandas, and manage dependencies.",
        estimatedTime: "60 minutes",
        difficulty: "intermediate",
        resources: ["Pip Guide", "Popular Python Libraries"],
        completed: false
      },
      {
        id: 10,
        title: "Best Practices and Project Structure",
        description: "Write clean, maintainable Python code",
        content: "Learn Python best practices, PEP 8 style guidelines, project organization, testing strategies, and how to write code that others can easily understand and maintain.",
        estimatedTime: "60 minutes",
        difficulty: "advanced",
        resources: ["PEP 8 Guide", "Python Best Practices"],
        completed: false
      }
    ]
  },
  {
    id: 3,
    title: "Data Science Basics",
    description: "Introduction to data analysis, visualization, and machine learning concepts.",
    category: "Data Science",
    totalSteps: 7,
    estimatedDuration: "5 hours",
    difficulty: "intermediate",
    progress: 0,
    image: "https://picsum.photos/400/300?random=3",
    tags: ["Data Science", "Analytics", "Machine Learning"],
    steps: [
      {
        id: 1,
        title: "What is Data Science?",
        description: "Understanding the field and its applications",
        content: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
        estimatedTime: "30 minutes",
        difficulty: "beginner",
        resources: ["Data Science Overview", "Industry Applications"],
        completed: false
      },
      {
        id: 2,
        title: "Statistics Fundamentals",
        description: "Essential statistical concepts for data analysis",
        content: "Statistics is the foundation of data science. Learn about descriptive statistics, probability distributions, hypothesis testing, and statistical significance.",
        estimatedTime: "60 minutes",
        difficulty: "intermediate",
        resources: ["Statistics Guide", "Probability Theory"],
        completed: false
      },
      {
        id: 3,
        title: "Data Collection and Cleaning",
        description: "Gather and prepare data for analysis",
        content: "Learn techniques for collecting data from various sources, handling missing values, detecting outliers, and preparing clean datasets for analysis.",
        estimatedTime: "75 minutes",
        difficulty: "intermediate",
        resources: ["Data Cleaning Guide", "Data Collection Methods"],
        completed: false
      },
      {
        id: 4,
        title: "Exploratory Data Analysis",
        description: "Discover patterns and insights in your data",
        content: "EDA is the process of summarizing main characteristics of data. Learn visualization techniques, summary statistics, and methods to uncover patterns.",
        estimatedTime: "60 minutes",
        difficulty: "intermediate",
        resources: ["EDA Techniques", "Data Visualization"],
        completed: false
      },
      {
        id: 5,
        title: "Data Visualization",
        description: "Create compelling visualizations to communicate insights",
        content: "Learn to create various types of charts and graphs using tools like Matplotlib, Seaborn, and Plotly. Understand when to use different visualization types.",
        estimatedTime: "60 minutes",
        difficulty: "intermediate",
        resources: ["Visualization Guide", "Chart Types"],
        completed: false
      },
      {
        id: 6,
        title: "Introduction to Machine Learning",
        description: "Basic ML concepts and algorithms",
        content: "Get introduced to machine learning concepts, supervised vs unsupervised learning, and basic algorithms like linear regression and classification.",
        estimatedTime: "75 minutes",
        difficulty: "advanced",
        resources: ["ML Fundamentals", "Algorithm Overview"],
        completed: false
      },
      {
        id: 7,
        title: "Tools and Technologies",
        description: "Essential tools for data science workflows",
        content: "Learn about popular data science tools including Python libraries (NumPy, Pandas, Scikit-learn), R, Jupyter notebooks, and cloud platforms.",
        estimatedTime: "45 minutes",
        difficulty: "intermediate",
        resources: ["Data Science Tools", "Python Libraries"],
        completed: false
      }
    ]
  },
  {
    id: 4,
    title: "Web Design Principles",
    description: "Master the fundamentals of modern web design and user experience.",
    category: "Design",
    totalSteps: 6,
    estimatedDuration: "3 hours",
    difficulty: "beginner",
    progress: 0,
    image: "https://picsum.photos/400/300?random=4",
    tags: ["Design", "UI/UX", "Frontend"],
    steps: [
      {
        id: 1,
        title: "Design Fundamentals",
        description: "Basic principles of visual design",
        content: "Learn about the fundamental principles of design including balance, contrast, hierarchy, repetition, and white space. These concepts form the foundation of all good design.",
        estimatedTime: "45 minutes",
        difficulty: "beginner",
        resources: ["Design Principles Guide", "Visual Design Basics"],
        completed: false
      },
      {
        id: 2,
        title: "Color Theory",
        description: "Understanding color in design",
        content: "Color is a powerful tool in design. Learn about color theory, color harmonies, psychology of colors, and how to create effective color palettes for your projects.",
        estimatedTime: "45 minutes",
        difficulty: "beginner",
        resources: ["Color Theory Guide", "Palette Tools"],
        completed: false
      },
      {
        id: 3,
        title: "Typography",
        description: "The art of arranging type",
        content: "Typography is crucial for readability and visual hierarchy. Learn about font selection, pairing, sizing, spacing, and creating typographic systems.",
        estimatedTime: "45 minutes",
        difficulty: "intermediate",
        resources: ["Typography Guide", "Font Resources"],
        completed: false
      },
      {
        id: 4,
        title: "Layout and Composition",
        description: "Creating balanced and effective layouts",
        content: "Learn about grid systems, layout patterns, responsive design principles, and how to create compositions that guide user attention effectively.",
        estimatedTime: "60 minutes",
        difficulty: "intermediate",
        resources: ["Layout Principles", "Grid Systems"],
        completed: false
      },
      {
        id: 5,
        title: "User Experience Basics",
        description: "Designing for users",
        content: "UX design focuses on creating products that provide meaningful experiences. Learn about user research, personas, user journeys, and usability principles.",
        estimatedTime: "45 minutes",
        difficulty: "intermediate",
        resources: ["UX Principles", "User Research Methods"],
        completed: false
      },
      {
        id: 6,
        title: "Design Tools and Workflow",
        description: "Modern tools and design processes",
        content: "Get familiar with popular design tools like Figma, Sketch, and Adobe XD. Learn about design systems, prototyping, and collaborative workflows.",
        estimatedTime: "30 minutes",
        difficulty: "beginner",
        resources: ["Design Tools Comparison", "Workflow Best Practices"],
        completed: false
      }
    ]
  },
  {
    id: 5,
    title: "Database Fundamentals",
    description: "Learn about databases, SQL, and data management systems.",
    category: "Backend",
    totalSteps: 8,
    estimatedDuration: "4 hours",
    difficulty: "intermediate",
    progress: 0,
    image: "https://picsum.photos/400/300?random=5",
    tags: ["Database", "SQL", "Backend"],
    steps: [
      {
        id: 1,
        title: "Introduction to Databases",
        description: "What are databases and why do we need them?",
        content: "Databases are organized collections of structured information. Learn about different types of databases, their purposes, and how they fit into modern applications.",
        estimatedTime: "30 minutes",
        difficulty: "beginner",
        resources: ["Database Overview", "Database Types"],
        completed: false
      },
      {
        id: 2,
        title: "Relational Database Concepts",
        description: "Understanding tables, relationships, and keys",
        content: "Relational databases organize data into tables with relationships. Learn about primary keys, foreign keys, normalization, and database schemas.",
        estimatedTime: "45 minutes",
        difficulty: "intermediate",
        resources: ["Relational Model", "Database Design"],
        completed: false
      },
      {
        id: 3,
        title: "SQL Basics",
        description: "Writing basic SQL queries",
        content: "SQL is the language of databases. Learn SELECT, INSERT, UPDATE, DELETE statements, and how to retrieve and manipulate data effectively.",
        estimatedTime: "60 minutes",
        difficulty: "intermediate",
        resources: ["SQL Tutorial", "Query Examples"],
        completed: false
      },
      {
        id: 4,
        title: "Advanced SQL Queries",
        description: "Joins, subqueries, and complex operations",
        content: "Master advanced SQL techniques including INNER/OUTER JOINs, subqueries, aggregate functions, and window functions for complex data analysis.",
        estimatedTime: "60 minutes",
        difficulty: "advanced",
        resources: ["Advanced SQL", "Query Optimization"],
        completed: false
      },
      {
        id: 5,
        title: "Database Design",
        description: "Designing efficient database schemas",
        content: "Learn database design principles, normalization forms, indexing strategies, and how to create schemas that perform well and scale effectively.",
        estimatedTime: "45 minutes",
        difficulty: "advanced",
        resources: ["Database Design Guide", "Normalization"],
        completed: false
      },
      {
        id: 6,
        title: "NoSQL Databases",
        description: "Understanding non-relational databases",
        content: "NoSQL databases offer flexibility for different use cases. Learn about document stores, key-value stores, graph databases, and when to use them.",
        estimatedTime: "45 minutes",
        difficulty: "intermediate",
        resources: ["NoSQL Overview", "Database Selection"],
        completed: false
      },
      {
        id: 7,
        title: "Database Performance",
        description: "Optimizing database performance",
        content: "Learn about indexing, query optimization, caching strategies, and monitoring techniques to keep your databases running efficiently.",
        estimatedTime: "45 minutes",
        difficulty: "advanced",
        resources: ["Performance Tuning", "Indexing Strategies"],
        completed: false
      },
      {
        id: 8,
        title: "Database Security",
        description: "Securing your data and access",
        content: "Security is crucial for databases. Learn about authentication, authorization, encryption, backup strategies, and security best practices.",
        estimatedTime: "30 minutes",
        difficulty: "intermediate",
        resources: ["Database Security", "Best Practices"],
        completed: false
      }
    ]
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Build your first mobile application with modern frameworks.",
    category: "Mobile",
    totalSteps: 9,
    estimatedDuration: "7 hours",
    difficulty: "intermediate",
    progress: 0,
    image: "https://picsum.photos/400/300?random=6",
    tags: ["Mobile", "React Native", "Development"],
    steps: [
      {
        id: 1,
        title: "Mobile Development Overview",
        description: "Understanding the mobile landscape",
        content: "Mobile development has evolved significantly. Learn about native vs cross-platform development, popular frameworks, and choosing the right approach for your project.",
        estimatedTime: "30 minutes",
        difficulty: "beginner",
        resources: ["Mobile Dev Guide", "Framework Comparison"],
        completed: false
      },
      {
        id: 2,
        title: "Setting Up Development Environment",
        description: "Tools and setup for mobile development",
        content: "Set up your development environment with the necessary tools, simulators, and SDKs. We'll cover both iOS and Android development requirements.",
        estimatedTime: "60 minutes",
        difficulty: "beginner",
        resources: ["Environment Setup", "Development Tools"],
        completed: false
      },
      {
        id: 3,
        title: "React Native Basics",
        description: "Getting started with React Native",
        content: "React Native allows you to build mobile apps using React. Learn the basics of React Native, its components, and how it differs from web React.",
        estimatedTime: "60 minutes",
        difficulty: "intermediate",
        resources: ["React Native Docs", "Getting Started Guide"],
        completed: false
      },
      {
        id: 4,
        title: "Mobile UI Components",
        description: "Building user interfaces for mobile",
        content: "Learn about mobile-specific UI components, layouts, and design patterns. Understand touch interactions, gestures, and mobile-first design principles.",
        estimatedTime: "75 minutes",
        difficulty: "intermediate",
        resources: ["UI Components", "Mobile Design Patterns"],
        completed: false
      },
      {
        id: 5,
        title: "Navigation and Routing",
        description: "Implementing navigation in mobile apps",
        content: "Navigation is crucial in mobile apps. Learn about different navigation patterns, stack navigation, tab navigation, and implementing smooth transitions.",
        estimatedTime: "60 minutes",
        difficulty: "intermediate",
        resources: ["Navigation Guide", "Routing Patterns"],
        completed: false
      },
      {
        id: 6,
        title: "State Management",
        description: "Managing state in mobile applications",
        content: "Learn state management patterns for mobile apps, including local state, global state, and data persistence strategies.",
        estimatedTime: "60 minutes",
        difficulty: "advanced",
        resources: ["State Management", "Persistence Patterns"],
        completed: false
      },
      {
        id: 7,
        title: "Working with APIs",
        description: "Connecting mobile apps to backend services",
        content: "Most mobile apps need to communicate with servers. Learn about REST APIs, GraphQL, authentication, and handling network requests in mobile apps.",
        estimatedTime: "75 minutes",
        difficulty: "intermediate",
        resources: ["API Integration", "Network Programming"],
        completed: false
      },
      {
        id: 8,
        title: "Device Features",
        description: "Accessing camera, GPS, and other device features",
        content: "Learn how to access native device features like camera, GPS, contacts, and sensors using React Native modules and native APIs.",
        estimatedTime: "60 minutes",
        difficulty: "advanced",
        resources: ["Native Modules", "Device APIs"],
        completed: false
      },
      {
        id: 9,
        title: "Testing and Deployment",
        description: "Testing and publishing your mobile app",
        content: "Learn about testing mobile apps, debugging techniques, and the process of publishing to App Store and Google Play Store.",
        estimatedTime: "60 minutes",
        difficulty: "advanced",
        resources: ["Testing Guide", "App Store Deployment"],
        completed: false
      }
    ]
  }
];

export const categories = [
  { id: 1, name: "Web Development", count: 1, color: "bg-blue-500" },
  { id: 2, name: "Programming", count: 1, color: "bg-green-500" },
  { id: 3, name: "Data Science", count: 1, color: "bg-purple-500" },
  { id: 4, name: "Design", count: 1, color: "bg-pink-500" },
  { id: 5, name: "Backend", count: 1, color: "bg-orange-500" },
  { id: 6, name: "Mobile", count: 1, color: "bg-indigo-500" }
];