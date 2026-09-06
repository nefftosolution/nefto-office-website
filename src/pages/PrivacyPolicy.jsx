import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0
    };

    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('bg-surface', 'text-primary', 'font-bold');
            } else {
              link.classList.remove('bg-surface', 'text-primary', 'font-bold');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy for Neffto Solutions" />
      <div className="bg-main-bg text-white font-sans antialiased selection:bg-primary selection:text-main-bg">
        <header className="relative bg-gradient-to-br from-[#071524] to-[#042558] text-white py-24 sm:py-32 text-center overflow-hidden pt-40">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px] pointer-events-none"></div>
          <div className="relative z-10 max-w-7xl mx-auto sm:px-6 px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1 text-sm text-zinc-300 font-medium">
              Last updated: September 03, 2026
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto sm:px-6 px-4 pb-16 relative z-20 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-surface/30 p-6 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
                <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Table of Contents</h2>
                <nav id="sidebar-nav">
                  <ul className="space-y-2 text-sm">
                    <li><a href="#interpretation" className="nav-link block px-3 py-2 rounded-lg text-zinc-300 font-medium hover:bg-surface hover:text-primary transition-colors">Definitions</a></li>
                    <li><a href="#collecting-data" className="nav-link block px-3 py-2 rounded-lg text-zinc-300 font-medium hover:bg-surface hover:text-primary transition-colors">Collecting Data</a></li>
                    <li><a href="#cookies" className="nav-link block px-3 py-2 rounded-lg text-zinc-300 font-medium hover:bg-surface hover:text-primary transition-colors">Tracking &amp; Cookies</a></li>
                    <li><a href="#use-data" className="nav-link block px-3 py-2 rounded-lg text-zinc-300 font-medium hover:bg-surface hover:text-primary transition-colors">Use of Data</a></li>
                    <li><a href="#sms-policy" className="nav-link block px-3 py-2 rounded-lg text-zinc-300 font-medium hover:bg-surface hover:text-primary transition-colors">SMS Privacy Notice</a></li>
                    <li><a href="#retention" className="nav-link block px-3 py-2 rounded-lg text-zinc-300 font-medium hover:bg-surface hover:text-primary transition-colors">Data Retention</a></li>
                    <li><a href="#children" className="nav-link block px-3 py-2 rounded-lg text-zinc-300 font-medium hover:bg-surface hover:text-primary transition-colors">Children's Privacy</a></li>
                    <li><a href="#contact" className="nav-link block px-3 py-2 rounded-lg text-zinc-300 font-medium hover:bg-surface hover:text-primary transition-colors">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
            </aside>

            <main className="lg:col-span-3 bg-surface/30 p-6 sm:p-10 rounded-2xl border border-white/10 shadow-md backdrop-blur-md">
              <p className="text-lg text-zinc-300 leading-relaxed border-b border-white/10 pb-6 mb-6">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>

              <p className="mb-6 leading-relaxed text-zinc-300">
                We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required).
              </p>

              <section id="interpretation" className="scroll-mt-32 mb-10">
                <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">Interpretation and Definitions</h2>
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Interpretation</h3>
                <p className="mb-4 leading-relaxed text-zinc-300">The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Definitions</h3>
                <p className="mb-4 text-zinc-300">For the purposes of this Privacy Policy:</p>
                <ul className="space-y-3 pl-2 mb-6 text-zinc-300">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Account</strong> means a unique account created for You to access Our Service or parts of Our Service.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Company</strong> refers to Neffto Solution.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Country/State</strong> refers to: Pakistan.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Device</strong> means any device that can access the Service.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Personal Data</strong> is any information that relates to an identified or identifiable individual.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Website</strong> refers to Neffto Solution, accessible from <a href="https://nefftosolution.com/" target="_blank" rel="noreferrer" className="text-primary hover:text-white font-medium underline underline-offset-2">https://nefftosolution.com/</a>.
                  </li>
                </ul>
              </section>

              <section id="collecting-data" className="scroll-mt-32 mb-10">
                <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">Collecting and Using Your Personal Information</h2>
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Types of Data Collected</h3>
                <h4 className="text-lg font-semibold text-white mt-4 mb-2">Personal Data</h4>
                <p className="mb-3 text-zinc-300">While using Our Service, We may ask You to provide Us with certain personally identifiable information:</p>
                <ul className="space-y-2 pl-2 mb-6 text-zinc-300">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">Email address</li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">First name and last name</li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">Phone number</li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">Address, State, Province, ZIP/Postal code, City</li>
                </ul>
                <h4 className="text-lg font-semibold text-white mt-4 mb-2">Usage Data</h4>
                <p className="mb-4 leading-relaxed text-zinc-300">
                  Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's IP address, browser type, browser version, the pages of Our Service that You visit, the time spent on those pages, and other diagnostic data.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-32 mb-10">
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Tracking Technologies and Cookies</h3>
                <p className="mb-4 text-zinc-300">We use tracking technologies (such as cookies) to track the activity and to improve Our Service. Cookies can be "Persistent" or "Session" Cookies.</p>
                <div className="space-y-4 my-6">
                  <div className="bg-surface/50 border-l-4 border-primary p-5 rounded-r-xl">
                    <h5 className="font-bold text-white mb-1">Necessary / Essential Cookies</h5>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Type: Session Cookies | Administered by: Us</p>
                    <p className="text-sm text-zinc-300">These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.</p>
                  </div>
                  <div className="bg-surface/50 border-l-4 border-primary p-5 rounded-r-xl">
                    <h5 className="font-bold text-white mb-1">Cookies Policy / Notice Acceptance Cookies</h5>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Type: Persistent Cookies | Administered by: Us</p>
                    <p className="text-sm text-zinc-300">These Cookies identify whether users have accepted the use of cookies on the Website.</p>
                  </div>
                  <div className="bg-surface/50 border-l-4 border-primary p-5 rounded-r-xl">
                    <h5 className="font-bold text-white mb-1">Functionality Cookies</h5>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Type: Persistent Cookies | Administered by: Us</p>
                    <p className="text-sm text-zinc-300">These Cookies allow Us to remember choices You make when You use the Website.</p>
                  </div>
                </div>
              </section>

              <section id="use-data" className="scroll-mt-32 mb-10">
                <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">Use of Your Personal Data</h2>
                <p className="mb-4 text-zinc-300">The Company may use Personal Data for the following purposes:</p>
                <ul className="space-y-3 pl-2 mb-6 text-zinc-300">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">To provide and maintain Our Service</strong>, including to monitor usage.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">To manage Your Account:</strong> to manage Your registration as a user of the Service.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">For the performance of a contract:</strong> undertaking of purchase contracts.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">To contact You:</strong> via email, telephone calls, SMS, or other equivalent forms of electronic communication.
                  </li>
                </ul>
              </section>

              <section id="sms-policy" className="scroll-mt-32 mb-10">
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Text Messages Privacy Notice</h3>
                <p className="mb-4 text-zinc-300">You have the option to receive text (SMS) messages from Us. If You opt in, We will collect and store Your phone number, consent date, and message status.</p>
                <div className="bg-surface/50 border border-white/10 text-white p-5 rounded-xl shadow-inner my-6">
                  <p className="font-medium text-zinc-300">No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes. The phone numbers and consent records We collect for texting are never shared with anyone for any purpose, except Service Providers handling message delivery.</p>
                </div>
              </section>

              <section id="retention" className="scroll-mt-32 mb-10">
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Retention of Your Personal Data</h3>
                <p className="mb-4 leading-relaxed text-zinc-300">
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
                </p>
                <ul className="space-y-3 pl-2 mb-6 text-zinc-300">
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Account Information:</strong> Retained for the duration of Your Account relationship plus up to 24 months.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Customer Support Data:</strong> Retained for up to 24 months from ticket closure.
                  </li>
                  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    <strong className="text-white">Usage Data:</strong> Retained up to 24 months from collection date.
                  </li>
                </ul>
              </section>

              <section id="children" className="scroll-mt-32 mb-10">
                <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">Children's and Minors' Privacy</h2>
                <p className="mb-4 leading-relaxed text-zinc-300">
                  The Service is not directed to, and We do not knowingly collect Personal Information from, anyone under the age of 16. If You are a parent or guardian and You believe Your child has provided Us with Personal Information, please contact Us immediately.
                </p>
              </section>

              <section id="contact" className="scroll-mt-32 mt-12 bg-surface/50 border border-white/10 text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Contact Us</h2>
                <p className="mb-4 text-zinc-300">If You have any questions about this Privacy Policy, You can contact Us:</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span className="text-zinc-300">By email: <a href="mailto:nefftosolution@gmail.com" className="text-primary underline font-medium hover:text-white">nefftosolution@gmail.com</a></span>
                  </li>
                </ul>
              </section>

            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
