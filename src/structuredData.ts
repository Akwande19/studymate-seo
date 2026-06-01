import { absoluteUrl, siteConfig } from "./site";

type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteConfig.url}/#softwareapplication`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "Student Productivity",
  operatingSystem: "Web",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
  featureList: [
    "Academic task planning",
    "Assignment deadline tracking",
    "Focus sessions",
    "Study progress insights",
  ],
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export function buildArticleSchema({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
  };
}
