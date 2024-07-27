export  const Qualities= () => {
    return (
      <div className="px-4 py-16 bg-gray-100 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-20">
        
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <img src="/burger.png" alt="burger" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Quality Food</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Cheese on toast airedale the big cheese. Danish fontina cheesy grin
              airedale danish
            </p>
            
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img src="/pizza.png" alt="pizza" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Super Taste</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Satoshi Nakamoto launched lots of decentralisation when Litecoin
              required
            </p>
           
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img src="/car.png" alt="car" />
            </div>
            <h2 className="mb-2 font-semibold leading-5">Fast Delivery</h2>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
              mechad
            </p>
           
          </div>
        </div>
      </div>
    );
  };


  export default Qualities