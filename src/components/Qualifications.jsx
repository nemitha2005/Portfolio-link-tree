import React from 'react';
import { motion } from 'framer-motion';
import { QUALIFICATIONS } from '../constants';

const Qualifications = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Educational <span className="text-neutral-500">Qualifications</span>
      </motion.h2>

      <div className="relative mx-auto w-full max-w-2xl">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-purple-800"></div>
        
        {QUALIFICATIONS.map((qualification, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className={`relative mb-10 flex items-center w-full ${index % 2 === 0 ? 'lg:justify-start justify-center' : 'lg:justify-end justify-center'}`}
          >
            <div className={`relative w-full lg:w-1/2 px-4 ${index % 2 === 0 ? 'lg:text-left text-center' : 'lg:text-right text-center'}`}>
              <div className="absolute top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-800 left-1/2"></div>
              <div className="rounded-lg bg-neutral-800 p-6 shadow-none hover:shadow-lg hover:shadow-purple-800 transition-shadow duration-300">
                <h4 className="mb-1 text-xl font-semibold">{qualification.year}</h4>
                <h5 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">{qualification.degree}</h5>
                <p className="text-neutral-400">{qualification.institution}</p>
                <p className="mt-2 text-neutral-400">{qualification.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
