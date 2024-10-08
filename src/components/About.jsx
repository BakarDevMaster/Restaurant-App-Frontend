// eslint-disable-next-line no-unused-vars
import React from 'react'

const About = () => {
  return (
   <>
      <section className="bg-gray-100">
  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl font-extrabold text-[#53ad97] sm:text-4xl">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros
          at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis
          elit efficitur consequat. Mauris eleifend velit a pretium iaculis.
          Donec sagittis velit et magna euismod, vel aliquet nulla malesuada.
          Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
        </p>
        <div className="mt-8">
          <a href="#" className="text-indigo-500 hover:text-blue-600 font-medium">
            Learn more about us
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
      <div className=" mt-12 md:mt-0">
        <img
          src="https://img.freepik.com/free-psd/top-view-pizza-isolated_23-2151361763.jpg?t=st=1721925746~exp=1721929346~hmac=015e7905c666a02c6a97c1a5cf5754a6f7b9d84cb39bf241730246d00f18df32&w=826"
          alt="About Us Image"
          className="object-cover  rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default About