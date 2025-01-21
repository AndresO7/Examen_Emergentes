import { StudentCard } from "@/components/StudentCard"

const estudiantes = [
  {
    nombre: "Daniel Alulema",
    especialidad: "Redes y Comunicaciones",
    descripcion: "Especialista en redes y sistemas de comunicación.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/469738305_1222847362115255_8984906330371179320_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFcrZpjOv8m9aFn1gVzq3mljJMBzkqT7dmMkwHOSpPt2ZhC18lvQUWG6eZyKdwDN446TcCJYPjMmBvPehzlR6cr&_nc_ohc=wK7GOaPIajMQ7kNvgElkOv_&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=ArS8DDzd3vjLoR2EXVMPi1R&oh=00_AYAZvBcOcr7r0qJ2G6Gy1OosUlWGL12r3CGsfqw3hFQI6A&oe=67960ED2"
  },
  {
    nombre: "Sebastian Mogrovejo",
    especialidad: "Redes y Seguridad",
    descripcion: "Especialista en seguridad de redes y comunicaciones.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-9/96548741_1609881182510248_8972968442701283328_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHtCQA23M2QtooaBY0Gw9PCLq2pgMywcfwuramAzLBx_BK6U-KSoP72DXWtq2SP1MH2YOZmVhOeWQXWJJPFuXgi&_nc_ohc=j8DW6dH7z7cQ7kNvgGGcE6Q&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=AuY61V2Qx3o1yyKDEya5j1v&oh=00_AYAfXpzUwNGuI7Jz4l6XHOi02l_vg2Yr3gcYlhjLDn_JSA&oe=67B79C50"
  },
  {
    nombre: "Emilio Ñacato",
    especialidad: "Redes y Sistemas",
    descripcion: "Experto en implementación y gestión de redes.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/421574713_1868608076929361_680982923482280497_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHsZHmpNScBiygTZb4zyM1HjsiFBLnUETuOyIUEudQROykg_RX0o5ebqjDnJkYgxxsBuCilKhh2zFYEtriR6g5n&_nc_ohc=m0mpHYvGjk8Q7kNvgGLD-HK&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=AkeuPW150LB05HXjpk8xrdm&oh=00_AYDTFOIqZ0yh85L2gRnYa0Xvasff8UAqn6EUuGdklnDN1A&oe=6795EC9B"
  },
  
  {
    nombre: "Deivy Solorzano",
    especialidad: "Redes y Sistemas",
    descripcion: "Especialista en infraestructura de redes.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-1/348859964_1952010815159465_2275749199851292564_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGn6LlwMl874Tj9cntJ0Do5FsG9HDuT9zMWwb0cO5P3M48GVSzVyoE34Gf6nv1TerH-QZPUCBDmiOa8WAnnC5za&_nc_ohc=O98xXAETsPwQ7kNvgEVGctO&_nc_zt=24&_nc_ht=scontent.fuio13-1.fna&_nc_gid=Au0aaAjaAS77PMz3gZuacxU&oh=00_AYDOQ-7yw2WLd8HcrfUFBEaVAh2NmWX9f1-lpg84Gh8E-g&oe=67960048"
  },
  {
    nombre: "Diego Torres",
    especialidad: "Redes y Comunicaciones",
    descripcion: "Experto en redes y telecomunicaciones.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-1/92245706_1519375081563450_6116091549001449472_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEPkdpWXFEo1oX4VBeFY6IHTqxdIuQXA3VOrF0i5BcDdVhCAlYOGPlwy7yEk4rUFZy5sPfqYaOg1cpmjlcJlnFO&_nc_ohc=4iKAmSbifwYQ7kNvgHANIh5&_nc_zt=24&_nc_ht=scontent.fuio13-1.fna&_nc_gid=A915ry14fhq1eY8COmR6eND&oh=00_AYD1IjX0O_vOgQy8KQITPoDNQgxS9Xr_MwWXU0Ktomitlw&oe=67B77F2B"
  }
]

export default function RedesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Área de Redes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estudiantes.map((estudiante, index) => (
          <StudentCard key={index} student={estudiante} />
        ))}
      </div>
    </div>
  )
} 