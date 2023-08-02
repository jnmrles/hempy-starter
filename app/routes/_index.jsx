import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {motion} from 'framer-motion';
import FeaturedProducts from '~/components/FeaturedProducts';
import Features from '~/components/Features';
import Hero from '~/components/Hero';
import {NewHero} from '~/components/NewHero';

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

      <FeaturedProducts />

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

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
      <Features />
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
