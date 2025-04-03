import { cn } from "@/lib/utils";
import { Marquee } from '../magicui/marquee';

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Tardo demasiado agregando columnas a Excel. Necesito una solución que me ayude a automatizar esto.",
    img: "https://avatar.vercel.sh/jack"
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Ya tengo 6 personas contestando WhatsApps, necesito una solución que gestione esto de manera más eficiente.",
    img: "https://avatar.vercel.sh/jill"
  },
  {
    name: "John",
    username: "@john",
    body: "La gestión de datos es un caos. Necesito una herramienta que me ayude a organizar todo más rápido.",
    img: "https://avatar.vercel.sh/john"
  },
  {
    name: "Alice",
    username: "@alice",
    body: "Mis campañas de marketing son muy lentas. Quiero una solución de IA que optimice el proceso.",
    img: "https://avatar.vercel.sh/alice"
  },
  {
    name: "Bob",
    username: "@bob",
    body: "La atención al cliente me consume mucho tiempo. Necesito un chatbot que responda automáticamente.",
    img: "https://avatar.vercel.sh/bob"
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "No puedo seguir el ritmo de las redes sociales. Busco una herramienta que gestione mis publicaciones automáticamente.",
    img: "https://avatar.vercel.sh/charlie"
  },
  {
    name: "Diana",
    username: "@diana",
    body: "La recopilación de datos es tediosa. Quiero una solución que lo haga por mí y me dé análisis en tiempo real.",
    img: "https://avatar.vercel.sh/diana"
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
        // Estilos de fondo y borde
        "bg-white border-gray-300 shadow-md hover:shadow-lg",
        // Estilos de texto
        "text-black dark:text-black"
    )}
>
    <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
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

