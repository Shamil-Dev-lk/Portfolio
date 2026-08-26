
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const projects = [
  {
    title: "Web25",
    link: "https://web25.blogdu.de/",
    category: "Web Development",
    image: "/projects/project-1.jpg"
  },
  {
    title: "Food26",
    link: "https://food26.blogdu.de/",
    category: "Food & E-Commerce",
    image: "/projects/project-2.jpg"
  },
  {
    title: "LMS26",
    link: "https://lms26.blogdu.de/",
    category: "Learning Management System",
    image: "/projects/project-3.jpg"
  },
  {
    title: "1Hour",
    link: "https://1hour.blogdu.de/",
    category: "E-Commerce / Technology",
    image: "/projects/project-4.jpg"
  },
  {
    title: "Motors",
    link: "https://motors.blogdu.de/",
    category: "Automotive",
    image: "/projects/project-5.jpg"
  },
  {
    title: "DigiNewz",
    link: "https://diginewz.blogdu.de/",
    category: "News & Media",
    image: "/projects/project-6.jpg"
  },
  {
    title: "FoodBook",
    link: "https://foodbook.blogdu.de/",
    category: "Food Website",
    image: "/projects/project-7.jpg"
  },
  {
    title: "Houzez",
    link: "https://houzez.blogdu.de/",
    category: "Real Estate",
    image: "/projects/project-8.jpg"
  },
  {
    title: "Pharma",
    link: "https://pharma.blogdu.de/",
    category: "Pharma / E-Commerce",
    image: "/projects/project-9.jpg"
  },
  {
    title: "NPS Inventory System",
    link: "https://shamil-dev-lk.github.io/nps-inventory-system/login/",
    category: "Web Application",
    image: "/projects/project-10.jpg"
  },
  {
    title: "Cooperative Society",
    link: "https://shamil-dev-lk.github.io/cooperative-society/",
    category: "Web Application",
    image: "/projects/project-11.jpg"
  }
];

async function main() {
  console.log("Seeding old projects...");
  for (const p of projects) {
    await prisma.portfolioItem.create({ data: p });
  }
  console.log("Done!");
}

main().catch(console.error).finally(() => prisma.$disconnect());

