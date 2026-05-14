import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Send } from 'lucide-react';

const WORKSHOPS = [
  {
    id: 1,
    title: "Digital Calligraphy Masterclass",
    time: "10:00 AM - 12:00 PM",
    category: "Digital",
    location: "Studio A",
    instructor: "Noura Al-Amri",
  },
  {
    id: 2,
    title: "Traditional Oil Painting",
    time: "02:00 PM - 04:00 PM",
    category: "Traditional",
    location: "Garden Atelier",
    instructor: "Khalid Mansour",
  },
  {
    id: 3,
    title: "AI-Generated Sculpture",
    time: "05:00 PM - 07:00 PM",
    category: "Digital",
    location: "VR Lounge",
    instructor: "Sarah Chen",
  },
];

export const WorkshopTimeline = () => {
  const [filter, setFilter] = useState('All');

  const filteredWorkshops = filter === 'All' 
    ? WORKSHOPS 
    : WORKSHOPS.filter(w => w.category === filter);

  return (
    <section id="workshops" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-gold font-medium tracking-[0.4em] text-sm uppercase mb-4">Educational Programs</h2>
        <h3 className="text-5xl font-bold mb-8">SMART <span className="font-playfair italic">WORKSHOP</span> TIMELINE</h3>
        
        <div className="flex justify-center gap-4">
          {['All', 'Digital', 'Traditional'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-2 rounded-full border transition-all interactive ${
                filter === f ? 'bg-gold text-black border-gold font-bold' : 'border-white/10 text-white/40 hover:border-white/30'
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        {filteredWorkshops.map((workshop, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={workshop.id}
            className="group flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/[0.07] transition-all"
          >
            <div className="flex-shrink-0 text-gold">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Calendar size={28} />
              </div>
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-white/10 text-white/60">
                  {workshop.category}
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-gold/20 text-gold">
                  {workshop.location}
                </span>
              </div>
              <h4 className="text-2xl font-bold group-hover:text-gold transition-colors">{workshop.title}</h4>
              <p className="text-white/40 mt-1">Led by <span className="text-white/70">{workshop.instructor}</span></p>
            </div>

            <div className="flex items-center gap-4 text-white/60 font-medium">
              <Clock size={20} className="text-gold" />
              {workshop.time}
            </div>

            <button className="bg-white/10 hover:bg-gold hover:text-black px-8 py-3 rounded-xl font-bold transition-all interactive">
              RESERVE
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const AIRecommendation = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="glass p-12 rounded-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20">
          <Sparkles size={120} className="text-gold" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-gold font-medium tracking-[0.4em] text-sm uppercase mb-4">AI Curator</h2>
            <h3 className="text-4xl font-bold mb-6">PERSONALIZED <span className="font-playfair italic">VIBE</span> MATCH</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Based on your interest in <span className="text-gold font-bold">Red Sea</span> and <span className="text-gold font-bold">Cinematic</span> styles, we recommend joining the <span className="text-white font-bold underline decoration-gold underline-offset-4">Digital Oceanics Workshop</span> this Saturday.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gold/10 border border-gold/20">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black font-bold">98%</div>
              <span className="text-sm font-medium">Match Score for "Oceanic Workshop"</span>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Rec 1" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Rec 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RegistrationCTA = () => {
  return (
    <section className="py-24 px-6 bg-gold/5 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-gold font-medium tracking-[0.4em] text-sm uppercase mb-4">Creative Community</h2>
        <h3 className="text-5xl font-bold mb-12">JOIN THE <span className="font-playfair italic">FUTURE</span> OF JEDDAH</h3>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
          <div className="relative w-full">
            <input 
              type="email" 
              placeholder="Your Email Address"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-gold transition-all text-lg"
            />
            <label className="absolute -top-3 left-6 bg-background px-2 text-[10px] font-bold tracking-widest text-gold uppercase">Floating Label</label>
          </div>
          <button className="w-full md:w-auto bg-gold text-black px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-3 interactive">
            SIGN UP <Send size={20} />
          </button>
        </div>
        
        <p className="mt-8 text-white/30 text-sm">
          By signing up, you agree to receive invites to exclusive physical exhibitions and NFT drops.
        </p>
      </div>
    </section>
  );
};
