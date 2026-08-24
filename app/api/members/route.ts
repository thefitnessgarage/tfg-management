import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Fetch all gym members
export async function GET() {
  try {
    const members = await prisma.member.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(members, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 });
  }
}

// POST: Register a new gym member
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, membershipType } = body;

    const newMember = await prisma.member.create({
      data: {
        name,
        email,
        phone,
        membershipType,
        status: "ACTIVE",
      },
    });

    return NextResponse.json(newMember, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create member" }, { status: 500 });
  }
}