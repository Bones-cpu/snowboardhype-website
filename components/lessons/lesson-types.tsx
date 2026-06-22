import { Snowflake, User, Users, Baby, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const lessons = [
  {
    icon: Snowflake,
    title: "Beginner Lessons",
    description:
      "Your first day on snow made easy — balance, stopping and your very first linked turns in a calm, supportive setting.",
    durations: ["Half day (2 hrs)", "Full day (4 hrs)"],
  },
  {
    icon: User,
    title: "Private Coaching",
    description:
      "One-to-one attention focused entirely on you, with fast feedback to break bad habits and accelerate progress.",
    durations: ["1 hr session", "2 hr session"],
  },
  {
    icon: Users,
    title: "Group Lessons",
    description:
      "Learn alongside friends or fellow beginners. Shared encouragement, plenty of laughs and great value coaching.",
    durations: ["2 hr session", "Multi-day blocks"],
  },
  {
    icon: Baby,
    title: "Kids & Family Lessons",
    description:
      "Playful, patient sessions for children and families, building confidence on the snow with safety at the heart.",
    durations: ["1 hr kids", "2 hr family"],
  },
]

export function LessonTypes() {
  return (
    <section id="lessons" className="bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Lesson types
          </span>
          <h2 className="max-w-2xl font-heading text-3xl font-black leading-tight tracking-tight text-balance sm:text-4xl">
            Find the Lesson That Fits You
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <lesson.icon className="size-5" />
              </span>
              <h3 className="font-heading text-lg font-bold">{lesson.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {lesson.description}
              </p>
              <ul className="flex flex-col gap-1.5">
                {lesson.durations.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                  >
                    <Snowflake className="size-3.5 text-primary" />
                    {d}
                  </li>
                ))}
              </ul>
              <Button
                render={<a href="#booking" />}
                nativeButton={false}
                variant="outline"
                className="mt-auto rounded-full font-semibold"
              >
                Enquire Now
                <ArrowRight className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
