import React from 'react';
import { Award, BookCheck, GraduationCap, Microscope, CheckCircle2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-indigo-900 tracking-wider uppercase mb-2">
            Academic Background & Credentials
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Education, Honors & Research Vision
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            With over 15 years in higher computer engineering education, my work bridges rigorous pedagogical excellence, translational patent innovations, and impactful AI research in cognitive health and deep learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-indigo-700" />
              <h3 className="font-serif-display text-xl font-bold text-slate-900">
                Educational Qualifications
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative flex items-start gap-4 pl-9">
                  <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-700 bg-white shadow-xs"></div>
                  
                  <div className="flex-1 bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 hover:border-slate-300 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-semibold text-slate-900">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                        {edu.score}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-700 mt-1">
                      {edu.institution}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                      <span>{edu.year}</span>
                      {edu.status && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-600">{edu.status}</span>
                        </>
                      )}
                      {edu.rank && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-emerald-700 font-semibold">{edu.rank}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths & Philosophy */}
            <div className="mt-10 p-5 bg-indigo-50/40 rounded-xl border border-indigo-100">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-indigo-700" />
                Key Academic Strengths & Philosophy
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {PORTFOLIO_DATA.personal.strengths.map((str, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Awards, Honors & Editorial Role */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Honors Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif-display text-xl font-bold text-slate-900">
                  Awards & Prestigious Honors
                </h3>
              </div>

              <div className="space-y-4">
                {PORTFOLIO_DATA.awards.map((award, idx) => (
                  <div key={idx} className="pb-3 border-b border-slate-200/80 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        {award.title}
                      </h4>
                      <span className="text-xs font-mono font-medium text-slate-500 tabular-nums">
                        {award.year}
                      </span>
                    </div>
                    <div className="text-xs text-indigo-900 font-medium mt-0.5">
                      {award.org}
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-normal">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Board Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-800 uppercase tracking-wider mb-2">
                <Microscope className="w-4 h-4" />
                Peer Review Leadership
              </div>
              <h4 className="font-serif-display text-lg font-bold text-slate-900">
                Journal Editor
              </h4>
              <p className="text-sm text-slate-700 mt-1">
                {PORTFOLIO_DATA.personal.journalEditorial.name}
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Serving as active editor and reviewer for international submissions in deep architectures, recurrent sequence models, and neural attention mechanisms.
              </p>
              <a
                href={PORTFOLIO_DATA.personal.journalEditorial.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 hover:text-indigo-950"
              >
                <span>View Editorial Board Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
