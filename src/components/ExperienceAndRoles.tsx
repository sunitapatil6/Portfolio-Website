import React from 'react';
import { Briefcase, Building2, CheckCircle2, Shield, Calendar, Users, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceAndRoles: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-indigo-900 tracking-wider uppercase mb-2">
            15+ Years in Higher Education
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Academic Career & Institutional Leadership
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Progressing from Lecturer to Senior Assistant Professor with active leadership across Department Academic Coordination (DAC), NBA & NAAC accreditation committees, and university syllabus drafting.
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="space-y-8 mb-16">
          {PORTFOLIO_DATA.workExperience.map((exp, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                exp.isCurrent
                  ? 'bg-slate-50 border-indigo-200/90 shadow-xs'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-indigo-700" />
                    <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider">
                      {exp.institution}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-900">
                    {exp.designation}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    {exp.location}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span className={exp.isCurrent ? 'text-indigo-900 font-bold' : 'text-slate-600'}>
                    {exp.duration}
                  </span>
                  {exp.isCurrent && (
                    <span className="ml-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Present
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200/60">
                <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                  Key Institutional Responsibilities & Achievements:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-600">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Administration Portfolios */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-indigo-800" />
            <div>
              <h3 className="font-serif-display text-xl font-bold text-slate-900">
                Administrative Portfolios & University Delegations
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Key statutory, governance, syllabus, and evaluation appointments held at DYPIT and Pune University.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.academicResponsibilities.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono font-medium text-indigo-800 mb-1">
                    {item.period}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug mb-2">
                    {item.role}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
