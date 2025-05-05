import React from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

const RotatingContent = ({ item, inView }) => (
  <div
    className={clsx(
      'flex flex-col-reverse h-full items-center w-full px-10 md:m-10 transition-transform duration-700 ease-in-out',
      inView ? 'rotate-0 opacity-100 scale-100' : 'rotate-x-12 opacity-0 scale-70',item.pos ? 'md:flex-row-reverse':'md:flex-row'
    )}
  >

    {/* Left Text */}
    <div className="w-full flex flex-col items-center md:w-1/2 md:text-left mb-6 md:mb-0 ">
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">{item.title}</h2>
      <p className="text-justify md:ml-10 text-cyan-300 font-semibold">{item.description}</p>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-[50%] md:h-[70%] flex justify-center">
      <img src={item.image} alt={item.title} className="rounded-2xl shadow-2xl" />
    </div>
    </div>
  
);

const Scroller = ({ content }) => {
  return (
    <div className="h-[95%] w-full overflow-y-scroll snap-y snap-mandatory ">
      {content.map((item, index) => {
        const [ref, inView] = useInView({
          threshold: 0.6,
        });

        return (
          <section
            key={index}
            ref={ref}
            className="snap-start flex items-center justify-center h-full w-full"
          >
            <RotatingContent item={item} inView={inView} />
          </section>
        );
      })}
    </div>
  );
};

export default Scroller;
