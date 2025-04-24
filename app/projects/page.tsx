import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: "Software Engineer portfolio ideas",
  keywords: "portfolio frontend developer",
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

const ProjectsPage = () => {
  const t = useTranslations("ProjectsPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-2xl font-semibold text-gray-700">Coming Soon...</p>
        <p className="text-sm text-gray-500 mt-2">Stay tuned for updates!</p>
      </div>
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
