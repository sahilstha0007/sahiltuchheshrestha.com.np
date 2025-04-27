export const METADATA = {
  creator: "Sahil Shrestha",
  description: "Sahil Shrestha's personal website — portfolio, blog, and creative playground.",
  keyword: "Sahil, Sahil Shrestha, Full Stack Developer, Portfolio, FrameIt, Tuchhe, Sahil Tuchhe Shrestha, Nepali Developer",
  authors: {
    name: "Sahil Tuchhe Shrestha",
    url: process.env.DOMAIN, // Your domain environment variable
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: "Sahil Shrestha",
    locale: "en_NP", // English (Nepal) - I fixed this to proper locale format
  },
  exTitle: " | Sahil Shrestha",
  profile: "/images/sahil.jpg", // Your profile photo path
};
