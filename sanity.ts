import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2022-11-16',
  useCdn: process.env.NODE_ENV === 'production', // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
};

export const sanityClient = createClient(config);

//Helper function for our images
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);