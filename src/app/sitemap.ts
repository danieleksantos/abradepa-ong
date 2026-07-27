import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.abradepa.org.br';

  const routes = [
    { path: '', priority: 1 },
    { path: '/cartao-abradepa', priority: 0.7 },
    { path: '/como-apoiar', priority: 0.9 },
    { path: '/sobre', priority: 0.8 },
    { path: '/capacitacao', priority: 0.7 },
    { path: '/anaplastologia', priority: 0.6 },
    { path: '/dermopigmentacao', priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
