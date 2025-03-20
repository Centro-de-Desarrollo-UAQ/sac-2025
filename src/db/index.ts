import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { students, workshops, studentsToWorkshops } from "./schema";
import { eq } from "drizzle-orm";

export const db = drizzle({ connection: process.env.DATABASE_URL! })

// This function seeds the database with a student and a workshop
async function seed() {
  // Don't create seed if user already exists
  const studentSeed = await db.select().from(students).where(eq(students.expediente, 275931)).execute()
  if (studentSeed.length >= 1) {
    return;
  }
  const student: typeof students.$inferInsert = {
    expediente: 275931,
    nombre: "Karlo",
  };

  const workshop: typeof workshops.$inferInsert = {
    nombre: "Drizzle Workshop",
    date: new Date("2025-04-10T14:30:00").toISOString(),
  };

  await db.insert(students).values(student);
  const workshopCreated = await db.insert(workshops).values(workshop).returning();
  await db.insert(studentsToWorkshops).values({
    studentId: student.expediente,
    workshopId: workshopCreated[0].id,
  });

}

seed();
