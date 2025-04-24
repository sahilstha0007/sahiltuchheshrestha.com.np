import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm } from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiPhp,
  SiPython,
  SiDjango,
  SiRedux,
  SiFirebase,
  SiReactrouter,
  SiReacthookform,
  SiReacttable,
  SiMongodb,
  SiOracle,
  SiBun,
  SiYarn,
  SiNestjs,
  SiSupabase,
  SiDocker,
  // SiMysql,
  // SiJest,
  // SiLaravel,
  // SiVuedotjs,
  // SiAstro,
  // SiKotlin
} from "react-icons/si";

export type SkillProps = {
  [key: string]: JSX.Element;
};

const iconSize = 22;

export const STACKS: SkillProps = {
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-violet-600" />
  ),
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-400" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  // "Vue.js": <SiVuedotjs size={iconSize} className="text-green-400" />,
  "React.js": <SiReact size={iconSize} className="text-cyan-400" />,
  "React Table": <SiReacttable size={iconSize} className="text-rose-600" />,
  "React Hook Form": (
    <SiReacthookform size={iconSize} className="text-pink-500" />
  ),
  "React Router": <SiReactrouter size={iconSize} className="text-red-500" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  "Framer Motion": (
    <TbBrandFramerMotion size={iconSize} className="text-fuchsia-500" />
  ),
  Redux: <SiRedux size={iconSize} className="text-violet-500" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "Node.js": <SiNodedotjs size={iconSize} className="text-green-500" />,
  "Express.js": <SiExpress size={iconSize} />,
  "Nest.js": <SiNestjs size={iconSize} className="text-pink-700" />,
  PHP: <SiPhp size={iconSize} className="text-indigo-400" />,
  Python: <SiPython size={iconSize} className="text-yellow-400" />,
  Prisma: <SiPrisma size={iconSize} className="text-teal-500" />,
  Django: <SiDjango size={iconSize} className="text-green-600" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  Oracle: <SiOracle size={iconSize} className="text-orange-500" />,
  MongoDb: <SiMongodb size={iconSize} className="text-green-600" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  Supabase: <SiSupabase size={iconSize} className="text-emerald-500" />,
  Docker: <SiDocker size={iconSize} className="text-blue-500" />,
  Npm: <FaNpm size={iconSize} className="text-red-500" />,
  Yarn: <SiYarn size={iconSize} className="text-sky-400" />,
  bun: <SiBun size={iconSize} className="text-yellow-50" />,
  Github: <SiGithub size={iconSize} />,
  // Laravel: <SiLaravel size={iconSize} className="text-red-600" />,
  // "Astro.js": <SiAstro size={iconSize} className="text-pink-500" />,
  // Kotlin: <SiKotlin size={iconSize} className="text-purple-500" />,
  // Jest: <SiJest size={iconSize} className="text-rose-400" />,
};
