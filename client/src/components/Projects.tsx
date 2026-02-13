import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/resume";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { CodeBackground } from "./CodeBackground";

export function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split("-")[0] as "pt" | "en" | "es";

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', skipSnaps: false });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="relative isolate py-20 overflow-hidden">
      <CodeBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-20 text-center">{t("projects.title")}</h2>

        <div className="max-w-6xl mx-auto relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {projects.map((project, index) => (
                <div key={project.id} className="pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col hover:shadow-lg transition-all group border-muted bg-card/50 backdrop-blur-sm border-2">
                      <div className="h-48 bg-muted w-full relative overflow-hidden rounded-t-lg">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />

                        {project.image ? (
                          <img
                            src={`/thumb/${project.image}`}
                            alt={`Thumbnail do projeto ${project.title[lang]}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-muted-foreground">
                            <span className="text-4xl opacity-20 font-heading font-bold">RB</span>
                          </div>
                        )}
                      </div>

                      <CardHeader>
                        <CardTitle className="text-2xl font-black font-heading uppercase tracking-tight">
                          {project.title[lang]}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="flex-grow space-y-4">
                        <p className="text-muted-foreground font-medium leading-relaxed">
                          {project.description[lang] || project.description.pt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-primary/10 text-primary font-bold border-none"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="pt-4 border-t gap-2">
                        {project.github && (
                          <Button variant="outline" size="sm" className="w-full font-bold border-2" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}

                        {project.demo && (
                          <Button size="sm" className="w-full font-bold" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollPrev} 
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 rounded-full w-14 h-14 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-2xl"
          >
            <ChevronLeft className="w-8 h-8 text-primary" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollNext} 
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 rounded-full w-14 h-14 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-2xl"
          >
            <ChevronRight className="w-8 h-8 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
}
