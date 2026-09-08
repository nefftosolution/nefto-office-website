import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const RefundAndCancellationPolicy = () => {
  return (
    <>
      <SEO
        title="Refund and Cancellation Policy | NEFFTO Solution"
        description="Read NEFFTO Solution's refund and cancellation policy to learn how to cancel a service, request a refund, and understand refund timelines and eligibility."
        canonical="https://nefftosolution.com/refund-and-cancellation-policy"
        ogTitle="Refund and Cancellation Policy | NEFFTO Solution"
        ogDescription="Read NEFFTO Solution's refund and cancellation policy to learn how to cancel a service, request a refund, and understand refund timelines and eligibility."
        ogUrl="https://nefftosolution.com/refund-and-cancellation-policy"
        keywords="refund policy, cancellation policy, Neffto Solution refunds, project cancellation, software development refunds"
      />
      <div className="bg-main-bg text-white font-sans antialiased selection:bg-primary selection:text-main-bg">
        <header className="relative bg-linear-to-br from-[#071524] to-[#042558] text-white py-24 sm:py-32 text-center overflow-hidden pt-40">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px] pointer-events-none"></div>
          <div className="relative z-10 max-w-7xl mx-auto sm:px-6 px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Refund & Cancellation Policy
            </h1>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1 text-sm text-zinc-300 font-medium">
              Last updated: September 06, 2026
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto sm:px-6 px-4 pb-16 relative z-20 mt-10">
          <main className="bg-surface/30 p-6 sm:p-10 rounded-2xl border border-white/10 shadow-md backdrop-blur-md">
            <div className="bg-surface/50 border border-white/10 p-5 rounded-xl mb-8 flex flex-col md:flex-row gap-4 md:gap-8 justify-between text-sm text-zinc-300">
              <div>
                <strong className="text-white block">Effective Date:</strong>{" "}
                9/6/2026
              </div>
              <div>
                <strong className="text-white block">Website:</strong>{" "}
                nefftosolution.com
              </div>
              <div>
                <strong className="text-white block">Company:</strong> NEFFTO IT
                Solution
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed border-b border-white/10 pb-6 mb-8">
              At NEFFTO IT Solution, we want our students to be fully satisfied
              when enrolling in our in-person / physical courses. This Refund &
              Cancellation Policy explains the terms under which refunds,
              rescheduling, or seat transfers are issued.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                1. Nature of Our Courses
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-300">
                NEFFTO IT Solution offers{" "}
                <strong className="text-white">
                  physical, in-person training courses
                </strong>{" "}
                conducted at our training center in Bahawalpur. Since these are
                scheduled classroom-based courses, refund eligibility depends on
                the course start date and attendance, not digital content
                access.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                2. Refund Window
              </h2>
              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <p className="text-yellow-200">
                  Full refund requests must be made at least{" "}
                  <strong className="text-white">7 days before</strong> the
                  course start date.
                </p>
              </div>
              <ul className="space-y-3 pl-2 mb-6 text-zinc-300">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  Cancellations made{" "}
                  <strong className="text-white">7 or more days before</strong>{" "}
                  the course start date: full refund.
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  Cancellations made{" "}
                  <strong className="text-white">
                    less than 7 days before
                  </strong>{" "}
                  the course start date: 50% refund (administrative and
                  seat-holding costs are non-refundable).
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  Cancellations made{" "}
                  <strong className="text-white">
                    after the course has started
                  </strong>
                  : no refund (see Section 3).
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                3. Conditions for Refund Eligibility
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-300">
                A refund will <strong className="text-white">NOT</strong> be
                issued if any of the following apply:
              </p>
              <ul className="space-y-3 pl-2 mb-6 text-zinc-300">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-red-500 before:rounded-full">
                  The course has already started and the student has attended
                  one or more sessions.
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-red-500 before:rounded-full">
                  The student fails to attend without prior notice (no-show).
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-red-500 before:rounded-full">
                  The refund request is submitted after the course has been
                  completed.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                4. Reschedule & Seat Transfer Options
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-300">
                Instead of a refund, students may choose:
              </p>
              <ul className="space-y-3 pl-2 mb-6 text-zinc-300">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <strong className="text-white">Reschedule:</strong> Move your
                  enrollment to the next available batch, free of charge, if
                  requested at least 3 days before the course start date.
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <strong className="text-white">Seat Transfer:</strong>{" "}
                  Transfer your seat to another person by notifying us in
                  writing before the course start date.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                5. Non-Refundable Charges
              </h2>
              <ul className="space-y-3 pl-2 mb-6 text-zinc-300">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  Registration/admin fee (if applicable) is non-refundable under
                  all circumstances.
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  Proof of enrollment (invoice or payment receipt) is required
                  for all refund/reschedule requests.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                6. How to Request a Refund or Reschedule
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-300">
                To request a refund, reschedule, or seat transfer, please
                contact us using one of the following methods:
              </p>
              <ul className="space-y-3 pl-2 mb-6 text-zinc-300">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:nefftosolution@gmail.com"
                    className="text-primary hover:text-white underline underline-offset-2"
                  >
                    nefftosolution@gmail.com
                  </a>
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <strong className="text-white">Website Contact Page:</strong>{" "}
                  <Link
                    to="/contact"
                    className="text-primary hover:text-white underline underline-offset-2"
                  >
                    https://nefftosolution.com/contact
                  </Link>
                </li>
              </ul>
              <p className="mb-4 leading-relaxed text-zinc-300">
                Please include your enrollment/invoice number and the reason for
                your request.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                7. Refund Processing Time
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-300">
                Approved refunds will be processed within{" "}
                <strong className="text-white">7–10 business days</strong> to
                your original payment method. Processing time may vary depending
                on your bank.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                8. Changes to This Policy
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-300">
                NEFFTO IT Solution reserves the right to update or modify this
                Refund & Cancellation Policy at any time. Changes will be posted
                on this page with a revised effective date.
              </p>
            </section>

            <section className="mt-12 bg-surface/50 border border-white/10 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">
                9. Contact Us
              </h2>
              <div className="space-y-3 text-zinc-300">
                <p>
                  <strong className="text-white text-lg">
                    NEFFTO IT Solution
                  </strong>
                </p>
                <p>Bahawalpur, Punjab, Pakistan</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:nefftosolution@gmail.com"
                    className="text-primary underline font-medium hover:text-white"
                  >
                    nefftosolution@gmail.com
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://nefftosolution.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-primary underline font-medium hover:text-white"
                  >
                    nefftosolution.com
                  </a>
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default RefundAndCancellationPolicy;
