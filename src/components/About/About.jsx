import React from 'react'
import Team from './Team.jsx';
// import React from "react";

export default function About() {
const imgList = [
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-cnn-logo.png",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-google-logo.png",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-amazon-logo.png",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-google-logo.png",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-fedex-logo.png",
	},
];


    return (
        <div className="py-16 bg-white">
            
           


		<header
			className="ezy__header33 light bg-cover bg-right bg-no-repeat text-white relative flex justify-center items-center  md:py-48 z-[1]"
			style={{
				backgroundImage:
					"url(https://imgcld.yatra.com/ytimages/image/upload/v1461929822/Delhi-Akshardham_Temple.jpg)",
			}}
		>
			<div
				className="absolute top-0 left-0 right-0 bottom-0 -z-[1]"
				style={{
					background:
						"linear-gradient(130deg, rgba(13, 110, 253, 0.35), rgba(0, 0, 0, 0.631))",
				}}
			></div>
			<div className="container px-4">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-9 lg:col-span-7 xl:col-span-6">
						<h2 className="text-[32px] leading-snug md:text-8xl font-bold tracking-wider mb-6">
						The temple of art is built in words.
						</h2>
						<p className="text-lg leading-relaxed mb-12 md:mr-32 lg:mr-52">
						Our goal is to elevate lesser-known temples to the global stage
						 while supporting the local economy. Through detailed insights and immersive experiences,
						  we strive to create a platform
						 that not only informs but inspires exploration and appreciation of these sacred spaces.
						</p>
						<div className="md:mr-40 lg:mr-72">
							<button className="py-4 px-8 text-bold bg-white text-black font-bold hover:bg-opacity-80 rounded-full w-full">
								Know More about us
							</button>
						</div>
					</div>
				</div>
				<div className="absolute bottom-4 md:bottom-12 left-1/2 w-full -translate-x-1/2">
					<div className="flex flex-wrap gap-6 items-center justify-center mt-12">
						{imgList.map((item, i) => (
							<img
								src={item.src}
								alt=""
								key={i}
								className="max-h-6 mx-4 opacity-75 duration-500 lg:max-h-14 pr-12"
							/>
						))}
					</div>
				</div>
			</div>
		</header>
	



            


            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://static.toiimg.com/thumb/msid-46918916,width=1200,height=900/46918916.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
						The temple bell stops but I still hear the sound coming out of the flowers.
                        </h2>
                        <p className="mt-6 text-gray-600">
						My simple religion is this: There is no need for temples; no need for complicated philosophy.
						Our own brain, our own heart is our temple; the philosophy is kindness.
                        </p>
                        <p className="mt-4 text-gray-600">
						The moment I have realized God sitting in the temple of every human body,
						 the moment I stand in reverence before every human being
						 and see God in him - that moment I am free from bondage,
						 everything that binds vanishes, and I am free..
                        </p>
                    </div>
                </div>
            </div>
        <div className=' p-4'>
            <Team/>
            </div>
        
        
        </div>
    );
}
