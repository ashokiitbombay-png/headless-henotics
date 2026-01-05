import { CheckCircle, Clock, FileText, Star } from "lucide-react";

export function PricingCard({ plan }: { plan: any }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
        POPULAR
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
      <div className="text-3xl font-extrabold text-blue-600 mb-4">{plan.price}</div>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feat: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle size={16} className="text-green-500" /> {feat}
          </li>
        ))}
      </ul>
      <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
        Book Now
      </button>
    </div>
  );
}

export function ProcedureTimeline({ steps }: { steps: any[] }) {
  return (
    <div className="relative border-l-2 border-blue-200 ml-4 space-y-8 my-8">
      {steps.map((step, i) => (
        <div key={i} className="relative pl-8">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white"></div>
          <h4 className="font-bold text-lg text-gray-900">{step.title}</h4>
          <p className="text-gray-600 leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function ReviewCard({ name, rating, text }: { name: string; rating: number; text: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex text-yellow-400 mb-2">
        {[...Array(rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-gray-700 italic mb-4">"{text}"</p>
      <div className="font-bold text-gray-900">- {name}</div>
    </div>
  );
}
