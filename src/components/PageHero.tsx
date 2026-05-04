import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  breadcrumb?: { label: string; to?: string }[];
  bgImage?: string;
}

export const PageHero = ({ eyebrow, title, subtitle, children, breadcrumb, bgImage }: PageHeroProps) => {
  return (
    <section className={`relative pt-20 pb-8 md:pt-24 md:pb-10 overflow-hidden ${bgImage ? "bg-transparent" : "bg-gradient-hero"}`}>
      {/* Background image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          {/* Strong dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      )}
      {/* Blob accents — only shown without bgImage */}
      {!bgImage && (
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-10 -left-16 w-60 h-60 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-16 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        </div>
      )}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className={`flex items-center gap-1 text-xs mb-2 ${bgImage ? "text-white/70" : "text-muted-foreground"}`}>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1">
                {b.to ? (
                  <Link to={b.to} className={`transition-colors ${bgImage ? "hover:text-white" : "hover:text-primary"}`}>{b.label}</Link>
                ) : (
                  <span className={`font-semibold ${bgImage ? "text-white" : "text-secondary"}`}>{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight size={11} />}
              </span>
            ))}
          </nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-2 ${bgImage ? "bg-white/15 text-white border border-white/30" : "bg-primary/10 text-primary"}`}>
              {eyebrow}
            </span>
          )}
          <h1 className={`font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight ${bgImage ? "text-white drop-shadow-md" : "text-secondary"}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-2 text-sm sm:text-base leading-relaxed max-w-xl ${bgImage ? "text-white/85 drop-shadow-sm" : "text-muted-foreground"}`}>
              {subtitle}
            </p>
          )}
          {children && <div className="mt-3">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
};
