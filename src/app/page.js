import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Portafolio de Estudiantes</h1>
        <p className="text-muted-foreground text-lg">
          Bienvenido al portafolio de nuestros talentosos estudiantes en diferentes áreas de tecnología.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Área de Redes */}
          <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Redes</h2>
            <p className="text-muted-foreground">Especialistas en redes y comunicaciones</p>
            <Link href="/redes">
              <Button className="mt-4" variant="outline">Ver estudiantes</Button>
            </Link>
          </div>

          {/* Área de Infraestructura */}
          <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Infraestructura</h2>
            <p className="text-muted-foreground">Expertos en sistemas y servidores</p>
            <Link href="/infraestructura">
              <Button className="mt-4" variant="outline">Ver estudiantes</Button>
            </Link>
          </div>

          {/* Área de Desarrollo */}
          <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Desarrollo</h2>
            <p className="text-muted-foreground">Desarrolladores full-stack</p>
            <Link href="/desarrollo">
              <Button className="mt-4" variant="outline">Ver estudiantes</Button>
            </Link>
          </div>

          {/* Área de QA */}
          <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
            <h2 className="text-2xl font-semibold mb-4">QA</h2>
            <p className="text-muted-foreground">Aseguramiento de calidad</p>
            <Link href="/qa">
              <Button className="mt-4" variant="outline">Ver estudiantes</Button>
            </Link>
          </div>

          {/* Área de Product Managers */}
          <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Product Managers</h2>
            <p className="text-muted-foreground">Gestión de productos digitales</p>
            <Link href="/product-managers">
              <Button className="mt-4" variant="outline">Ver estudiantes</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
