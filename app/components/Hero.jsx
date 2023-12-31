import {motion} from 'framer-motion';
export default function Hero() {
  return (
    <section className="w-full overflow-hidden gap-4 mb-20">
      <div className="relative overflow-hidden bg-cover bg-fixed bg-no-repeat bg-[50%] h-[100vh] bg-[url('app/assets/hero_weed.jpeg')]">
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.55)]">
          <div className="flex h-full items-center justify-center">
            <motion.div
              initial={{opacity: 0, scale: 0.5}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: 'spring',
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="px-6 text-center text-white md:px-12"
            >
              <h1 className="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Most reliable <span className="text-[#22d3ee]">CBD </span>
                retailer <br />
                <span>in your city</span>
              </h1>
              <a
                className="mb-2 inline-block rounded-full border-2 border-[#45a29e] px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Get started
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="-mt-2.5 text-white dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center] ">
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="#121212"
          ></path>
        </svg>
      </div>
    </section>
  );
}
