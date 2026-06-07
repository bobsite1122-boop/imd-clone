import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'iMD App QBanks, Databases and Resources - IMD App PK',
  description:
    '45,000+ premium medical databases, QBanks, video lectures, books and clinical practice references included in your iMD subscription.',
}

const COLORS = {
  hero: '#0e3b77',
  primary: '#020048',
  tertiary: '#ebebf8',
}

const questionBanks = [
  'UWORLD Qbanks',
  'Uworld Medical Library',
  'UWORLD Self assessments all',
  'UWORLD Ready Decks flashcards',
  'CanadaQbank',
  'AceQBank',
  'NBME Self assessments for USMLE Steps 1,2&3',
  'CMS Forms for USMLE Step 2CK',
  'CMS Subject Exams',
  'BoardVitals Qbanks',
  'BMJ OnExamination Qbanks',
  'RADPrimer Lessons & Qbank',
  'AMEDEX Qbank for AMC',
  'MPlusX Qbank for AMC',
  'PassMedicine Qbanks',
  'Amboss Qbanks + Amboss Library',
  'MKSAP',
  'MCC – MCCQE Qbank',
  'Mehlman QBanks all',
]

const drugRefsShort = ['Lexicomp', 'Micromedex']

const booksRefs = [
  'More than 30 thousand latest Books & References from Elsevier, McGrawHill, Thieme, LWW, Oxford, … Along with their Videos.',
]

const clinicalResources = [
  'Uptodate (same as website)',
  'Epocrates',
  'VisualDx',
  'eTG Therapeutic Guidelines',
  'Sanford guide',
  'RSNA Journals',
  'MKSAP',
  'Amirsys Statdx',
]

const videoTraining = [
  'Boards and Beyonds',
  'Pixorize',
  'Lecturio',
  'Osmosis',
  'USMLE RX Videos',
  'Oakstone CME',
  'Radiopaedia',
  'MRI-Online Videos',
  'Accessmedicine Procedural Videos',
  'Mayo Clinic',
  '123Sonography',
  'MHMedical',
  'DoctorsInTraining',
  'Kaplan',
]

const drugRefsPharma = [
  ['Micromedex 2025', '(Drug Interaction, Drug Reference, IV Compatibility, NeoFax, Pediatrics)'],
  ['Sanford Guide 2025', ''],
  ['Martindale: The Complete Drug Reference', ''],
  ['Drug Facts and Comparison', ''],
  ['Applied Therapeutics', ''],
]

const usmleComlex = [
  'USMLE Step 1, Step 2, Step 3',
  'USMLE Step 1, Step 2, Step 3 Practice Exams',
  'COMLEX Level 1',
  'COMVEX',
]

const medicalSpecialties = [
  'Internal Medicine (Practice Exam, Shelf Exam, MOC)',
  'Family Medicine (Shelf Exam, QBank)',
  'Emergency Medicine (MOC, Shelf Exam)',
  'Surgery Shelf Exam',
  'Psychiatry (QBank, Shelf Exam, Practice Exam, MOC)',
  'Pediatrics (QBank, Shelf Exam, MOC, Practice Exam)',
  'Dermatology MOC',
  'Neurology (Child Neurology, MOC)',
  'Cardiology (QBank, MOC)',
  'Gastroenterology, Geriatric Medicine',
  'Otolaryngology (QBank, MOC)',
  'Pathology (QBank, MOC)',
  'Ophthalmology, Radiography, Anesthesiology, Pain Medicine',
  'Allergy & Immunology, Infectious Disease',
  'Physical Medicine & Rehabilitation',
  'Addiction Medicine, Hospice & Palliative Medicine',
  'Preventive Medicine (QBank, MOC)',
]

const nursingAllied = [
  'PANCE/PANRE QBank',
  'ANCC Family Nurse Practitioner',
  'Adult-Gerontology Acute & Primary Care NP',
  'Pediatric Nurse Practitioner (Acute & Primary Care)',
  'Critical Care Nursing',
  'Psychiatric-Mental Health Nurse Practitioner',
  'Certified Pediatric Nurse',
  'Certified Nurse Midwife',
]

const usmleQBanks = [
  'UWorld QBanks (Step 1, Step 2, Step 3)',
  'USMLE-Rx, Amboss, CanadaQBank',
]

const usmleVideos = [
  'Doctors In Training Courses',
  'Kaplan USMLE Step 1, Step 2, Step 3 Online Prep & High-Yield Videos',
]

