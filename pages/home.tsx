import React, { FC } from 'react'

import Hero from '../components/capoera/Hero'
import { Layout, layoutQueryFragment } from "../components/layout";
import { Middle } from '../components/capoera/Middle'

import { Training } from '../components/capoera/Training'
import { getStaticPropsForTina } from "tinacms";
import type { PostsConnection } from "../.tina/__generated__/types";
import { PagesDocument } from "../.tina/__generated__/types";

const navigation = [
  { name: 'Training', href: '#' },
  { name: 'Verein', href: '#' },
  { name: 'Capoeira', href: '#' },
  { name: 'Galerie', href: '#' },
]

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Training />
      <Middle />
    </>
  )
}

export default Home



export const getStaticProps = async () => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
       query ContentQuery($relativePath: String!) {
        ${layoutQueryFragment}
        getPagesDocument(relativePath: $relativePath) {
          data {
            __typename
            blocks {
              __typename
              ... on PagesBlocksFeatures {
                color
                items {
                  icon {
                    name
                    color
                    style
                  }
                  title
                  text
                }
              }
              ... on PagesBlocksContent {
                body
                color
              }
              ... on PagesBlocksTestimonial {
                quote
                author
                color
              }
              ... on PagesBlocksHero {
                tagline
                headline
                text
                actions {
                  label
                  type
                  icon
                  link
                }
                color
                image {
                  src
                  alt
                }
              }
            }
          }
        }
      }
    `,
    variables: { relativePath: `home.md` },
  })) as { data: { getPagesDocument: PagesDocument } };

  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
