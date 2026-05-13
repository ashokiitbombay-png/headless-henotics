import PartnerCard from "@/components/features/partners/PartnerCard";
import { partnerCategories } from "@/config/partnerData";

export default function PartnerCategorySection() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">
            Our Certified Partner Network
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find an authorized Henotic Diagnostics center near you. We partner with the best imaging and pathology labs to ensure unmatched quality.
          </p>
        </div>

        <div className="space-y-24">
          {Object.entries(partnerCategories).map(([key, category]) => (
            <section key={key} id={key} className="scroll-mt-24">
              <div className="mb-10 border-b border-gray-200 pb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-500">{category.description}</p>
              </div>

              {/* Responsive Grid Setup */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.partners.map((partner) => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}
