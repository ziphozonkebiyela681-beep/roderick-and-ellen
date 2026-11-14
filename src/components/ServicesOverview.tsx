import React from 'react';
import { ArrowUpRight, ZoomIn } from 'lucide-react';
import { SERVICES, ServiceId } from '../data/studioData';
import { IsolatedEnvelope } from './IsolatedEnvelope';

interface ServicesOverviewProps {
  activeService: ServiceId;
  onZoomService: (serviceId: ServiceId, openModal?: boolean) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  activeService,
  onZoomService,
}) => {
  return (
    <section id="services" className="border-b border-[#F3E178]/15 bg-[#2E083B] py-12 text-[#FAF5E6] sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-[#F3E178]/15 pb-8 lg:flex-row lg:items-end lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#F3E178]">Studio Capabilities</p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#FAF5E6] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Four disciplines united by signature craft and modern engineering.
            </h2>
          </div>

          {/* Unique Isolated Miniature Envelope Floating on Royal Purple */}
          <div className="flex items-center gap-5 self-start lg:self-end">
            <IsolatedEnvelope size="sm" tilt="right" className="hidden sm:block" />
            <p className="max-w-xs text-sm leading-relaxed text-[#EFE4CA]/85">
              Select any discipline below to zoom into its interactive studio, test live deliverables,
              and preview how we build for couples and companies.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-12">
          {SERVICES.map((service, idx) => {
            const isWide = idx === 0 || idx === 3;
            const isSelected = activeService === service.id;

            return (
              <article
                key={service.id}
                className={`flex flex-col justify-between rounded-2xl border p-5 sm:p-8 transition-colors duration-150 ${
                  isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                } ${
                  isSelected
                    ? 'border-[#F3E178] bg-[#3B104B]'
                    : 'border-[#F3E178]/20 bg-[#350D42] hover:border-[#F3E178]/50'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#EFE4CA]/80">
                    <span className="font-mono font-semibold text-[#F3E178] tabular-nums">
                      {service.index}. {service.idealFor}
                    </span>
                    <span>Turnaround · {service.turnaround}</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#FAF5E6] sm:mt-4 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#EFE4CA]/85">{service.summary}</p>

                  <ul className="mt-5 grid grid-cols-1 gap-2.5 border-t border-[#F3E178]/15 pt-5 sm:mt-6 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#FAF5E6]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F3E178]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-[#F3E178]/15 pt-5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                  <p className="text-xs font-medium text-[#F3E178]/90">{service.outcomeMetric}</p>

                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => onZoomService(service.id, false)}
                      className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#F3E178] px-4 py-2 text-xs font-semibold text-[#2E083B] transition-colors duration-150 hover:bg-[#FAF5E6] whitespace-nowrap shrink-0 sm:min-h-[40px] sm:flex-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F3E178]"
                    >
                      <ZoomIn className="h-3.5 w-3.5" />
                      <span>Zoom In</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onZoomService(service.id, true)}
                      aria-label={`Open fullscreen zoom for ${service.shortTitle}`}
                      className="inline-flex min-h-[44px] items-center justify-center gap-1 rounded-lg border border-[#F3E178]/35 px-3.5 py-2 text-xs font-medium text-[#F3E178] transition-colors duration-150 hover:bg-[#F3E178]/15 whitespace-nowrap shrink-0 sm:min-h-[40px] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F3E178]"
                    >
                      <span>Expand</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
