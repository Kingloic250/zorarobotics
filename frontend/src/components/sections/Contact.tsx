import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ContactSection = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', sector: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const content = {
    en: {
      badge: 'Contact // 07',
      title1: 'START YOUR',
      title2: 'ROBOTICS PROJECT',
      description: 'Whether you are looking to automate a single facility or deploy a robotics ecosystem across Africa, our team is ready to help.',
      emailLabel: 'Email Us',
      email: 'zorarobotics@gmail.com',
      phoneLabel: 'Call Us',
      phone: '+250 788 303 027',
      addressLabel: 'Visit Our Lab',
      address: 'KG 8 Avenue, 31 Kigali, Rwanda',
      website: 'zorabotsafrica.rw',
      formName: 'Full Name',
      formEmail: 'Work Email',
      formOrg: 'Organization',
      formSector: 'Sector of Interest',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      sending: 'Sending...',
      successMsg: 'Thank you! We will get back to you shortly.',
      errorMsg: 'Something went wrong. Please try again or email us directly.',
      sectors: ['Education', 'Healthcare', 'Industry & Mining', 'Retail & Hospitality', 'Security', 'Other'],
    },
    fr: {
      badge: 'Contact // 07',
      title1: 'LANCEZ VOTRE',
      title2: 'PROJET DE ROBOTIQUE',
      description: 'Que vous souhaitiez automatiser un seul site ou déployer un écosystème robotique en Afrique, notre équipe est prête à vous aider.',
      emailLabel: 'Envoyez-nous un Email',
      email: 'Zorarobotics@gmail.com',
      phoneLabel: 'Appelez-Nous',
      phone: '+250 788 303 027',
      addressLabel: 'Visitez Notre Labo',
      address: 'KG 8 Avenue, 31 Kigali, Rwanda',
      formName: 'Nom Complet',
      formEmail: 'Email Professionnel',
      formOrg: 'Organisation',
      formSector: "Secteur d'Intérêt",
      formMessage: 'Message',
      formSubmit: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      successMsg: 'Merci ! Nous vous répondrons bientôt.',
      errorMsg: 'Une erreur est survenue. Veuillez réessayer ou nous écrire directement.',
      sectors: ['Éducation', 'Santé', 'Industrie & Mines', 'Commerce & Hôtellerie', 'Sécurité', 'Autre'],
    },
  };

  const c = content[language];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', sector: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
              {c.badge}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight italic">
              {c.title1} <br />
              <span className="text-gradient uppercase tracking-tighter">{c.title2}</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-12 leading-relaxed max-w-md">
              {c.description}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyan group-hover:text-cyan transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{c.emailLabel}</p>
                  <a href="mailto:Zorarobotics@gmail.com" className="text-lg font-medium text-white hover:text-cyan transition-colors">{c.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyan group-hover:text-cyan transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{c.phoneLabel}</p>
                  <a href="tel:+250788303027" className="text-lg font-medium text-white hover:text-cyan transition-colors">{c.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyan group-hover:text-cyan transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{c.addressLabel}</p>
                  <p className="text-lg font-medium text-white">{c.address}</p>
                </div>
              </div>

              
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: Linkedin, url: 'https://rw.linkedin.com/company/zorabots-africa' },
                { icon: Twitter, url: 'https://x.com/zorabots' },
                { icon: Facebook, url: 'https://www.facebook.com/WeAreZoraBots/' },
                { icon: Instagram, url: 'https://www.instagram.com/zorabots_africa/' },
                { icon: Youtube, url: 'https://www.youtube.com/channel/UC6FWjluEyNztGFmWrlEzQcw' },
              ].map((item, i) => (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-cyan hover:text-cyan transition-all">
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 glass-panel shadow-2xl relative rounded-sm border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-cyan font-bold ml-1">{c.formName}</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder={language === 'en' ? 'Your Name' : 'Votre Nom'}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/50 focus:bg-white/[0.08] transition-all font-mono text-xs"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-cyan font-bold ml-1">{c.formEmail}</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder={language === 'en' ? 'your@email.com' : 'votre@email.com'}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/50 focus:bg-white/[0.08] transition-all font-mono text-xs"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-cyan font-bold ml-1">{c.formOrg}</label>
                <input
                  type="text" name="organization" value={formData.organization} onChange={handleChange}
                  placeholder={language === 'en' ? 'Your Organization' : 'Votre Organisation'}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/50 focus:bg-white/[0.08] transition-all font-mono text-xs"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-cyan font-bold ml-1">{c.formSector}</label>
                <select name="sector" value={formData.sector} onChange={handleChange} className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer font-mono text-xs">
                  <option value="" className="bg-deep-bg">--</option>
                  {c.sectors.map((sector) => (
                    <option key={sector} value={sector} className="bg-deep-bg">{sector}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-cyan font-bold ml-1">{c.formMessage}</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required rows={4}
                  placeholder={language === 'en' ? 'Tell us about your project...' : 'Parlez-nous de votre projet...'}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan/50 focus:bg-white/[0.08] transition-all resize-none font-mono text-xs"
                />
              </div>

              {status === 'success' && (
                <p className="text-green-400 text-xs font-mono uppercase tracking-widest">{c.successMsg}</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-xs font-mono uppercase tracking-widest">{c.errorMsg}</p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full uppercase font-bold tracking-widest text-xs font-mono"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? c.sending : c.formSubmit}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
