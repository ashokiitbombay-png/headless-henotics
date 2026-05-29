"use client";

import React, { useState } from "react";
import { MessageCircleQuestion, ChevronDown, Activity, CheckCircle2 } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a blood test?",
      answer: (
        <>
          <p className="mb-3">A blood test is a laboratory examination performed on a blood sample to evaluate health, diagnose diseases, monitor medical conditions, and assess organ function. Blood testing helps doctors analyze blood cells, hormones, enzymes, proteins, glucose, cholesterol, and many other diagnostic biomarkers.</p>
          <p>Blood tests are widely used in preventive healthcare, disease diagnosis, routine health screening, and treatment monitoring.</p>
        </>
      )
    },
    {
      question: "Why are blood tests done?",
      answer: (
        <>
          <p className="mb-3">Blood tests are done to detect diseases, evaluate overall health, identify infections, monitor chronic conditions, assess organ function, and support preventive healthcare.</p>
          <p className="mb-2 font-medium text-gray-900">Doctors may recommend blood testing for:</p>
          <ul className="grid md:grid-cols-2 gap-2 mb-3">
            {["Diabetes screening", "Cholesterol testing", "Liver and kidney evaluation", "Thyroid assessment", "Hormone testing", "Infection detection", "Nutritional deficiency analysis", "Cardiac risk evaluation", "Pregnancy screening", "Routine wellness checkups"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> {item}</li>
            ))}
          </ul>
          <p>Many health conditions can be detected early through laboratory blood testing before symptoms become severe.</p>
        </>
      )
    },
    {
      question: "How does a blood test work?",
      answer: (
        <>
          <p className="mb-3">A blood test works by collecting a blood sample and analyzing it in a clinical pathology laboratory using advanced diagnostic technologies and automated analyzers.</p>
          <p className="mb-2 font-medium text-gray-900">The process usually includes:</p>
          <ul className="space-y-1 mb-3 list-disc list-inside pl-2">
            <li>Blood sample collection</li>
            <li>Laboratory processing</li>
            <li>Biomarker analysis</li>
            <li>Pathologist review</li>
            <li>Diagnostic reporting</li>
          </ul>
          <p>Modern laboratory medicine uses hematology systems, biochemistry analyzers, immunoassay testing platforms, and molecular diagnostics to generate accurate results.</p>
        </>
      )
    },
    {
      question: "What diseases can blood tests detect?",
      answer: (
        <>
          <p className="mb-3">Blood tests can detect or help monitor many medical conditions, including:</p>
          <ul className="grid md:grid-cols-3 gap-2 mb-3">
            {["Diabetes", "Thyroid disorders", "Liver disease", "Kidney disease", "Heart disease", "Anemia", "Infections", "Vitamin deficiencies", "Autoimmune disorders", "Blood disorders", "Hormonal imbalances", "Inflammatory diseases", "Certain cancers"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> {item}</li>
            ))}
          </ul>
          <p>Diagnostic blood tests often identify abnormalities before visible symptoms develop.</p>
        </>
      )
    },
    {
      question: "What are the different types of blood tests?",
      answer: (
        <>
          <p className="mb-3">The main types of blood tests include:</p>
          <ul className="grid md:grid-cols-2 gap-2 mb-3">
            {["Complete Blood Count (CBC)", "Blood sugar tests", "Lipid profile", "Liver function tests", "Kidney function tests", "Thyroid profile", "Hormone testing", "Vitamin testing", "Coagulation profile", "Infection screening tests", "Cardiac biomarker tests", "Immunology and serology tests"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> {item}</li>
            ))}
          </ul>
          <p>Each blood test evaluates specific body functions or disease markers.</p>
        </>
      )
    },
    {
      question: "What is a CBC blood test?",
      answer: (
        <>
          <p className="mb-3">A CBC blood test, or Complete Blood Count, measures red blood cells, white blood cells, hemoglobin, hematocrit, and platelets.</p>
          <p className="mb-2 font-medium text-gray-900">It helps diagnose:</p>
          <ul className="space-y-1 mb-3 list-disc list-inside pl-2">
            <li>Anemia</li>
            <li>Infection</li>
            <li>Inflammation</li>
            <li>Blood disorders</li>
            <li>Immune system abnormalities</li>
          </ul>
          <p>CBC is one of the most commonly ordered hematology blood tests.</p>
        </>
      )
    },
    {
      question: "What is fasting before a blood test?",
      answer: (
        <>
          <p className="mb-3">Fasting before a blood test means avoiding food and certain beverages for a specified number of hours before sample collection.</p>
          <p className="mb-2 font-medium text-gray-900">Fasting is commonly required for:</p>
          <ul className="space-y-1 mb-3 list-disc list-inside pl-2">
            <li>Blood sugar testing</li>
            <li>Lipid profile testing</li>
            <li>Certain metabolic tests</li>
          </ul>
          <p>Water is usually allowed during fasting unless otherwise instructed.</p>
        </>
      )
    },
    {
      question: "How many hours fasting is required before a blood test?",
      answer: (
        <p>Most fasting blood tests require 8 to 12 hours of fasting. The exact duration depends on the specific laboratory test being performed. Patients should follow the preparation instructions provided by their healthcare provider or pathology laboratory.</p>
      )
    },
    {
      question: "Can I drink water before a fasting blood test?",
      answer: (
        <p>Yes, water is generally allowed before most fasting blood tests. Staying hydrated can make blood sample collection easier and may improve testing accuracy. However, sugary drinks, tea, coffee, juice, and alcohol should usually be avoided during fasting.</p>
      )
    },
    {
      question: "What should I avoid before a blood test?",
      answer: (
        <>
          <p className="mb-2 font-medium text-gray-900">Before a blood test, patients may need to avoid:</p>
          <ul className="space-y-1 mb-3 list-disc list-inside pl-2">
            <li>Eating food during fasting periods</li>
            <li>Alcohol consumption</li>
            <li>Smoking</li>
            <li>Intense exercise</li>
            <li>Certain medications if advised by a doctor</li>
          </ul>
          <p>Proper blood test preparation helps improve result accuracy.</p>
        </>
      )
    },
    {
      question: "How long does a blood test take?",
      answer: (
        <p>Most blood sample collection procedures take only a few minutes. However, total laboratory processing time depends on the complexity of the test. Some routine blood tests may be available within hours, while specialized diagnostic tests may require additional processing time.</p>
      )
    },
    {
      question: "Are blood tests painful?",
      answer: (
        <p>Blood tests usually cause minimal discomfort. Most patients experience only a brief pinching sensation during needle insertion. Modern blood collection techniques are designed to minimize pain and improve patient comfort.</p>
      )
    },
    {
      question: "Is blood testing safe?",
      answer: (
        <p>Yes, blood testing is generally very safe when performed by trained healthcare professionals using sterile equipment and standardized laboratory procedures. Minor bruising or temporary soreness may occasionally occur at the collection site.</p>
      )
    },
    {
      question: "What is preventive blood testing?",
      answer: (
        <>
          <p className="mb-3">Preventive blood testing involves routine laboratory screening performed before symptoms develop to identify early health risks and silent diseases.</p>
          <p className="mb-2 font-medium text-gray-900">Preventive blood tests help monitor:</p>
          <ul className="grid md:grid-cols-2 gap-2 mb-3">
             {["Diabetes risk", "Cholesterol levels", "Liver health", "Kidney function", "Hormonal balance", "Nutritional deficiencies"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> {item}</li>
            ))}
          </ul>
          <p>Regular screening supports early diagnosis and better long-term healthcare outcomes.</p>
        </>
      )
    },
    {
      question: "What is laboratory blood testing?",
      answer: (
        <p>Laboratory blood testing refers to the scientific analysis of blood samples using clinical pathology methods, automated analyzers, and diagnostic technologies. Laboratory medicine combines hematology, biochemistry, immunology, microbiology, and pathology diagnostics to support accurate disease detection.</p>
      )
    },
    {
      question: "What are biomarkers in blood tests?",
      answer: (
        <>
          <p className="mb-3">Biomarkers are measurable biological substances found in blood that indicate normal or abnormal body function.</p>
          <p className="mb-2 font-medium text-gray-900">Diagnostic biomarkers help identify:</p>
          <ul className="grid md:grid-cols-2 gap-2 mb-3">
             {["Infection", "Inflammation", "Organ dysfunction", "Hormonal imbalance", "Cancer risk", "Cardiovascular disease"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> {item}</li>
            ))}
          </ul>
          <p>Biomarker analysis is a core component of modern laboratory medicine.</p>
        </>
      )
    },
    {
      question: "How accurate are blood tests?",
      answer: (
        <p>Blood tests are highly accurate when proper sample collection, laboratory processing, quality control, and clinical interpretation standards are followed. Modern pathology laboratories use advanced automated analyzers and standardized protocols to ensure reliable diagnostic results.</p>
      )
    },
    {
      question: "Can blood tests detect cancer?",
      answer: (
        <>
          <p className="mb-3">Certain blood tests can help detect cancer-related biomarkers, monitor cancer treatment, or identify abnormalities associated with some cancers.</p>
          <p className="mb-2 font-medium text-gray-900">Examples include:</p>
          <ul className="space-y-1 mb-3 list-disc list-inside pl-2">
            <li>Tumor marker testing</li>
            <li>Complete Blood Count (CBC)</li>
            <li>Specialized molecular diagnostics</li>
          </ul>
          <p>However, blood tests alone may not confirm all cancers and are often combined with imaging or biopsy procedures.</p>
        </>
      )
    },
    {
      question: "Why are regular blood tests important?",
      answer: (
        <p>Regular blood tests are important because they help detect health problems early, monitor chronic diseases, evaluate treatment response, and support preventive healthcare. Routine testing may improve long-term health outcomes through early diagnosis and timely medical intervention.</p>
      )
    },
    {
      question: "What happens after a blood sample is collected?",
      answer: (
        <p>After collection, the blood sample is labeled, processed, and analyzed in a laboratory using specialized diagnostic systems. The results are reviewed by laboratory professionals and shared with the treating doctor for interpretation and clinical decision-making.</p>
      )
    },
    {
      question: "What is the role of pathology in blood testing?",
      answer: (
        <p>Pathology plays a central role in blood testing by analyzing blood samples, identifying abnormalities, diagnosing diseases, and supporting medical treatment planning. Clinical pathology laboratories use advanced diagnostic technologies to provide accurate and evidence-based laboratory results.</p>
      )
    },
    {
      question: "What is the difference between routine and diagnostic blood tests?",
      answer: (
        <p>Routine blood tests are preventive screenings performed to monitor general health, while diagnostic blood tests are ordered to investigate specific symptoms, diseases, or medical concerns. Both types are important components of modern healthcare and laboratory medicine.</p>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl text-blue-600 mb-6 shadow-sm border border-blue-100">
            <MessageCircleQuestion size={36} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about blood tests, preparation, procedures, and diagnostic health screening.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-blue-200 shadow-[0_15px_40px_rgba(37,99,235,0.1)] ring-1 ring-blue-100 scale-[1.01] z-10 relative' 
                    : 'border-gray-200 shadow-sm hover:shadow-md hover:border-blue-100'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold transition-colors pr-6 ${isOpen ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[1000px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <div className="pt-2 border-t border-gray-100 text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Contact/Support Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-center shadow-[0_20px_50px_rgba(37,99,235,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Activity size={24} className="text-cyan-300" /> Still have questions?
              </h3>
              <p className="text-blue-100">Our diagnostic experts are here to help you understand your tests.</p>
            </div>
            <a 
              href="tel:08879327184" 
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Call 08879327184
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}