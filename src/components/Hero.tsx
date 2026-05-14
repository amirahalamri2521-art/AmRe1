
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-20 grayscale"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2038&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-gold font-medium tracking-[0.4em] text-sm uppercase mb-4 block">
            The Future of Art is Here
          </span>
          <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight">
            BUILD THE <span className="gold-gradient italic">VIBE</span>
            <br />
            <span className="font-playfair">JEDDAH 2026</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Experience an immersive journey through the intersection of Saudi heritage 
          and futuristic digital expression. A masterpiece exhibition on the Red Sea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="bg-gold text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all interactive">
            EXPLORE GALLERY
          </button>
          <button className="border border-white/20 hover:border-gold px-10 py-4 rounded-full font-bold text-lg hover:text-gold transition-all interactive">
            VIEW SCHEDULE
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent mx-auto" />
        <span className="text-[10px] tracking-widest uppercase mt-4 block">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
