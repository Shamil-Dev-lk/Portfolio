
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const services = [
  {
    name: "Web Development",
    description: "Modern responsive websites using the latest technologies.",
    price: 50000,
    status: "ACTIVE"
  },
  {
    name: "WordPress Development",
    description: "Elementor, custom themes, and powerful WordPress solutions.",
    price: 40000,
    status: "ACTIVE"
  },
  {
    name: "Web Applications",
    description: "Custom systems, dashboards and powerful web apps.",
    price: 150000,
    status: "ACTIVE"
  },
  {
    name: "eCommerce Development",
    description: "WooCommerce, product systems and online stores.",
    price: 85000,
    status: "ACTIVE"
  },
  {
    name: "UI/UX Design",
    description: "Figma designs, wireframes and interactive prototypes.",
    price: 35000,
    status: "ACTIVE"
  },
  {
    name: "Graphic Design",
    description: "Photoshop, Illustrator and creative visual designs.",
    price: 20000,
    status: "ACTIVE"
  }
];

async function main() {
  console.log("Seeding old services...");
  for (const s of services) {
    await prisma.service.create({ data: s });
  }
  console.log("Done!");
}

main().catch(console.error).finally(() => prisma.$disconnect());

