import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/redes" className="text-muted-foreground hover:text-primary">
              Redes
            </Link>
            <Link href="/infraestructura" className="text-muted-foreground hover:text-primary">
              Infraestructura
            </Link>
            <Link href="/desarrollo" className="text-muted-foreground hover:text-primary">
              Desarrollo
            </Link>
            <Link href="/qa" className="text-muted-foreground hover:text-primary">
              QA
            </Link>
            <Link href="/product-managers" className="text-muted-foreground hover:text-primary">
              Product Managers
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            Contacto
          </Button>
        </div>
      </nav>
    </header>
  )
} 