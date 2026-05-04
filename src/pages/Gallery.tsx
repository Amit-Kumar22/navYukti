import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";

const GALLERY_ITEMS = [
  { src: "/svg/Consulting.svg", caption: "Career Counselling Session" },
  { src: "/svg/undraw_teaching_re_g7e3.svg", caption: "Classroom Guidance" },
  { src: "/svg/undraw_meeting_re_i53h.svg", caption: "Team Meeting" },
  { src: "/svg/businessman-attending-video-conference.svg", caption: "Online Counselling" },
  { src: "/svg/undraw_interview_re_e5jn.svg", caption: "Mock Interview Prep" },
  { src: "/svg/undraw_team_collaboration_re_ow29.svg", caption: "Student Collaboration" },
  { src: "/svg/undraw_educator_re_ju47.svg", caption: "Expert Educator" },
  { src: "/svg/Coding-workshop.svg", caption: "Tech Workshop" },
  { src: "/svg/Boss-giving-instructions-to-employee.svg", caption: "Mentorship Session" },
  { src: "/svg/lady-teaching-hindi-in-the-classroom.svg", caption: "Academic Support" },
  { src: "/svg/undraw_co_workers_re_1i6i.svg", caption: "Student Community" },
  { src: "/svg/undraw_career_progress_ivdb.svg", caption: "Career Progress" },
];

const Gallery = () => {
  return (
    <>
      <SEO title="Gallery — Navyukti Consultancy" description="Moments from our counselling sessions, college visits and student events." />
      <PageHero
        eyebrow="Gallery"
        title="Moments that matter."
        subtitle="A glimpse into our counselling sessions, campus visits, workshops and happy student stories."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
        bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="section-padding">
        <div className="container-custom grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="aspect-square rounded-2xl bg-card shadow-soft border border-border/50 flex flex-col items-center justify-center p-4 hover:scale-105 hover:shadow-elegant transition-all cursor-pointer group overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-4/5 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <p className="mt-2 text-xs font-medium text-muted-foreground text-center line-clamp-1">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
