import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode, HiX } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
      longDescription:
        "Built with React, Node.js, and MongoDB, this platform includes features like user authentication, product management, shopping cart, order tracking, and payment integration with Stripe. The admin dashboard provides analytics and inventory management tools.",
      image: "https://via.placeholder.com/600x400",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Stripe",
        "Redux",
      ],
      github: "https://github.com/Vinzz-student/Portfolio_Website",
      live: "https://vinzz-student.github.io/Portfolio_Website/",
      featured: true,
    },
    {
      id: 2,
      title: "Font Pairing Recommender",
      description:
        "Alat web interaktif yang membantu anda menemukan kombinasi font yang cocok untuk desain tipografi secara real-time. Cocok buat desainer UI/UX, developer web, atau siapa pun yang ingin menyempurnakan tampilan teks pada website atau proyek visual.",
      longDescription:
        "Font Pairing Recommender adalah tool web interaktif yang dibuat untuk membantu desainer dan pengembang memilih kombinasi font yang harmonis dan estetis dengan cepat dan mudah. Dengan antarmuka yang responsif, pengguna dapat mencoba berbagai pasangan font Google secara instan, melihat bagaimana heading dan body text berpadu, serta menyesuaikan ukuran atau gaya huruf sesuai kebutuhan desain. Tool ini sangat berguna untuk meningkatkan keterbacaan dan tampilan visual konten web, serta memudahkan pemilihan tipografi yang cocok tanpa harus mencoba satu-satu secara manual. Ideal untuk proyek UI/UX, branding, blog, portofolio, atau aplikasi apa pun yang butuh tipografi yang kuat dan profesional.",
      image: "./images/project2.png",
      technologies: [
        "HTML",
        "CSS",
        "Java Script",
        "Tailwind CSS",
        "React",
        "Vite",
      ],
      github: "https://github.com/Vinzz-student/Font-Pairing-Recommender",
      live: "https://vinzz-student.github.io/Font-Pairing-Recommender/",
      featured: true,
    },
    {
      id: 3,
      title: "Password strength Visualizer",
      description:
        "Web tool yang menganalisis dan memvisualisasikan kekuatan password secara real-time saat kamu mengetik, memberi umpan balik langsung untuk bantu meningkatkan keamanan password.",
      longDescription:
        "Password Strength Visualizer adalah aplikasi web yang memvisualisasikan seberapa kuat atau lemahnya sebuah password ketika pengguna mengetik. Tool ini bekerja secara real-time untuk memberikan umpan balik langsung tentang level keamanan password, termasuk indikasi apakah password mudah ditebak atau sulit dipecahkan. Dengan visualisasi yang intuitif, pengguna dapat mengetahui skor kekuatan password, serta mendapatkan ide untuk membuat password yang lebih aman — misalnya dengan menambah karakter panjang, kombinasi huruf besar kecil, angka, dan simbol. Ini sangat bermanfaat untuk edukasi keamanan digital pribadi, terutama untuk orang yang ingin menjaga akun online tetap terlindungi.",
      image: "./images/project3.png",
      technologies: ["Tailwind CSS", "React", "Vite", "Framer Motion"],
      github: "https://github.com/Vinzz-student/Password-Strength-Visualizer",
      live: "https://vinzz-student.github.io/Password-Strength-Visualizer/",
      featured: false,
    },
    {
      id: 4,
      title: "Personal Task Manager",
      description:
        "Alat web untuk mengatur daftar tugas harian dengan mudah. Buat, tandai selesai, dan hapus tugas supaya produktivitas tetap terjaga.",
      longDescription:
        "Personal Task Manager adalah aplikasi web sederhana dan intuitif yang dirancang untuk membantu anda mengelola tugas harian secara efisien. Dengan antarmuka yang bersih dan mudah digunakan, pengguna bisa membuat daftar tugas, menandai tugas yang sudah selesai, dan menghapus tugas yang tidak lagi diperlukan. Aplikasi ini cocok untuk siapa saja yang ingin meningkatkan produktivitas, mengatur prioritas pekerjaan, atau sekadar mencatat ide dan to-do list sehari-hari. Tanpa perlu install, kamu bisa langsung mengakses lewat browser dan mulai mengatur aktivitasmu dengan lebih terstruktur dan terorganisir.",
      image: "./images/project4.png",
      technologies: ["React", "ESLint", "Tailwind CSS", "Vite"],
      github: "https://github.com/Vinzz-student/Personal-Task-manager",
      live: "https://vinzz-student.github.io/Personal-Task-manager/",
      featured: false,
    },
    {
      id: 5,
      title: "Tech Stack Decider",
      description:
        "Aplikasi web interaktif yang membantu developer memilih tech stack yang paling sesuai untuk proyek mereka berdasarkan kebutuhan dan preferensi.",
      longDescription:
        "Tech Stack Decider adalah aplikasi web yang membantu developer menentukan kombinasi teknologi yang tepat berdasarkan jenis proyek dan kebutuhan yang dipilih. Dengan pendekatan interaktif, tool ini memberikan rekomendasi stack secara praktis dan mudah dipahami, sehingga proses pengambilan keputusan jadi lebih cepat, terarah, dan tidak membingungkan — terutama untuk developer pemula..",
      image: "./images/project5.png",
      technologies: ["Java Script", "React", "Vite", "TailwindCSS", "ESLint", "Lucide-React"],
      github: "https://github.com/Vinzz-student/Tech-Stack-Decider",
      live: "https://vinzz-student.github.io/Tech-Stack-Decider/",
      featured: false,
    },
    {
      id: 6,
      title: "VS Code Extension Recommender",
      description:
        "Web tool yang membantu menemukan rekomendasi ekstensi Visual Studio Code sesuai kebutuhan pengembangan.",
      longDescription:
        "VSCode Extension Recommender adalah aplikasi web yang memudahkan developer menemukan ekstensi terbaik untuk Visual Studio Code berdasarkan kebutuhan seperti bahasa pemrograman, fitur coding, atau peningkatan produktivitas. Dengan tampilan sederhana dan rekomendasi yang terstruktur, pengguna tidak perlu mencari ekstensi satu per satu secara manual, sehingga bisa langsung meningkatkan workflow dan kenyamanan saat coding.",
      image: "./images/project6.png",
      technologies: ["React", "ESLint", "Axios", "TailwindCSS", "Vite"],
      github: "https://github.com/Vinzz-student/VSCode-Extension-Recommender",
      live: "https://vinzz-student.github.io/VSCode-Extension-Recommender/",
      featured: false,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"/>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="neon-card cursor-pointer bg-white dark:bg-gray-900 transition-colors duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BsGithub size={24} className="text-gray-900" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <HiExternalLink size={24} className="text-gray-900" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="neon-modal bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-64">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-300"
                  >
                    <HiX size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                    {selectedProject.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <BsGithub size={20} />
                      View Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <HiExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
