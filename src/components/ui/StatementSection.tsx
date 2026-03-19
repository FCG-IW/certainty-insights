import { type ReactNode, useRef, useCallback } from "react";
import { Reveal } from "@/hooks/useScrollReveal";

interface StatementSectionProps {
  label?: string;
  children: ReactNode;
  compact?: boolean;
  backgroundImage?: string;
  backgroundImageOpacity?: number;
  backgroundOverlayOpacity?: number;
  blobOpacityScale?: number;
  minHeight?: string | number;
}

/*
 * Each blob now travels across the entire section via large-range keyframe
 * animations. On mouse move the blobs also subtly shift toward the cursor.
 */

const blobKeyframes = `
@keyframes blob-roam-1 {
  0%   { transform: translate(0vw, 0vh)    scale(1);    }
  20%  { transform: translate(40vw, -10vh) scale(1.15); }
  40%  { transform: translate(-10vw, 15vh) scale(0.9);  }
  60%  { transform: translate(50vw, 5vh)   scale(1.1);  }
  80%  { transform: translate(15vw, -15vh) scale(0.95); }
  100% { transform: translate(0vw, 0vh)    scale(1);    }
}
@keyframes blob-roam-2 {
  0%   { transform: translate(0vw, 0vh)     scale(1.05); }
  25%  { transform: translate(-15vw, 10vh)  scale(0.9);  }
  50%  { transform: translate(35vw, -10vh)  scale(1.15); }
  75%  { transform: translate(-25vw, 15vh)  scale(1);    }
  100% { transform: translate(0vw, 0vh)     scale(1.05); }
}
@keyframes blob-roam-3 {
  0%   { transform: translate(0vw, 0vh)     scale(0.95); }
  20%  { transform: translate(-30vw, -10vh) scale(1.1);  }
  45%  { transform: translate(20vw, 15vh)   scale(1);    }
  70%  { transform: translate(-15vw, -15vh) scale(0.9);  }
  100% { transform: translate(0vw, 0vh)     scale(0.95); }
}
@keyframes blob-roam-4 {
  0%   { transform: translate(0vw, 0vh)     scale(1);    }
  30%  { transform: translate(30vw, 10vh)   scale(1.1);  }
  55%  { transform: translate(-20vw, -15vh) scale(0.85); }
  80%  { transform: translate(45vw, 5vh)    scale(1.05); }
  100% { transform: translate(0vw, 0vh)     scale(1);    }
}
`;

const meshBlobs = [
  { size: 600, blur: 120, opacity: 0.55, top: "-5%",  left: "5%",   anim: "blob-roam-1 50s ease-in-out infinite" },
  { size: 500, blur: 100, opacity: 0.5,  top: "40%",  left: "60%",  anim: "blob-roam-2 58s ease-in-out infinite" },
  { size: 450, blur: 130, opacity: 0.45, top: "10%",  left: "40%",  anim: "blob-roam-3 64s ease-in-out infinite" },
  { size: 400, blur: 110, opacity: 0.5,  top: "50%",  left: "75%",  anim: "blob-roam-4 44s ease-in-out infinite" },
];

export default function StatementSection({
  label,
  children,
  compact = false,
  backgroundImage,
  backgroundImageOpacity = 1,
  backgroundOverlayOpacity = 0,
  blobOpacityScale = 1,
  minHeight,
}: StatementSectionProps) {
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;  // -1 → 1
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    blobsRef.current.forEach((el, i) => {
      if (!el) return;
      const strength = 30 + i * 10; // each blob reacts differently
      el.style.marginLeft = `${mx * strength}px`;
      el.style.marginTop = `${my * strength}px`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    blobsRef.current.forEach((el) => {
      if (!el) return;
      el.style.marginLeft = "0px";
      el.style.marginTop = "0px";
    });
  }, []);

  return (
    <section
      className={
        (compact ? "py-12 md:py-16 " : "py-32 md:py-40 ") +
        "bg-foreground text-background relative overflow-hidden"
      }
      style={{ minHeight }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{blobKeyframes}</style>

      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              opacity: backgroundImageOpacity,
            }}
          />
          {backgroundOverlayOpacity > 0 ? (
            <div
              className="absolute inset-0 bg-foreground"
              style={{ opacity: backgroundOverlayOpacity }}
            />
          ) : null}
        </>
      ) : null}

      {/* Animated Green Mesh Gradient — hover-interactive & roaming */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {meshBlobs.map((b, i) => (
          <div
            key={i}
            ref={(el) => { blobsRef.current[i] = el; }}
            className="absolute rounded-full"
            style={{
              width: b.size,
              height: b.size,
              filter: `blur(${b.blur}px)`,
              opacity: b.opacity * blobOpacityScale,
              background: "radial-gradient(circle, hsl(150 46% 51%) 0%, transparent 70%)",
              top: b.top,
              left: b.left,
              animation: b.anim,
              transition: "margin 0.6s ease-out",
              willChange: "transform, margin",
            }}
          />
        ))}
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-12">
          {label ? (
            <div className="lg:col-span-2">
              <Reveal>
                <span className="text-sm tracking-[0.2em] uppercase text-primary font-bold">
                  {label}
                </span>
              </Reveal>
            </div>
          ) : null}
          <div className={label ? "lg:col-span-10" : "lg:col-span-12 text-center"}>
            <Reveal delay={100}>
              <div
                className={"space-y-6 statement-body" + (label ? "" : " mx-auto")}
                style={{ fontSize: "32px", lineHeight: 1.45 }}
              >
                {children}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
