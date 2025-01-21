import { StudentCard } from "@/components/StudentCard"

const estudiantes = [
  {
    nombre: "Francisco Ocaña",
    especialidad: "Desarrollo Full Stack",
    descripcion: "Desarrollador full stack con experiencia en aplicaciones web modernas.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/464519924_3004022146430344_1401963748657309102_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEbQWIGKA9X5yONOj4qwZdQ1SZtyabvrUbVJm3Jpu-tRueOKTCSt0IpL5utn2IDCuIwdrARhO_hf0adKIWJY-xE&_nc_ohc=GWUEo5SmCp0Q7kNvgFtlb9f&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=A2I_O5dh7VlhOu2zHuIw8UV&oh=00_AYAhMbwzzFNkXSoYrTdud3D4R7pHGa8DbDQCMxCgpxVLqw&oe=6795DAE5"
  },
  {
    nombre: "Andres Ortiz",
    especialidad: "Desarrollo Web",
    descripcion: "Desarrollador web especializado en tecnologías frontend y backend.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-9/160277727_765447531073711_6523980889307050941_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHkRd4MliXJ2hp9tZX3MKLUiOZtt_Lg6YOI5m238uDpg3EqapfnTNV88lpNZQzMlXznic7l-ViXBsUg0woosFN5&_nc_ohc=X6ExDLXmHVIQ7kNvgHYf1JK&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=A5Mi_Sp30GfmCrv9HQ52UNo&oh=00_AYAiUKXUyfyLvnf-437A-TkeNbTWciZD0k0wxNWiSwIjgA&oe=67B77B6C"
  },
  {
    nombre: "Adrian Simbaña",
    especialidad: "Desarrollo de Software",
    descripcion: "Desarrollador de software con enfoque en soluciones empresariales.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/460200433_2792323877594089_4502715326638007409_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHqDPRFDmnTZgw-Dd5aYLYbN7uivlkMpQI3u6K-WQylAjL3nezDJ-dPEOyXq8ms6Kqq0KsLAwPhhAp_yZivdAx2&_nc_ohc=dhz8O5p13uwQ7kNvgEWCTkb&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=Ay1ewdoUyZMKPE9SSezsuTy&oh=00_AYB3V9YDVNqqIu5hcxthGbojr0578pjo80Kf74C2YDCIaw&oe=679603D3"
  },
  {
    nombre: "Jeimmy Tinoco",
    especialidad: "Desarrollo Full Stack",
    descripcion: "Desarrolladora full stack con experiencia en aplicaciones web modernas.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-1/169088342_1435435500129740_5832346543388059463_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGYg4VMs8YTMZ2wRULxrxXgQmAMR5NH_CtCYAxHk0f8KwBA-LIrgYgzKoZKATXBntYK6DFt5ZqP3Epgqi7ocrxX&_nc_ohc=88X2iVtIlN4Q7kNvgHoi1rv&_nc_zt=24&_nc_ht=scontent.fuio13-1.fna&_nc_gid=AGpA-6Nd6Hf9b4ViTi-p9tw&oh=00_AYCpDe6hJD9KCz1smTL5ccVLZ5zsb-pCsbzSGZoBQxpYKg&oe=67B79351"
  },
  {
    nombre: "Bryan Castro",
    especialidad: "Desarrollo",
    descripcion: "Desarrollador con experiencia en soluciones de software.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/474645039_2410937792579501_33547685589777647_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG2pMHmq_Xgq9V6dHgDt5OfGEIUjBFns78YQhSMEWezvxOD9vaJy1WqsQk3Fdm24JUxqOWpkTHbI71MuUoPQyEp&_nc_ohc=9Hsk4zutVzMQ7kNvgEfZJAg&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=AxJ3oT_tOQD3ERcBo4FWul0&oh=00_AYAC8ChNqaFJhv5bsiSVVp7yWz4ZHRstE6H17MvItkeG_A&oe=6796013C"
  }
]

export default function DesarrolloPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Área de Desarrollo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estudiantes.map((estudiante, index) => (
          <StudentCard key={index} student={estudiante} />
        ))}
      </div>
    </div>
  )
} 