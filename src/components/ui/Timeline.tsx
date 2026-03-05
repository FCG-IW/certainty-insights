import { Reveal } from "@/hooks/useScrollReveal";

type Step = {
  number: string;
  title: string;
  description: string;
};

const ITEM_GAP = 120; // px between each timeline item

export default function Timeline({ steps }: { steps: Step[] }) {
  return (
    <div className="flex justify-center">
      <div className="relative flex" style={{ gap: 56 }}>
        {/* Vertical line */}
        <div className="relative shrink-0" style={{ width: 14 }}>
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-primary/20" />
          {/* Markers positioned to align with each item */}
          {steps.map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary"
              style={{
                width: 14,
                height: 14,
                left: 0,
                top: i * (ITEM_GAP + 180) + 20, // offset to align with step number
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div style={{ marginBottom: i < steps.length - 1 ? ITEM_GAP : 0 }}>
                <span className="block text-6xl md:text-7xl font-bold text-primary/20 leading-none">
                  {s.number}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mt-4 text-foreground">
                  {s.title}
                </h3>
                <p className="text-muted-foreground mt-3 max-w-md leading-relaxed">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
