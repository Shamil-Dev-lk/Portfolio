const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@shamildev.com" },
    update: { password: hashedPassword, role: "ADMIN" },
    create: {
      email: "admin@shamildev.com",
      name: "Shamil Admin",
      password: hashedPassword,
      role: "ADMIN"
    }
  });
  console.log("Admin seeded:", admin.email);
}

main().catch(console.error).finally(() => prisma.$disconnect());
