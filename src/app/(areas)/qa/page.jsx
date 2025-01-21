import { StudentCard } from "@/components/StudentCard"

const estudiantes = [
  {
    nombre: "Angel Aguirre",
    especialidad: "QA Testing",
    descripcion: "Especialista en aseguramiento de calidad y pruebas de software.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-9/34669144_1845306878852986_5016286471879917568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFQgCGJlqr0e8W-9mqDNyuW6n3sds0Dn7Lqfex2zQOfsjyhFqTdXhN6mg3mE5_XuMzvwTxl6luX3wdf38jASaee&_nc_ohc=hneLmck8bdcQ7kNvgFH1qsI&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=Apeu-iT2o6QzJViXXh4MbE0&oh=00_AYBofe0gJFIWdgVHT9L1H8X7jMsofpy_KmDUxI2yN3tmlQ&oe=67B7897D"
  },
  {
    nombre: "Dennis Ayo",
    especialidad: "QA Automation",
    descripcion: "Especialista en automatización de pruebas y control de calidad.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/262503300_4656908654378554_396528835531116878_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFaX5oGGtsFkL3VJIg68YvPZg9xEgKtzHNmD3ESAq3Mcxsq7fCYspOdZhbuzzoKAwEpAA2Pbx-2BQjnqE1S4bJm&_nc_ohc=c7slrMARoyIQ7kNvgEY_ENt&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=A5FgVr7qHL4xO5so-51awQV&oh=00_AYDZe-B9kQam4ln6y6AA3I7EAjox1mKjUM7ZTE0YrYYycg&oe=679607EB"
  },
  {
    nombre: "Luis Garcia",
    especialidad: "QA Testing",
    descripcion: "Experto en pruebas de software y control de calidad.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/401778387_304196679241223_2463236086734289653_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH8jrgCVxl6bQQJCQCQ1EfvjszQ6jEOxKWOzNDqMQ7EpeirFptwj0pXWuIkxmBIn18XpDcYoj3_jyWEJ63h57OH&_nc_ohc=dmHLcSfT5LYQ7kNvgFmS2Af&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=ADlGH4_HpQRpp7iFKr3_YBe&oh=00_AYBJBEMd8coIg_t2zZI1BVwJBzhzq8EbRoNjs_AqAabAYA&oe=6795EC9D"
  },
  {
    nombre: "Allison Lema",
    especialidad: "QA Testing",
    descripcion: "Especialista en pruebas de software y aseguramiento de calidad.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/472790363_3225680350907085_7115181809112208596_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGN3_IZyabc1v7bCAqeXty9gYPm_syZ3p2Bg-b-zJnenU0c2vqZj4fpbAnsKKVnQ4ATOsgdMQ-O1PD197UEZvQI&_nc_ohc=ZZ7GHWGw77sQ7kNvgG9_Lb5&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=Aq3I4z8vmg0ka6notT0G-yY&oh=00_AYD0aciz7qhJ8rpshyWF72bVQeue5L7Slb4VWOgqPsS3JA&oe=6795E073"
  },
  {
    nombre: "Dayana Llumiquinga",
    especialidad: "QA Testing",
    descripcion: "Especialista en pruebas y control de calidad de software.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/291355841_2044365105747164_3396338236418414173_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH2GVNew32VgMxUj1VZ--Gm-jtSx7Peczv6O1LHs95zO_puwcWR7NZoAVtc388x6Av2tokI6MsaxDdSyxBowaFm&_nc_ohc=Ox9pSJd5bO8Q7kNvgHEb64o&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=AyF07XXstQDWT3-YiY1zl4Q&oh=00_AYCCXIjvC2OTgBW-PDmOObBxZeoTL8lkkg4oVqUVqR--yA&oe=6796016C"
  },
  {
    nombre: "Magaly Pillajo",
    especialidad: "QA Testing",
    descripcion: "Especialista en pruebas y aseguramiento de calidad.",
    imagen: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/474746748_2410937725912841_3962920157603430590_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGjpQY69fUN6PpDO5J2YQ3T98H6RMrAap73wfpEysBqnjrU7mVcrC3BSIcE0YKVYFab9YEZbwzEwt0RnkNRGHya&_nc_ohc=a8geAoLX16wQ7kNvgEulnfj&_nc_zt=23&_nc_ht=scontent.fuio13-1.fna&_nc_gid=AcPNlyO8YuhQ4qo0KCqxHLX&oh=00_AYCHqYU5zcQvR0XmL0LrvPUhxz-QOWUFOmvexTJFeYD_RA&oe=679609B0"
  }
]

export default function QAPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Área de QA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estudiantes.map((estudiante, index) => (
          <StudentCard key={index} student={estudiante} />
        ))}
      </div>
    </div>
  )
} 