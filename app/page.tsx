import type { Metadata } from "next";
import type { StoryBeat } from "@/components/ScrollSequence";
import { FactArcSignature } from "@/components/FactArcSignature";
import { FluidNav } from "@/components/FluidNav";
import { HeroTypewriterLine } from "@/components/HeroTypewriterLine";
import { LazyPaymentMethodsVideo } from "@/components/LazyPaymentMethodsVideo";
import { LazyScrollSequence } from "@/components/LazyScrollSequence";
import { LiquidGlassPanel } from "@/components/LiquidGlassPanel";
import { SiteButton } from "@/components/SiteButton";
import { GradientBackground } from "@/components/paper-design-shader-background";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { HandDrawnOval } from "@/components/ui/hand-writing-text";

const site = {
  "brandName": "Drip & Sip",
  "logoAlt": "Drip & Sip logo",
  "markText": "D&S",
  "type": "Neighborhood coffee spot",
  "heroCopy": "Coffee from early mornings to late Beirut nights.",
  "heroSupport": "A warm neighborhood coffee stop between Monot and Bechara El Khoury, built for morning regulars, late-night walks, and easy Beirut meetups.",
  "address": "Monot Street, Bchara El Khoury, Beirut",
  "hours": "Open daily from 6:00 AM to 2:00 AM",
  "phoneDisplay": "+961 76 765 458",
  "contactBody": "WhatsApp: +961 76 765 458",
  "primaryHref": "https://wa.me/96176765458",
  "phoneHref": null,
  "primaryCta": "WhatsApp Us",
  "mapsHref": "https://www.google.com/maps/search/?api=1&query=Monot%20Street%2C%20Bchara%20El%20Khoury%2C%20Beirut",
  "socialDisplay": "@dripandsip.lb",
  "socialHref": "https://instagram.com/dripandsip.lb",
  "socialTitle": "Follow the late-night coffee rhythm",
  "socialBody": "For quick questions, fresh updates, and what is happening today, reach Drip & Sip through Instagram or WhatsApp.",
  "visitTitle": "Visit Drip & Sip in Beirut",
  "visitIntro": "Drop by for familiar neighborhood energy, long opening hours, and a coffee stop that stays useful from sunrise to deep into the night.",
  "finishTitle": "Warm, local, and ready for Beirut nights.",
  "finishBody": "Make Drip & Sip your easy stop for morning caffeine, neighborhood catchups, and late coffee plans near Monot.",
  "finalCta": "Plan your next coffee stop at Drip & Sip.",
  "openNote": "Open daily from 6:00 AM.",
  "arcText": "DRIP & SIP • BEIRUT •",
  "videoLabel": "CARD · CASH · RECEIPT",
  "videoAriaLabel": "Drip & Sip contact and visit video"
} as const;

export const metadata: Metadata = {
  title: "Drip & Sip | Neighborhood coffee spot in Beirut",
  description: "Drip & Sip: A warm local coffee spot on the border of Monot and Bechara El Khoury, known for neighborhood energy and very extended daily hours.",
  keywords: [
  "Drip and Sip Beirut",
  "Drip & Sip Monot",
  "coffee Bechara El Khoury",
  "late night coffee Beirut"
]
};

const storyBeats: StoryBeat[] = [
  {
    "eyebrow": "THE DRIP & SIP EXPERIENCE",
    "title": "Neighborhood coffee with long hours.",
    "subtitle": "From early espresso to late-night cups, Drip & Sip keeps the door open for Beirut routines that do not fit a narrow schedule.",
    "start": 0,
    "end": 0.2,
    "align": "center"
  },
  {
    "eyebrow": "MONOT - BECHARA EL KHOURY",
    "title": "A familiar stop on the edge of the city.",
    "subtitle": "Warm service, easy pacing, and a local address make it a natural pause between work, errands, and nights out.",
    "start": 0.25,
    "end": 0.45,
    "align": "left"
  },
  {
    "eyebrow": "CONTACT - VISIT - SIP",
    "title": "Message first or head straight over.",
    "subtitle": "Use WhatsApp for quick questions, then find the shop on Monot Street when your next coffee window opens.",
    "start": 0.5,
    "end": 0.7,
    "align": "right"
  },
  {
    "eyebrow": "OPEN DAILY",
    "title": "Coffee until 2:00 AM.",
    "subtitle": "Plan an early stop, a late cup, or the coffee run that holds the night together.",
    "start": 0.94,
    "end": 1,
    "align": "center",
    "ctaLabel": "Find Us",
    "ctaHref": "#visit"
  }
];

