import { PrismaClient } from "@prisma/client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const prisma = new PrismaClient();
export default function Home() {
  return <main>Hello, Aydin</main>;
}
