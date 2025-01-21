import { StudentCard } from "@/components/StudentCard"

const estudiantes = [
  {
    nombre: "Douglas Moreno",
    especialidad: "Product Management",
    descripcion: "Product Manager con experiencia en gestión de productos digitales.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/370209284_1521317442007817_5152782532726381854_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE2GsabirKeL26uNsnTXP3jlMgHRbk3TyqUyAdFuTdPKqPz9IMGUvnAqRbm9HFq4YZOfsHojbZf54NkPb1RaYv3&_nc_ohc=UWprO_04ne8Q7kNvgFpT4wj&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=APRwQ3k79NVGACGV2KLRUWA&oh=00_AYD7VpRMcpG2wpKmlskCwDUEdjHHnpc6JUI71VgiOHvE4Q&oe=6796054E"
  },
  {
    nombre: "Dayana Ramirez",
    especialidad: "Product Management",
    descripcion: "Product Manager con experiencia en gestión de productos digitales.",
    imagen: "https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/469369672_1094876862106042_6139921226778216547_n.jpg?ccb=11-4&oh=01_Q5AaIC_Awi9vCsEyvu3cmxXtzRz8UfDCoYhkYqoCcdT2YYFm&oe=679D4F8B&_nc_sid=5e03e0&_nc_cat=109"
  },
]

export default function ProductManagersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Área de Product Managers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estudiantes.map((estudiante, index) => (
          <StudentCard key={index} student={estudiante} />
        ))}
      </div>
    </div>
  )
} 