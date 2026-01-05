import { companyDetails } from "@/lib/constants";

export const metadata = {
  title: "About Henotic Diagnostics | Our Story",
  description: "Learn about Henotic Diagnostics, our mission to provide affordable and accurate healthcare in Navi Mumbai.",
};

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Redefining Healthcare Diagnostics</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Combining cutting-edge technology with compassionate care to deliver results you can trust.
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" 
            alt="Henotic Laboratory" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Who We Are</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Henotic Diagnostics is a premier diagnostic center located in the heart of Kharghar, Navi Mumbai. Established with a vision to make high-quality healthcare accessible, we have served over 50,000 satisfied patients.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our facility at Millennium Empire is equipped with state-of-the-art MRI, CT Scan, and Pathology equipment, operated by a team of senior doctors and technicians available 24/7.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-500">Service Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
