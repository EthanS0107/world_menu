import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await req.json();
  const {
    firstName,
    lastName,
    phone,
    city,
    country,
    currentPassword,
    newPassword,
  } = body;

  try {
    // Si changement de mot de passe, vérifier l'ancien
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { error: "Le mot de passe actuel est requis" },
          { status: 400 },
        );
      }

      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { password: true },
      });

      if (
        !user?.password ||
        !(await bcrypt.compare(currentPassword, user.password))
      ) {
        return NextResponse.json(
          { error: "Mot de passe actuel incorrect" },
          { status: 400 },
        );
      }
    }

    const updateData: Record<string, unknown> = {
      firstName: firstName?.trim() || null,
      lastName: lastName?.trim() || null,
      name:
        [firstName?.trim(), lastName?.trim()].filter(Boolean).join(" ") || null,
      phone: phone?.trim() || null,
      city: city?.trim() || null,
      country: country?.trim() || null,
    };

    if (newPassword) {
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: updateData,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        name: true,
        phone: true,
        city: true,
        country: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Erreur mise à jour profil:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 },
    );
  }
}
