import {
 Card,
 CardHeader,
 CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
 title: string;
 href?: string;
 description: string;
 dates: string;
 link?: string;
 image?: string;
 video?: string;
 className?: string;
}

export function ProjectCard({
 title,
 href,
 description,
 dates,
 link,
 image,
 video,
 className,
}: Props) {
 return (
  <Card
   className={
    "flex flex-col overflow-hidden border hover:border-primary transition-all duration-300 ease-out h-full"
   }
  >
   <Link
    href={href || "#"}
    className={cn("block cursor-pointer", className)}
   >
    {video && (
     <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="pointer-events-none mx-auto h-56 w-full object-cover object-top"
     />
    )}
    {image && (
     <Image
      src={image}
      alt={title}
      width={500}
      height={300}
      className="h-40 w-full overflow-hidden object-cover object-top"
     />
    )}
   </Link>
   <CardHeader className="px-2">
    <div className="space-y-1">
     <CardTitle className="mt-1 text-base">{title}</CardTitle>
     <time className="font-sans text-xs">{dates}</time>
     <div className="hidden font-sans text-xs underline print:visible">
      {link?.replace("https://", "").replace("www.", "").replace("/", "")}
     </div>
     <div className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert">
      {description}
     </div>
    </div>
   </CardHeader>
  </Card>
 );
}