/* ------- helpers ------- */

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-[14px] md:text-[15px] leading-7">
      <span
        className="mt-2.5 inline-block w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: COLORS.primary }}
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  )
}

function CategoryHeading({
  emoji,
  text,
}: {
  emoji: string
  text: string
}) {
  return (
    <h2
      className="font-display font-extrabold text-[20px] md:text-[22px] leading-snug flex items-center gap-2 mt-6 first:mt-0 mb-3"
      style={{ color: COLORS.primary }}
    >
      <span aria-hidden="true">{emoji}</span>
      <span>{text}</span>
    </h2>
  )
}

/* ------- page ------- */

export default function DatabasesPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          1. HERO + 2-COLUMN LIGHT CARDS  (#0e3b77)
        ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.hero }}>
        <div className="container-main py-12 md:py-16 text-white">

          <div className="text-center mb-10 md:mb-12">
            <h1 className="font-display font-extrabold text-[26px] md:text-[36px] lg:text-[42px] leading-[1.15]">
              iMD App QBanks, Databases
              <br className="hidden sm:block" /> and Resources
            </h1>
            <p className="text-sm md:text-base font-semibold mt-4">
              We have 45000+ resources and are not limited to following
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* LEFT card */}
            <article
              className="rounded-[28px] p-6 md:p-9"
              style={{ backgroundColor: COLORS.tertiary, color: COLORS.primary }}
            >
              <CategoryHeading emoji="✅⁉️" text="Question Banks:" />
              <ul className="space-y-1">
                {questionBanks.map((q) => (
                  <Bullet key={q}>{q}</Bullet>
                ))}
                <li className="ml-5 mt-1 text-[14px] md:text-[15px] font-bold">
                  &amp; more
                </li>
              </ul>

              <CategoryHeading emoji="💉💊" text="Drug Refrences:" />
              <ul className="space-y-1">
                {drugRefsShort.map((d) => (
                  <Bullet key={d}>{d}</Bullet>
                ))}
                <li className="ml-5 mt-1 text-[14px] md:text-[15px] font-bold">
                  &amp; more
                </li>
              </ul>

              <CategoryHeading emoji="📚📖" text="Books & References:" />
              <ul className="space-y-1">
                {booksRefs.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
            </article>

            {/* RIGHT card */}
            <article
              className="rounded-[28px] p-6 md:p-9"
              style={{ backgroundColor: COLORS.tertiary, color: COLORS.primary }}
            >
              <CategoryHeading
                emoji="🏥🩺"
                text="Clinical Practice Resources:"
              />
              <ul className="space-y-1">
                {clinicalResources.map((c) => (
                  <Bullet key={c}>{c}</Bullet>
                ))}
                <li className="ml-5 mt-1 text-[14px] md:text-[15px] font-bold">
                  &amp; more
                </li>
              </ul>

              <CategoryHeading emoji="🎥" text="Video Training & Lectures:" />
              <ul className="space-y-1">
                {videoTraining.map((v) => (
                  <Bullet key={v}>{v}</Bullet>
                ))}
                <li className="ml-5 mt-1 text-[14px] md:text-[15px] font-bold">
                  &amp; lots of more
                </li>
              </ul>

              <h2
                className="font-display font-extrabold text-[20px] md:text-[22px] leading-snug flex items-start gap-2 mt-8 mb-2"
                style={{ color: COLORS.primary }}
              >
                <span aria-hidden="true">🔥</span>
                <span>
                  GET all of these premium resources in SINGLE subscription.
                </span>
              </h2>
              <p
                className="text-[14px] md:text-[15px] mb-5"
                style={{ color: COLORS.primary }}
              >
                iMD – Your Smart Study Partner!
              </p>
              <Link
                href="/#subscribenow"
                className="inline-flex items-center justify-center text-white font-semibold text-sm px-7 py-3 rounded-full min-h-[44px] hover:opacity-90 transition"
                style={{ backgroundColor: COLORS.primary }}
              >
                Subscribe Now
              </Link>
            </article>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            2. TEAL/PHOTO CALLOUT + DRUG REFERENCES + BOARDVITALS
            (still on #0e3b77)
          ───────────────────────────────────────────── */}
        <div className="container-main pb-12 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[33%_1fr] gap-6 md:gap-8">

            {/* Photo / quote callout */}
            <div className="relative rounded-[28px] overflow-hidden min-h-[300px] md:min-h-[478px] flex items-end">
              <Image
                src="/db-hero.jpeg"
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-center"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 76%)',
                }}
                aria-hidden="true"
              />
              <h4 className="relative z-10 text-white font-display font-extrabold text-lg md:text-xl lg:text-2xl leading-snug p-7 md:p-9">
                IMD Resources offers access to a plethora of Medical Databases
                &amp; Resources to ace your USMLE in just one place!
              </h4>
            </div>

            {/* Right column stack */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Drug References & Pharmacology — DARK card */}
              <article
                className="rounded-[28px] p-6 md:p-9 text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                <h2 className="font-display font-extrabold text-xl md:text-2xl mb-5">
                  Drug References &amp; Pharmacology
                </h2>
                <ul className="space-y-2">
                  {drugRefsPharma.map(([bold, rest]) => (
                    <li
                      key={bold}
                      className="flex items-start gap-2 text-[14px] md:text-[15px] leading-7"
                    >
                      <span
                        className="mt-2.5 inline-block w-1.5 h-1.5 rounded-full shrink-0 bg-white"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-bold">{bold}</strong>
                        {rest && <> {rest}</>}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* BoardVitals + photo grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {/* Photo card */}
                <article
                  className="rounded-[28px] overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: COLORS.tertiary }}
                >
                  <div className="relative w-full aspect-[626/351]">
                    <Image
                      src="/db-boardvitals.jpeg"
                      alt="Doctor reviewing question bank on tablet"
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </article>

                {/* BoardVitals light card */}
                <article
                  className="rounded-[28px] p-6 md:p-9"
                  style={{
                    backgroundColor: COLORS.tertiary,
                    color: COLORS.primary,
                  }}
                >
                  <h2 className="font-display font-extrabold text-xl md:text-2xl leading-tight">
                    BoardVitals Question Banks 2025
                  </h2>
                  <h3 className="font-display font-bold text-base md:text-lg mt-4 mb-3">
                    USMLE &amp; COMLEX Question Banks
                  </h3>
                  <ul className="space-y-1">
                    {usmleComlex.map((u) => (
                      <Bullet key={u}>{u}</Bullet>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            3. MEDICAL SPECIALTIES QUESTION BANKS
            (still on #0e3b77)
          ───────────────────────────────────────────── */}
        <div className="container-main pb-14 md:pb-20">
          <article
            className="rounded-[28px] p-6 md:p-10"
            style={{
              backgroundColor: COLORS.tertiary,
              color: COLORS.primary,
            }}
          >
            <h2 className="font-display font-extrabold text-xl md:text-2xl mb-5">
              Medical Specialties Question Banks
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              {medicalSpecialties.map((s) => (
                <Bullet key={s}>{s}</Bullet>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          4. NURSING & ALLIED HEALTH (#020048, full-bleed)
        ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.primary }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="relative w-full aspect-[1856/1242] md:aspect-auto md:h-full md:min-h-[420px]">
            <Image
              src="/db-nursing.jpeg"
              alt="Nurse practitioner in hospital corridor"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="px-6 sm:px-10 md:px-[10%] py-12 md:py-16 text-white">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
              Nursing &amp; Allied Health QBanks
            </h2>
            <ul className="space-y-3">
              {nursingAllied.map((n) => (
                <li
                  key={n}
                  className="text-[14px] md:text-[15px] leading-7"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          5. USMLE EXAM STUDY MATERIALS (#020048, full-bleed)
        ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.primary }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="px-6 sm:px-10 md:px-[10%] py-12 md:py-16 text-white order-2 md:order-1">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
              USMLE Exam Study Materials
            </h2>

            <h3 className="font-display font-bold text-lg md:text-xl mb-3">
              QBanks &amp; Study Platforms
            </h3>
            <ul className="space-y-2 mb-6 list-disc pl-5">
              {usmleQBanks.map((q) => (
                <li
                  key={q}
                  className="text-[14px] md:text-[15px] leading-7"
                >
                  {q}
                </li>
              ))}
            </ul>

            <h3 className="font-display font-bold text-lg md:text-xl mb-3">
              Video Lectures
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              {usmleVideos.map((v) => (
                <li
                  key={v}
                  className="text-[14px] md:text-[15px] leading-7"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full aspect-[1869/1164] md:aspect-auto md:h-full md:min-h-[420px] order-1 md:order-2">
            <Image
              src="/db-usmle.jpeg"
              alt="Medical student studying USMLE materials"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  )
}