const heroMorphTexts = [
  "Coffee",
  "Monot",
  "Late"
];
const finishMorphTexts = [
  "daily.",
  "late.",
  "local."
];
const typewriterItems = [
  "early Monot mornings.",
  "late-night coffee runs.",
  "neighborhood meetups.",
  "Beirut after dark."
];
const visitCards = [
  [
    "Address",
    "Monot Street, Bchara El Khoury, Beirut"
  ],
  [
    "Hours",
    "Open daily from 6:00 AM to 2:00 AM"
  ],
  [
    "Phone / WhatsApp",
    "WhatsApp: +961 76 765 458"
  ],
  [
    "Social",
    "@dripandsip.lb"
  ],
  [
    "Payment",
    "Pay at the counter when you visit."
  ]
] as const;

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] font-body text-white">
      <FluidNav />
      <section
        id="hero"
        aria-labelledby="hero-title"
        className="relative min-h-[var(--stable-vh)] overflow-hidden bg-[#050505]"
      >
        <GradientBackground />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[#050505] to-transparent" />
        <FactArcSignature
          arcText={site.arcText}
          brandName={site.brandName}
          logoAlt={site.logoAlt}
          markText={site.markText}
          className="
            absolute
            top-[20%]
            z-20
            hidden
            h-48
            w-48
            md:flex
            lg:h-56
            lg:w-56
            xl:h-60
            xl:w-60
          "
          style={{ left: "max(2rem, calc(50% - 720px))" }}
        />
        <div className="relative z-10 mx-auto flex min-h-[var(--stable-vh)] w-full max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:px-8 md:py-24">
          <div className="relative z-20 mb-8 flex w-full justify-start px-5 pt-20 md:hidden">
            <FactArcSignature
              arcText={site.arcText}
              brandName={site.brandName}
              logoAlt={site.logoAlt}
              markText={site.markText}
              className="relative h-28 w-28 rotate-[-16deg] sm:h-32 sm:w-32"
            />
          </div>
          <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
            {site.type} - Beirut
          </p>
          <div className="relative mx-auto flex w-full flex-col items-center justify-center">
            <div className="relative mx-auto w-full max-w-5xl px-4 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
              <HandDrawnOval />
              <h1
                id="hero-title"
                className="relative z-10 mx-auto max-w-[920px] text-center font-display text-[clamp(3.2rem,11vw,8.5rem)] font-semibold leading-[0.86] tracking-normal text-white"
              >
                {site.brandName}
              </h1>
            </div>
            <div
              aria-hidden="true"
              className="relative z-10 h-[4.75rem] w-full max-w-5xl sm:h-[5.75rem] md:h-[7rem] lg:h-[8.5rem]"
            >
              <GooeyText
                texts={heroMorphTexts}
                morphTime={1}
                cooldownTime={0.35}
                className="flex h-full items-center justify-center font-display font-semibold"
                textClassName="text-6xl font-semibold leading-[0.86] text-white/90 sm:text-7xl md:text-8xl lg:text-9xl"
              />
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-pretty font-display text-3xl font-semibold leading-[1.03] tracking-normal text-white/90 sm:text-4xl md:text-5xl">
            {site.heroCopy}
          </p>
          <p className="mt-5 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
            {site.heroSupport}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <SiteButton
              ariaLabel={"Contact " + site.brandName}
              external
              href={site.primaryHref}
            >
              {site.primaryCta}
            </SiteButton>
            <SiteButton
              ariaLabel={"Find " + site.brandName}
              external
              href={site.mapsHref}
            >
              Find Us
            </SiteButton>
          </div>
          <HeroTypewriterLine
            accent="Beirut"
            items={typewriterItems}
            prefix="Made for"
          />
        </div>
      </section>

      <LazyScrollSequence
        id="experience"
        ariaLabel={"Scroll-linked " + site.brandName + " brand experience"}
        beats={storyBeats}
      />

      <section
        id="visit"
        aria-labelledby="visit-title"
        className="relative px-6 py-24 sm:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
            Visit
          </p>
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <h2
                id="visit-title"
                className="font-display text-5xl font-semibold leading-[0.92] tracking-normal text-white/90 sm:text-6xl md:text-7xl"
              >
                {site.visitTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
                {site.visitIntro}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {visitCards.map(([title, body]) => (
                <LiquidGlassPanel
                  key={title}
                  className="rounded-[2rem] px-5 py-5 md:px-6 md:py-6"
                >
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                    {title}
                  </p>
                  <p className="mt-4 font-body text-sm leading-relaxed text-white/75">
                    {body}
                  </p>
                </LiquidGlassPanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="social"
        aria-labelledby="social-title"
        className="relative px-6 py-20 sm:px-8"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 border-y border-white/10 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              {site.socialDisplay}
            </p>
            <h2
              id="social-title"
              className="font-display text-4xl font-semibold leading-none tracking-normal text-white/90 sm:text-5xl md:text-6xl"
            >
              {site.socialTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
              {site.socialBody}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {site.socialHref ? (
              <SiteButton
                ariaLabel={"Open " + site.brandName + " Instagram"}
                external
                href={site.socialHref}
              >
                Open {site.socialDisplay}
              </SiteButton>
            ) : (
              <SiteButton
                ariaLabel={"Contact " + site.brandName}
                external
                href={site.primaryHref}
              >
                {site.primaryCta}
              </SiteButton>
            )}
            <SiteButton
              ariaLabel={"Open map for " + site.brandName}
              external
              href={site.mapsHref}
            >
              Find Us
            </SiteButton>
          </div>
        </div>
      </section>

      <LazyPaymentMethodsVideo
        ariaLabel={site.videoAriaLabel}
        label={site.videoLabel}
      />

      <section
        id="finish"
        aria-labelledby="finish-title"
        className="relative flex px-6 pb-24 pt-12 sm:px-8 md:min-h-screen md:items-center md:pb-32 md:pt-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              {site.brandName}
            </p>
            <h2
              id="finish-title"
              className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.92] tracking-normal text-white/90 sm:text-6xl md:text-7xl"
            >
              {site.finishTitle}
            </h2>
            <div
              aria-hidden="true"
              className="block w-full max-w-full translate-x-0 translate-y-0 overflow-visible pt-1 text-left md:translate-x-28 md:-translate-y-2 lg:translate-x-36"
            >
              <GooeyText
                texts={finishMorphTexts}
                morphTime={1}
                cooldownTime={0.35}
                className="relative block h-[clamp(3.2rem,19vw,5rem)] w-full max-w-full overflow-visible font-display font-semibold leading-none text-white md:h-[5.5rem]"
                textClassName="left-0 top-0 text-left text-[clamp(3rem,18vw,4.8rem)] font-semibold leading-none text-white/90 md:text-7xl"
              />
            </div>
          </div>
          <div className="md:pb-3">
            <p className="text-pretty font-body text-base leading-7 text-white/60 sm:text-lg">
              {site.finishBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SiteButton
                ariaLabel={"Contact " + site.brandName}
                external
                href={site.primaryHref}
              >
                {site.primaryCta}
              </SiteButton>
              <SiteButton
                ariaLabel={"Find " + site.brandName}
                external
                href={site.mapsHref}
              >
                Find Us
              </SiteButton>
            </div>
            <p className="mt-5 font-body text-sm text-white/40">
              {site.finalCta} {site.openNote}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
