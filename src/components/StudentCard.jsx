"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export function StudentCard({ student }) {
  const [showFullImage, setShowFullImage] = useState(false)

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div 
          className="relative w-full h-48 cursor-pointer group"
          onClick={() => setShowFullImage(true)}
        >
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
            <span className="text-white text-sm font-medium">Click para ver imagen completa</span>
          </div>
          <Image
            src={student.imagen}
            alt={`Foto de ${student.nombre}`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
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

      <Dialog open={showFullImage} onOpenChange={setShowFullImage}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="relative">
            <button
              onClick={() => setShowFullImage(false)}
              className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            <DialogTitle className="sr-only">
              Foto de {student.nombre}
            </DialogTitle>
            <div className="relative w-full h-[80vh]">
              <Image
                src={student.imagen}
                alt={`Foto de ${student.nombre}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 