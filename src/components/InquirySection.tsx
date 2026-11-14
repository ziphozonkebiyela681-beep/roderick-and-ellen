import React, { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SERVICES, STUDIO_CONTACT, ServiceId } from '../data/studioData';
import { IsolatedEnvelope } from './IsolatedEnvelope';
import { WaxSealEmblem } from './WaxSealEmblem';

interface InquirySectionProps {
  preselectedService: ServiceId | 'suite';
}

export const InquirySection: React.FC<InquirySectionProps> = ({ preselectedService }) => {
  const [selectedService, setSelectedService] = useState<string>(preselectedService);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [brief, setBrief] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedService(preselectedService);
  }, [preselectedService]);

  const selectedServiceLabel =
    selectedService === 'suite'
      ? 'Full Brand & Digital Suite'
      : SERVICES.find((s) => s.id === selectedService)?.shortTitle ?? 'Studio Commission';

  const whatsappPrefillUrl = `${STUDIO_CONTACT.whatsappHref}?text=${encodeURIComponent(
    `Hello Roderick & Ellen! I'd like to inquire about ${selectedServiceLabel}.${
      name.trim() ? ` My name is ${name.trim()}.` : ''
    }${brief.trim() ? ` Details: ${brief.trim()}` : ''}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedBrief = brief.trim();

    if (!trimmedName) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg('Please provide a valid email address so we can reply.');
      return;
    }
    if (trimmedBrief.length < 10) {
      setErrorMsg('Please include a brief note (at least 10 characters) about your project.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#F3E178] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Editorial Invitation & Direct Call/WhatsApp/Social Channels */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#491C59]">Commission &amp; Consultation</p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#2E083B] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Seal your brief with Roderick &amp; Ellen.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#3D104E]">
              Reach us directly by phone or WhatsApp on{' '}
              <span className="font-semibold text-[#2E083B]">{STUDIO_CONTACT.phoneDisplay}</span>,
              connect on TikTok or Instagram, or seal your project brief below.
            </p>

            {/* Direct Phone, WhatsApp & Social Card */}
            <div className="mt-6 rounded-2xl border border-[#2E083B]/15 bg-[#2E083B] p-5 text-[#FAF5E6] sm:mt-7 sm:p-6">
              <div className="flex items-center gap-4">
                <WaxSealEmblem size={54} variant="gold" className="shrink-0" />
                <div>
                  <p className="font-display text-xl font-semibold text-[#F3E178]">
                    Calls, WhatsApp &amp; Socials
                  </p>
                  <p className="text-xs text-[#EFE4CA]/85">
                    Direct studio desk · Fast response for commissions
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <a
                  href={STUDIO_CONTACT.phoneHref}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#F3E178] px-4 py-2 text-xs font-semibold text-[#2E083B] transition-colors hover:bg-[#FAF5E6] whitespace-nowrap"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call {STUDIO_CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={whatsappPrefillUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#F3E178]/40 bg-[#3B104B] px-4 py-2 text-xs font-semibold text-[#F3E178] transition-colors hover:bg-[#F3E178] hover:text-[#2E083B] whitespace-nowrap"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              <dl className="mt-5 space-y-2.5 border-t border-[#F3E178]/15 pt-4 text-xs text-[#FAF5E6]">
                <div className="flex flex-wrap justify-between gap-2">
                  <dt className="text-[#EFE4CA]/75">Calls &amp; WhatsApp</dt>
                  <dd className="font-mono font-medium text-[#F3E178] tabular-nums">
                    {STUDIO_CONTACT.phoneDisplay}
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2">
                  <dt className="text-[#EFE4CA]/75">TikTok</dt>
                  <dd>
                    <a
                      href={STUDIO_CONTACT.tiktokHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#F3E178] underline underline-offset-4 hover:text-[#FAF5E6]"
                    >
                      {STUDIO_CONTACT.tiktokHandle}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2">
                  <dt className="text-[#EFE4CA]/75">Instagram</dt>
                  <dd>
                    <a
                      href={STUDIO_CONTACT.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#F3E178] underline underline-offset-4 hover:text-[#FAF5E6]"
                    >
                      {STUDIO_CONTACT.instagramHandle}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Cotton-Letter Form / Sealed Isolated Envelope Confirmation */}
          <div className="rounded-2xl border border-[#2E083B]/15 bg-[#FAF5E6] p-5 sm:p-8 lg:col-span-7 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center py-6 text-center">
                <IsolatedEnvelope
                  size="md"
                  isOpen={false}
                  footerStamp={`TO: RODERICK & ELLEN · FROM: ${(name || 'CLIENT').toUpperCase()}`}
                />
                <h3 className="mt-7 font-display text-3xl font-semibold text-[#2E083B]">
                  Your Inquiry Has Been Sealed
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#491C59]">
                  Thank you, <span className="font-semibold text-[#2E083B]">{name}</span>. Your
                  brief for <span className="font-semibold text-[#2E083B]">{selectedServiceLabel}</span>{' '}
                  is ready. You can also send this sealed brief directly to our WhatsApp line (
                  {STUDIO_CONTACT.phoneDisplay}).
                </p>
                <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                  <a
                    href={whatsappPrefillUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#2E083B] px-5 py-2.5 text-xs font-semibold text-[#F3E178] hover:bg-[#3D104E] sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Send Brief via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setBrief('');
                    }}
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-[#2E083B]/25 bg-white px-5 py-2.5 text-xs font-semibold text-[#2E083B] hover:bg-[#F3E178]/45 sm:w-auto cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-[#2E083B]">
                    Select Service Discipline
                  </label>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {SERVICES.map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setSelectedService(svc.id)}
                        className={`min-h-[44px] rounded-lg border px-3.5 py-2.5 text-left text-xs font-semibold transition-colors cursor-pointer ${
                          selectedService === svc.id
                            ? 'border-[#2E083B] bg-[#2E083B] text-[#F3E178]'
                            : 'border-[#2E083B]/15 bg-[#F3E178]/35 text-[#2E083B] hover:border-[#2E083B]/45'
                        }`}
                      >
                        {svc.index}. {svc.shortTitle}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-semibold text-[#2E083B]">
                      Your Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="mt-1.5 w-full rounded-lg border border-[#2E083B]/20 bg-white px-3.5 py-2.5 text-base text-[#2E083B] placeholder:text-[#491C59]/55 focus:border-[#2E083B] focus:outline-none sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-semibold text-[#2E083B]">
                      Email Address
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="mt-1.5 w-full rounded-lg border border-[#2E083B]/20 bg-white px-3.5 py-2.5 text-base text-[#2E083B] placeholder:text-[#491C59]/55 focus:border-[#2E083B] focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-org" className="block text-xs font-semibold text-[#2E083B]">
                    Company Name or Couple Names (Optional)
                  </label>
                  <input
                    id="inquiry-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g., Aurelia Manor / Claire & Julian"
                    className="mt-1.5 w-full rounded-lg border border-[#2E083B]/20 bg-white px-3.5 py-2.5 text-base text-[#2E083B] placeholder:text-[#491C59]/55 focus:border-[#2E083B] focus:outline-none sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-brief" className="block text-xs font-semibold text-[#2E083B]">
                    Project Details &amp; Timeline
                  </label>
                  <textarea
                    id="inquiry-brief"
                    rows={4}
                    required
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Share your wedding date, logo concept, AI workflow goals, or website scope..."
                    className="mt-1.5 w-full rounded-lg border border-[#2E083B]/20 bg-white px-3.5 py-2.5 text-base text-[#2E083B] placeholder:text-[#491C59]/55 focus:border-[#2E083B] focus:outline-none sm:text-sm"
                  />
                </div>

                {errorMsg && (
                  <p
                    role="alert"
                    className="rounded-lg border border-[#2E083B]/30 bg-[#F3E178] px-3.5 py-2 text-xs font-semibold text-[#2E083B]"
                  >
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full min-h-[48px] rounded-lg bg-[#2E083B] px-6 py-3 text-sm font-semibold text-[#F3E178] transition-colors duration-150 hover:bg-[#3D104E] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E083B]"
                >
                  Seal &amp; Send Project Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
