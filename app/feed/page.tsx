"use client";

import FeedHeader from "@/components/header/feedHeader/FeedHeader";
import Sidebar from "@/components/sidebar/feed/FeedSideBar";
import Section from "@/components/section/Section";
import MediaCard from "@/components/card/MediaCard";
import Pill from "@/components/pill/Pill";
import Footer from "@/components/footer/Footer";

function FeedPage() {

  return (
    <main className="min-h-screen text-white">
      {/* BG decorativo (troque o url('/bg.svg') pelo seu padrão) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          // backgroundImage:
          //   "url('/bg-pattern.png')", // opcional
          backgroundColor: "#000000",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative">
        <FeedHeader />

        <div className="mt-[150px] px-4 lg:px-8 flex justify-center">
          <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start gap-6 lg:gap-10">

            <div className="w-full lg:w-[240px] shrink-0">
              <Sidebar />
            </div>


            {/* Conteúdo */}
            <section className="flex flex-col w-full justify-center content-center">
              {/* TOP ROW – 3 cards destacados */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <MediaCard
                  title="IZEA"
                  subtitle="Curated collection"
                  author="—"
                  image="/place/hero-1.jpg"
                  aspect="wide"
                />
                <MediaCard
                  title="Cinematic gradients"
                  subtitle="Design & culture"
                  author="Alex Turner"
                  image="/place/hero-2.jpg"
                  aspect="wide"
                />
                <MediaCard
                  title="Cover art"
                  subtitle="Music"
                  author="—"
                  image="/place/hero-3.jpg"
                  aspect="wide"
                  badge="new"
                />
              </div>

              {/* INSPI/ LISTENING/ GAME tabs fake + 3 mini cards + ABOUT/CONTACT */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,220px] gap-6 mt-6">
                <div className="space-y-4">
                  <nav className="flex flex-wrap gap-2 text-xs tracking-wide">
                    {["INSPIRING", "LISTENING GAME"].map((t, i) => (
                      <button
                        key={t}
                        className={[
                          "rounded-full px-3 py-1",
                          i === 0
                            ? "text-white border-white"
                            : "border-white/40 text-white/80 hover:text-white",
                        ].join(" ")}
                      >
                        {t}
                      </button>
                    ))}
                  </nav>

                  {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <MediaCard
                      title="Art by someone else"
                      subtitle=""
                      image="/place/mini-1.jpg"
                      aspect="square"
                      compact
                    />
                    <MediaCard
                      title="The Abstract Aesthetic"
                      subtitle="Alex Turner"
                      image="/place/mini-2.jpg"
                      aspect="square"
                      compact
                    />
                    <MediaCard
                      title=""
                      subtitle=""
                      image="/place/mini-3.jpg"
                      aspect="square"
                      compact
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-4">
                  <nav className="flex flex-wrap justify-end gap-2 text-xs tracking-wide">
                    {["ABOUT", "CONTACT"].map((t, i) => (
                      <button
                        key={t}
                        className={[
                          "rounded-full px-3 py-1",
                          i === 0
                            ? "text-white border-white"
                            : "border-white/40 text-white/80 hover:text-white",
                        ].join(" ")}
                      >
                        {t}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* WEEKLY HIGHLIGHTS */}
              <Section title="WEEKLY HIGHLIGHTS" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <MediaCard
                  title="POSTS"
                  subtitle="Beyond the visible"
                  meta="JUNE 2025"
                  image="/place/high-1.jpg"
                  aspect="video"
                />
                <MediaCard
                  title="PHOTOGRAPHY"
                  subtitle="The body in art through the years"
                  meta="FEATURED"
                  image="/place/high-2.jpg"
                  aspect="video"
                />
                <MediaCard
                  title="MUSIC"
                  subtitle="New Albion is out"
                  image="/place/high-3.jpg"
                  aspect="video"
                />
              </div>

              <div className="flex w-ful justify-center gap-3 mt-6">
                <Pill>Visual Manifesto</Pill>
                <Pill>Experimental tracks</Pill>
                <Pill>Animated collages</Pill>
              </div>

              {/* MOST COMMENTED + RESEARCH AND DISCOVERIES */}
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 flex gap-10 p-4 lg:p-6">
                  <div>
                    <Section title="MOST COMMENTED" />
                    <div className="flex items-center justify-center gap-6">
                      {[
                        { name: "Bill Gates", img: "aztea-media-icon.png" },
                        { name: "Jermiah Torres", img: "/place/face-2.jpg" },
                        { name: "Sarolta Oh", img: "/place/face-3.jpg" },
                      ].map((p) => (
                        <div key={p.name} className="flex flex-col items-center gap-3">
                          {/* <Image
                            src={p.img}
                            alt={p.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          /> */}
                          <div className="rounded-full object-cover bg-black w-[80px] h-[80px]" />
                          <span className="text-sm text-white/90 text-nowrap">{p.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Section title="RESEARCH AND DISCOVERIES" />
                    <MediaCard image="/place/blank-3.png" aspect="square" ghost />
                  </div>
                </div>
              </div>

              {/* VIDEO / AUDIO / SOCIAL MEDIA */}
              {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10">
                <div>
                  <Section title="VIDEO" />
                  <MediaCard
                    title="—"
                    subtitle=""
                    image="/place/video-1.jpg"
                    aspect="wide"
                  />
                </div>
                <div>
                  <Section title="AUDIO" subtitle="SONIC EXPERIMENTATION" caption="JAKOB CARTER" />
                  <MediaCard image="/place/audio-1.jpg" aspect="wide" />
                </div>
                <div>
                  <Section title="SOCIAL MEDIA" />
                  <MediaCard image="/place/blank-4.png" aspect="square" ghost />
                </div>
              </div>

              {/* AZTEA LAB */}
              <Section title="AZTEA LAB" subtitle="Drafts, experiments and creative works in progress; exploring colors, sounds and forms." />
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[
                  { t: "Swirling Study", a: "Vera Gomez", img: "/place/lab-1.jpg" },
                  { t: "Echoes", a: "Julio Rosa", img: "/place/lab-2.jpg" },
                  { t: "Hands & Petals", a: "Hana Sander", img: "/place/lab-3.jpg" },
                ].map((c) => (
                  <MediaCard key={c.t} title={c.t} subtitle={c.a} image={c.img} aspect="lab" />
                ))}
              </div>

              {/* Frase */}
              <p className="text-sm text-amber-200/80 max-w-lg">
                “We write to taste life twice, in the moment and in retrospect.”
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default FeedPage;
// export default protectedRoute(FeedPage);