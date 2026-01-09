export const TARGET_LOCATIONS = [
  // South Mumbai
  "Colaba", "Cuffe Parade", "Fort", "Churchgate", "Marine Lines", "Nariman Point", "Worli", "Parel", "Lower Parel", "Mahalaxmi", "Byculla", "Dadar",
  // Central Mumbai
  "Sion", "Kurla", "Chembur", "Ghatkopar", "Vikhroli", "Kanjurmarg", "Bhandup", "Mulund",
  // Western Suburbs
  "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
  // Eastern Suburbs
  "Kurla East", "Chembur East", "Ghatkopar East", "Vikhroli East", "Mulund East",
  // Navi Mumbai
  "Vashi", "Sanpada", "Juinagar", "Nerul", "Seawoods", "CBD Belapur", "Kharghar", "Kamothe", "Kalamboli", "Panvel", "New Panvel", "Taloja", "Ghansoli", "Kopar Khairane", "Airoli", "Turbhe"
];

export const slugify = (text: string) => text.toLowerCase().replace(/ /g, "-");

export const unslugify = (slug: string) => slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
