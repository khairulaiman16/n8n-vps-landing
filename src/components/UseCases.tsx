import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

const cases = [
  "Sync leads from your website into CRM and notify your team.",
  "Auto-generate reports and send them to Slack or email.",
  "Connect internal APIs and trigger workflows on events.",
  "Back up records or trigger deploys from automation flows."
];

const UseCases: React.FC = () => {
  return (
    <section id="usecases" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold mb-3">Real use cases</h3>
        <p className="text-slate-600 mb-8">See how teams use n8n VPS to automate repeatable tasks and reduce manual work.</p>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 text-left"
        >
          {cases.map((c, i) => (
            <motion.li key={i} variants={fadeInUp} className="p-4 bg-white rounded-lg shadow-sm">
              <div className="font-medium">{c}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default UseCases;
