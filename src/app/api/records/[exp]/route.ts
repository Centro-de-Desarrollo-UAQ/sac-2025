import { db } from "@/db";
import { students, studentsToWorkshops, workshops } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ exp: string }> },
) {
  const {exp} = await params;
  const registrarOfStudent = await db
    .select()
    .from(studentsToWorkshops)
    .innerJoin(students, eq(students.expediente, studentsToWorkshops.studentId))
    .innerJoin(workshops, eq(workshops.id, studentsToWorkshops.workshopId))
    .where(eq(studentsToWorkshops.studentId, parseInt(exp)))
  const response = {
    student: registrarOfStudent[0].students.nombre,
    exp: registrarOfStudent[0].students.expediente,
    workshops: registrarOfStudent.map((s) => s.workshops),
  }
  return NextResponse.json(response);
}
