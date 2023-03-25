import Head from "next/head";
import Image from "next/image";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import Section from "../components/home/section";
import Content from "../components/home/content";
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
      <Header />
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
            <p className="text-white font-extrabold text-3xl md:text-5xl">
              <span className="text-green-500">Green</span> Energy Project
            </p>
            <p className="text-xl md:text-2xl bg-black inline-block px-6 py-1 text-white mt-3">
              Sebuah Karya Jurnalistik Tentang Transisi Energi.
            </p>
          </div>
        </div>

        {/* <!--Lead Card--> */}
        <div className="flex h-full w-full bg-black  rounded overflow-hidden shadow-lg min-h-[30vh] md:min-h-[50vh]">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3">
              <Image
                src="https://source.unsplash.com/collection/494263/800x400"
                className="h-full w-full shadow"
                width={0}
                height={0}
                alt="About"
              />
            </div>
            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink bg-black text-white">
              <div className="flex flex-col h-full items-center justify-center  rounded-t rounded-b-none overflow-hidden shadow-lg text-center">
                <div className="w-full text-white font-bold text-4xl px-6 mt-6 mb-3">
                  <span className="text-green-500">Green</span> Energy Project
                </div>
                <p className=" text-xl px-6 mb-5 leading-normal">
                  Green Energy Project adalah sebuah website karya jurnalistik
                  demi pemenuhan tugas akhir Program Studi Manajemen Produksi
                  Berita Sekolah Tinggi Multimedia Yogyakarta. 80 persen data
                  dan fakta yang dikumpulkan dalam karya ini berasal dari metode
                  OSINT serta disajikan dengan pendekatan jurnalisme data.
                  Selamat menikmati.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/Lead Card--> */}

        {/* <!--Container--> */}
        <div className="container px-4 md:px-0 max-w-6xl mx-auto ">
          <div className="mx-0 sm:mx-6 ">
            <div className="bg-black w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t mt-20">
              <span className=" text-green-500 flex justify-center font-bold text-4xl mb-3">
                Selamat Menikmati!
              </span>{" "}
              <span className="block text-center text-white text-xl">
                {`                Karya jurnalistik ini dapat dinikmati dengan 3 jenis penyajian.
                Bagi anda yang lebih suka membaca dan melihat berbagai
                visualisasi data serta ilustrasi anda bisa mengunjungi
                "Manifestasi Pelik Transisi Energi" yang kami sajikan dengan
                format Longform. Bagi anda yang lebih nyaman menonton video,
                anda bisa mengunjungi "Meneropong Mimpi Ramah Lingkungan Penuh
                Simalakama" yang kami sajikan dalam format video eksplanatori.
                Anda juga bisa memainkan Newsgame yang berjudul Prject Nirwana:
                Re-Nusantara yang akan membawa anda dalam cerita yang menarik.`}
              </span>
              <Section>
                <Content
                  category={"Longform"}
                  title={"Manifestasi Pelik Transisi Energi"}
                  link={"/blog"}
                />
                <Content
                  category={"Video Eksplanatori"}
                  title={"Meneropong Mimpi Ramah Lingkungan Penuh Simalakama"}
                  link={"/blog"}
                />
                <Content
                  category={"Newsgame"}
                  title={"Project Nirwana: Re-Nusantara"}
                  link={"/blog"}
                />
              </Section>
              {/* <!--/ Post Content--> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
