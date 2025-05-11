// src/pages/Home.jsx
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="p-8 text-center">
      <motion.h2 className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Shape the Future of Menswear
      </motion.h2>
      <p className="mb-6">Welcome to a revolution in T-shirts. Join us in creating the next generation of minimalist fashion.</p>
      <motion.div className="border-l-2 border-white pl-4 text-left max-w-xl mx-auto"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <h3 className="font-semibold mb-2">T-Shirt Evolution Timeline</h3>
        <ul className="space-y-2 text-sm">
          <li>👕 Classic Fit – 2000s</li>
          <li>🌱 Sustainable Threads – 2010s</li>
          <li>🧠 Smart Fabrics – 2020s</li>
          <li>🧬 Community-Designed Evolution – <span className="text-green-400">Now</span></li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Home;
