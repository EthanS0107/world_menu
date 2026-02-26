import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Supprime tous les utilisateurs existants
  await prisma.user.deleteMany();

  const hashedPassword = await bcrypt.hash("admin", 10);
  await prisma.user.create({
    data: {
      email: "admin@email.com",
      firstName: "Admin",
      lastName: "WordMenu",
      name: "Admin",
      isAdmin: true,
      password: hashedPassword,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
