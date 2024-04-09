const Home = () => {
    return (<div className="bg-white">

        <section id="home" className="m-0 p-0">
            <div className="relative bg-gray-100 px-20">
                <div className="flex items-center justify-between">
                    <div className="relative lg:w-1/2 lg:py-24 xl:py-32 sm:py-12">
                        <h3 className="font-bold text-xl text-gray-500 md:text-xl lg:w-10/12">Hello, My name is</h3>
                        <h1 className="font-bold text-4xl mt-3 text-gray-200 md:text-5xl lg:w-10/12 bg-gradient-to-l from-[#06B6D4] to-[#14B8A6] bg-clip-text text-transparent">DUSINGIZA RUKUNDO Clemence,</h1>
                        <h2 className="text-2xl text-gray-500 mt-5 font-bold">And, I am a full-stack developer with a passion for problem-solving and a desire to continuously learn and grow.</h2>
                        <p className="mt-8 text-gray-500 lg:w-10/12">
                            While I may not have many years of experience in software engineering,
                            I have dedicated myself to discovering and mastering various technologies
                            that are crucial in the field.
                        </p>
                    </div>
                    <div className="relative lg:w-1/3 lg:py-24 xl:py-32 bottom-20 right-0 sm:hidden md:block">
                        <div className="rounded-[20px] absolute -left-20 top-10 -rotate-12 w-[270px]">
                            <img src="./images/image_2.jpg" className="relative rounded-[20px] h-full" alt="food illustration" loading="lazy" width="400" height="400" />
                        </div>
                        <div className="rounded-[20px] absolute right-15 top-5 z-20 w-[300px]">
                            <img src="./images/Clemence.jpg" className="relative rounded-[20px] h-full" alt="food illustration" loading="lazy" width="400" height="400" />
                        </div>
                        <div className="rounded-[20px] absolute right-0 top-10 rotate-12 w-[270px]">
                            <img src="./images/image_1.jpg" className="relative rounded-[20px] h-full" alt="food illustration" loading="lazy" width="400" height="400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="overflow-hidden pt-20 px-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
            <div class="container mx-auto">
                <div class="flex flex-wrap items-center justify-between -mx-4">
                    <div class="w-full px-4 lg:w-6/12">
                        <div class="flex items-center -mx-3 sm:-mx-4">
                            <div class="w-full px-3 sm:px-4 xl:w-1/2">
                                <div class="py-3 sm:py-4">
                                    <img
                                        src="./images/image_1.jpg"
                                        alt=""
                                        class="w-full rounded-2xl"
                                    />
                                </div>
                                <div class="py-3 sm:py-4">
                                    <img
                                        src="./images/image_2.jpg"
                                        alt=""
                                        class="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:px-4 xl:w-1/2">
                                <div class="relative z-10 my-4">
                                    <img
                                        src="./images/ida.jpg"
                                        alt=""
                                        class="w-full rounded-2xl"
                                    />
                                </div>
                                <div class="relative z-10 my-4">
                                    <img
                                        src="/images/F717CIlXkAAlVW0.jpeg"
                                        alt=""
                                        class="w-full rounded-2xl"
                                    />
                                </div>
                                <div class="relative z-10 my-4">
                                    <img
                                        src="/images/F72E2L-XoAAnavg.jpeg"
                                        alt=""
                                        class="w-full rounded-2xl"
                                    />
                                </div>
                                <div class="relative z-10 my-4">
                                    <img
                                        src="/images/F71KbbUXAAAdK6d.jpeg"
                                        alt=""
                                        class="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div class="mt-10 lg:mt-0">
                            <span class="block mb-4 text-lg font-semibold text-primary">
                                About Me
                            </span>
                            <h2 class="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                My focus has been on various technologies and designs,
                            </h2>
                            <p class="mb-5 font-normal text-body-color dark:text-dark-6 text-gray-500">
                                Figma design, Python programming using the Django framework, and JavaScript alongside React.js.These technologies have allowed me to create powerful and efficient solutions for various clients. I am always eager to apply my skills and knowledge to new and exciting challenges, and I believe that my passion for technology and my dedication to learning make me a valuable asset to any team.
                            </p>
                            <p class="mb-8 font-normal text-body-color dark:text-dark-6 text-gray-500">
                                In my career as a developer, I have learned the importance of teamwork and collaboration. I strongly believe that the best results are achieved when people work together, and I am always seeking to develop and grow teams to go with and keep moving forward.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="py-16 bg-gray-100 overflow-hidden px-20">
            <div class="container m-autospace-y-8 text-gray-500">
                <div>
                    <span class="text-gray-600 text-lg font-semibold">My Projects</span>
                    <h2 class="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">Throughout the course of <br /> software engineering, I developed <br /> Many Project Includes:</h2>
                </div>
                <div class="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                        <div class="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Watch Movies</h5>
                                <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                            </div>
                            <a href="https://watch-movie-omega.vercel.app/" class="flex justify-between items-center group-hover:text-yellow-600">
                                <span class="text-sm">visit</span>
                                <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                        <div class="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Mental Health Figma Design</h5>
                                <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                            </div>
                            <a href="https://www.figma.com/file/siZcS0FKFAgZBPQvoebkdu/Untitled?type=design&node-id=0%3A1&mode=design&t=MAF35FRqW0QLt8L9-1" class="flex justify-between items-center group-hover:text-yellow-600">
                                <span class="text-sm">Visit</span>
                                <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                        <div class="relative p-8 space-y-8">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Payment Checkout Figma Design</h5>
                                <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                            </div>
                            <a href="https://www.figma.com/file/kI8PjESJZwubDkFqhH4sZN/Design-2?type=design&mode=design&t=MAF35FRqW0QLt8L9-1" class="flex justify-between items-center group-hover:text-yellow-600">
                                <span class="text-sm">Read more</span>
                                <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                        <div class="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                            <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" class="w-10" width="512" height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">More Projects</h5>
                                <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                            </div>
                            <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
                                <span class="text-sm">Read more</span>
                                <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}

export default Home