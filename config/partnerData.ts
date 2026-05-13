export type Partner = {
  id: string;
  heading: string;
  subHeading: string;
  clinicName: string;
  address: string;
  hours: string;
  phone: string;
  googleBusinessUrl?: string;
  googleMapsUrl: string;
};

export const partnerCategories: Record<string, { title: string; description: string; partners: Partner[] }> = {
  bloodTesting: {
    title: "BLOOD TESTING CERTIFIED PARTNERS",
    description: "Our certified network of B2B pathology partners for accurate and timely blood diagnostics.",
    partners: [
      { id: "bt-1", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "Main Center - Corporate Booking Office", clinicName: "Medical diagnostic imaging center in Navi Mumbai", address: "Second floor, Millennium Empire, Business Park, Plot No 47, D Mart Rd, Sector 15, Kharghar, Navi Mumbai, Maharashtra 410210", hours: "Open 24 hours", phone: "08879327184", googleBusinessUrl: "https://share.google/cfhShzzofe7LmgiPN", googleMapsUrl: "https://maps.google.com/?cid=11779150789147957572" },
      { id: "bt-2", heading: "HENOTIC DIAGNOSTICS - Turbhe", subHeading: "Franchise (B2B Certified Imaging Partner)", clinicName: "General Diagnostics International Pvt. Ltd.", address: "RPT House, Turbhe Village Rd, Sector 24, Turbhe, Navi Mumbai, Maharashtra 400703", hours: "Open 24 hours", phone: "022 4045 0000", googleBusinessUrl: "https://share.google/sDKfcWxJSfRRL30Tw", googleMapsUrl: "https://maps.app.goo.gl/sEtxnwGHVtFuojEz5" },
      { id: "bt-3", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "Franchise (B2B Certified Pathology Partner)", clinicName: "TruDiagno Pathology Lab", address: "Office No. 1 & 2, First Floor, Giriraj Icon, Sector 18 Rd, near Sanjivani International School, Sector 18, Kharghar, Navi Mumbai, Maharashtra 410210", hours: "Open 24 hours", phone: "093223 32368", googleBusinessUrl: "https://share.google/WFmPvAC1Lb53vwwni", googleMapsUrl: "https://maps.app.goo.gl/nAE8YksYLpafq6cZ7" },
      { id: "bt-4", heading: "HENOTIC DIAGNOSTICS - Vidyavihar", subHeading: "Franchise (B2B Certified Pathology Partner)", clinicName: "Neuberg Diagnostics", address: "Unit number 8, First Floor, Neelkanth Corporate Park, Ramdev Pir Rd, Neelkanth Kingdom, Vidyavihar West, Vidyavihar, Mumbai, Maharashtra 400086", hours: "Open 24 hours", phone: "09700369700", googleBusinessUrl: "https://share.google/qLWY5FaZvsE6IJbF7", googleMapsUrl: "https://maps.app.goo.gl/BAn3tehizSieTbHE6" }
    ]
  },
  sonography: {
    title: "SONOGRAPHY SERVICES - CERTIFIED IMAGING PARTNERS",
    description: "State-of-the-art sonography and ultrasound services at our certified partner clinics.",
    partners: [
      { id: "sono-1", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "Main Center - Corporate Booking Office", clinicName: "Medical diagnostic imaging center in Navi Mumbai", address: "Second floor, Millennium Empire, Business Park, Plot No 47, D Mart Rd, Sector 15, Kharghar, Navi Mumbai, Maharashtra 410210", hours: "Open 24 hours", phone: "08879327184", googleBusinessUrl: "https://share.google/cfhShzzofe7LmgiPN", googleMapsUrl: "https://maps.google.com/?cid=11779150789147957572" },
      { id: "sono-2", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "Franchise (B2B Certified Imaging Partner)", clinicName: "We Care Diagnostics", address: "Millennium Empire, Plot no 47, near D Mart Road, Sector 15, Kharghar, Navi Mumbai, Maharashtra 410210", hours: "Open 24 hours", phone: "089761 33001", googleBusinessUrl: "https://share.google/oQB9Kyll6JxblLOlT", googleMapsUrl: "https://maps.app.goo.gl/qtxciKDUpHkxRH6h8" },
      { id: "sono-3", heading: "HENOTIC DIAGNOSTICS - Belapur", subHeading: "Franchise (B2B Certified Imaging Partner)", clinicName: "Agrawal Diagnostics", address: "Ground Floor, Hilton Centre, Shop No. 13 & 7, Plot No. 66, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614", hours: "Open 24 hours", phone: "8692918081", googleMapsUrl: "https://maps.app.goo.gl/NWs87cJjGrnYbTXe7" },
      { id: "sono-4", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "Franchise (B2B Certified Imaging Partner)", clinicName: "NDC Diagnostic Centre, Kharghar", address: "Shop No 1 & 2, Keystone Elita, Plot no. 49, D Mart Rd, Sector 15, Kharghar, Navi Mumbai, Maharashtra 400210", hours: "Open 24 hours", phone: "086570 17320", googleBusinessUrl: "https://share.google/t6eK5i6AOgSndAN8c", googleMapsUrl: "https://maps.app.goo.gl/z3wFKLqF1pw4Hc3q9" },
      { id: "sono-5", heading: "HENOTIC DIAGNOSTICS - Seawoods", subHeading: "Franchise (B2B Certified Imaging Partner)", clinicName: "NDC Diagnostic Centre, Seawoods", address: "2nd floor, Plot not 19, Neurogen, Brain and Spine Institute, Seawoods West, Sector 40, Seawoods, Navi Mumbai, Maharashtra 400706", hours: "Everyday 8 am–9 pm", phone: "086570 17320", googleBusinessUrl: "https://share.google/9CeZoAywTNqpwm1wC", googleMapsUrl: "https://maps.app.goo.gl/7UZyaWvgawsPJdGM6" }
    ]
  },
  petScan: {
    title: "PET SCAN SERVICES - CERTIFIED NUCLEAR MEDICINE PARTNERS",
    description: "Advanced nuclear medicine imaging at our specialized PET Scan partner facilities.",
    partners: [
      { id: "pet-1", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "Main Center - Corporate Booking Office", clinicName: "Medical diagnostic imaging center in Navi Mumbai", address: "Second floor, Millennium Empire, Business Park, Plot No 47, D Mart Rd, Sector 15, Kharghar, Navi Mumbai, Maharashtra 410210", hours: "Open 24 hours", phone: "08879327184", googleBusinessUrl: "https://share.google/cfhShzzofe7LmgiPN", googleMapsUrl: "https://maps.google.com/?cid=11779150789147957572" },
      { id: "pet-2", heading: "HENOTIC DIAGNOSTICS - Ghatkopar West", subHeading: "(B2B Certified Nuclear Medicine Imaging Partner)", clinicName: "JEEYO PET CT & NUCLEAR IMAGING CENTRE", address: "Sarvodaya Hospital Premises, Lal Bahadur Shastri Marg, Gandhi Nagar, Kirti Vihar, Ghatkopar West, Mumbai, Maharashtra 400086", hours: "Everyday 6:30 am–6:30 pm", phone: "099675 26768", googleBusinessUrl: "https://share.google/XYjWwS8OY8SRIFmzA", googleMapsUrl: "https://maps.app.goo.gl/e7wLNkWGsPiqUzaT7" },
      { id: "pet-3", heading: "HENOTIC DIAGNOSTICS - Chembur", subHeading: "(B2B Certified Nuclear Medicine Imaging Partner)", clinicName: "Medcare Institute of Diagnostics", address: "Ground Floor, Sushrut Hospital & Research Centre, 365, Sant Vershaw Kakkaya Marg, Swastik Park, Chembur, Mumbai, Maharashtra 400071", hours: "Open 24 hours", phone: "088699 06990", googleBusinessUrl: "https://share.google/RjuPj9NdR0V0H6I8Y", googleMapsUrl: "https://maps.app.goo.gl/kmWCDDfPv247Nbb5A" },
      { id: "pet-4", heading: "HENOTIC DIAGNOSTICS - Belapur", subHeading: "(B2B Certified Nuclear Medicine Imaging Partner)", clinicName: "Agrawal Diagnostics", address: "Ground Floor, Hilton Centre, Shop No. 13 & 7, Plot No. 66, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614", hours: "Open 24 hours", phone: "8692918081", googleMapsUrl: "https://maps.app.goo.gl/NWs87cJjGrnYbTXe7" }
    ]
  },
  mri: {
    title: "MRI-SCAN SERVICES - CERTIFIED IMAGING PARTNERS",
    description: "High-resolution Magnetic Resonance Imaging centers across our certified network.",
    partners: [
      { id: "mri-1", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "Main Center - Corporate Booking Office", clinicName: "Medical diagnostic imaging center in Navi Mumbai", address: "Second floor, Millennium Empire, Business Park, Plot No 47, D Mart Rd, Sector 15, Kharghar, Navi Mumbai, Maharashtra 410210", hours: "Open 24 hours", phone: "08879327184", googleBusinessUrl: "https://share.google/cfhShzzofe7LmgiPN", googleMapsUrl: "https://maps.google.com/?cid=11779150789147957572" },
      { id: "mri-2", heading: "HENOTIC DIAGNOSTICS - PANVEL", subHeading: "(B2B Certified and Licensing Imaging Partner)", clinicName: "LOTUS MRI & CT SCAN PANVEL", address: "Shop no 1 & 2, Kanak Samruddhi, LOTUS MRI AND CT SCAN, Plot No 36, near Gandhi Hospital, behind Purohit Hospital Street, MCCH Society, Panvel, Navi Mumbai, Maharashtra 410206", hours: "Open 24 hours", phone: "8082452452", googleBusinessUrl: "https://share.google/Nneg82aYPtt1zECiS", googleMapsUrl: "https://maps.app.goo.gl/z1X4RYyT4jbpim3UA" },
      { id: "mri-3", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "(B2B Certified and Licensing Imaging Partner)", clinicName: "Medicover Hospitals", address: "23PG+MH2, Sector 10, Kharghar, Navi Mumbai, Maharashtra 410210", hours: "Open 24 hours", phone: "040 6833 4455", googleBusinessUrl: "https://share.google/Dy4xSDRv1k71asmhN", googleMapsUrl: "https://maps.app.goo.gl/5Dom4kKA2M52gnXB6" },
      { id: "mri-4", heading: "HENOTIC DIAGNOSTICS - Roadpali", subHeading: "(B2B Certified and Licensing Imaging Partner)", clinicName: "White Lotus International Hospital", address: "Plot no 1, Roadpali Rd, opposite Police head quarter, Sector 20, Kalamboli, Panvel, Maharashtra 410218", hours: "Open 24 hours", phone: "088793 07930", googleBusinessUrl: "https://share.google/ieL48igFRWKzPZrok", googleMapsUrl: "https://maps.app.goo.gl/VcGQ31k1ZYsvU1AD7" },
      { id: "mri-5", heading: "HENOTIC DIAGNOSTICS - Roadpali", subHeading: "(B2B Certified and Licensing Imaging Partner)", clinicName: "Medcare Institute of Diagnostics", address: "Ground floor, Moraj Palm Paradise, Shop no .B - 4, Plot no 8 & 8A, Sector 18, Sanpada, Navi Mumbai, Maharashtra 400705", hours: "7 AM - 7 PM", phone: "86553 51854, 88699 06990", googleBusinessUrl: "https://share.google/nO928czqAXr9OwyqX", googleMapsUrl: "https://maps.app.goo.gl/F59ofYrHaDqKKrjK9" }
    ]
  },
  cardiology: {
    title: "ECG, 2D ECHO & TMT - CERTIFIED CARDIOLOGY PARTNERS",
    description: "Specialized cardiac wellness and imaging centers.",
    partners: [
      { id: "cardio-1", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "Main Center - Corporate Booking Office", clinicName: "Medical diagnostic imaging center in Navi Mumbai", address: "Second floor, Millennium Empire, Business Park, Plot No 47, D Mart Rd, Sector 15, Kharghar, Navi Mumbai, Maharashtra 410210", hours: "Open 24 hours", phone: "08879327184", googleBusinessUrl: "https://share.google/cfhShzzofe7LmgiPN", googleMapsUrl: "https://maps.google.com/?cid=11779150789147957572" },
      { id: "cardio-2", heading: "HENOTIC DIAGNOSTICS - Kharghar", subHeading: "(B2B Certified Cardiology Imaging Partner)", clinicName: "Dr Anup Mahajani - Heart Mate Advanced Cardiac Clinic", address: "Shop No 13, Tharwani Heritage, Police Station, Dr Anup Mahajani - Heart Mate (Advanced Cardiac Clinic, next to Kharghar, Sector 7, Kharghar, Navi Mumbai, Maharashtra 410210", hours: "Everyday 11 am–9 pm", phone: "098496 34502", googleBusinessUrl: "https://share.google/aLr92KgFMB3c0djak", googleMapsUrl: "https://maps.app.goo.gl/68LDEfwTfdTAi1X9A" },
      { id: "cardio-3", heading: "HENOTIC DIAGNOSTICS - Belapur", subHeading: "(B2B Certified Cardiology Imaging Partner)", clinicName: "Dr Charan Reddy's - Heart Fitt Cardiac Wellness Clinic", address: "Shop No.22, Balaji Bhavan, Plot No. 42A, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614", hours: "Open 24 hours", phone: "Not Provided", googleBusinessUrl: "https://share.google/SSLQBfe1WA6odExuJ", googleMapsUrl: "https://maps.app.goo.gl/PU3Dtt8yfriLMYTe8" },
      { id: "cardio-4", heading: "HENOTIC DIAGNOSTICS - Belapur", subHeading: "(B2B Certified Cardiology Imaging Partner)", clinicName: "NDC Diagnostic Centre, Kharghar", address: "Shop No 1 & 2, Keystone Elita, Plot no. 49, D Mart Rd, Sector 15, Kharghar, Navi Mumbai, Maharashtra 400210", hours: "Open 24 hours", phone: "086570 17320", googleBusinessUrl: "https://share.google/t6eK5i6AOgSndAN8c", googleMapsUrl: "https://maps.app.goo.gl/z3wFKLqF1pw4Hc3q9" }
    ]
  }
};
