import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  MessageCircle, 
  Mail,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/Mouhameth',
      color: 'hover:text-slate-800 dark:hover:text-white'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/serigne-mback%C3%A9-diakhat%C3%A9-9a423921a/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      href: 'https://wa.me/221777550980',
      color: 'hover:text-green-600'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:mouhamethtaifs1@gmail.com',
      color: 'hover:text-cyan-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Serigne Mbacké Diakhaté
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Développeur passionné créant des solutions digitales innovantes. 
              De l'idée à la production, je transforme vos projets en réalité.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <span>Développé avec</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>en React, TailwindCSS et TypeScript</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'Technologies', 'Projets', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2">
              <p className="text-slate-400">Dakar, Sénégal</p>
              <p className="text-slate-400">+221 77 755 09 80</p>
              <p className="text-slate-400">mouhamethtaifs1@gmail.com</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800"
        >
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 SMD. Tous droits réservés.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;