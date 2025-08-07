import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Monitor, 
  BarChart3, 
  Brain, 
  ExternalLink, 
  Github,
  Globe,
  Database
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Grow academy',
      description: 'Plateforme e-learning complète permettant aux apprenantes de faire leurs cours en offline.',
      icon: <Smartphone className="w-8 h-8" />,
      category: 'Mobile',
      technologies: ['Flutter', 'Fqlite'],
      image: 'https://media.licdn.com/dms/image/v2/C4D1BAQFaKlRE7j7P-A/company-background_10000/company-background_10000/0/1641103343043/growacademysenegal_cover?e=2147483647&v=beta&t=asJi732-PbY9iQC-VXLw4lumvfXTiknUR-2rv0fOtbQ',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: "Mise en place d'une solution BI",
      description: 'Dans ce projet, on a mis en place une solution de Business Intelligence (BI) pour une entreprise qui vend des vélos',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Data',
      technologies: ['SSIS', 'SSAS', 'SQL SERVER', 'SQL', 'Power BI'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: "Gestion de file d'attente",
      description: "Solution de gestion de file d'attente innovante adoptée par 80% des agences bancaires au Sénégal.",
      icon: <Monitor className="w-8 h-8" />,
      category: 'Cloud',
      technologies: ['React', 'Nextjs', 'Tailwind', 'Nodejs', 'Flutter', 'Php', 'PostgreSQL'],
      image: 'https://www.sedco.co/_next/image?url=https%3A%2F%2Fdashboard.sedco.co%2Fuploads%2FQueue_Management_System_Hero_Banner_93dd9940e9.jpg&w=3840&q=75',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 4,
      title: "Gfa Cbao",
      description: "Solution de gestion de file d'attente innovante, un marché du groupe Attijariwafa Bank.",
      icon: <Monitor className="w-8 h-8" />,
      category: 'Cloud',
      technologies: ['React', 'Nextjs', 'Tailwind', 'Nodejs', 'Flutter', 'Php', 'PostgreSQL'],
      image: 'https://axlesys.com/wp-content/uploads/2023/10/b3-1.jpg',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 5,
      title: '3aids',
      description: "un système complet pour l'Amicale des Agents des Impôts et Domaines, gérant efficacement membres, activités et finances",
      icon: <Monitor className="w-8 h-8" />,
      category: 'Mobile',
      technologies: ['React', 'Nextjs', 'Tailwind', 'Nodejs', 'Flutter', 'PostgreSQL'],
      image: 'https://senego.com/wp-content/uploads/2023/09/Progression-notable-de-la-mobilisation-des-ressources-budgetaires-selon-la-Dpee_thumbnail.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 6,
      title: 'Un classifieur de projets',
      description: 'Nous avons développé une application web capable de recevoir des projets, de les classer automatiquement dans différentes catégories à l’aide de techniques de traitement automatique du langage naturel (NLP)',
      icon: <Brain className="w-8 h-8" />,
      category: 'IA',
      technologies: ['React', 'Python', 'FastApi', 'Postgres', 'Ts', 'Scikit learn', 'NLP'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 7,
      title: 'Wishlist',
      description: 'Application mobile facilitant les commandes sur des plateformes comme Amazon, Alibaba, etc.',
      icon: <Smartphone className="w-8 h-8" />,
      category: 'Data',
      technologies: ['Flutter', 'Firebase', 'React', 'Nodejs', 'Nextjs', 'Tailwind'],
      image: 'https://www.nsthemes.com/wp-content/uploads/2019/10/buying-wishlist.jpg',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 8,
      title: 'Felis',
      description: 'Application de gestion des feedbacks client pour les entreprises. Elle est utilisée dans plusieurs agences et structures.',
      icon: <Globe className="w-8 h-8" />,
      category: 'Web',
      technologies: ['Flutter', 'Firebase', 'React', 'Nodejs', 'Nextjs', 'Tailwind'],
      image: 'https://www.quicktapsurvey.com/images/photos/social-media-quicktapsurvey.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 9,
      title: "koli",
      description: ": Une application pour la livraison en temps réel. Elle est simple conviviale et intuitive ",
      icon: <Monitor className="w-8 h-8" />,
      category: 'Mobile',
      technologies: ['React', 'Nextjs', 'Tailwind', 'Nodejs', 'Flutter', 'Socket.io', 'PostgreSQL'],
      image: 'https://www.sedco.co/_next/image?url=https%3A%2F%2Fdashboard.sedco.co%2Fuploads%2FQueue_Management_System_Hero_Banner_93dd9940e9.jpg&w=3840&q=75',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 10,
      title: "Kolix",
      description: "L'application du livreur de Koli. Elle permet de recevoir les demandes de livraison en temps réel. Elle est simple conviviale et intuitive ",
      icon: <Monitor className="w-8 h-8" />,
      category: 'Mobile',
      technologies: ['Flutter', 'Socket.io'],
      image: 'https://axlesys.com/wp-content/uploads/2023/10/b3-1.jpg',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 11,
      title: 'Lost&Found',
      description: ": une app innovante intégrant de l'IA pour déclarer et retrouver des objets perdus.",
      icon: <Monitor className="w-8 h-8" />,
      category: 'Mobile',
      technologies: ['React', 'Nextjs', 'Tailwind', 'Nodejs', 'Flutter', 'PostgreSQL'],
      image: 'data:image/jpeg;base64,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',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Réalisations & Projets
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Découvrez une sélection de projets qui démontrent mon expertise technique 
            et ma capacité à créer des solutions innovantes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="h-full bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-600 transition-all duration-300 group-hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <motion.div
                    className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.color} text-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.icon}
                  </motion.div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center justify-center gap-2 py-2 px-4 border-2 border-slate-300 dark:border-slate-500 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous les projets
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;