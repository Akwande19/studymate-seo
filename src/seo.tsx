import { useEffect } from "react";

import { absoluteUrl, siteConfig } from "./site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
};

export function Seo({ title, description, path, keywords = [], type = "website", jsonLd }: SeoProps) {
  const keywordText = keywords.join(", ");
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const url = absoluteUrl(path);
    const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

    document.title = fullTitle;
    setMeta("description", description);
    setMeta("keywords", keywordText);
    setMetaProperty("og:type", type);
    setMetaProperty("og:locale", "en_US");
    setMetaProperty("og:site_name", siteConfig.name);
    setMetaProperty("og:title", fullTitle);
    setMetaProperty("og:description", description);
    setMetaProperty("og:url", url);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setCanonical(url);
    setJsonLd(jsonLdText);
  }, [description, jsonLdText, keywordText, path, title, type]);

  return null;
}

function setMeta(name: string, content: string) {
  const element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`) ?? document.createElement("meta");

  element.setAttribute("name", name);
  element.setAttribute("content", content);

  if (!element.parentElement) {
    document.head.appendChild(element);
  }
}

function setMetaProperty(property: string, content: string) {
  const element =
    document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`) ?? document.createElement("meta");

  element.setAttribute("property", property);
  element.setAttribute("content", content);

  if (!element.parentElement) {
    document.head.appendChild(element);
  }
}

function setCanonical(url: string) {
  const element =
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement("link");

  element.setAttribute("rel", "canonical");
  element.setAttribute("href", url);

  if (!element.parentElement) {
    document.head.appendChild(element);
  }
}

function setJsonLd(jsonLdText: string) {
  const existing = document.head.querySelector<HTMLScriptElement>('script[data-seo-json-ld="true"]');

  if (!jsonLdText) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement("script");
  element.type = "application/ld+json";
  element.setAttribute("data-seo-json-ld", "true");
  element.text = jsonLdText;

  if (!element.parentElement) {
    document.head.appendChild(element);
  }
}
