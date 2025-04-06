import { cn } from "@/lib/utils";
import { Marquee } from '../magicui/marquee';
import ft1h from '../../img/ft1h.webp';
import ft1w from '../../img/ft1w.webp';
import ft2h from '../../img/ft2h.webp';
import ft2w from '../../img/ft2w.webp';
import ft3h from '../../img/ft3h.webp';
import ft4h from '../../img/ft4h.webp';
import ft3w from '../../img/ft3w.webp';



const reviews = [
  {
    name: "Manuel",
    username: "",
    body: "Tardo demasiado agregando columnas a Excel. Necesito una solución que me ayude a automatizar esto.",
    img: ft1h
  },
  {
    name: "Samantha",
    username: "",
    body: "Ya tengo 6 personas contestando WhatsApps, necesito una solución que gestione esto de manera más eficiente.",
    img: ft1w
  },
  {
    name: "Paolo",
    username: "",
    body: "La gestión de datos es un caos. Necesito una herramienta que me ayude a organizar todo más rápido.",
    img: ft2h
  },
  {
    name: "Alicia",
    username: "",
    body: "Mis campañas de marketing son muy lentas. Quiero una solución de IA que optimice el proceso.",
    img: ft2w
  },
  {
    name: "Guillermo",
    username: "",
    body: "La atención al cliente me consume mucho tiempo. Necesito un chatbot que responda automáticamente.",
    img: ft3h
  },
  {
    name: "Jorge",
    username: "",
    body: "No puedo seguir el ritmo de las redes sociales. Busco una herramienta que gestione mis publicaciones automáticamente.",
    img: ft4h
  },
  {
    name: "Diana",
    username: "",
    body: "La recopilación de datos es tediosa. Quiero una solución que lo haga por mí y me dé análisis en tiempo real.",
    img: ft3w
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
<figure
    className={cn(
        "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        "bg-white border-gray-300 shadow-md hover:shadow-lg",
        "text-black dark:text-black"
    )}
>
    <div className="flex flex-row items-center gap-2">
        <img className="rounded-full border border-gray-300 " width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
            <figcaption className="text-sm font-medium">
                {name}
            </figcaption>
            <p className="text-xs font-medium">{username}</p>
        </div>
    </div>
    <blockquote className="mt-2 text-sm">{body}</blockquote>
</figure>


  );
};

export function Comentarios() {

  return (
    <div className="relative flex h-[70vh] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>

    
  );
}

