import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Heart, Share2 } from 'lucide-react';

interface ArtItem {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  artist: string;
  bio: string;
  image: string;
  price: string;
  category: string;
}

const ARTWORKS: ArtItem[] = [
  {
    id: 1,
    title: "Red Sea",
    titleAr: "البحر الأحمر",
    description: "A cinematic exploration of the depths, where coral reefs whisper ancient secrets of the Hijaz coast.",
    artist: "Amal Al-Jeddawi",
    bio: "Amal is a digital pioneer from Jeddah, focusing on marine bioluminescence and its connection to cultural heritage.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    price: "12,500 SAR",
    category: "Cinematic",
  },
  {
    id: 2,
    title: "City Identity",
    titleAr: "هوية المدينة",
    description: "An abstract blend of Roshan architecture and futuristic neon, symbolizing Jeddah's transformation.",
    artist: "Faisal Al-Saud",
    bio: "Faisal's work bridges the gap between traditional Islamic geometry and cybernetic aesthetics.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    price: "18,000 SAR",
    category: "Abstract",
  },
  {
    id: 3,
    title: "Moonlight",
    titleAr: "ليلة قمر",
    description: "A high-contrast night scene capturing the stillness of the desert under a digital moon.",
    artist: "Laila Noor",
    bio: "Laila specializes in nocturnal photography and light-painting that evokes the silence of the Empty Quarter.",
    image: "https://images.unsplash.com/photo-1472333391039-14ee04bc5c33?q=80&w=2069&auto=format&fit=crop",
    price: "9,200 SAR",
    category: "Photography",
  },
  {
    id: 4,
    title: "Coffee & Dreams",
    titleAr: "القهوة والحلم",
    description: "A moody, artistic shot of Saudi coffee steam evolving into complex calligraphic shapes.",
    artist: "Omar Khalil",
    bio: "Omar is a multi-disciplinary artist who explores the sensory experiences of Arabian hospitality.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
    price: "15,000 SAR",
    category: "Contemporary",
  },
];

const ArtCard = ({ item, onClick }: { item: ArtItem; onClick: () => void }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className="bento-card group h-full cursor-pointer interactive"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <span className="text-gold text-xs font-bold tracking-widest mb-2 block uppercase">
          {item.category}
        </span>
        <h3 className="text-3xl font-bold mb-1">{item.title}</h3>
        <h4 className="text-xl font-playfair text-white/60 mb-4">{item.titleAr}</h4>
        
        <div className="flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-sm font-medium text-gold">VIEW STORY</span>
          <div className="flex gap-3">
            <Heart size={18} className="text-white/40 hover:text-red-500 transition-colors" />
            <Share2 size={18} className="text-white/40 hover:text-gold transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ArtDrawer = ({ item, onClose }: { item: ArtItem | null; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-card z-[70] p-10 overflow-y-auto border-l border-white/10"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full transition-colors interactive"
            >
              <X size={24} />
            </button>

            <div className="mt-12">
              <span className="text-gold font-bold tracking-widest uppercase text-sm">{item.category}</span>
              <h2 className="text-5xl font-bold mt-4 mb-2">{item.title}</h2>
              <p className="text-2xl font-playfair text-white/50 mb-8">{item.titleAr}</p>

              <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-3">The Story</h4>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-3">Artist Bio</h4>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold">
                      {item.artist[0]}
                    </div>
                    <span className="text-xl font-bold">{item.artist}</span>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    {item.bio}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-white/40 text-xs uppercase font-bold block mb-1">Value</span>
                    <span className="text-2xl font-bold text-gold">{item.price}</span>
                  </div>
                  <button className="bg-gold text-black px-8 py-3 rounded-xl font-bold hover:bg-white transition-all interactive flex items-center gap-2">
                    ACQUIRE <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const BentoGrid = () => {
  const [selectedArt, setSelectedArt] = useState<ArtItem | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-gold font-medium tracking-[0.4em] text-sm uppercase mb-4">Masterpiece Collection</h2>
          <h3 className="text-5xl font-bold">THE <span className="font-playfair italic">CURATED</span> SELECTION</h3>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full border border-gold text-gold font-bold text-sm interactive">ALL ART</button>
          <button className="px-6 py-2 rounded-full border border-white/10 hover:border-gold transition-colors text-white/60 text-sm interactive">DIGITAL</button>
          <button className="px-6 py-2 rounded-full border border-white/10 hover:border-gold transition-colors text-white/60 text-sm interactive">TRADITIONAL</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[1000px] md:h-[800px]">
        <div className="md:col-span-2 md:row-span-2">
          <ArtCard item={ARTWORKS[0]} onClick={() => setSelectedArt(ARTWORKS[0])} />
        </div>
        <div className="md:col-span-2 md:row-span-1">
          <ArtCard item={ARTWORKS[1]} onClick={() => setSelectedArt(ARTWORKS[1])} />
        </div>
        <div className="md:col-span-1 md:row-span-1">
          <ArtCard item={ARTWORKS[2]} onClick={() => setSelectedArt(ARTWORKS[2])} />
        </div>
        <div className="md:col-span-1 md:row-span-1">
          <ArtCard item={ARTWORKS[3]} onClick={() => setSelectedArt(ARTWORKS[3])} />
        </div>
      </div>

      <ArtDrawer item={selectedArt} onClose={() => setSelectedArt(null)} />
    </section>
  );
};

export default BentoGrid;
