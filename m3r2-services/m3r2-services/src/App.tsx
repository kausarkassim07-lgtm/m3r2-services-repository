import { useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle, ArrowRight, Bot, Check, Compass, Gauge, Globe, Layers,
  Menu, MessagesSquare, Palette, Smartphone, TrendingUp, Workflow, X,
} from "lucide-react";

const links = [["Services", "#services"], ["Work", "#work"], ["Process", "#process"], ["About", "#about"], ["Contact", "#contact"]];

const services = [
  { n: "01", title: "AI Automation", Icon: Workflow, hue: "#3b82ff", cta: "Automate Your Workflow",
    desc: "Eliminate repetitive work and connect your tools with intelligent workflows built around your business.",
    caps: ["Workflow automation", "AI assistants and chatbots", "API and application integrations", "Lead management and task automation", "Business process optimization"] },
  { n: "02", title: "Website Development", Icon: Globe, hue: "#8b5cf6", cta: "Build Your Website",
    desc: "Create a compelling online presence with fast, responsive websites designed to build trust and generate enquiries.",
    caps: ["Business websites", "Landing pages", "Portfolio websites", "E-commerce frontends", "Custom web applications"] },
  { n: "03", title: "App Development", Icon: Smartphone, hue: "#6366f1", cta: "Discuss Your App",
    desc: "Turn your idea into a useful digital product with thoughtful user experiences and modern application architecture.",
    caps: ["Web applications", "Mobile app development", "Dashboards and admin interfaces", "Business productivity tools", "Custom software solutions"] },
  { n: "04", title: "Trading Bots", Icon: TrendingUp, hue: "#38bdf8", cta: "Discuss Trading Technology",
    desc: "Explore algorithmic trading software, configurable strategies, backtesting, and automated execution integrations.",
    caps: ["Trading strategy automation", "Historical backtesting", "Market-data integrations", "Risk management controls", "Broker or exchange API integrations where supported"],
    risk: "Trading involves substantial risk. Backtested or historical results do not guarantee future performance. No strategy is risk-free, and we do not promise profits." },
];

const work = [
  { t: "Intelligent workflow automation", d: "Concept: a lead-to-task pipeline connecting forms, CRM and messaging with AI-assisted routing." },
  { t: "Premium business website", d: "Concept: an editorial, conversion-focused site with a clear enquiry path." },
  { t: "Modern application dashboard", d: "Concept: an admin interface for tracking operations, tasks and activity." },
  { t: "Algorithmic trading analytics interface", d: "Concept: a backtesting view for comparing strategy behaviour on historical data. Illustrative only." },
];

const mocks = [
  <>
    <rect x="20" y="70" width="60" height="40" /><rect x="130" y="30" width="60" height="40" />
    <rect x="130" y="110" width="60" height="40" /><rect x="240" y="70" width="60" height="40" />
    <path className="flow" d="M80 90h25V50h25M80 90h25v40h25M190 50h25v40h25M190 130h25V90h25" />
  </>,
  <>
    <rect x="20" y="20" width="280" height="140" /><path d="M20 44h280" />
    <rect x="40" y="70" width="170" height="14" fill="currentColor" /><rect x="40" y="94" width="110" height="14" fill="currentColor" />
    <rect x="40" y="124" width="64" height="18" />
  </>,
  <>
    <rect x="20" y="20" width="280" height="140" /><path d="M70 20v140" />
    <path strokeWidth={8} d="M95 140v-30M125 140v-60M155 140v-45M185 140v-85M215 140v-55M245 140v-95M275 140v-70" />
  </>,
  <>
    <path d="M20 20v130h280" />
    <path className="flow" d="M30 130l40-30 30 15 40-50 40 25 45-55 45 20 40-30" />
    <path d="M70 90v30M140 70v25M185 85v35M230 45v30M270 60v30" strokeWidth={5} opacity={0.5} />
  </>,
];

const why = [
  [Compass, "Tailored to your requirements", "We start from your goals and constraints, not a fixed template."],
  [Layers, "Modern, scalable implementation", "Current tooling and clean structure so the product can grow with you."],
  [Bot, "Practical automation", "Automation aimed at real, repetitive tasks that cost your team time."],
  [Palette, "Strong visual design", "Considered typography, spacing and detail that make a brand feel premium."],
  [Gauge, "Thoughtful user experience", "Clear journeys and fast interfaces that help visitors take the next step."],
  [MessagesSquare, "Transparent communication", "Plain-language updates on scope, progress and decisions throughout."],
] as const;

