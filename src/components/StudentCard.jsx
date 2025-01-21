"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function StudentCard({ student }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48">
        <Image
          src={student.imagen}
          alt={`Foto de ${student.nombre}`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{student.nombre}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-medium text-primary">{student.especialidad}</p>
        <p className="text-muted-foreground mt-2">{student.descripcion}</p>
      </CardContent>
    </Card>
  )
} 