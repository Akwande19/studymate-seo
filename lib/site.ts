import type { Metadata } from "next";

export const siteConfig = {
  name: "StudyMate",
  url: "https://www.studymate.app",
  description:
    "StudyMate is a student productivity app, study planner, academic task manager, and deadline tracker for organizing coursework and focused study.",
  email: "hello@studymate.app",
};

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
  keywords: string[];
};

export function buildMetadata({
  title,
  description,
  path = "",
  keywords,
}: PageMetadata): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = path ? `${title} | ${siteConfig.name}` : title;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} student productivity platform`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}
