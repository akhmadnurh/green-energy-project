import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head></Head>
      <div class="bg-black font-sans leading-normal tracking-normal">
        <div class="flex w-full items-center  justify-center">
          <a
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 filter invert mt-8"
            href="/"
          >
            <img
              class="w-32 h-32 rounded-full "
              src="/images/maze2.svg"
              alt="maze"
            />
          </a>
        </div>

        {/* <!--Title--> */}
        <div class="text-center pt-16 md:pt-32">
          <p class="text-sm md:text-base text-green-500 font-bold">
            08 APRIL 2019{" "}
          </p>
          <h1 class="font-bold break-normal text-3xl md:text-5xl">
            Welcome to Ghostwind CSS
          </h1>
        </div>

        {/* <!--image--> */}
        <div
          class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/collection/1118905/')",
            height: "75vh",
          }}
        ></div>

        {/* <!--Container--> */}
        <div class="container  max-w-5xl mx-auto -mt-32">
          <div class="mx-0 sm:mx-6">
            <div
              class="bg-gray-900 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-300 leading-normal"
              style={{ fontFamily: ["Georgia", "serif"] }}
            >
              {/* <!--Post Content--> */}

              {/* <!--Lead Para--> */}
              <p class="text-2xl md:text-3xl mb-5">
                👋 Welcome fellow{" "}
                <a
                  class="text-white hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.tailwindcss.com"
                >
                  Tailwind CSS
                </a>{" "}
                and{" "}
                <a
                  class="text-white hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.ghost.org"
                >
                  Ghost
                </a>{" "}
                fan. This starter template is an attempt to replicate the
                default Ghost theme{" "}
                <a
                  class="text-white hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://demo.ghost.io/welcome"
                >
                  "Casper"
                </a>{" "}
                using Tailwind CSS and vanilla Javascript.
              </p>

              <p class="py-6">
                The basic blog page layout is available and all using the
                default Tailwind CSS classes (although there are a few hardcoded
                style tags). If you are going to use this in your project, you
                will want to convert the classes into components.
              </p>

              <p class="py-6">
                Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt
                lacus purus, in mattis tortor sollicitudin pretium. Phasellus at
                diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras
                nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at
                lorem condimentum, dignissim lorem eu, blandit massa. Phasellus
                eleifend turpis vel erat bibendum scelerisque. Maecenas id risus
                dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor
                in dolor molestie ornare. Aenean pulvinar diam nec neque
                tincidunt, vitae molestie quam fermentum. Donec ac pretium diam.
                Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Duis nec nulla eget sem dictum elementum.
              </p>

              <ol>
                <li class="py-3">
                  Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                  libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                  ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
                  quam quam, commodo sit amet placerat in, interdum a ipsum.
                  Morbi sit amet tellus scelerisque tortor semper posuere.
                </li>
                <li class="py-3">
                  Morbi varius posuere blandit. Praesent gravida bibendum neque
                  eget commodo. Duis auctor ornare mauris, eu accumsan odio
                  viverra in. Proin sagittis maximus pharetra. Nullam lorem
                  mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id
                  quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac
                  ornare vulputate, pretium nec felis.
                </li>
                <li class="py-3">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras
                  leo mauris, tristique in risus ac, tristique rutrum velit.
                  Mauris accumsan tempor felis vitae gravida. Cras egestas
                  convallis malesuada. Etiam ac ante id tortor vulputate
                  pretium. Maecenas vel sapien suscipit, elementum odio et,
                  consequat tellus.
                </li>
              </ol>

              <blockquote class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                Example of blockquote - Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
                amet ligula.
              </blockquote>

              <div class="w-full flex justify-center mt-24">
                <object>
                  <a href="#" title="Twitter">
                    <svg
                      class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                      style={{ fill: "white" }}
                      viewbox="0 0 512 512"
                      preserveAspectRatio="xMidYMid meet"
                      width="80"
                      height="80"
                    >
                      <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                    </svg>
                  </a>
                </object>
              </div>

              {/* <!--/ Post Content--> */}
            </div>
          </div>
        </div>

        <div class="container w-full max-w-6xl mx-auto px-2 py-8">
          <div class="flex flex-wrap -mx-2">
            {/* <!--1/3 col --> */}
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink  text-white">
              <div class="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/212/800x600"
                    class="h-64 w-full rounded-t pb-6"
                  />
                  <div class="w-full flex items-center justify-center">
                    <p class="w-24 text-black text-xs md:text-sm  bg-gradient-to-r from-green-800  to-green-200 text-center rounded-full mt-2">
                      Mythologie
                    </p>
                  </div>
                  <div class="w-full font-bold text-xl mt-6 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class=" font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div class="bg-gray-900 flex-none mt-auto  rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-left">
                    <object>
                      <a href="#" title="Twitter">
                        <svg
                          class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                          style={{ fill: "white" }}
                          viewbox="0 0 512 512"
                          preserveAspectRatio="xMidYMid meet"
                          width="32"
                          height="32"
                        >
                          <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                        </svg>
                      </a>
                    </object>
                    <object>
                      <a href="#" title="Facebook">
                        <svg
                          class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                          style={{ fill: "white" }}
                          viewbox="0 0 512 512"
                          preserveAspectRatio="xMidYMid meet"
                          width="32"
                          height="32"
                        >
                          <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
                        </svg>
                      </a>
                    </object>
                    <object>
                      <a class="" href="#" title="Instagram">
                        <svg
                          class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                          style={{ fill: "white" }}
                          viewbox="0 0 512 512"
                          preserveAspectRatio="xMidYMid meet"
                          width="32"
                          height="32"
                        >
                          <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                          <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                          <circle cx="351.5" cy="160.5" r="21.5"></circle>
                        </svg>
                      </a>
                    </object>
                  </div>
                  <p class=" text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

            {/* <!--1/3 col --> */}
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink  text-white">
              <div class="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/225/800x600"
                    class="h-64 w-full rounded-t pb-6"
                  />
                  <div class="w-full flex items-center justify-center">
                    <p class="w-24 text-black text-xs md:text-sm text-center rounded-full mt-2  bg-gradient-to-r from-blue-300  to-blue-800 ">
                      Opensource
                    </p>
                  </div>
                  <div class="w-full font-bold text-xl mt-6 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class=" font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div class="bg-gray-900 flex-none mt-auto  rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-left">
                    <object>
                      <a href="#" title="Twitter">
                        <svg
                          class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                          style={{ fill: "white" }}
                          viewbox="0 0 512 512"
                          preserveAspectRatio="xMidYMid meet"
                          width="32"
                          height="32"
                        >
                          <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                        </svg>
                      </a>
                    </object>
                    <object>
                      <a href="#" title="Facebook">
                        <svg
                          class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                          style={{ fill: "white" }}
                          viewbox="0 0 512 512"
                          preserveAspectRatio="xMidYMid meet"
                          width="32"
                          height="32"
                        >
                          <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
                        </svg>
                      </a>
                    </object>
                    <object>
                      <a class="" href="#" title="Instagram">
                        <svg
                          class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                          style={{ fill: "white" }}
                          viewbox="0 0 512 512"
                          preserveAspectRatio="xMidYMid meet"
                          width="32"
                          height="32"
                        >
                          <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                          <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                          <circle cx="351.5" cy="160.5" r="21.5"></circle>
                        </svg>
                      </a>
                    </object>
                  </div>
                  <p class=" text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

            {/* <!--1/3 col --> */}
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink  text-white">
              <div class="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a
                  href="#"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/226/800x600"
                    class="h-64 w-full rounded-t pb-6"
                  />
                  <div class="w-full flex items-center justify-center">
                    <p class="w-24 text-black text-xs md:text-sm  text-center rounded-full mt-2 bg-gradient-to-r from-white  to-gray-700">
                      Ideologie
                    </p>
                  </div>
                  <div class="w-full font-bold text-xl mt-6 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class=" font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div class="bg-gray-900 flex-none mt-auto  rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-left">
                    <object>
                      <a href="#" title="Twitter">
                        <svg
                          class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                          style={{ fill: "white" }}
                          viewbox="0 0 512 512"
                          preserveAspectRatio="xMidYMid meet"
                          width="32"
                          height="32"
                        >
                          <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                        </svg>
                      </a>
                    </object>
                    <object>
                      <a href="#" title="Facebook">
                        <svg
                          class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                          style={{ fill: "white" }}
                          viewbox="0 0 512 512"
                          preserveAspectRatio="xMidYMid meet"
                          width="32"
                          height="32"
                        >
                          <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
                        </svg>
                      </a>
                    </object>
                    <object>
                      <a class="" href="#" title="Instagram">
                        <svg
                          class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                          style={{ fill: "white" }}
                          viewbox="0 0 512 512"
                          preserveAspectRatio="xMidYMid meet"
                          width="32"
                          height="32"
                        >
                          <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                          <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                          <circle cx="351.5" cy="160.5" r="21.5"></circle>
                        </svg>
                      </a>
                    </object>
                  </div>
                  <p class=" text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-100">
          {/* <!--Legal text--> */}
          <div class=" font-sans mt-8 mb-8">
            <p class="text-gray-600 text-xs md:text-base">
              If you like the content don't hesitate to share.
            </p>
            <p class="text-gray-600 text-xs md:text-base">
              You can contact me at{" "}
            </p>
            <br />
            <p class="text-gray-600 text-xs md:text-base">Some other text</p>
            <p class="text-gray-600 text-xs md:text-base">
              Opensource theme based on{" "}
              <a
                href="https://github.com/tailwindtoolbox/Ghostwind"
                class="text-gray-300"
              >
                Ghostwindcss
              </a>
            </p>
          </div>
          {/* <!--/legal text--> */}
        </div>

        <footer class="bg-gray-900">
          <div class="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div class="w-full mx-auto flex flex-wrap items-center">
              <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold content-center">
                <a
                  class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 "
                  href="/"
                >
                  <img
                    class="w-20 h-20 rounded-full filter invert"
                    src="/ressources/images/autres/maze2.svg"
                    alt="maze"
                  />
                </a>
              </div>
              <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul class="list-reset flex justify-center flex-1 md:flex-none items-center">
                  <li>
                    <a href="#" title="Twitter">
                      <svg
                        class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                        style={{ fill: "white" }}
                        viewbox="0 0 512 512"
                        preserveAspectRatio="xMidYMid meet"
                        width="64"
                        height="64"
                      >
                        <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Instagram">
                      <svg
                        class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                        style={{ fill: "white" }}
                        viewbox="0 0 512 512"
                        preserveAspectRatio="xMidYMid meet"
                        width="64"
                        height="64"
                      >
                        <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                        <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                        <circle cx="351.5" cy="160.5" r="21.5"></circle>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Facebook">
                      <svg
                        class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                        style={{ fill: "white" }}
                        viewbox="0 0 512 512"
                        preserveAspectRatio="xMidYMid meet"
                        width="64"
                        height="64"
                      >
                        <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Blog;