const steps = [
  ["01", "Discover", "Understand the client’s goals, needs, and constraints."],
  ["02", "Design", "Plan the experience, workflow, and technical approach."],
  ["03", "Build", "Develop, test, and refine the solution."],
  ["04", "Launch", "Deploy, verify, and provide any agreed support."],
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

function Network() {
  const pts = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2, r = i % 2 ? 210 : 140;
    return { x: +(260 + Math.cos(a) * r).toFixed(1), y: +(260 + Math.sin(a) * r).toFixed(1) };
  });
  return (
    <svg viewBox="0 0 520 520" role="img" aria-label="Animated network of connected systems around the M3R2 core" className="mx-auto w-full max-w-lg">
      <circle className="spin" cx="260" cy="260" r="140" fill="none" stroke="rgba(255,255,255,.12)" strokeDasharray="2 8" />
      <circle className="spin" cx="260" cy="260" r="210" fill="none" stroke="rgba(139,92,246,.3)" strokeDasharray="1 10" />
      {pts.map((p, i) => (
        <g key={i}>
          <line className="flow" x1="260" y1="260" x2={p.x} y2={p.y} stroke="#3b82ff" strokeOpacity=".6" />
          <line x1={p.x} y1={p.y} x2={pts[(i + 1) % 8].x} y2={pts[(i + 1) % 8].y} stroke="rgba(255,255,255,.12)" />
          <circle className="pulse" style={{ animationDelay: `${i * 0.35}s` }} cx={p.x} cy={p.y} r="7" fill={i % 2 ? "#8b5cf6" : "#3b82ff"} />
        </g>
      ))}
      <circle cx="260" cy="260" r="34" fill="#07080b" stroke="#3b82ff" />
      <text x="260" y="265" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">M3R2</text>
    </svg>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-white/80">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-2 text-sm text-red-300">{error}</p>}
    </div>
  );
}

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
const inp = "w-full border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/40 transition focus:border-electric";
const statusText: Record<Status, string> = {
  idle: "",
  sending: "Sending…",
  sent: "Thank you. Your enquiry was delivered and we will reply by email.",
  error: "Something went wrong and your message was not sent. Please try again.",
  unconfigured: "This form is not connected to an inbox yet, so nothing was sent. The site owner needs to add a form endpoint (see README).",
};

function Contact({ service, setService }: { service: string; setService: (s: string) => void }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const err: Record<string, string> = {};
    if (!d.name?.trim()) err.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email ?? "")) err.email = "Enter a valid email address, for example name@company.com.";
    if (!d.service) err.service = "Choose the service you are interested in.";
    if (!d.budget) err.budget = "Select an approximate budget range.";
    if ((d.message ?? "").trim().length < 20) err.message = "Tell us a little more about the project (at least 20 characters).";
    setErrors(err);
    if (Object.keys(err).length) return setStatus("idle");
    if (!ENDPOINT) return setStatus("unconfigured");
    setStatus("sending");
    try {
      const r = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw new Error("failed");
      setStatus("sent"); form.reset(); setService("");
    } catch { setStatus("error"); }
  }

  const a = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 border border-white/10 bg-char/70 p-6 backdrop-blur md:p-8">
      <Field id="name" label="Full name" error={errors.name}><input id="name" name="name" autoComplete="name" className={inp} {...a("name")} /></Field>
      <Field id="email" label="Email address" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" className={inp} {...a("email")} /></Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="service" label="Service" error={errors.service}>
          <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className={inp} {...a("service")}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.title}>{s.title}</option>)}
            <option>Not sure yet</option>
          </select>
        </Field>
        <Field id="budget" label="Approximate budget" error={errors.budget}>
          <select id="budget" name="budget" defaultValue="" className={inp} {...a("budget")}>
            <option value="">Select a range</option>
            {["Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "Above ₹5,00,000", "Not sure yet"].map((b) => <option key={b}>{b}</option>)}
          </select>
        </Field>
      </div>
      <Field id="message" label="Project description" error={errors.message}>
        <textarea id="message" name="message" rows={5} className={inp} placeholder="What are you trying to build or automate?" {...a("message")} />
      </Field>
      <button className="btn justify-center disabled:opacity-60" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}<ArrowRight size={18} aria-hidden />
      </button>
      <p role="status" aria-live="polite" className={`text-sm ${status === "sent" ? "text-emerald-300" : status === "idle" || status === "sending" ? "text-mute" : "text-amber-200"}`}>{statusText[status]}</p>
    </form>
  );
}

