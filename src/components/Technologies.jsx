import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiSpringboot,
  SiBootstrap,
  SiApachekafka,
  SiHibernate,
  SiDocker,
  SiJenkins,
  SiGit,
  SiKubernetes,
  SiElasticsearch,
  SiGrafana,
  SiTerraform,
  SiSap,
  SiApachetomcat,
  SiMysql,
} from "react-icons/si";
import { FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="mt-2 text-lg font-semibold">React</span>
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
          <span className="mt-2 text-lg font-semibold">Next.js</span>
        </motion.div>

        {/* Javascript */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-300" />
          <span className="mt-2 text-lg font-semibold">Javascript</span>
        </motion.div>

        {/* Typescript */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-600" />
          <span className="mt-2 text-lg font-semibold">Typescript</span>
        </motion.div>

        {/* Bootstrap */}
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-purple-500" />
          <span className="mt-2 text-lg font-semibold">Bootstrap</span>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <span className="mt-2 text-lg font-semibold">Node.js</span>
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-yellow-500" />
          <span className="mt-2 text-lg font-semibold">Python</span>
        </motion.div>

        {/* Redis */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-red-700" />
          <span className="mt-2 text-lg font-semibold">Redis</span>
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-orange-600" />
          <span className="mt-2 text-lg font-semibold">MySQL</span>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
          <span className="mt-2 text-lg font-semibold">PostgreSQL</span>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-400" />
          <span className="mt-2 text-lg font-semibold">MongoDB</span>
        </motion.div>

        {/* JAVA */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-orange-600" />
          <span className="mt-2 text-lg font-semibold">Java</span>
        </motion.div>

        {/* Spring Boot */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-500" />
          <span className="mt-2 text-lg font-semibold">Spring Boot</span>
        </motion.div>

        {/* Hibernate */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHibernate className="text-7xl text-gray-600" />
          <span className="mt-2 text-lg font-semibold">Hibernate</span>
        </motion.div>

        {/* Tomcat */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiApachetomcat className="text-7xl text-yellow-500" />
          <span className="mt-2 text-lg font-semibold">Tomcat</span>
        </motion.div>

        {/* Kafka */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiApachekafka className="text-7xl text-black" />
          <span className="mt-2 text-lg font-semibold">Kafka</span>
        </motion.div>

        {/* Git */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGit className="text-7xl text-red-500" />
          <span className="mt-2 text-lg font-semibold">Git</span>
        </motion.div>

        {/* Jenkins */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJenkins className="text-7xl text-red-600" />
          <span className="mt-2 text-lg font-semibold">Jenkins</span>
        </motion.div>

        {/* Kubernetes */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiKubernetes className="text-7xl text-blue-500" />
          <span className="mt-2 text-lg font-semibold">Kubernetes</span>
        </motion.div>

        {/* Docker */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDocker className="text-7xl text-blue-600" />
          <span className="mt-2 text-lg font-semibold">Docker</span>
        </motion.div>

        {/* Terraform */}
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTerraform className="text-7xl text-purple-500" />
          <span className="mt-2 text-lg font-semibold">Terraform</span>
        </motion.div>

        {/* ELK */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiElasticsearch className="text-7xl text-orange-500" />
          <span className="mt-2 text-lg font-semibold">ELK</span>
        </motion.div>

        {/* Grafana */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGrafana className="text-7xl text-orange-600" />
          <span className="mt-2 text-lg font-semibold">Grafana</span>
        </motion.div>

        {/* SAP */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSap className="text-7xl text-blue-600" />
          <span className="mt-2 text-lg font-semibold">SAP</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
