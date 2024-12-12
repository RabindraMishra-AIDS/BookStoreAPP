import React from 'react';

function Cards({item}) {
    return (
        <>
            <div className='mt-7 mb-5 p-4 '>
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 hover:cursor-pointer dark:bg-gray-700 ">
                    <figure>
                        <img className='w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover rounded-lg'
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body h-[100px] sm:h-[150px] md:h-[200px]">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary bg-green-500 text-black">{item.Category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.Price}</div>
                            <div className="rounded-lg border-[2px] px-2 py-2 cursor-pointer hover:bg-green-600 hover:text-white duration-200  ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
