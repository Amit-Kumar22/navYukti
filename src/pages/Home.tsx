import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Quote, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SEO } from "@/components/SEO";
import { COURSES, PROCESS_STEPS, SERVICES, SITE, TESTIMONIALS, WHY_US, BLOGS } from "@/lib/site-data";

const Home = () => {
  return (
    <>
      <SEO
        title="Navyukti Consultancy — Career, Admission & College Selection Experts"
        description="Confused about your career? Get free expert counselling, admission guidance, and college selection support across India."
      />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-20 pb-10 overflow-hidden bg-gradient-hero">
        {/* Full-width background image with overlay */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover object-top"
            fetchPriority="high"
          />
          {/* Gradient overlay — light on right (form side), deeper on left (text side) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/80 to-white/60" />
        </div>

        {/* Subtle blob accents */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-16 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
        </div>

        <div className="container-custom w-full">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-14 items-center">

            {/* LEFT — Copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="flex flex-col gap-5 order-2 lg:order-1"
            >
              {/* Badge */}
              <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary shadow-sm">
                <Sparkles size={13} /> Trusted by 5,000+ students across Bihar
              </span>

              {/* Headline */}
              <div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-secondary leading-[1.1] tracking-tight">
                  Confused About<br className="hidden sm:block" />{" "}
                  <span className="gradient-text">Your Career?</span>
                </h1>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
                  Get free expert counselling, admission guidance &amp; college selection — personalised for your goals, by people who care.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm" className="h-10 px-5 rounded-full bg-gradient-cta hover:opacity-90 shadow-glow text-sm font-semibold">
                  <Link to="/contact">Book Free Counselling <ArrowRight size={15} className="ml-1" /></Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="h-10 px-5 rounded-full border-secondary/25 text-secondary hover:bg-secondary hover:text-secondary-foreground text-sm font-semibold">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap items-center gap-5 pt-1">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gradient-primary shadow-sm" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Loved by students</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={13} className="fill-primary text-primary" />)}
                  <span className="ml-1 text-xs font-bold text-secondary">4.9 / 5</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                  Free counselling available now
                </div>
              </div>

              {/* Key stats row */}
              <div className="grid grid-cols-3 gap-3 pt-1 border-t border-border/40">
                {[
                  { stat: "100+", label: "Partner Colleges" },
                  { stat: "12+", label: "Years Experience" },
                  { stat: "98%", label: "Success Rate" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-extrabold text-lg sm:text-xl gradient-text">{s.stat}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <EnquiryForm compact />
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY US STATS */}
      <section className="py-8 md:py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {WHY_US.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-4 shadow-card border border-border/50 hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
                  <img src={s.image} alt={s.label} className="w-full h-full object-contain" />
                </div>
                <div className="font-display font-extrabold text-2xl text-secondary">{s.stat}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-secondary mt-2">
              Services built around <span className="gradient-text">your future</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group block bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1 h-full"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img src={s.image} alt={s.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-secondary mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.short}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-10 md:py-14">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Process</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-secondary mt-2">
              From confusion to <span className="gradient-text">clarity</span>
            </h2>
            <div className="mt-6 flex justify-center">
              <img src="/svg/undraw_process_re_gws7.svg" alt="Our process" className="w-full max-w-sm h-40 object-contain" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative bg-gradient-to-br from-card to-muted/40 rounded-xl p-5 border border-border/50 hover:border-primary/40 transition-all"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-cta text-primary-foreground font-display font-extrabold text-base flex items-center justify-center shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-semibold text-base text-secondary mt-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Popular Courses</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-secondary mt-2">Find your fit</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full h-9 px-4 text-sm">
              <Link to="/courses">View all <ArrowRight className="ml-1" size={16} /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {COURSES.slice(0, 12).map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card rounded-xl p-4 text-center shadow-soft border border-border/50 hover:border-primary/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden mx-auto flex items-center justify-center mb-2">
                  <img src={c.image} alt={c.name} className="w-full h-full object-contain" />
                </div>
                <div className="font-semibold text-sm text-secondary">{c.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIHAR STUDENT CREDIT CARD BANNER */}
      <section className="py-10 md:py-14">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-dark p-6 md:p-10 shadow-elegant">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
            <div className="relative grid md:grid-cols-2 items-center gap-6">
              <div className="text-secondary-foreground">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-3">
                  <CreditCard size={14} /> GOVERNMENT SCHEME
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight">
                  Bihar Student Credit Card Scheme
                </h3>
                <p className="text-white/70 mt-2 text-base max-w-lg">
                  Get up to ₹4 lakh education loan to pursue higher studies. We help you with the full application process.
                </p>
                <Button asChild className="mt-5 rounded-full bg-gradient-cta hover:opacity-90 shadow-glow h-10 px-5 text-sm">
                  <Link to="/contact">Apply with our help <ArrowRight className="ml-1" size={16} /></Link>
                </Button>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="glass-dark rounded-2xl p-5 w-72 border border-white/20 backdrop-blur-xl">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-xs text-white/60 uppercase tracking-wider">Student Loan</div>
                    <CreditCard className="text-primary" />
                  </div>
                  <div className="font-display font-bold text-3xl text-white">₹4,00,000</div>
                  <div className="text-xs text-white/60 mt-1">Maximum eligible amount</div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs text-white/70">
                    <span>BIHAR GOVT</span>
                    <span>EDU SCHEME</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-secondary mt-2">
              Real stories, <span className="gradient-text">real impact</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-5 shadow-card border border-border/50 relative"
              >
                <Quote className="absolute top-3 right-3 text-primary/20" size={24} />
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} className="fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-secondary/90 leading-relaxed mb-3">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-secondary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.course}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-10 md:py-14">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">From the Blog</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-secondary mt-2">Insights & guides</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full h-9 px-4 text-sm">
              <Link to="/blogs">View all <ArrowRight className="ml-1" size={16} /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {BLOGS.map((b, i) => (
              <motion.article
                key={b.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
                  <img src={b.image} alt={b.title} className="w-full h-full object-contain p-4" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">{b.date}</div>
                  <h3 className="font-display font-semibold text-base text-secondary group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed line-clamp-2">{b.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 md:py-14">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-cta p-8 md:p-12 text-center shadow-elegant">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
            <div className="relative max-w-2xl mx-auto text-primary-foreground">
              <h2 className="font-display font-extrabold text-2xl md:text-4xl">Ready to start your journey?</h2>
              <p className="mt-3 text-white/90 text-base">Talk to a counsellor today — it's completely free.</p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full h-12 px-6 font-semibold text-sm">
                  <Link to="/contact">Book Free Counselling</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full h-12 px-6 font-semibold text-sm">
                  <a href={`tel:${SITE.phoneRaw}`}>Call {SITE.phone}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
