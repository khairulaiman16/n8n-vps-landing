import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";
// import feature1 from "../assets/images/feature1.png";
// import feature2 from "../assets/images/feature2.png";
// import feature3 from "../assets/images/feature3.png";
const feature1 = "https://placehold.co/100x100";
const feature2 = "https://placehold.co/100x100";
const feature3 = "https://placehold.co/100x100";

const features = [
  {
    image: feature1,
    title: "Optimized Performance",
    desc: "Experience blazing-fast automation with dedicated VPS resources fine-tuned for n8n.",
  },
  {
    image: feature2,
    title: "Simple Deployment",
    desc: "Start your n8n server in minutes — no complex setup or DevOps knowledge needed.",
  },
  {
    image: feature3,
    title: "Full Control",
    desc: "Access full server control and logs. Scale your automation freely.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Why Choose Our n8n VPS?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto mb-6 w-20 h-20 object-contain"
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
