"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus, Mail, MessageSquare, MapPin, Calendar, ArrowRight, Camera, UserPlus, X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const GALLERY_IMAGES = [
  "/5895329642036530426.jpg",
  "/media__1773932087047.jpg",
  "/IMG_2579.jpg",
  "/5895329642036530424.jpg",
  "/media__1773932087227.jpg",
  "/5895329642036530428.jpg",
  "/photo_5895329642036530366_y.jpg",
  "/5895329642036530423.jpg",
  "/media__1773931992643.jpg",
  "/5895329642036530425.jpg",
  "/5895329642036530427.jpg",
  "/maaa.jpg",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("biography");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleNextImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_IMAGES.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setSelectedImage(GALLERY_IMAGES[nextIndex]);
  }, [selectedImage]);

  const handlePrevImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_IMAGES.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedImage(GALLERY_IMAGES[prevIndex]);
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleNextImage, handlePrevImage]);

  return (
    <div className="min-h-screen bg-[var(--color-memorial-primary)] text-[var(--color-memorial-dark)] font-sans">
      {/* Navbar Minimal */}
      <nav className="fixed top-0 w-full bg-[var(--color-memorial-primary)]/80 backdrop-blur-md z-50 border-b border-[var(--color-memorial-secondary)]/50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic font-medium tracking-wide text-lg text-[#8b7355]">In Loving Memory</span>
          <a 
            href="/Memorial_Program.pdf" 
            download
            className="bg-[#8b7355] text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide hover:bg-[#6e5a40] transition flex items-center gap-2 shadow-sm"
          >
            <Download size={16} /> <span className="hidden sm:inline">Download Memorial</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mt-16 mb-32 md:mb-48">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/Gemini_Generated_Image_nlienlnlienlnlie.png"
              alt="Beautiful cover"
              fill
              className="object-cover object-center brightness-90"
              priority
            />
            {/* Gradient to blend smoothly into the page background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-memorial-primary)] via-[var(--color-memorial-primary)]/40 to-transparent" />
          </motion.div>
        </div>

        {/* Profile Card Overlay */}
        <div className="absolute bottom-0 translate-y-1/3 left-0 w-full px-6 z-20 flex justify-center">
          <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full md:rounded-[40px] shadow-2xl ring-8 ring-[var(--color-memorial-primary)] overflow-hidden bg-stone-200 shrink-0"
            >
              <Image
                src="/angel.png"
                alt="Profile picture of Mrs. Margaret Nsobila"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            {/* Text Overlay Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center md:text-left md:mb-6 w-full"
            >
              <div className="inline-block bg-[var(--color-memorial-primary)]/70 backdrop-blur-md py-4 px-6 md:px-8 md:py-6 rounded-3xl border border-[var(--color-memorial-secondary)]/60 shadow-lg">
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-serif text-[var(--color-memorial-dark)] tracking-tight uppercase leading-tight">
                  Mrs. Margaret Nsobila (AKA MMA LARDI)
                </h1>
                <p className="font-serif italic text-xl md:text-2xl text-[#8b7355] mt-2 uppercase">
                  January 1, 1964 — February 21, 2026
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 pt-40 md:pt-48 pb-32">
        {/* Navigation Tabs */}
        <div className="flex justify-center md:justify-start gap-8 border-b border-[var(--color-memorial-secondary)] mb-12">
          {["biography", "gallery", "tributes"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm tracking-widest uppercase font-medium transition-colors relative ${activeTab === tab ? "text-[var(--color-memorial-dark)]" : "text-gray-400 hover:text-gray-600"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8b7355]" />
              )}
            </button>
          ))}
        </div>

        {/* Biography Section */}
        {activeTab === "biography" && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg prose-stone max-w-none space-y-12"
          >
            {/* Featured Cinemagraph (Video Loop) */}
            <div className="relative w-full rounded-[32px] overflow-hidden shadow-2xl border border-[var(--color-memorial-secondary)] bg-[#1a1815]">
              <video
                src="/Random_Video_Generation_Complete.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto max-h-[70vh] block mx-auto"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 space-y-6 text-gray-700 leading-relaxed font-light">
                <p className="text-2xl font-serif italic text-[var(--color-memorial-dark)] leading-snug">
                  "A life beautifully lived, a heart so deeply loved. Mma Lardi left a mark on everyone she met with her boundless grace and warmth."
                </p>
                <p>
                  Mrs. Margaret Nsobila was a loving mother, devoted Christian, and respected member of her community. She was born on 1st January, 1964 at Konongo to Mr. Akiekoba and Mrs. Atapora. She grew up with strong values of respect, hard work, humility, and kindness which guided her throughout her life.
                </p>
                <p>
                  Mrs. Margaret Nsobila was a faithful Christian who loved and served God wholeheartedly. She was a committed member of Trinity Assemblies of God Church, where she worshipped and fellowshipped with other believers. Later in life, she continued her Christian journey at Reapers Assemblies of God Church, where she remained devoted to her faith and Church activities.
                </p>
                <p>
                  She was married to Mr. Nsobila, and together they built a family based on love, respect, and unity. Mrs. Margaret was a devoted wife and a caring mother who always worked hard to support and guide her family. Mrs. Margaret Nsobila was working as a seamstress. She was hardworking and dedicated to her work, and many people appreciated her talent and effort. She was known as a humble, kind, and generous woman who was always ready to help others. Her warm smile, caring heart, and strong faith touched the lives of many people. Mrs. Margaret Nsobila was blessed with children. She loved her children deeply and always encouraged them to live good and respectful lives. Sadly, Mrs. Margaret Nsobila passed away on the 21st February, 2026. Her passing has left a great vacuum for her family, friends, and all who knew her. She will always be remembered for her kindness, humility, strong faith, and the love she showed to everyone around her. Her memories will forever remain in the hearts of her family and loved ones.
                </p>
                <p className="font-serif italic text-xl text-[var(--color-memorial-dark)] mt-8">
                  May her gentle soul rest in perfect peace.
                </p>

                <div className="mt-12 bg-[var(--color-memorial-secondary)]/30 p-8 rounded-2xl border border-[var(--color-memorial-secondary)] border-dashed backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-[var(--color-memorial-dark)] mb-6 uppercase tracking-wider">Service Information</h3>
                  <div className="space-y-8">
                    {/* Memorial Service */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Calendar className="w-5 h-5 mt-1 text-[#8b7355]" />
                        <div>
                          <p className="font-medium text-[var(--color-memorial-dark)] uppercase tracking-tight">Memorial Service</p>
                          <p className="text-sm text-gray-600">Saturday, March 28th, 2026</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 mt-1 text-[#8b7355]" />
                        <div>
                          <p className="text-sm text-gray-600">Asafo Opportunity Bank Road, Kumasi</p>
                        </div>
                      </div>
                    </div>

                    {/* Thanksgiving Service */}
                    <div className="space-y-4 pt-4 border-t border-[var(--color-memorial-secondary)]">
                      <div className="flex items-start gap-4">
                        <Calendar className="w-5 h-5 mt-1 text-[#8b7355]" />
                        <div>
                          <p className="font-medium text-[var(--color-memorial-dark)] uppercase tracking-tight">Thanksgiving Service</p>
                          <p className="text-sm text-gray-600">Sunday, March 29th, 2026</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 mt-1 text-[#8b7355]" />
                        <div>
                          <p className="font-medium text-[var(--color-memorial-dark)]">Reapers Assemblies of God</p>
                          <p className="text-sm text-gray-600">Old Suame, Kumasi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Gallery Section */}
        {activeTab === "gallery" && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="mb-6">
              <h2 className="font-serif text-3xl">Captured Moments</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY_IMAGES.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(src)}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8b7355] focus:ring-offset-2 focus:ring-offset-[var(--color-memorial-primary)] transition-all"
                >
                  <Image
                    src={src}
                    alt={`Gallery photo ${i + 1}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </motion.section>
        )}

        {/* Tributes Section */}
        {activeTab === "tributes" && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Family Tribute */}
              <div className="bg-white/70 p-8 rounded-2xl border border-[var(--color-memorial-secondary)] md:col-span-2 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-serif text-xl font-medium text-[var(--color-memorial-dark)]">Tribute From Family</h4>
                  </div>
                  <div className="bg-[#8b7355]/10 text-[#8b7355] p-3 rounded-full">
                    <Heart size={18} className="fill-current" />
                  </div>
                </div>
                <div className="text-base font-light text-gray-700 leading-relaxed font-serif italic space-y-4">
                  <p>
                    "Today, with heavy hearts, we remember and celebrate the life of our beloved Lardi, who left us at the age of 62. Though her passing has created a deep void in our hearts, we are grateful for the beautiful memories she left behind.
                  </p>
                  <p>
                    Lardi was a woman of great strength, kindness, and love. She was known by everyone as a hardworking and caring person who always put others before herself. Her heart was full of compassion, and she never hesitated to help those around her. To her family, friends, and everyone who knew her, she was a source of warmth, encouragement, and support.
                  </p>
                  <p>
                    As a mother, she was devoted and loving. She worked tirelessly to provide for and nurture her children, guiding them with wisdom, patience, and unconditional love. Her strength and dedication as a mother will always be remembered and admired.
                  </p>
                  <p>
                    Though she is no longer with us, her beautiful memories will forever remain in our hearts.
                  </p>
                  <p className="font-medium text-[var(--color-memorial-dark)]">
                    May her gentle soul rest in perfect peace."
                  </p>
                </div>
              </div>

              {/* Children Tribute */}
              <div className="bg-white/70 p-8 rounded-2xl border border-[var(--color-memorial-secondary)] md:col-span-2 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-serif text-xl font-medium text-[var(--color-memorial-dark)]">Tribute By Children</h4>
                  </div>
                  <div className="bg-[#8b7355]/10 text-[#8b7355] p-3 rounded-full">
                    <Heart size={18} className="fill-current" />
                  </div>
                </div>
                <div className="text-base font-light text-gray-700 leading-relaxed font-serif italic space-y-4">
                  <p>
                    "Mum was a light in the darkest moments, a comforting hand when life was tough and a voice of wisdom that guided us through.
                  </p>
                  <p>
                    She was the best of mothers and my dearest friend. I will choose her in my next life as a mother. We treasure every moment we had together.
                  </p>
                  <p>
                    Her love was a shield that made us feel protected, no matter what challenges lay ahead.
                  </p>
                  <p className="font-medium text-[var(--color-memorial-dark)] mt-4">
                    You are loved beyond words and missed beyond measure."
                  </p>
                </div>
              </div>

              {/* Grandchildren Tribute */}
              <div className="bg-white/70 p-8 rounded-2xl border border-[var(--color-memorial-secondary)] md:col-span-2 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-serif text-xl font-medium text-[var(--color-memorial-dark)]">Tribute From Grandchildren</h4>
                  </div>
                  <div className="bg-[#8b7355]/10 text-[#8b7355] p-3 rounded-full">
                    <Heart size={18} className="fill-current" />
                  </div>
                </div>
                <div className="text-base font-light text-gray-700 leading-relaxed font-serif italic space-y-4">
                  <p>
                    "As grandchildren of our favourite Grandmother, it sorrows our hearts that we didn’t finish telling her how much of an angel she really was. A loving and compassionate woman who sacrificed her needs for others. She gave so much light and love to everyone around her. Every memory of her bears remnants of her kind soul.
                  </p>
                  <p>
                    Mma Lardi was so selfless, she made us understand that riches meant nothing if we could not extend help to those in need. We will forever miss playing Ludo against our toughest opponent.
                  </p>
                  <p className="font-medium text-[var(--color-memorial-dark)] mt-4">
                    Rest well Grandma"
                  </p>
                </div>
              </div>

              {/* Church Tribute */}
              <div className="bg-white/70 p-8 rounded-2xl border border-[var(--color-memorial-secondary)] md:col-span-2 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-serif text-xl font-medium text-[var(--color-memorial-dark)]">Tribute By Reapers Assembly Of God</h4>
                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 block">Old Suame-Kumasi</span>
                  </div>
                  <div className="bg-[#8b7355]/10 text-[#8b7355] p-3 rounded-full">
                    <Heart size={18} className="fill-current" />
                  </div>
                </div>
                <div className="text-base font-light text-gray-700 leading-relaxed font-serif italic space-y-4">
                  <p className="font-medium text-[var(--color-memorial-dark)]">
                    Revelation 14:13 “And I heard a voice from heaven saying unto me, write, Blessed are the dead which die in the Lord from henceforth; Yea, saith the Spirit, their works do follow them.”
                  </p>
                  <p>
                    The late Mrs. Margaret Nsobila whose mortal remains lie before us this morning was an active member of Reapers Assembly of God, Old Suame for 9 years. She was a faithful member who displayed an exceptional interest and love for the work of God. 
                  </p>
                  <p>
                    We believe that our sister has finished the race of life and has entered into the rest prepared for the faithful servants of God. Though her voice may be silent amongst us now, the memories, the lessons, and the example of faith she left behind will continue to speak.
                  </p>
                  <p className="font-medium text-[var(--color-memorial-dark)] mt-2">
                    May her soul rest in perfect peace.
                  </p>
                </div>
              </div>

            </div>
          </motion.section>
        )}
      </main>

      {/* Footer / Created By */}
      <footer className="w-full text-center py-8 text-[var(--color-memorial-dark)]/60 font-serif border-t border-[var(--color-memorial-secondary)]/50 mt-12 bg-white/30 backdrop-blur-sm relative z-40">
        <p className="text-sm tracking-widest uppercase mb-1">
          Created by <span className="font-bold text-[#8b7355]">Bali-Can Ltd</span>
        </p>
      </footer>

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/233539490469"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-[14px] rounded-full shadow-lg border-[3px] border-transparent hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        aria-label="Contact Bali-Can Ltd on WhatsApp"
        title="Chat with Bali-Can Ltd"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.04-.967-.281-.099-.488-.15-.694.15-.206.3-.778.967-.954 1.166-.175.197-.354.221-.652.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 backdrop-blur-sm cursor-zoom-out"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[101] bg-black/20 rounded-full backdrop-blur-sm"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[101] bg-black/20 rounded-full backdrop-blur-sm hover:bg-black/40"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[101] bg-black/20 rounded-full backdrop-blur-sm hover:bg-black/40"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              key={selectedImage} // Use key to trigger animation on image change
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-auto md:h-[85vh] rounded-2xl overflow-hidden shadow-2xl cursor-default"
            >
              <Image
                src={selectedImage}
                alt="Expanded gallery photo"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
