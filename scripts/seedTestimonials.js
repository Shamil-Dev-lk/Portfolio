
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const testimonials = [
  {
    clientName: "Nuwan Perera",
    role: "Business Owner",
    content: "Shamil understood our requirements perfectly and delivered a professional website that exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    clientName: "Sachini Fernando",
    role: "Entrepreneur",
    content: "Great communication and excellent work quality. The project was completed on time and exactly how we wanted.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    clientName: "Dilshan K.",
    role: "Marketing Manager",
    content: "Highly recommended! Shamil is creative, reliable and very professional in his work.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const certifications = [
  {
    title: "Graphic Design Specialization",
    issuer: "University of Arts, California",
    date: "2024"
  },
  {
    title: "UI/UX Design Professional",
    issuer: "Coursera",
    date: "2025"
  },
  {
    title: "WordPress Development",
    issuer: "Udemy",
    date: "2024"
  },
  {
    title: "Web Development Bootcamp",
    issuer: "freeCodeCamp",
    date: "2023"
  }
];

async function main() {
  console.log("Seeding old testimonials...");
  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t });
  }
  
  console.log("Seeding old certifications...");
  for (const c of certifications) {
    await prisma.certification.create({ data: c });
  }
  
  console.log("Done!");
}

main().catch(console.error).finally(() => prisma.$disconnect());

