import { StudentCard } from "@/components/StudentCard"

const estudiantes = [
  {
    nombre: "Liliana Chora",
    especialidad: "Infraestructura Cloud",
    descripcion: "Especialista en infraestructura y servicios cloud.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/340909984_1305809883307493_6931359605545206856_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEOlz8KzdALisybhPvJBNRs5uRSC1UWbyjm5FILVRZvKJrk2fcGJZqgBerg0SBggf2pzxZgBbWJkcsiGidL3cG2&_nc_ohc=1n6Jz4-jAVYQ7kNvgFI-4Y5&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=AREz3LuuIiIyterl6vEtjGZ&oh=00_AYA79rClRtZczC7rksFaq2m_Dp1HbOGUrQf8Bb2rsmO6uQ&oe=67960C9F"
  },
  {
    nombre: "Barbara Espinosa",
    especialidad: "Infraestructura y Sistemas",
    descripcion: "Especialista en gestión de infraestructura y sistemas.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/349553933_1301916890421944_3865252320911713425_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFSvJDIn7l-rtOQcqFElH8Sa0TDLsz5bHNrRMMuzPlsc5-ZmU-W6k1zvFbQYQY20M-2CrUPRXbs1XMn3KvqxIHQ&_nc_ohc=Q-YA3NxuQ1sQ7kNvgFZmtvE&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=A3n3voyTDNQc8jqX95bBwfp&oh=00_AYCCHhEdIvfoyS6KyGwwgn_oNjf174vTQMWfbubWY1yfKA&oe=6795E802"
  },
  {
    nombre: "Carlos Pogo",
    especialidad: "Infraestructura y Servidores",
    descripcion: "Especialista en administración de servidores y sistemas.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-9/64707811_2366713450263279_5023983817778528256_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGq0UgV0Yz36KSEuMONiSP6ogMfZ-3yqc-iAx9n7fKpz5qEHk8CEEtx40sLAHMWPQwO_89AhA6-85_9vXpK5vTQ&_nc_ohc=eo_FpbzSPawQ7kNvgHeszlx&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=A_BV829GxTyjIYdAaD53HYH&oh=00_AYCo9kCoS0DW2djdChMSd9Oj_xaVEORCZtn9nCbhaGIn_w&oe=67B78F6C"
  },
  {
    nombre: "Anthony Quishpe",
    especialidad: "Infraestructura y DevOps",
    descripcion: "Especialista en infraestructura y prácticas DevOps.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/474448153_2410937749246172_4101005527153144078_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEzs6DAv5CpM5gqU4lPo0VFaqK2zoOy-qRqorbOg7L6pD7imw7nf__0UT_hJRsojNbohxCN9Qg-DgN7OCxVnOxV&_nc_ohc=QcRa7V3OgqcQ7kNvgF_rBhe&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=A7VDH1aJ1oQqgTyMwpS4phm&oh=00_AYADMZHDTaRA12Gyi7F2dZ9f3hayHMkmuhWm2aYNZIl2Bg&oe=67960999"
  },
  {
    nombre: "Amanda Rivera",
    especialidad: "Infraestructura Cloud",
    descripcion: "Especialista en servicios cloud y virtualización.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/474609945_2410937709246176_703754299292700597_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEC1o6AwWxpZLQ34Qd7nEDQbyXi5JbaeflvJeLkltp5-caGhZPrxd0ftqpxuPDvMR1PSbH2tB3-FxclKwWstplg&_nc_ohc=xmxYK0hw7ngQ7kNvgFuahav&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=A8x6NGsIugZeCRNkb8PvjvL&oh=00_AYAu8CtGfDtIHBLTSbFfyYpIo-Z8XAt00ewkJFch5MJBeA&oe=6795FE2C"
  }
]

export default function InfraestructuraPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Área de Infraestructura</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estudiantes.map((estudiante, index) => (
          <StudentCard key={index} student={estudiante} />
        ))}
      </div>
    </div>
  )
} 