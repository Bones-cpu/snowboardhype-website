const items = [
  "Heelside",
  "Toeside",
  "Falling Leaf",
  "Ollie",
  "Powder",
  "Carving",
  "Goofy or Regular",
  "Linking Turns",
  "Bunny Slope",
  "Send It",
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-foreground py-4 text-background">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-8">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-heading text-xl font-bold uppercase tracking-wide">
              {item}
            </span>
            <span className="text-primary">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
