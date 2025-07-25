"use client";

import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function BookingSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "client-onboarding" });
      cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
    })();
  }, []);

  return (
    <section id="booking" className="py-20 px-4 bg-[#393e42]/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book a Call With Us
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your digital journey today and schedule a free consultation
            with our experts
          </p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 rounded-lg border shadow-xl"
          style={{ height: "600px" }}
        > */}
        <Cal
          namespace="client-onboarding"
          calLink="leroysamuel/client-onboarding"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
        {/* </motion.div> */}
      </div>
    </section>
  );
}
