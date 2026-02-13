import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { experience, education, certifications } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, GraduationCap, Award, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { Button } from "@/components/ui/button";

export function Experience() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split("-")[0] as "pt" | "en" | "es";

  const [eduRef, eduApi] = useEmblaCarousel({ align: 'start', skipSnaps: false });
  const [certRef, certApi] = useEmblaCarousel({ align: 'start', skipSnaps: false });

  const scrollPrevEdu = useCallback(() => eduApi && eduApi.scrollPrev(), [eduApi]);
  const scrollNextEdu = useCallback(() => eduApi && eduApi.scrollNext(), [eduApi]);
  const scrollPrevCert = useCallback(() => certApi && certApi.scrollPrev(), [certApi]);
  const scrollNextCert = useCallback(() => certApi && certApi.scrollNext(), [certApi]);

  return (
    <section id="experience" className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-20 text-center">{t("experience.title")}</h2>

        <div className="space-y-16 max-w-6xl mx-auto">
          {/* ... (keep experience timeline as is) ... */}
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2" />
              
              <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`hidden lg:flex w-full lg:w-1/2 items-center ${index % 2 === 0 ? "justify-start pl-12" : "justify-end pr-12"}`}>
                  <div className="text-2xl font-black font-heading text-primary opacity-50">
                    {exp.period[lang] || exp.period.pt}
                  </div>
                </div>

                <div className="hidden lg:block absolute left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(var(--primary),0.3)]" />

                <div className="w-full lg:w-1/2">
                  <Card className="hover:border-primary/50 transition-all border-2 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="lg:hidden mb-4">
                         <Badge className="bg-primary text-primary-foreground font-bold tracking-widest text-[10px] px-3 py-1">
                          {exp.period[lang] || exp.period.pt}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-black font-heading uppercase tracking-tight">{exp.role[lang] || exp.role.pt}</CardTitle>
                      <div className="flex items-center text-primary font-bold text-lg mt-2">
                        <Building className="w-5 h-5 mr-3" />
                        {exp.company[lang]}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {(exp.description[lang] || exp.description.pt).map((item, i) => (
                          <li key={i} className="flex gap-4 text-muted-foreground font-medium leading-relaxed">
                            <span className="text-primary mt-1.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 max-w-6xl mx-auto space-y-24">
          {/* Formação (Education) */}
          <div className="space-y-8 relative group">
            <div className="flex items-center justify-between border-b-4 border-primary pb-4">
              <h3 className="text-3xl font-heading font-black uppercase tracking-tighter flex items-center">
                <GraduationCap className="mr-4 w-10 h-10 text-primary" />
                {t("experience.education_title")}
              </h3>
            </div>
            
            <div className="relative">
              <div className="overflow-hidden" ref={eduRef}>
                <div className="flex gap-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                      <Card className="h-full border-2 hover:border-primary/30 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-xl font-bold font-heading uppercase min-h-[3rem] line-clamp-2">{edu.degree[lang] || edu.degree.pt}</CardTitle>
                          <p className="text-lg font-bold text-primary/80 truncate">{edu.institution}</p>
                          <p className="text-sm font-bold text-muted-foreground mt-2 flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.period}
                          </p>
                        </CardHeader>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Liquid Glass Style */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={scrollPrevEdu} 
                className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 rounded-full w-14 h-14 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-2xl"
              >
                <ChevronLeft className="w-8 h-8 text-primary" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={scrollNextEdu} 
                className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 rounded-full w-14 h-14 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-2xl"
              >
                <ChevronRight className="w-8 h-8 text-primary" />
              </Button>
            </div>
          </div>

          {/* Certificações (Certifications) */}
          <div className="space-y-8 relative group">
            <div className="flex items-center justify-between border-b-4 border-primary pb-4">
              <h3 className="text-3xl font-heading font-black uppercase tracking-tighter flex items-center">
                <Award className="mr-4 w-10 h-10 text-primary" />
                {t("experience.certifications_title")}
              </h3>
            </div>

            <div className="relative">
              <div className="overflow-hidden" ref={certRef}>
                <div className="flex gap-6">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                      <Card className="h-full border-2 hover:border-primary/30 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-xl font-bold font-heading uppercase min-h-[3rem] line-clamp-2">{cert.title[lang] || cert.title.pt}</CardTitle>
                          <p className="text-lg font-bold text-primary/80 truncate">{cert.issuer}</p>
                          <p className="text-sm font-bold text-muted-foreground mt-2 flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {cert.date}
                          </p>
                        </CardHeader>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Liquid Glass Style */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={scrollPrevCert} 
                className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 rounded-full w-14 h-14 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-2xl"
              >
                <ChevronLeft className="w-8 h-8 text-primary" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={scrollNextCert} 
                className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 rounded-full w-14 h-14 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-2xl"
              >
                <ChevronRight className="w-8 h-8 text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { FaJava } from "react-icons/fa";
