"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import EmptyState from "@/common/components/elements/EmptyState";

const Projects = () => {
  const t = useTranslations("ProjectsPage");

  return (
    <section className="flex h-64 flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <EmptyState message={t("no_data")} />
      </motion.div>
    </section>
  );
};

export default Projects;
