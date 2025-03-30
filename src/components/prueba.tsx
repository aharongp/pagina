import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";

export default function Prueba(){

  return(
    <AnimatedGridPattern
    numSquares={30}
    maxOpacity={0.9}
    duration={3}
    repeatDelay={1}
    className={cn(
      "[mask-image:radial-gradient(5000px_circle_at_center,white,transparent)]",
      "inset-x-0 inset-y-[-30%] h-[500%] skew-y-12",
    )}
  />
  );
}