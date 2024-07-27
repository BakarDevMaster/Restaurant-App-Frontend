// eslint-disable-next-line no-unused-vars
import React from 'react';

const OurDishes = () => {
  return (
    <section id="dishes" className="dishes-section bg-gray-100 py-2 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#53ad97] font-bold mb-4">Our Dishes Showcase</h2>
          <p className="text-lg text-indigo-500 font-semibold">Discover our latest dishes and culinary creations</p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="group dish-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
            <a href="/dish-1">
              <img className="w-full h-60 object-cover" src="https://img.freepik.com/free-photo/beyti-kebab-served-with-ayran-pickles_141793-1870.jpg?t=st=1721970602~exp=1721974202~hmac=9273f0df91afcc83402addab2d591dccdf26c518cca30c3a9b9622db3429c089&w=740" alt="Dish 1" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
              <div className="p-4 flex flex-col items-center justify-between relative z-10">
                <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Delicious Dish 1</h3>
                <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">Appetizers</span>
              </div>
            </a>
          </div>
          <div className="group dish-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
            <a href="/dish-2">
              <img className="w-full h-60 object-cover" src="https://img.freepik.com/premium-photo/seaside-classic-mouthwatering-fish-chips_1077802-5967.jpg?w=826" alt="Dish 2" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
              <div className="p-4 flex flex-col items-center justify-between relative z-10">
                <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Delicious Dish 2</h3>
                <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">Main Courses</span>
              </div>
            </a>
          </div>
          <div className="group dish-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
            <a href="/dish-3">
              <img className="w-full h-60 object-cover" src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-59.jpg?w=826" alt="Dish 3" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
              <div className="p-4 flex flex-col items-center justify-between relative z-10">
                <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Delicious Dish 3</h3>
                <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">Desserts</span>
              </div>
            </a>
          </div>
          <div className="group dish-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
            <a href="/dish-4">
              <img className="w-full h-60 object-cover" src="https://img.freepik.com/free-photo/side-view-chicken-meatballs-with-greens-ketchup-plate_141793-4839.jpg?t=st=1721970694~exp=1721974294~hmac=dbab80aac365a1e1e57b6e1c023ea0749554f1cae7d668da7b6cecf30839611b&w=740" alt="Dish 4" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
              <div className="p-4 flex flex-col items-center justify-between relative z-10">
                <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Delicious Dish 4</h3>
                <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">Main Courses</span>
              </div>
            </a>
          </div>
          <div className="group dish-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
            <a href="/dish-5">
              <img className="w-full h-60 object-cover" src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-100.jpg?w=826" alt="Dish 5" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
              <div className="p-4 flex flex-col items-center justify-between relative z-10">
                <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Delicious Dish 5</h3>
                <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">Appetizers</span>
              </div>
            </a>
          </div>
          <div className="group dish-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
            <a href="/dish-6">
              <img className="w-full h-60 object-cover" src="https://img.freepik.com/free-photo/view-delicious-food-dish_23-2150777601.jpg?t=st=1721970788~exp=1721974388~hmac=f86e9f1130349440b3b912e035fa8da9e92315979d792b66e50c6c3a79a39c33&w=826" alt="Dish 6" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
              <div className="p-4 flex flex-col items-center justify-between relative z-10">
                <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Delicious Dish 6</h3>
                <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">Desserts</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDishes;
