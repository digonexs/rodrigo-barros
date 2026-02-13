import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiX } from "react-icons/si";
import { CodeBackground } from "./CodeBackground";

export function Hero() {
  const { t, i18n } = useTranslation();

  const handleDownloadResume = () => {
    const lang = i18n.language.split('-')[0];
    const filename = `resume-${lang}.pdf`;
    const link = document.createElement('a');
    link.href = `/assets/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
<section className="relative isolate min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden">
      <CodeBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
              {t("hero.role")}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[0.9] tracking-tighter text-foreground uppercase">
              Rodrigo <br />
              <span className="text-primary">de Barros</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
              {t("hero.description")}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={handleDownloadResume} size="lg" className="rounded-full px-10 h-14 text-base font-bold shadow-2xl hover:scale-105 transition-all">
                <Download className="mr-2 h-5 w-5" />
                {t("nav.resume")}
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-base font-bold hover:bg-primary/5 transition-all" asChild>
                <a href="#contact">
                  {t("hero.cta_contact")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-10 text-muted-foreground/60">
              <a href="https://github.com/digonexs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/in/rodrigocavalcantedebarros/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="mailto:rodrigocavalcantedebarros@hotmail.com" className="hover:text-primary transition-colors">
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[450px] mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/10 scale-125 animate-[spin_30s_linear_infinite_reverse]" />
              
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-background shadow-[0_0_50px_rgba(var(--primary),0.2)] relative z-10">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Rodrigo de Barros" 
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-card p-5 rounded-2xl shadow-2xl border flex items-center gap-4 z-20"
              >
                <div className="h-4 w-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Status</p>
                  <p className="text-lg font-black font-heading uppercase">Online</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
