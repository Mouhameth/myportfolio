import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Brain, 
  Server,
  Globe,
  GitBranch,
  Zap,
  Layers,
  Terminal,
  Palette
} from 'lucide-react';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', icon: <Code className="w-5 h-5" /> },
        { name: 'Next.js', icon: <Layers className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <Terminal className="w-5 h-5" /> },
        { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', icon: <Zap className="w-5 h-5" /> },
        { name: 'Express', icon: <Server className="w-5 h-5" /> },
        { name: 'Java Spring', icon: <Code className="w-5 h-5" /> },
        { name: 'C# .NET', icon: <Terminal className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'Flutter', icon: <Smartphone className="w-5 h-5" /> },
        { name: 'Android', icon: <Code className="w-5 h-5" /> },
        { name: 'React Native', icon: <Layers className="w-5 h-5" /> },
        { name: 'Ionic', icon: <Zap className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Data & BI',
      icon: <Database className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'Power BI', icon: <Database className="w-5 h-5" /> },
        { name: 'SSIS', icon: <Layers className="w-5 h-5" /> },
        { name: 'Databricks', icon: <Brain className="w-5 h-5" /> },
        { name: 'Python', icon: <Terminal className="w-5 h-5" /> }
      ]
    },
    {
      title: 'IA/ML',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'TensorFlow', icon: <Brain className="w-5 h-5" /> },
        { name: 'PyTorch', icon: <Zap className="w-5 h-5" /> },
        { name: 'OpenAI', icon: <Terminal className="w-5 h-5" /> },
        { name: 'Scikit-learn', icon: <Code className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-teal-500 to-blue-500',
      technologies: [
        { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
        { name: 'Google Cloud', icon: <Layers className="w-5 h-5" /> },
        { name: 'Docker', icon: <GitBranch className="w-5 h-5" /> },
        { name: 'Kubernetes', icon: <Server className="w-5 h-5" /> }
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Technologies Maîtrisées
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Un écosystème technologique complet pour répondre à tous vos besoins de développement, 
            de la conception à la mise en production.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(6, 182, 212, 0.1)'
                      }}
                    >
                      <span className="text-slate-600 dark:text-slate-300">
                        {tech.icon}
                      </span>
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;