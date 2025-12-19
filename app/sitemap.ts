import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://venturivisuals.com.br/',
      lastModified: new Date(),
    },
    {
      url: 'https://venturivisuals.com.br/portfolio',
      lastModified: new Date(),
    },
    {
      url: 'https://venturivisuals.com.br/sobre',
      lastModified: new Date(),
    },
    {
      url: 'https://venturivisuals.com.br/servicos',
      lastModified: new Date(),
    },
    {
      url: 'https://venturivisuals.com.br/contato',
      lastModified: new Date(),
    },
    {
      url: 'https://venturivisuals.com.br/politica-de-privacidade',
      lastModified: new Date(),
    },
  ];
}
