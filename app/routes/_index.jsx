import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {motion} from 'framer-motion';
import Hero from '~/components/Hero';

export function meta() {
  return [
    {title: 'Hydrogen'},
    {description: 'A custom storefront powered by Hydrogen'},
  ];
}

// loaders are functions that get the data required to render the page
export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

export default function Index() {
  // useLoader is a HOOK gets passed a loaders returned data, the hook takes that data and passes it to your jsx component

  const {collections} = useLoaderData();
  console.log(collections);
  return (
    <>
      <Hero />

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
          <svg
            className="w-8 h-8 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
            ></path>
          </svg>
          <div className="space-y-2">
            <p className="text-slate-800">
              Learn how to make a glowing gradient background!
            </p>
            <a
              href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
              className="block text-indigo-400"
              target="_blank"
              rel="noreferrer"
            >
              Read Article →
            </a>
          </div>
        </div>
      </div>

      <section className="w-full gap-4 p-6 text-[#22d3ee]  ">
        <h2 className="whitespace-pre-wrap max-w-prose font-bold text-load">
          Collections
        </h2>
        <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3">
          {collections.nodes.map((collection) => {
            return (
              <Link
                to={`/collections/${collection.handle}`}
                key={collection.id}
              >
                <div className="grid gap-4">
                  {collection?.image && (
                    <Image
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                      key={collection.id}
                      sizes="(max-width: 32em) 100vw, 33vw"
                      widths={[400, 500, 600, 700, 800, 900]}
                      loaderOptions={{
                        scale: 2,
                        crop: 'center',
                      }}
                    />
                  )}
                </div>
                <h2>{collection.title}</h2>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

// GRAPHQL QUERY WE ARE PASSING TO OUR LOADER
const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
        image{
          altText
          width
          height
          url
        }
      }
    }
  }
`;
