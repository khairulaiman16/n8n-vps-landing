import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

const Story: React.FC = () => {
  return (
    <section id="story" className="py-12">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">What is an n8n VPS?</h2>
          <p className="text-slate-600">
            An n8n VPS is your own automation server with n8n pre-installed and configured for immediate use.
            Instead of relying on shared hosted services, you control the instance — updates, integrations, and data live under your domain.
          </p>
          <p className="text-slate-600">
            It’s ideal for teams and businesses that need reliability, compliance, and the flexibility to customize workflows and integrations without vendor lock-in.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="card p-6"
        >
          <h3 className="font-semibold text-lg mb-2">Why owning your instance matters</h3>
          <ul className="text-slate-600 space-y-2 text-sm">
            <li>• Full control over data residency and access</li>
            <li>• Predictable, dedicated performance</li>
            <li>• Freedom to extend or customize the environment</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
