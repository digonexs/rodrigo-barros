import { useTranslation } from "react-i18next";
import { Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/digonexs" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/rodrigocavalcantedebarros/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
        
        <div className="text-center md:text-right text-sm text-muted-foreground">
          <p>&copy; {year} Rodrigo Cavalcante de Barros. {t("footer.rights")}</p>
          <p>
            {t("footer.developed_by")}{" "}
            <a href="https://www.linkedin.com/in/rodrigocavalcantedebarros/" className="text-primary font-medium hover:underline">
              Rodrigo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
