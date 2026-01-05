import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceSlugs, citySlugs } from "@/lib/constants";
import { formatSlug } from "@/lib/utils/content-spinner";

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

// FIX: Type defined as Promise and component made async
export default async function ServiceHub(props: { params: Promise<{ service: string }> }) {
  const params = await props.params;

  if (!serviceSlugs.includes(params.service)) notFound();

  const title = formatSlug(params.service);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{title} Centers in Mumbai</h1>
      <p className="mb-8 text-lg text-gray-700">
        Select your location to find the best {title} prices near you.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {citySlugs.map((city) => (
          <Link
            key={city}
            href={`/${params.service}/${city}`}
            className="p-4 bg-gray-50 rounded hover:bg-blue-50"
          >
            {formatSlug(city)}
          </Link>
        ))}
      </div>
    </div>
  );
}
