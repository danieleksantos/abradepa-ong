import { defineQuery } from 'next-sanity';

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  "description": excerpt,
  "image": mainImage.asset->url,
  "date": publishedAt,
  "tag": categories[0]->title
}`);

export const POST_DETAIL_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  "description": excerpt,
  "image": mainImage.asset->url,
  "date": publishedAt,
  "tag": categories[0]->title,
  body
}`);

export const PRODUCTS_QUERY =
  defineQuery(`*[_type == "product"] | order(_createdAt desc) {
  "id": _id,
  name,
  price,
  description,
  "image": image.asset->url,
  category
}`);
