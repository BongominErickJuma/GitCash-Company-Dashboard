const peopleDetails = [
  {
    name: "Erick Juma",
    imageUrl: "https://picsum.photos/200?random=1",
    tools: ["Java", "JavaScript", "React"],
    experience: "4 Years",
    contribution: [5, 12, 8, 15, 7, 3, 9],
    followLink: "https://www.linkedin.com/in/erick-juma",
    projects: ["portfolio", "blog", "ecommerce-site"],
  },
  {
    name: "Alice Mwangi",
    imageUrl: "https://picsum.photos/200?random=2",
    tools: ["Python", "Django", "React"],
    experience: "3 Years",
    contribution: [7, 14, 6, 10, 12, 4, 8],
    followLink: "https://www.linkedin.com/in/alice-mwangi",
    projects: ["weather-app", "task-manager"],
  },
  {
    name: "James Kariuki",
    imageUrl: "https://picsum.photos/200?random=3",
    tools: ["PHP", "Laravel", "Vue.js"],
    experience: "5 Years",
    contribution: [9, 5, 11, 13, 10, 7, 6],
    followLink: "https://www.linkedin.com/in/james-kariuki",
    projects: ["chat-app", "recipe-app"],
  },
  {
    name: "Grace Wambui",
    imageUrl: "https://picsum.photos/200?random=4",
    tools: ["Ruby", "Ruby on Rails", "JavaScript"],
    experience: "6 Years",
    contribution: [8, 6, 9, 14, 11, 5, 7],
    followLink: "https://www.linkedin.com/in/grace-wambui",
    projects: ["fitness-tracker", "expense-tracker"],
  },
  {
    name: "Michael Otieno",
    imageUrl: "https://picsum.photos/200?random=5",
    tools: ["C#", ".NET", "Angular"],
    experience: "7 Years",
    contribution: [10, 8, 12, 11, 9, 13, 5],
    followLink: "https://www.linkedin.com/in/michael-otieno",
    projects: ["music-streaming", "social-network"],
  },
  {
    name: "Linda Njeri",
    imageUrl: "https://picsum.photos/200?random=6",
    tools: ["Python", "Flask", "React"],
    experience: "2 Years",
    contribution: [6, 12, 7, 8, 9, 10, 11],
    followLink: "https://www.linkedin.com/in/linda-njeri",
    projects: ["news-aggregator", "portfolio"],
  },
  {
    name: "Samuel Ochieng",
    imageUrl: "https://picsum.photos/200?random=7",
    tools: ["JavaScript", "Node.js", "Express"],
    experience: "3 Years",
    contribution: [11, 9, 13, 7, 12, 8, 10],
    followLink: "https://www.linkedin.com/in/samuel-ochieng",
    projects: ["blog", "ecommerce-site"],
  },
  {
    name: "Patricia Mutheu",
    imageUrl: "https://picsum.photos/200?random=8",
    tools: ["Java", "Spring Boot", "Angular"],
    experience: "4 Years",
    contribution: [13, 7, 10, 9, 8, 11, 6],
    followLink: "https://www.linkedin.com/in/patricia-mutheu",
    projects: ["weather-app", "task-manager"],
  },
  {
    name: "John Doe",
    imageUrl: "https://picsum.photos/200?random=9",
    tools: ["Python", "Django", "React"],
    experience: "5 Years",
    contribution: [8, 10, 12, 14, 9, 7, 6],
    followLink: "https://www.linkedin.com/in/john-doe",
    projects: ["chat-app", "recipe-app"],
  },
  {
    name: "Jane Smith",
    imageUrl: "https://picsum.photos/200?random=10",
    tools: ["JavaScript", "Vue.js", "Node.js"],
    experience: "3 Years",
    contribution: [7, 9, 11, 13, 10, 8, 5],
    followLink: "https://www.linkedin.com/in/jane-smith",
    projects: ["fitness-tracker", "expense-tracker"],
  },
  {
    name: "Robert Brown",
    imageUrl: "https://picsum.photos/200?random=11",
    tools: ["C#", ".NET", "Angular"],
    experience: "6 Years",
    contribution: [9, 11, 13, 15, 8, 6, 7],
    followLink: "https://www.linkedin.com/in/robert-brown",
    projects: ["music-streaming", "social-network"],
  },
  {
    name: "Emily Davis",
    imageUrl: "https://picsum.photos/200?random=12",
    tools: ["Java", "Spring Boot", "React"],
    experience: "4 Years",
    contribution: [10, 12, 14, 16, 9, 7, 8],
    followLink: "https://www.linkedin.com/in/emily-davis",
    projects: ["news-aggregator", "portfolio"],
  },
  {
    name: "David Wilson",
    imageUrl: "https://picsum.photos/200?random=13",
    tools: ["Python", "Flask", "Vue.js"],
    experience: "5 Years",
    contribution: [8, 10, 12, 14, 11, 9, 6],
    followLink: "https://www.linkedin.com/in/david-wilson",
    projects: ["blog", "ecommerce-site"],
  },
  {
    name: "Sarah Johnson",
    imageUrl: "https://picsum.photos/200?random=14",
    tools: ["JavaScript", "React", "Node.js"],
    experience: "3 Years",
    contribution: [7, 9, 11, 13, 10, 8, 5],
    followLink: "https://www.linkedin.com/in/sarah-johnson",
    projects: ["weather-app", "task-manager"],
  },
  {
    name: "Chris Lee",
    imageUrl: "https://picsum.photos/200?random=15",
    tools: ["PHP", "Laravel", "Vue.js"],
    experience: "4 Years",
    contribution: [9, 11, 13, 15, 8, 6, 7],
    followLink: "https://www.linkedin.com/in/chris-lee",
    projects: ["chat-app", "recipe-app"],
  },
  {
    name: "Anna Kim",
    imageUrl: "https://picsum.photos/200?random=16",
    tools: ["Ruby", "Ruby on Rails", "JavaScript"],
    experience: "6 Years",
    contribution: [10, 12, 14, 16, 9, 7, 8],
    followLink: "https://www.linkedin.com/in/anna-kim",
    projects: ["fitness-tracker", "expense-tracker"],
  },
  {
    name: "Mark Thompson",
    imageUrl: "https://picsum.photos/200?random=17",
    tools: ["C#", ".NET", "Angular"],
    experience: "7 Years",
    contribution: [8, 10, 12, 14, 11, 9, 6],
    followLink: "https://www.linkedin.com/in/mark-thompson",
    projects: ["music-streaming", "social-network"],
  },
  {
    name: "Laura Martinez",
    imageUrl: "https://picsum.photos/200?random=18",
    tools: ["Java", "Spring Boot", "React"],
    experience: "4 Years",
    contribution: [7, 9, 11, 13, 10, 8, 5],
    followLink: "https://www.linkedin.com/in/laura-martinez",
    projects: ["news-aggregator", "portfolio"],
  },
  {
    name: "Paul Anderson",
    imageUrl: "https://picsum.photos/200?random=19",
    tools: ["Python", "Django", "Vue.js"],
    experience: "5 Years",
    contribution: [9, 11, 13, 15, 8, 6, 7],
    followLink: "https://www.linkedin.com/in/paul-anderson",
    projects: ["blog", "ecommerce-site"],
  },
  {
    name: "Sophia Hernandez",
    imageUrl: "https://picsum.photos/200?random=20",
    tools: ["JavaScript", "React", "Node.js"],
    experience: "3 Years",
    contribution: [10, 12, 14, 16, 9, 7, 8],
    followLink: "https://www.linkedin.com/in/sophia-hernandez",
    projects: ["weather-app", "task-manager"],
  },
  {
    name: "Daniel White",
    imageUrl: "https://picsum.photos/200?random=21",
    tools: ["PHP", "Laravel", "Vue.js"],
    experience: "4 Years",
    contribution: [8, 10, 12, 14, 11, 9, 6],
    followLink: "https://www.linkedin.com/in/daniel-white",
    projects: ["chat-app", "recipe-app"],
  },
  {
    name: "Olivia Harris",
    imageUrl: "https://picsum.photos/200?random=22",
    tools: ["Ruby", "Ruby on Rails", "JavaScript"],
    experience: "6 Years",
    contribution: [7, 9, 11, 13, 10, 8, 5],
    followLink: "https://www.linkedin.com/in/olivia-harris",
    projects: ["fitness-tracker", "expense-tracker"],
  },
];

export default peopleDetails;
