import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-4">{t("about.title")}</h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
          </div>

          <div className="bg-card p-10 md:p-16 rounded-3xl shadow-2xl border border-border/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-3xl leading-relaxed text-foreground font-medium italic mb-12">
                "{t("about.description")}"
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t">
                <div className="space-y-2">
                  <span className="block text-4xl font-black text-primary font-heading">3+</span>
                  <span className="text-sm uppercase tracking-widest font-bold text-muted-foreground">{t("about.stats.years")}</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-4xl font-black text-primary font-heading">200+</span>
                  <span className="text-sm uppercase tracking-widest font-bold text-muted-foreground">{t("about.stats.features")}</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-4xl font-black text-primary font-heading">AZ-900</span>
                  <span className="text-sm uppercase tracking-widest font-bold text-muted-foreground">{t("about.stats.certified")}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
