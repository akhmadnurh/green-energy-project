import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../../components/blog/paragraph";
import Iframe from "../../components/blog/iframe";
import Title from "../../components/blog/title";
import Divider from "../../components/blog/divider";
import Blockquote from "../../components/blog/blockquote";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";

const Blog = () => {
  return (
    <>
      <Header />
      <div className="bg-black font-sans leading-normal tracking-normal">
        {/* <!--Title--> */}
        <div className="text-center pt-16 md:pt-32  pb-6">
          <h1 className="font-bold break-normal text-3xl md:text-5xl text-white">
            Manifestasi Pelik Transisi Energi
          </h1>
          <p className="text-sm md:text-base mt-1 text-green-500 font-bold">
            08 APRIL 2023{" "}
          </p>
        </div>

        {/* <!--image--> */}
        <div
          className="container w-full max-w-6xl mx-auto  bg-cover rounded"
          style={{
            backgroundImage:
              "url('https://www.prococommodities.com/wp-content/uploads/2020/03/power-header_1600x900_acf_cropped.jpg')",
            height: "75vh",
          }}
        ></div>

        {/* <!--Container--> */}
        <div className="container  max-w-5xl mx-auto -mt-32 mb-11">
          <div className="mx-0 sm:mx-6">
            <div
              className="bg-gray-900 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-300 leading-normal"
              style={{ fontFamily: ["Georgia", "serif"] }}
            >
              {/* <!--Post Content--> */}
              {/* <!--Lead Para--> */}
              <Paragraph>
                Di November tahun 2021, Presiden Joko Widodo mengikrarkan
                komitmen nyata atas perubahan iklim yang terjadi di berbagai
                belahan dunia. Setelah lampu hijau di Paris Agreement pada
                Conference of Parties (COP) 21 pada 2015 lalu, setiap negara
                yang menandatangani perjanjian tersebut kemudian menyusun
                Nationally Determined Carbon (NDC) yang menjadi cetak biru dari
                langkah-langkah dan komitmen setiap negara untuk menurunkan
                emisi karbon.
              </Paragraph>
              <Paragraph>
                Setahun setelahnya, pada COP 27 yang digelar di Mesir pada 2022
                lalu, Wakil Presiden Ma’ruf Amin juga menyampaikan beberapa
                langkah komitmen Indonesia untuk mengurangi emisi karbon di
                dunia.
              </Paragraph>
              <Paragraph>
                Tak ayal, alasan Presiden Joko Widodo dan Wakil Presiden Ma’ruf
                Amin menjadi banyak menjanjikan dan menunjukkan komitmen nyata
                atas penurunan emisi karbon karena sadar akan “sumbangan” emisi
                karbon Indonesia yang cukup banyak.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12672110/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12672110/?utm_source=embed&utm_campaign=visualisation/12672110"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Menurut data dari BP Statistical Energy Report 2022, Indonesia
                menjadi negara peringkat sepuluh dari 93 negara perihal emisi
                karbon hasil produksi energi. Laporan BP menunjukkan bahwa di
                tahun 2021, emisi karbon yang dihasilkan dari produksi energi
                berada di angka 572,5 juta ton. Angka tersebut cukup jangkung
                sekaligus menyeramkan
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12606533/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12606533/?utm_source=embed&utm_campaign=visualisation/12606533"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                BP juga berhasil merekam data jumlah emisi karbon yang
                dihasilkan Indonesia dari proses produksi energi. Angka tersebut
                menunjukkan kenaikan yang cukup eksplosif. 1965 adalah tahun
                pertama yang masuk dalam pencatatan BP, pada tahun tersebut
                emisi karbon dari produksi energi Indonesia berada di angka
                20,14 juta ton. Kini, angka tersebut sudah mencapai 572,47 juta
                ton di tahun 2021. Bahkan pada tahun-tahun pasca Paris
                Agreement, emisi karbon dari produksi energi Indonesia masih
                membengkak perlahan..
              </Paragraph>
              <Divider />
              <Title>Penggunaan Energi Untuk Produksi Listrik Indonesia</Title>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648599/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648599/?utm_source=embed&utm_campaign=visualisation/12648599"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              {/* <div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a className='flourish-credit' href='https://public.flourish.studio/visualisation/12648599/?utm_source=embed&utm_campaign=visualisation/12648599' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div> */}
              <Paragraph>
                Faktor utama tingginya emisi karbon dari produksi energi bisa
                terjadi karena penggunaan masif dari energi kotor untuk
                mengenyangkan listrik negara. Menurut catatan Statistik
                Ketenagalistrikan, produksi energi listrik Indonesia masih
                didominasi dari sumber daya batu bara pada 2020 dan 2021. Di
                tahun 2020, produksi energi dengan batu bara berada di angka
                180,87 TWh (Terawatt Hour). Sementara itu, produksi listrik dari
                sumber daya kotor lain seperti Minyak Bumi dan Gas Alam
                masing-masing berada di angka 6,76 dan 28,58 TWh.
              </Paragraph>
              <Paragraph>
                Sementara di tahun 2021, produksi listrik dari sumber daya batu
                bara semakin meningkat menjadi 189,96 TWh. Tak hanya itu,
                Produksi listrik dari gas alam juga mengalami kenaikan menjadi
                56,27 TWh. Meskipun demikian, produksi listrik dari EBT (Energi
                Baru Terbarukan) juga naik menjadi 31,5 TWh dan Air menjadi 24,7
                TWh. Sementara, terjadi sedikit penurunan produksi listrik dari
                sumber daya minyak bumi.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12646984/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12646984/?utm_source=embed&utm_campaign=visualisation/12646984"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Jika dilihat secara persentase melalui data yang tertera dalam
                laporan tahunan ESDM yang berjudul “Statistik Ketenagalistrikan
                2021”, kapasitas terpasang dari PLTU (Pembangkit Listrik Tenaga
                Uap) yang berkuasa di antara semua pembangkit listrik di tahun
                2021 dengan persentase di angka 43,88 persen Disusul di bawahnya
                oleh PLTGU (Pembangkit Listrik Tenaga Gas dan Uap) dengan
                persentase di angka 16,65 persen.
              </Paragraph>
              <Paragraph>
                Menariknya, PLTA (Pembangkit Listrik Tenaga Air) menjadi kuda
                hitam dan berada pada urutan ketiga sebagai pembangkit listrik
                dengan kapasitas terpasang paling tinggi dengan persentase di
                angka 8,03 persen. Meskipun demikian, urutan di bawahnya tetap
                diduduki oleh pembangkit listrik dengan energi kotor yakni PLTG
                (Pembangkit Listrik Tenaga Gas) dengan persentase 7,18 persen.
                Sayangnya, perbandingan pembangkit listrik dari energi bersih
                dan kotor seperti langit dan bumi.
              </Paragraph>
              <Paragraph>
                Tentunya perbandingan dengan persentase masih belum cukup
                menunjukkan kesenjangan atas penggunaan energi bersih dan kotor
                sebagai sumber produksi listrik. Jika dilihat berdasarkan
                bilangan real kapasitas terpasang pada pembangkit listrik di
                Indonesia, cukup jelas terlihat bahwa PLTU menjadi pembangkit
                listrik kesayangan dengan kapasitas terpasang paling besar.
                Kapasitas terpasang PLTU di tahun 2017 berada di angka 26.733,07
                megawatt dan terus melonjak setiap tahunnya hingga berada di
                angka 32.705,36 megawatt.
              </Paragraph>
              <Paragraph>
                Angka-angka di atas cukup membuktikan bahwa Indonesia masih
                nyaman dalam pelukan PLTU dan sangat tergila-gila dengan energi
                kotor untuk memasok aliran listrik negara sampai begah
                dibuatnya.
              </Paragraph>

              <Divider />
              <Title>
                Strategi Tukar Guling Penggunaan Energi, Habis NDC Terbitlah
                Roadmap ESDM
              </Title>
              <Paragraph>
                Pemerintah Indonesia mencanangkan strategi menuju Net Zero
                Emissions di tahun 2060. Demi tercapainya rencana tersebut,
                Kementerian ESDM (Energi dan Sumber Daya Mineral) merilis
                proyeksi dan road map atau peta jalan yang akan memberikan
                gambaran capaian pada tahun-tahun yang telah ditentukan. Road
                Map tersebut dirilis sebagai siaran pers dengan nomor
                359.Pers/04/SJI/2021 dan dipublikasikan pada tanggal 8 Oktober
                2021.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12674114/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12674114/?utm_source=embed&utm_campaign=visualisation/12674114"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                ESDM memilih tahun 2022 sebagai tahun pertama dalam rancangan
                peta jalan mereka. ESDM mencanangkan akan merilis undang-undang
                EBT dan penggunaan kompor listrik untuk 2 juta rumah tangga per
                tahun. Sayangnya rencana ini pincang, UU EBT masih menjadi RUU
                di tahun 2022 hingga awal tahun 2023. Tak hanya itu,
                pendistribusian kompor listrik pun juga kandas begitu saja.
              </Paragraph>
              <Paragraph>
                Di tahun 2025 yang kian dekat, ESDM memproyeksikan bahwa bauran
                EBT akan mencapai 23 persen yang akan didominasi oleh PLTS.
                Padahal di tahun 2021, bauran EBT masih digenggam PLTA di angka
                8,03 persen. Sementara, PLTS masih hanya berada di angka 0,27
                persen.
              </Paragraph>
              <Blockquote>
                {`"Di 2030, diproyeksikan kepemilikan kendaraan listrik berada di
                angka 2 juta untuk mobil dan 13 juta untuk motor. Disusul
                rancangan capaian 2031 perihal suntik mati PLTU Subcritical,
                jenis PLTU yang dinilai paling berjasa menyumbang emisi karbon
                dalam proses produksinya."`}{" "}
                <br />
                <span className="block font-bold mt-2">
                  BRIDGING WAWANCARA TENTANG LANGKAH ESDM (DIRJEN EBT dan
                  Konservasi Energi ESDM Qatro Romandhi)
                </span>
              </Blockquote>
              <Divider />
              <Title>
                Menyoal Adiksi Berat Indonesia Terhadap Energi Kotor
              </Title>
              <Paragraph>
                Bisa dikatakan Indonesia masih menjadi negara yang punya adiksi
                atau ketergantungan berat terhadap sumber daya energi kotor.
                Dikatakan demikian bukan tanpa alasan, menurut data dari BP
                Statistical Energy Report 2022, nama Indonesia sering menjadi
                nominasi dalam jajaran negara dengan produksi energi kotor yang
                tinggi.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648927/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648927/?utm_source=embed&utm_campaign=visualisation/12648927"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Untuk produksi batu bara misalnya, tercatat Cina memang menjadi
                negara dengan produksi batu bara tertinggi di dunia di tahun
                2021. Namun, tak mengejutkan lagi untuk melihat nama Indonesia
                muncul sebagai peringkat kedua dengan produksi batu bara
                tertinggi di dunia. BP mencatat bahwa produksi batu bara
                Indonesia berada di angka 15,15 exajoules. Sementara jika satuan
                exajoules dikonversi menjadi ton, jumlahnya bisa berada di angka
                361.851.533,4 ton di tahun 2021.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648909/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648909/?utm_source=embed&utm_campaign=visualisation/12648909"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Beralih ke gas alam, Indonesia mendapatkan peringkat 14 dalam
                jajaran negara penghasil gas alam tertinggi di tahun 2021 dengan
                total produksi sebanyak 2,13 exajoules gas alam. Jika
                dikonversikan menjadi ton, Indonesia sama saja telah memproduksi
                50.874.176 ton gas alam di tahun 2021.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648821/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648821/?utm_source=embed&utm_campaign=visualisation/12648821"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Sementara itu, produksi minyak bumi Indonesia juga cukup membuat
                begah. Di tahun 2021 Indonesia telah memproduksi 33,77 juta ton
                minyak bumi dan menjadi negara peringkat ke 24 dalam produksi
                minyak bumi tertinggi di dunia. Jumlah tersebut jika
                dikonversikan ke dalam exajoules akan setara dengan 1,41
                exajoules.
              </Paragraph>
              <Paragraph>
                Bisa dikatakan bahwa Indonesia tak hanya begah dan kecanduan
                terhadap energi kotor, namun juga bisa dikatakan belum berhasil
                tukar guling dengan energi bersih di tahun-tahun yang lalu.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648545/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648545/?utm_source=embed&utm_campaign=visualisation/12648545"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Jika dilihat berdasarkan perbandingan jumlah produksi energi
                kotor dan bersih dalam satuan exajoules, jumlahnya menunjukkan
                ketimpangan yang cukup besar. Di tahun 2021, tak satupun
                produksi sumber daya energi kotor Indonesia yang gagal mencapai
                angka 1 exajoules. Produksi energi dari sumber daya biofuel
                hanya mampu mencapai 0,31 exajoules, sementara biomassa hanya
                mampu mencapai 0,32 yang hanya memiliki selisih 0,1 exajoules
                dengan biofuel. Disusul oleh produksi energi dari sumber daya
                air di angka 0,09 exajoules.
              </Paragraph>
              <Paragraph>
                Ironisnya, sumber daya energi angin hanya mampu menghasilkan
                sebanyak 0,001584 exajoules. Sementara matahari (solar) hanya
                mencapai angka 0,000693432 exajoules.
              </Paragraph>
              <Paragraph>
                Labilnya Indonesia dalam Paris Agreement cukup terlihat dengan
                makin melambungnya produksi energi via sumber daya batu bara.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648567/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648567/?utm_source=embed&utm_campaign=visualisation/12648567"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Jika dilihat dari segi konsumsi, Indonesia tercatat mengonsumsi
                sebanyak 3,28 exajoules batu bara di tahun 2021. Sementara,
                Indonesia mengonsumsi masing-masing 2,83 dan 1,33 exajoules
                minyak bumi dan gas alam di tahun yang sama.
              </Paragraph>
              <Paragraph>
                Konsumsi tersebut juga masih dinilai pilih kasih dengan sumber
                daya energi bersih lainnya. Konsumsi sumber daya air dan biofuel
                hanya berada di angka 0,23 dan 0,21 exajoules. Sementara,
                Indonesia tak nafsu konsumsi energi matahari dan angin hingga
                benar-benar berada pada angka nol besar. Kondisi miris ini tak
                cukup sampai disitu, peningkatan konsumsi dari sumber daya
                energi bersih juga mengalami peningkatan secara lambat bak siput
                yang berlari.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12685614/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12685614/?utm_source=embed&utm_campaign=visualisation/12685614"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Laporan BP Statistical Energy Report juga berhasil mencatat
                kenaikan produksi batu bara Indonesia sejak tahun 1981 hingga
                2021. Dalam laporan tersebut, tercatat bahwa di tahun 2013
                produksi batu bara Indonesia berada di angka 43,37 juta ton.
                Meski menurun di tahun-tahun berikutnya, produksi batu bara
                Indonesia kembali mencuat naik di tahun 2018 dan 2019 dengan
                masing-masing produksi di angka 557,77 dan 616,16 juta ton.
                Sempat turun di tahun 2020, namun kembali naik di tahun 2021.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/story/1822797/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/1822797/?utm_source=embed&utm_campaign=visualisation/1822797"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Di tahun 2021, sebaran tambang batu bara berada di angka 1.226
                dengan berbagai macam jenis izin. Sementara, total luas izin
                tambang berada di angka 4.771.906 hektare. Berdasarkan laporan
                ESDM yang bertajuk Grand Strategy Mineral dan Batubara, jumlah
                perusahaan dengan IUP (Izin Usaha Pertambangan) di seluruh
                Indonesia berjumlah 1.136 dengan luas 3.328.236 hektare.
              </Paragraph>
              <Paragraph>
                Sementara, perusahaan yang sudah mengantongi izin PKP2B
                (Perjanjian Karya Pengusahaan Pertambangan Batu Bara) berjumlah
                83 dengan luas 1.399.463 hektare dan perusahaan yang mengantongi
                IUPK (Izin Usaha Pertambangan Khusus) berjumlah 7 dengan luas
                34.207 hektare.
              </Paragraph>
              <Paragraph>
                Dari sekian banyak perusahaan batu bara di Indonesia, Adaro
                Energi dan Bukit Asam adalah dua nama yang berada di puncak
                industri batu bara di Indonesia. Dari situs resmi dua perusahaan
                tersebut, tercatat jumlah produksi masing-masing perusahaan
                mengalami kenaikan sejak tahun 2017 hingga 2019.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12649120/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12649120/?utm_source=embed&utm_campaign=visualisation/12649120"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Namun, di tahun 2020 kedua perusahaan tersebut sama-sama
                mengalami penurunan produksi. Di tahun 2019, produksi batu bara
                Adaro Energy berada di angka 58,03 juta ton. produksi tersebut
                menurun menjadi 54,53 juta ton di tahun 2022. Sementara,
                produksi batu bara Bukit Asam tahun 2019 berada di angka 29,07
                juta ton dan turun menjadi 24,84 juta ton di tahun 2020.
              </Paragraph>
              <Paragraph>
                Sekretaris PT. Adaro Energi, Mahardika dalam Public Expose 2022
                yang digelar pada 12 September 2022 lalu menyampaikan bahwa PT
                Adaro Energy tetap memiliki target produksi batu bara di tahun
                2022 pada angka 58 - 60 juta ton. Sementara, PT Bukit Asam
                menargetkan memproduksi sebanyak 50 juta ton per tahun atau
                hampir dua kali lipat dari produksi tahun 2021.
              </Paragraph>
              <Paragraph>
                Untuk itu, selayaknya fitrah perusahaan yang memang akan
                menargetkan revenue yang tinggi, tak heran mengapa Adaro Energy
                dan Bukit Asam tetap akan berkomitmen meningkatkan produksinya
                di tahun-tahun mendatang
              </Paragraph>
              <Blockquote>
                {`"Padahal pada 2019, pemerintah Indonesia menetapkan aturan
                pembatasan produksi batu bara pada 489 juta ton. Sementara pada
                tahun tersebut, produksi batu bara nasional berada pada angka
                616,9 juta ton. Hal tersebut menunjukkan inkosistensi pemerintah
                Indonesia untuk berkomitmen mengurangi energi kotor."`}
                <span className="block font-bold mt-2">
                  WAWANCARA ESDM (Dirjen Minerba ESDM - Ridwan Jamaludin)
                </span>
              </Blockquote>
              <Divider />
              <Title>Celah Bolong Solusi Kendaraan Listrik</Title>
              <Paragraph>
                Dalam berbagai rencana pemerintah untuk mengurangi emisi, mobil
                listrik menjadi salah satu kartu as yang diklaim mujarab untuk
                menurunkan emisi. Bahkan dalam road map yang dirancang ESDM,
                pada tahun 2030 ditargetkan sudah ada sebanyak 2 juta mobil
                listrik dan 13 juta motor listrik yang dimiliki masyarakat.
                Selain itu, agenda suntik mati perlahan kendaraan konvensional
                akan dilakukan sejak 2040 hingga 2050. Tahun 2040 dirancang
                sebagai tahun tanpa penjualan motor konvensional kemudian
                disusul oleh tahun 2050 dengan matinya seluruh penjualan mobil
                konvensional.
              </Paragraph>
              <Paragraph>
                Menurut data dari berbagai situs resmi perusahaan otomotif yang
                memproduksi mobil listrik, harga mobil listrik kini masih bisa
                dikatakan cukup mahal dan sulit dijangkau.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12654384/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12654384/?utm_source=embed&utm_campaign=visualisation/12654384"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Hingga kini, perusahaan otomotif yang berhasil menjual harga
                mobil listrik paling receh adalah Wuling dengan Air EV Standard
                Range-nya yang dibanderol pada angka 243 juta rupiah, disusul
                oleh Air EV Long Range yang dibanderol pada angka 299 juta
                rupiah. Sementara sisanya, sudah berada di atas angka 300 juta
                rupiah.
              </Paragraph>
              <Paragraph>
                Kini timbul pertanyaan besar, apakah masyarakat Indonesia punya
                daya beli yang memadai untuk berpaling pada kendaraan listrik
                secepat mungkin?
              </Paragraph>
              <Paragraph>
                Pada 2022 lalu, Jongkie D Sugiarto selaku ketua Gaikindo
                (Gabungan Industri Kendaraan Bermotor Indonesia) mengklaim bahwa
                daya beli masyarakat Indonesia terhadap kendaraan masih berada
                di angka 300 juta rupiah ke bawah karena sejalan dengan PDB per
                kapita Indonesia.
              </Paragraph>
              <Blockquote>
                {`""`}
                <span className="block font-bold mt-2">
                  Wawancara Gaikindo Daya Beli 2023 - Langkah Pemerintah Dorong
                  Penggunaan Kendaraan Listrik (Shodiq Wicaksono - Ketua Bidang
                  V Teknologi Otomotif Masa Depan Gaikindo) - Qatro Romandhi
                </span>
              </Blockquote>
              <Paragraph>
                Tentu untuk mendorong pertumbuhan penggunaan kendaraan listrik,
                fasilitas SPKLU (Stasiun Pengisian Kendaraan Listrik Umum) dan
                SPBKLU (Stasiun Penukaran Baterai Kendaraan Listrik Umum) harus
                terus dikembangkan. Pasalnya, sebaran SPKLU dan SPBKLU masih
                cukup jakartasentris.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12696488/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12696488/?utm_source=embed&utm_campaign=visualisation/12696488"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Dalam konferensi pers yang disiarkan langsung pada kanal youtube
                Info GATRIK pada 18 Januari 2022, bisa disimpulkan bahwa sebaran
                SPKLU dan SPBKLU secara timpang didominasi oleh wilayah DKI
                Jakarta dengan total 101 SPKLU dan 217 SPBKLU. Dapat disimpulkan
                juga bahwa jumlah SPKLU dan SPBKLU di wilayah Pulau Jawa masih
                mendominasi..
              </Paragraph>
              <Blockquote>
                {`"Tentu untuk mendorong peralihan menuju kendaraan listrik
                secepat mungkin perlu dilakukan pemerataan sebaran SPKLU dan
                SPBKLU di seluruh wilayah Indonesia."`}
                <span className="block font-bold mt-2">
                  Wawancara Gatrik Langkah Mendorong Pertumbuhan SPKLU dan
                  SPBKLU- (DIRJEN KETENAGALISTRIKAN ESDM Qatro Romandhi)
                </span>
              </Blockquote>
              <Divider />
              <Title>Nikel, Mobil Listrik dan Kesengsaraan</Title>
              <Paragraph>
                Dengan dicanangkannya berbagai strategi pengembangan dan
                stimulus penggunaan mobil listrik yang tak hanya di Indonesia,
                tentu produsen mobil listrik harus memacu angka produksinya.
                Namun, sebagai negara yang memiliki produksi nikel yang paling
                tinggi di dunia, Indonesia memilih untuk melakukan ekspor nikel
                besar-besaran untuk bahan baku pembuatan baterai mobil listrik.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12697892/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12697892/?utm_source=embed&utm_campaign=visualisation/12697892"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Di tahun 2020, Indonesia melahirkan angka produksi nikel
                sebanyak 771 ribu ton. Angka tersebut mengalami kenaikan hingga
                memiliki angka produksi mencapai 1 juta ton di tahun 2021. Tentu
                saja hal ini memperlihatkan bahwa Indonesia banjir sumber daya
                nikel..
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12697929/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12697929/?utm_source=embed&utm_campaign=visualisation/12697929"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                INSG (International Nickel Study Group) dan NRCan (Natural
                Resources Canada) bahkan pernah mencatat bahwa Indonesia
                berhasil menjadi negara dengan distribusi produksi tertinggi di
                seluruh dunia dengan persentase di angka 30,4 persen.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/story/1819254/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/1819254/?utm_source=embed&utm_campaign=visualisation/1819254"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Sebaran tambang nikel di Indonesia bisa dikatakan cukup banyak.
                Jika dilihat berdasarkan jenis perizinan, perusahaan tambang
                yang mengantongi izin berada di angka 338. Jumlah tersebut
                terbagi menjadi 3 jenis izin, yakni IUP Eksplorasi dengan total
                izin sebanyak 4. Sementara izin, IUP OP dengan total izin
                sebanyak 328 dan KK OP sebanyak 6 izin.
              </Paragraph>
              <Paragraph>
                <span className="font-bold uppercase">
                  PENJELASAN JENIS IZIN
                </span>
              </Paragraph>
              <Paragraph>
                Ekspor nikel Indonesia bisa dibilang juga cukup sombong, di
                tahun 2021 Indonesia memiliki volume ekspor nikel di angka
                166.331 ribu ton. Angka tersebut naik hingga 534,.047 ribu ton
                di tahun 2022.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12698054/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12698054/?utm_source=embed&utm_campaign=visualisation/12698054"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Data-data di atas melahirkan konklusi bahwa Indonesia berhasil
                mendapatkan produksi yang gemuk dari eksplorasi yang cukup
                masif. Tak heran beberapa perusahan produsen mobil listrik,
                melirik Indonesia dalam hal industri nikel yang notabenenya
                berfungsi sebagai bahan baku produksi baterai mobil listrik.
              </Paragraph>
              <Paragraph>
                Sayangnya, berbagai perusahaan nikel menunjukkan laku tata
                kelola yang buruk di tengah eksplorasi yang masif. Beberapa
                permasalahan dan konflik agraria hingga kerusakan lingkungan
                kerap terjadi karena hal tersebut.
              </Paragraph>
              <Iframe>
                <div className="bg-red-500 text-white w-full h-44">Image</div>
              </Iframe>
              <Paragraph>
                Dalam waktu satu tahun ke belakang ada tiga perusahaan nikel
                yang kerap menyita perhatian publik lantaran permasalahan yang
                timbul karena buruknya tata kelola tambang.
              </Paragraph>
              <Paragraph>
                Yang pertama ada PT. Trimegah Bangun Persada yang berlokasi di
                Pulau Obi, Maluku Utara. Dalam beberapa laporan yang telah
                rilis, PT. Trimegah Bangun Persada pernah melakukan penggusuran
                tanah warga. Tak sampai disitu, PT Trimegah Bangun Persada
                bahkan juga menggunakan tanah sengketa tanpa izin.
              </Paragraph>
              <Paragraph>
                Hal yang tak kalah menyedihkan juga terjadi di Halmahera Tengah,
                Provinsi Maluku Utara. PT Weda Bay Nickel tercatat pernah
                melakukan pembebasan lahan seenak jidat dengan mematok harga
                lahan seharga 8 ribu rupiah, bahkan nominal tersebut juga
                diturunkan menjadi 2.500 rupiah yang tak bahkan lebih murah dari
                sebungkus indomie ayam bawang. Masyarakat setempat juga
                mengklaim bahwa PT. Weda Bay Nickel juga mencemari laut dan
                udara akibat aktivitas pertambangan. Sedihnya, di tahun 2013
                lalu bahkan ada salah satu warga Desa Lelilef yang dipenjara
                karena tuduhan mengancam karyawan PT Weda Bay Nickel.
              </Paragraph>
              <Paragraph>
                Selain itu, PT. Gema Kreasi Perdana juga pernah melakukan
                penerobosan lahan milik warga Roko-Roko Raya, Konawe Kepulauan,
                Sulawesi Tenggara. Selain tiga kasus di atas masih banyak kasus
                yang ditimbulkan di tahun-tahun sebelumnya.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12674146/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    width: "100%!",
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12674146/?utm_source=embed&utm_campaign=visualisation/12674146"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={0}
                      height={0}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Blockquote>
                {`"Tentu eksplorasi nikel tak mungkin dihentikan begitu saja,
                permasalahan bak kaset lama ini perlu sebuah solusi, yakni
                dengan menetapkan ketegasan tata kelola yang semakin baik."`}
                <span>
                  -Wawancara ESDM- (Ridwan Jamaludin) -Wawancara Ahli Energi
                  Terbarukan UGM - (Dr. Rachmawan Budiarto, S.T., M.T., G.P.)
                </span>
              </Blockquote>
              {/* <!--/ Post Content--> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
