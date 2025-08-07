import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageCircle,
  Download,
  Send,
  User,
  FileText,
  MapPin,
  AlertCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Message envoyé avec succès !');
  };

  const downloadPdf = async () => {
    setIsDownloading(true);
    setError(null);

    try {
      // Chemin vers le fichier dans le dossier assets
      const pdfPath = `/cv.pdf`;

      // Créer une requête pour récupérer le fichier
      const response = await fetch(pdfPath);

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: Fichier non trouvé`);
      }

      // Convertir la réponse en blob
      const blob = await response.blob();

      // Vérifier que c'est bien un PDF
      if (blob.type !== 'application/pdf' && !"cv.pdf".toLowerCase().endsWith('.pdf')) {
        throw new Error('Le fichier n\'est pas un PDF valide');
      }

      // Créer un URL temporaire pour le blob
      const url = window.URL.createObjectURL(blob);

      // Créer un élément <a> temporaire pour déclencher le téléchargement
      const link = document.createElement('a');
      link.href = url;
      link.download = "cv.pdf";
      link.style.display = 'none';

      // Ajouter le lien au DOM, cliquer dessus, puis le supprimer
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Nettoyer l'URL temporaire
      window.URL.revokeObjectURL(url);

    } catch (err) {
      console.error('Erreur lors du téléchargement:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Téléphone',
      value: '+221 77 755 09 80',
      action: 'tel:+221777550980',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'mouhamethtaifs1@gmail.com',
      action: 'mailto:mouhamethtaifs1@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      value: 'Chat direct',
      action: 'https://wa.me/221777550980',
      color: 'from-green-400 to-green-600'
    }
  ];

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
            Contactez-moi
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Prêt à transformer vos idées en solutions digitales innovantes ?
            Discutons de votre projet !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Plusieurs façons de me contacter
              </h3>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span>Basé au Sénégal, disponible en remote</span>
              </div>
            </div>

            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.div
                  className={`p-4 rounded-xl bg-gradient-to-r ${method.color} text-white`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {method.icon}
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-800 dark:text-white text-lg">
                    {method.label}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {method.value}
                  </p>
                </div>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Send className="w-5 h-5 text-cyan-500" />
                </motion.div>
              </motion.a>
            ))}
            <motion.div
              onClick={downloadPdf}
              className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <motion.div
                className={`p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Download className="w-6 h-6" />
              </motion.div>
              <div className="flex-1">

                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Téléchargement...
                  </>
                ) : (
                  <>
                    <h4 className="font-semibold text-slate-800 dark:text-white text-lg">
                      Télécharger CV
                    </h4>
                  </>
                )}
                <p className="text-slate-600 dark:text-slate-300">
                  CV cv.pdf
                </p>
              </div>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Send className="w-5 h-5 text-cyan-500" />
              </motion.div>
            </motion.div>
            {error && (
              <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <User className="w-4 h-4" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-slate-800 dark:text-white"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-slate-800 dark:text-white"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <FileText className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-slate-800 dark:text-white resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;