import React, { useMemo } from "react";

/**
 * Você pode trocar/editar os snippets aqui.
 * O componente vai quebrar em LINHAS e usar como "texto repetido" no fundo.
 */
const javaCodeSnippets = [
  `public class BackendService {
  public void execute() {
    System.out.println("Processing...");
  }
}`,
  `@RestController
@RequestMapping("/api")
public class Controller {
  @GetMapping
  public Response get() {
    return service.find();
  }
}`,
  `public interface Repository extends JpaRepository<User, Long> {
  Optional<User> findByEmail(String email);
}`,
  `public class SecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) {
    http.authorizeRequests().anyRequest().authenticated();
  }
}`,
  `public class DatabaseConnector {
  private final DataSource dataSource;
  public Connection connect() throws SQLException {
    return dataSource.getConnection();
  }
}`,
  `public abstract class AbstractProcess {
  protected abstract void stepOne();
  public final void run() {
    stepOne();
  }
}`,
  `public final class Singleton {
  private static final Singleton INSTANCE = new Singleton();
  private Singleton() {}
  public static Singleton getInstance() {
    return INSTANCE;
  }
}`,
  `public enum Status {
  PENDING, PROCESSING, COMPLETED, FAILED;
}`,
  `public record UserProfile(String name, String email, LocalDate birthDate) {}`,
  `public class MicroserviceApplication {
  public static void main(String[] args) {
    SpringApplication.run(MicroserviceApplication.class, args);
  }
}`,
];

/**
 * Linha única repetida horizontalmente (efeito pattern).
 */
function CodeLine({
  text,
  reverse = false,
  animate = true,
}: {
  text: string;
  reverse?: boolean;
  animate?: boolean;
}) {
  return (
    <div className="whitespace-nowrap overflow-hidden">
      <div
        className={[
          "inline-flex items-center",
          animate ? (reverse ? "animate-code-scroll-reverse" : "animate-code-scroll") : "",
        ].join(" ")}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="mr-24">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export const CodeBackground = ({ animate = true }: { animate?: boolean }) => {
  const codeLines = useMemo(() => {
    const lines = javaCodeSnippets.flatMap((snippet) =>
      snippet
        .replace(/[{}]/g, "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
    );

    const filtered = lines.filter((l) => l.length >= 10);

    return filtered.length ? filtered : lines;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-[0.10]"
      style={{
        WebkitMaskImage:
          "radial-gradient(900px 550px at 50% 40%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
        maskImage:
          "radial-gradient(900px 550px at 50% 40%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div className="flex flex-col gap-10 pt-28 px-8 md:px-16">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="
              font-mono font-black uppercase tracking-tighter
              text-foreground/35
              text-[3rem] md:text-[4.5rem] xl:text-[6rem]
              leading-[0.9]
            "
          >
            <CodeLine
              text={codeLines[i % codeLines.length]}
              reverse={i % 2 === 0}
              animate={animate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};