export default function PDFLayout() {
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

  return (
    <div className="bg-white text-[#2a2a2a] w-full max-w-[900px] mx-auto overflow-hidden text-center">
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          .pdf-page {
            page-break-after: always;
            break-after: page;
            height: 100vh;
            width: 100vw;
          }
          @page {
            margin: 0;
            size: A4 portrait;
          }
        }
      `}} />

      {/* Page 1: Cover */}
      <div className="pdf-page w-full min-h-[1100px] p-8 mx-auto bg-white flex flex-col justify-center items-center">
        {/* Outer Border */}
        <div className="border-[5px] border-[#6b5835] w-full h-full p-2">
          {/* Inner Border */}
          <div className="border-2 border-[#6b5835] w-full h-full flex flex-col items-center justify-start p-12 overflow-hidden">
            
            <div className="w-[450px] h-[580px] mb-10 mt-8 mx-auto shadow-xl bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-300">
              <img 
                src="/angel.png" 
                alt="Mrs. Margaret Nsobila" 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            
            <h1 className="text-6xl font-serif font-bold text-[#1f2937] tracking-wider mb-6 leading-tight">
              Mrs. Margaret Nsobila
            </h1>
            
            <p className="text-2xl font-serif text-[#8b7355] tracking-[0.2em] mb-12">
              ( AKA MMA LARDI )
            </p>
            
            <p className="text-3xl font-serif italic text-[#4b5563]">
              January 1, 1964 — February 21, 2026
            </p>
            
          </div>
        </div>
      </div>

      {/* Page 2: Biography */}
      <div className="pdf-page w-full min-h-[1100px] p-8 mx-auto bg-white flex flex-col justify-center items-center">
        <div className="border-[5px] border-[#6b5835] w-full h-full p-2 flex flex-col">
          <div className="border-2 border-[#6b5835] w-full h-full flex flex-col p-12 overflow-hidden">
            
            <h2 className="text-5xl font-serif font-bold text-center text-[#1f2937] mb-8 pb-4 border-b border-[#8b7355]/40 inline-block mx-auto shrink-0">Biography</h2>
            
            <div className="flex-1 flex flex-col justify-start max-w-4xl mx-auto w-full">
                <p className="text-2xl font-serif italic text-center text-[#4b5563] mb-8 px-8 leading-relaxed">
                  "A life beautifully lived, a heart so deeply loved. Mma Lardi left a mark on everyone she met with her boundless grace and warmth."
                </p>
                <div className="text-[1.15rem] font-serif leading-10 text-justify text-[#374151] space-y-6">
                    <p className="indent-10">
                      Mrs. Margaret Nsobila was a loving mother, devoted Christian, and respected member of her community. She was born on 1st January, 1964 at Konongo to Mr. Akiekoba and Mrs. Atapora. She grew up with strong values of respect, hard work, humility, and kindness which guided her throughout her life.
                    </p>
                    <p className="indent-10">
                      She was a faithful Christian who loved and served God wholeheartedly. She was a committed member of Trinity Assemblies of God Church, where she worshipped and fellowshipped with other believers. Later in life, she continued her Christian journey at Reapers Assemblies of God Church, where she remained devoted to her faith.
                    </p>
                    <p className="indent-10">
                      She was married to Mr. Nsobila, and together they built a family based on love, respect, and unity. Mrs. Margaret was a devoted wife and a caring mother who always worked hard to support and guide her family. She was known as a humble, kind, and generous woman who was always ready to help others.
                    </p>
                </div>
                <p className="text-[1.35rem] font-serif italic font-bold text-center mt-12 text-[#8b7355]">
                  May her gentle soul rest in perfect peace.
                </p>
            </div>

          </div>
        </div>
      </div>
      
      {/* Page 3: Tributes (Part 1) */}
      <div className="pdf-page w-full min-h-[1100px] p-8 mx-auto bg-white flex flex-col justify-center items-center">
        <div className="border-[5px] border-[#6b5835] w-full h-full p-2 flex flex-col">
          <div className="border-2 border-[#6b5835] w-full h-full flex flex-col p-12 text-left overflow-hidden">
            
            <h2 className="text-5xl font-serif font-bold text-center text-[#1f2937] mb-8 pb-4 border-b border-[#8b7355]/40 mx-auto shrink-0">Tributes</h2>
            
            <div className="space-y-10 flex-1 max-w-4xl mx-auto w-full">
              <div>
                <h4 className="font-serif text-[1.4rem] font-bold mb-3 text-[#1f2937]">Tribute From Family</h4>
                <div className="text-[1.125rem] font-serif italic text-[#4b5563] leading-relaxed space-y-3">
                  <p>"Today, with heavy hearts, we remember and celebrate the life of our beloved Lardi, who left us at the age of 62. Though her passing has created a deep void in our hearts, we are grateful for the beautiful memories she left behind.</p>
                  <p>Lardi was a woman of great strength, kindness, and love. She was known by everyone as a hardworking and caring person who always put others before herself. Her heart was full of compassion, and she never hesitated to help those around her. To her family, friends, and everyone who knew her, she was a source of warmth, encouragement, and support.</p>
                  <p>As a mother, she was devoted and loving. She worked tirelessly to provide for and nurture her children, guiding them with wisdom, patience, and unconditional love. Her strength and dedication as a mother will always be remembered and admired.</p>
                  <p>Though she is no longer with us, her beautiful memories will forever remain in our hearts.</p>
                  <p className="font-semibold not-italic">May her gentle soul rest in perfect peace."</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-serif text-[1.4rem] font-bold mb-3 text-[#1f2937]">Tribute By Children</h4>
                <div className="text-[1.125rem] font-serif italic text-[#4b5563] leading-relaxed space-y-3">
                  <p>"Mum was a light in the darkest moments, a comforting hand when life was tough and a voice of wisdom that guided us through.</p>
                  <p>She was the best of mothers and my dearest friend. I will choose her in my next life as a mother. We treasure every moment we had together.</p>
                  <p>Her love was a shield that made us feel protected, no matter what challenges lay ahead.</p>
                  <p className="font-semibold not-italic mt-1">You are loved beyond words and missed beyond measure."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 4: Tributes (Part 2) */}
      <div className="pdf-page w-full min-h-[1100px] p-8 mx-auto bg-white flex flex-col justify-center items-center">
        <div className="border-[5px] border-[#6b5835] w-full h-full p-2 flex flex-col">
          <div className="border-2 border-[#6b5835] w-full h-full flex flex-col p-12 text-left overflow-hidden">
            
            <h2 className="text-5xl font-serif font-bold text-center text-[#1f2937] mb-8 pb-4 border-b border-[#8b7355]/40 mx-auto shrink-0">Tributes (Cont.)</h2>
            
            <div className="space-y-10 flex-1 max-w-4xl mx-auto w-full">
               <div>
                <h4 className="font-serif text-[1.4rem] font-bold mb-3 text-[#1f2937]">Tribute From Grandchildren</h4>
                <div className="text-[1.125rem] font-serif italic text-[#4b5563] leading-relaxed space-y-3">
                  <p>"As grandchildren of our favourite Grandmother, it sorrows our hearts that we didn’t finish telling her how much of an angel she really was. A loving and compassionate woman who sacrificed her needs for others. She gave so much light and love to everyone around her. Every memory of her bears remnants of her kind soul.</p>
                  <p>Mma Lardi was so selfless, she made us understand that riches meant nothing if we could not extend help to those in need. We will forever miss playing Ludo against our toughest opponent.</p>
                  <p className="font-semibold not-italic mt-1">Rest well Grandma"</p>
                </div>
              </div>
              
               <div>
                <h4 className="font-serif text-[1.4rem] font-bold mb-3 text-[#1f2937]">Tribute By Reapers Assembly Of God</h4>
                <div className="text-[1.125rem] font-serif italic text-[#4b5563] leading-relaxed space-y-3">
                  <p className="font-semibold not-italic">Revelation 14:13 “And I heard a voice from heaven saying unto me, write, Blessed are the dead which die in the Lord from henceforth; Yea, saith the Spirit, their works do follow them.”</p>
                  <p>The late Mrs. Margaret Nsobila whose mortal remains lie before us this morning was an active member of Reapers Assembly of God, Old Suame for 9 years. She was a faithful member who displayed an exceptional interest and love for the work of God.</p>
                  <p>We believe that our sister has finished the race of life and has entered into the rest prepared for the faithful servants of God. Though her voice may be silent amongst us now, the memories, the lessons, and the example of faith she left behind will continue to speak.</p>
                  <p className="font-semibold not-italic mt-1">May her soul rest in perfect peace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Page 5: Gallery (Part 1) */}
      <div className="pdf-page w-full min-h-[1100px] p-8 mx-auto bg-white flex flex-col justify-center items-center">
        <div className="border-[5px] border-[#6b5835] w-full h-full p-2 flex flex-col">
          <div className="border-2 border-[#6b5835] w-full h-full flex flex-col p-12 overflow-hidden">
            
            <h2 className="text-4xl font-serif font-bold text-center text-[#1f2937] mb-6 pb-2 border-b border-[#8b7355]/40 mx-auto shrink-0">Gallery</h2>
            
            <div className="grid grid-cols-2 grid-rows-3 gap-6 flex-1 max-w-4xl mx-auto w-full pb-2">
              {GALLERY_IMAGES.slice(0, 6).map((src, i) => (
                <div key={i} className="w-full h-[260px] bg-gray-50 border border-gray-200 shadow-sm p-3 flex justify-center items-center overflow-hidden">
                  <img src={src} alt="" className="max-w-full max-h-full object-contain rounded-sm" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Page 6: Gallery (Part 2) */}
      <div className="pdf-page w-full min-h-[1100px] p-8 mx-auto bg-white flex flex-col justify-center items-center">
        <div className="border-[5px] border-[#6b5835] w-full h-full p-2 flex flex-col">
          <div className="border-2 border-[#6b5835] w-full h-full flex flex-col p-12 overflow-hidden">
            
            <h2 className="text-4xl font-serif font-bold text-center text-[#1f2937] mb-6 pb-2 border-b border-[#8b7355]/40 mx-auto shrink-0">Gallery (Cont.)</h2>
            
            <div className="grid grid-cols-2 grid-rows-3 gap-6 flex-1 max-w-4xl mx-auto w-full pb-2">
              {GALLERY_IMAGES.slice(6, 12).map((src, i) => (
                <div key={i} className="w-full h-[260px] bg-gray-50 border border-gray-200 shadow-sm p-3 flex justify-center items-center overflow-hidden">
                  <img src={src} alt="" className="max-w-full max-h-full object-contain rounded-sm" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
