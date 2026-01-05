import { notFound } from "next/navigation";
import { serviceSlugs, citySlugs, companyDetails } from "@/lib/constants";
import { getServiceContent } from "@/lib/content-engine";
import { JsonLd } from "@/components/seo/JsonLd";
import { PricingCard, ProcedureTimeline, ReviewCard } from "@/components/ui/ServiceComponents";
import { Check, Info, Phone } from "lucide-react";

export const revalidate = 86400;

type Params = Promise<{ service: string; city: string }>;

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const content = getServiceContent(params.service, params.city);
  return { 
    title: `${content.title} | Best Price & High Quality`,
    description: content.scientificDesc.substring(0, 160)
  };
}

export default async function ProgrammaticPage(props: { params: Params }) {
  const params = await props.params;
  const { service, city } = params;

  if (!serviceSlugs.includes(service) || !citySlugs.includes(city)) notFound();

  const content = getServiceContent(service, city);

  return (
    <main className="bg-gray-50 pb-20">
      <JsonLd service={service} city={city} />
      
      {/* HERO SECTION */}
      <div className="bg-blue-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed mb-8">
            {content.scientificDesc}
          </p>
          <div className="flex gap-4">
            <a href={`tel:${companyDetails.phone[0]}`} className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-blue-50 transition">
              <Phone size={20} /> Book Appointment
            </a>
            <div className="flex items-center gap-2 text-sm font-medium bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700">
               <Check size={16} className="text-green-400" /> NABL Accredited
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 grid lg:grid-cols-3 gap-8">
        
        {/* LEFT CONTENT COLUMN */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Scientific Context */}
          <section className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Overview & Imaging Context</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{content.imagingContext}</p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3">
              <Info className="text-blue-600 shrink-0" />
              <div>
                <h4 className="font-bold text-blue-900">Tech Specs</h4>
                <p className="text-sm text-blue-800">{content.techSpecs}</p>
              </div>
            </div>
          </section>

          {/* Procedure Guide */}
          <section className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Procedure</h2>
            <ProcedureTimeline steps={content.procedure} />
          </section>

          {/* Preparation & Fasting */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-yellow-400">
              <h3 className="font-bold text-lg mb-4">Patient Checklist</h3>
              <ul className="space-y-2">
                {content.preparation.map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-700 text-sm">
                    <span className="text-yellow-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-400">
              <h3 className="font-bold text-lg mb-4">Fasting Guidelines</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{content.fasting}</p>
              <p className="text-gray-500 text-xs mt-4 italic">*Please consult doctor for specific instructions.</p>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                <details key={i} className="bg-white p-4 rounded-xl shadow-sm group cursor-pointer">
                  <summary className="font-semibold text-gray-800 list-none flex justify-between items-center">
                    {faq.question}
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm border-t pt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR COLUMN */}
        <div className="space-y-8">
          
          {/* Pricing */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Packages & Pricing</h3>
            {content.pricing.map((plan, i) => <PricingCard key={i} plan={plan} />)}
          </div>

          {/* Patient Reviews */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Patient Feedback</h3>
            <div className="space-y-4">
              <ReviewCard name="Anjali R." rating={5} text="Very professional staff and the reporting was super fast via WhatsApp." />
              <ReviewCard name="Rajesh K." rating={5} text={`Best center for ${content.title} in ${city}. Hygienic and affordable.`} />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-900 text-white p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-4">Why Choose Henotics?</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>✅ Advanced 3T/128 Slice Tech</li>
              <li>✅ Expert Radiologists Panel</li>
              <li>✅ Digital & Hardcopy Reports</li>
              <li>✅ 24/7 Support: {companyDetails.phone[0]}</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
