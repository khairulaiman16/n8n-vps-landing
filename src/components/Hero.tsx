import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

const heroImgLocal = "/images/hero.png";
const placeholder = "https://placehold.co/720x480?text=n8n+VPS";

const Img: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    onError={(e) => (e.currentTarget.src = placeholder)}
    className="w-full max-w-lg rounded-xl shadow-xl object-cover"
  />
);

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">n8n • Self-hosted</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Automate everything. Host it <span className="text-indigo-600">your way</span>.
          </h1>

          <p className="text-slate-600 max-w-xl">
            Deploy a dedicated n8n VPS — pre-installed, secure, and tuned for automation at scale. Own your data, control updates, and integrate the apps you already use.
          </p>

          <div className="flex items-center gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium shadow hover:scale-[1.02] transition-transform">Get started</a>
            <a href="#flow" className="text-sm text-slate-700 hover:text-slate-900 transition">See how it works</a>
          </div>

          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center">⚡</div>
              <div>
                <div className="font-medium">Optimized</div>
                <div className="text-xs">Fast & stable execution</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center">🔐</div>
              <div>
                <div className="font-medium">Private</div>
                <div className="text-xs">Your data, your rules</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <Img src={heroImgLocal} alt="n8n VPS illustration" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
