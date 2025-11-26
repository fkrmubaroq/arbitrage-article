import dotenv from "dotenv";
import { runSeeds } from "./seeder.js";

dotenv.config();

async function main() {
  try {
    await runSeeds();
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

main();
