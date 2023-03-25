import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Green Energy Project</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-black font-sans leading-normal tracking-normal">
        {/* <!--Header--> */}
        <div
          className="w-full m-0 p-0 bg-cover bg-bottom"
          style={{
            backgroundImage: "url('/images/greatmaze.jpeg')",
            height: "40vh",
            maxHeight: "660px",
          }}
        >
          <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
            {/* <!--Title--> */}
            <p class="text-white font-extrabold text-3xl md:text-5xl">
              <span className="text-green-500">Green</span> Energy Project
            </p>
            <p class="text-xl md:text-2xl text-black mt-3">
              Sebuah Karya Jurnalistik Tentang Transisi Energi.
            </p>
          </div>
        </div>

        {/* <!--Lead Card--> */}
        <div className="flex h-full w-full bg-black  rounded overflow-hidden shadow-lg min-h-[30vh] md:min-h-[50vh]">
          <div className="w-full md:w-2/3">
            <img
              src="https://source.unsplash.com/collection/494263/800x400"
              class="h-full w-full shadow"
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink bg-gray-900 text-white">
            <div className="flex-1  rounded-t rounded-b-none overflow-hidden shadow-lg text-center">
              <div className="w-full font-bold text-xl  px-6 mt-6 ">About</div>
              <p className="font-serif text-base px-6 mb-5">
                Green Energy Project adalah sebuah website karya jurnalistik
                demi pemenuhan tugas akhir Program Studi Manajemen Produksi
                Berita Sekolah Tinggi Multimedia Yogyakarta. 80 persen data dan
                fakta yang dikumpulkan dalam karya ini berasal dari metode OSINT
                serta disajikan dengan pendekatan jurnalisme data. Selamat
                menikmati.
              </p>
            </div>
          </div>
        </div>
        {/* <!--/Lead Card--> */}

        {/* <!--Container--> */}
        <div className="container px-4 md:px-0 max-w-6xl mx-auto ">
          <div className="mx-0 sm:mx-6 ">
            <div className="bg-black w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
              {/* <!--Posts Container--> */}
              <div className="flex flex-wrap justify-between pt-12 -mx-6">
                {/* <!--1/3 col --> */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink  text-white">
                  <div className="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/228/800x600"
                        className="h-64 w-full rounded-t pb-6"
                      />
                      <div className="w-full flex items-center justify-center">
                        <p className="w-24 text-black text-xs md:text-sm  bg-gradient-to-r from-green-800  to-green-200 text-center rounded-full mt-2">
                          Mythologie
                        </p>
                      </div>
                      <div className="w-full font-bold text-xl mt-6 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className=" font-serif text-base px-6 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam at ipsum eu nunc commodo posuere et sit amet
                        ligula.
                      </p>
                    </a>
                  </div>
                  <div className="bg-gray-900 flex-none mt-auto  rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-left">
                        <object>
                          <a href="#" title="Twitter">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                          <a className="" href="#" title="Instagram">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                      <p className=" text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>

                {/* <!--1/3 col --> */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink  text-white">
                  <div className="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/225/800x600"
                        className="h-64 w-full rounded-t pb-6"
                      />
                      <div className="w-full flex items-center justify-center">
                        <p className="w-24 text-black text-xs md:text-sm text-center rounded-full mt-2  bg-gradient-to-r from-blue-300  to-blue-800 ">
                          Opensource
                        </p>
                      </div>
                      <div className="w-full font-bold text-xl mt-6 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className=" font-serif text-base px-6 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam at ipsum eu nunc commodo posuere et sit amet
                        ligula.
                      </p>
                    </a>
                  </div>
                  <div className="bg-gray-900 flex-none mt-auto  rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-left">
                        <object>
                          <a href="#" title="Twitter">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                          <a className="" href="#" title="Instagram">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                      <p className=" text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>

                {/* <!--1/3 col --> */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink  text-white">
                  <div className="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/226/800x600"
                        className="h-64 w-full rounded-t pb-6"
                      />
                      <div className="w-full flex items-center justify-center">
                        <p className="w-24 text-black text-xs md:text-sm  text-center rounded-full mt-2 bg-gradient-to-r from-white  to-gray-700">
                          Ideologie
                        </p>
                      </div>
                      <div className="w-full font-bold text-xl mt-6 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className=" font-serif text-base px-6 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam at ipsum eu nunc commodo posuere et sit amet
                        ligula.
                      </p>
                    </a>
                  </div>
                  <div className="bg-gray-900 flex-none mt-auto  rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-left">
                        <object>
                          <a href="#" title="Twitter">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                          <a className="" href="#" title="Instagram">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                      <p className=" text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>

                {/* <!--1/2 col --> */}
                <div className="w-full text-white md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/3657445/800x600"
                        className="h-full w-full rounded-t pb-6"
                      />
                      <div className="w-full flex items-center justify-center">
                        <p className="w-24 text-black text-xs md:text-sm text-center rounded-full mt-2  bg-gradient-to-r from-blue-300  to-blue-800 ">
                          Opensource
                        </p>
                      </div>
                      <div className="w-full font-bold text-xl mt-6 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className=" font-serif text-base px-6  mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-gray-900  rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-left">
                        <object>
                          <a href="#" title="Twitter">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                          <a className="" href="#" title="Instagram">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                      <p className=" text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>

                {/* <!--1/2 col --> */}
                <div className="w-full text-white md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-gray-900  rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/1118905/800x600"
                        className="h-full w-full rounded-t pb-6"
                      />
                      <div className="w-full flex items-center justify-center">
                        <p className="w-24 text-black text-xs md:text-sm  text-center rounded-full mt-2 bg-gradient-to-r from-red-600  to-pink-600">
                          Psychologie
                        </p>
                      </div>
                      <div className="w-full font-bold text-xl mt-6 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className=" font-serif text-base px-6  mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-gray-900  rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-left">
                        <object>
                          <a href="#" title="Twitter">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                          <a className="" href="#" title="Instagram">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                      <p className=" text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>

                {/* <!--2/3 col --> */}
                <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-gray-900 rounded-t rounded-b-none overflow-hidden shadow-lg text-white">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/325867/800x600"
                        className="h-full w-full rounded-t pb-6"
                      />
                      <div className="w-full flex items-center justify-center">
                        <p className="w-24 text-black text-xs md:text-sm  text-center rounded-full mt-2 bg-gradient-to-r from-white  to-gray-700">
                          Ideologie
                        </p>
                      </div>
                      <div className="w-full font-bold text-xl mt-6 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className=" font-serif text-base px-6 mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-gray-900 rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-left">
                        <object>
                          <a href="#" title="Twitter">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                          <a className="" href="#" title="Instagram">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                      <p className=" text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>

                {/* <!--1/3 col --> */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-white">
                  <div className="flex-1 bg-gray-900 rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/1118905/800x600"
                        className="h-full w-full rounded-t pb-6"
                      />
                      <div className="w-full flex items-center justify-center">
                        <p className="w-24 text-black text-xs md:text-sm text-center rounded-full mt-2  bg-gradient-to-r from-blue-300  to-blue-800 ">
                          Opensource
                        </p>
                      </div>
                      <div className="w-full font-bold text-xl mt-6 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className=" font-serif text-base px-6 mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-gray-900 rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-left">
                        <object>
                          <a href="#" title="Twitter">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                          <a className="" href="#" title="Instagram">
                            <svg
                              style={{ fill: "white" }}
                              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
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
                      <p className=" text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Post Content--> */}
            </div>

            {/* <!--Legal text--> */}
            <div className=" font-sans mt-8 mb-8">
              <p className="text-gray-600 text-xs md:text-base">
                Opensource theme based on{" "}
                <a
                  href="https://github.com/tailwindtoolbox/Ghostwind"
                  className="text-gray-300"
                >
                  Ghostwindcss
                </a>
              </p>
            </div>
            {/* <!--/legal text--> */}
          </div>
        </div>

        <footer className="bg-gray-900">
          <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div className="w-full mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold content-center">
                <a
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 "
                  href="/"
                >
                  <img
                    className="w-20 h-20 rounded-full filter invert"
                    src="/ressources/images/autres/maze2.svg"
                    alt="maze"
                  />
                </a>
              </div>
              <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                  <li>
                    <a href="#" title="Twitter">
                      <svg
                        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                        viewbox="0 0 512 512"
                        preserveAspectRatio="xMidYMid meet"
                        width="64"
                        height="64"
                        style={{ fill: "white" }}
                      >
                        <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Instagram">
                      <svg
                        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                        viewbox="0 0 512 512"
                        preserveAspectRatio="xMidYMid meet"
                        width="64"
                        height="64"
                        style={{ fill: "white" }}
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
                        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 "
                        viewbox="0 0 512 512"
                        preserveAspectRatio="xMidYMid meet"
                        width="64"
                        height="64"
                        style={{ fill: "white" }}
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
}
