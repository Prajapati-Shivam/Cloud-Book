import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h2 className='text-2xl sm:text-3xl font-bold my-4 sm:my-8'>
        About CloudBoook
      </h2>
      <ul className='italic list-disc text-lg sm:text-xl flex flex-col gap-y-4 p-4'>
        <li>
          <span className='font-semibold'>CloudBook</span> is a simple
          note-taking application built using MongoDB and Express. With
          CloudBook, users can easily{' '}
          <span className='font-semibold'>
            create, update, and delete notes.
          </span>
        </li>
        <li>
          The intuitive interface makes it easy to organize your thoughts and
          ideas. Whether you're jotting down a{' '}
          <span className='font-semibold'>quick reminder</span> or taking{' '}
          <span className='font-semibold underline underline-offset-4 '>
            detailed notes
          </span>{' '}
          for a project, CloudBook has you covered.
        </li>
        <li>
          CloudBook is designed to be{' '}
          <span className='font-semibold'>fast</span> and{' '}
          <span className='font-semibold'>responsive</span>, so you can focus on
          what matters most without any distractions.
        </li>

        <li>
          CloudBook is perfect for anyone looking to{' '}
          <span className='font-semibold'>
            simplify their note-taking process
          </span>{' '}
          and keep everything in one place.
        </li>
        <li>
          Give it a try and see how it can help you stay{' '}
          <span className='font-semibold'>organized</span> and{' '}
          <span className='font-semibold'>productive</span>.
        </li>
        <li>
          <span className='font-semibold'>Sign up</span> today and start taking
          notes with CloudBook!
        </li>
      </ul>
    </div>
  );
};

export default About;
