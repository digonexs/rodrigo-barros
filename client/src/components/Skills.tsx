import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skills } from "@/data/resume";
import { Card } from "@/components/ui/card";
import { CodeBackground } from "./CodeBackground";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative isolate py-24 overflow-hidden">
      <CodeBackground opacityClassName="opacity-[0.35]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-4">{t("skills.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t("skills.subtitle")}</p>
        </div>

        <TooltipProvider delayDuration={100}>
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11 gap-6 justify-center"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card className="aspect-square flex items-center justify-center p-6 border-2 border-muted hover:border-primary hover:bg-primary/5 hover:-translate-y-2 transition-all duration-300 cursor-default group relative overflow-hidden shadow-sm hover:shadow-xl">
                        <skill.icon className="w-12 h-12 md:w-14 md:h-14 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[10px] py-1 px-3">
                      {skill.name}
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