export default function App() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");
  const enter = (d: number) => ({ initial: reduce ? (false as const) : { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: "easeOut" as const } });

  return (
    <>
      <a href="#main" className="sr-only z-50 bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <header id="top" className="sticky top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="text-lg font-extrabold tracking-tight">M3R2<span className="text-electric"> Services</span></a>
          <ul className="hidden items-center gap-8 text-sm text-mute md:flex">
            {links.slice(0, 4).map(([l, h]) => <li key={l}><a href={h} className="transition hover:text-white">{l}</a></li>)}
          </ul>
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn !px-4 !py-2 text-sm">Start a Project</a>
            <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </div>
        </nav>
        {open && (
          <ul id="mobile-menu" className="grid gap-1 border-t border-white/10 px-6 py-4 md:hidden">
            {links.map(([l, h]) => <li key={l}><a href={h} onClick={() => setOpen(false)} className="block py-2 text-lg">{l}</a></li>)}
          </ul>
        )}
      </header>

      <main id="main">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.p {...enter(0)} className="mb-6 font-mono text-xs uppercase tracking-[.3em] text-electric">AI · Web · Apps · Trading technology</motion.p>
            <motion.h1 {...enter(0.1)} className="text-[clamp(3rem,8vw,7.5rem)] font-extrabold uppercase leading-[.9] tracking-tighter">
              Build smarter.{" "}
              <span className="bg-gradient-to-r from-electric to-iris bg-clip-text text-transparent">Automate everything.</span>
            </motion.h1>
            <motion.p {...enter(0.25)} className="mt-8 max-w-xl text-lg text-mute">
              We design intelligent automation, powerful digital experiences, custom applications, and trading technology to turn ambitious ideas into practical solutions.
            </motion.p>
            <motion.div {...enter(0.4)} className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn">Start a Project<ArrowRight size={18} aria-hidden /></a>
              <a href="#work" className="btn btn-ghost">Explore Our Work</a>
            </motion.div>
            <motion.p {...enter(0.55)} className="mt-12 max-w-md border-l border-electric/60 pl-4 text-sm text-mute">
              One team covering workflow automation, websites, custom apps and trading software, shaped around your requirements.
            </motion.p>
          </div>
          <Network />
        </section>

        <div id="services">
          {services.map((s, i) => (
            <section key={s.n} aria-labelledby={`svc-${i}`} className="border-t border-white/10 py-24">
              <div className={`mx-auto flex max-w-7xl flex-col gap-14 px-6 lg:items-center ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <Reveal className="w-full max-w-md shrink-0">
                  <div className="relative grid aspect-square place-items-center overflow-hidden border border-white/10 bg-char" style={{ backgroundImage: `radial-gradient(circle at 30% 20%, ${s.hue}40, transparent 60%)` }}>
                    <span aria-hidden className="absolute -bottom-6 -left-2 select-none text-[11rem] font-black leading-none text-transparent" style={{ WebkitTextStroke: `1px ${s.hue}80` }}>{s.n}</span>
                    <div aria-hidden className="spin absolute inset-10 rounded-full border border-dashed" style={{ borderColor: `${s.hue}55` }} />
                    <s.Icon size={64} strokeWidth={1} style={{ color: s.hue }} aria-hidden />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="font-mono text-sm" style={{ color: s.hue }}>{s.n} / Service</p>
                  <h2 id={`svc-${i}`} className="mt-4 text-5xl font-extrabold uppercase leading-none tracking-tighter md:text-7xl">{s.title}</h2>
                  <p className="mt-6 max-w-xl text-lg text-mute">{s.desc}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.caps.map((c) => (
                      <li key={c} className="flex gap-3 border-t border-white/10 pt-3 text-white/90"><Check size={16} className="mt-1 shrink-0" style={{ color: s.hue }} aria-hidden />{c}</li>
                    ))}
                  </ul>
                  {s.risk && (
                    <p role="note" className="mt-8 flex gap-3 border border-amber-300/30 bg-amber-300/5 p-4 text-sm text-amber-100">
                      <AlertTriangle size={18} className="mt-0.5 shrink-0" aria-hidden /><span><strong>Risk disclosure.</strong> {s.risk}</span>
                    </p>
                  )}
                  <a href="#contact" onClick={() => setService(s.title)} className="btn mt-10">{s.cta}<ArrowRight size={18} aria-hidden /></a>
                </Reveal>
              </div>
            </section>
          ))}
        </div>

        <section id="work" aria-labelledby="work-h" className="border-t border-white/10 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="font-mono text-sm text-electric">Selected work</p>
              <h2 id="work-h" className="mt-4 text-5xl font-extrabold uppercase tracking-tighter md:text-7xl">Project concepts</h2>
              <p className="mt-6 max-w-2xl text-mute">These are demonstration concepts that show the kind of interfaces we build. They are not client projects. Real case studies will be added once client work is supplied.</p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {work.map((w, i) => (
                <Reveal key={w.t} delay={i * 0.08}>
                  <article className="group h-full border border-white/10 bg-char/60 transition duration-300 hover:-translate-y-1 hover:border-electric/60">
                    <div className="overflow-hidden border-b border-white/10 p-8 text-electric">
                      <svg viewBox="0 0 320 180" fill="none" stroke="currentColor" strokeWidth="1.5" role="img" aria-label={`Concept illustration: ${w.t}`} className="w-full transition duration-500 group-hover:scale-105">{mocks[i]}</svg>
                    </div>
                    <div className="p-6">
                      <span className="font-mono text-xs uppercase tracking-widest text-iris">Concept</span>
                      <h3 className="mt-2 text-xl font-bold">{w.t}</h3>
                      <p className="mt-2 text-sm text-mute">{w.d}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-h" className="border-t border-white/10 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="font-mono text-sm text-electric">Why M3R2 Services</p>
              <h2 id="about-h" className="mt-4 max-w-4xl text-5xl font-extrabold uppercase tracking-tighter md:text-7xl">Precise work, clearly communicated</h2>
            </Reveal>
            <ul className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {why.map(([Icon, t, d]) => (
                <li key={t} className="bg-ink p-8 transition hover:bg-char">
                  <Icon size={24} strokeWidth={1.5} className="text-electric" aria-hidden />
                  <h3 className="mt-5 text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-mute">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" aria-labelledby="proc-h" className="border-t border-white/10 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal><p className="font-mono text-sm text-electric">Our process</p>
              <h2 id="proc-h" className="mt-4 text-5xl font-extrabold uppercase tracking-tighter md:text-7xl">Four steps to launch</h2></Reveal>
            <ol className="mt-16 grid gap-10 lg:grid-cols-4 lg:gap-0">
              {steps.map(([n, t, d], i) => (
                <li key={n} className="relative border-l border-white/15 pl-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pr-8 lg:pt-10">
                  <span aria-hidden className="absolute -left-[5px] top-1 h-2.5 w-2.5 bg-electric shadow-[0_0_20px_#3b82ff] lg:-top-[5px] lg:left-0" />
                  <Reveal delay={i * 0.1}>
                    <p className="font-mono text-sm text-iris">{n}</p>
                    <h3 className="mt-2 text-2xl font-bold uppercase">{t}</h3>
                    <p className="mt-3 text-sm text-mute">{d}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-h" className="border-t border-white/10 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
            <Reveal>
              <h2 id="contact-h" className="text-5xl font-extrabold uppercase leading-[.95] tracking-tighter md:text-7xl">Let’s build something intelligent.</h2>
              <p className="mt-6 max-w-md text-mute">Tell us what you want to build or automate. We will review your enquiry and reply by email to discuss next steps.</p>
              <dl className="mt-10 grid gap-4 text-sm">
                <div><dt className="text-mute">Email</dt><dd>[Add your business email]</dd></div>
                <div><dt className="text-mute">Phone</dt><dd>[Add your phone number]</dd></div>
                <div><dt className="text-mute">Location</dt><dd>[Add your location]</dd></div>
              </dl>
            </Reveal>
            <Reveal delay={0.1}><Contact service={service} setService={setService} /></Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-mute md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} M3R2 Services. All rights reserved.</p>
          <p className="flex gap-6">
            <a href="#legal" className="hover:text-white">Privacy Policy (draft)</a>
            <a href="#legal" className="hover:text-white">Terms (draft)</a>
          </p>
        </div>
        <div id="legal" className="mx-auto mt-8 max-w-7xl px-6 text-xs text-mute">
          <p><strong className="text-white">Draft placeholders.</strong> The Privacy Policy and Terms of Service are not final. Replace this text with reviewed legal documents before launch. Enquiry form data is used only to respond to project enquiries.</p>
        </div>
      </footer>
    </>
  );
}
