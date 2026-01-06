import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  href: string;
};

export default function ProjectCard({
  title,
  category,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-black group-hover:text-yellow-500 transition">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </Link>
  );
}
