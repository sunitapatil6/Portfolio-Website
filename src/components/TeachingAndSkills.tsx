import React, { useState } from 'react';
import { BookOpen, Award, Cpu, Code, Database, Terminal, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TeachingAndSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'teaching' | 'skills' | 'certifications' | 'fdps'>('teaching');

  return (
    <section id="teaching" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-indigo-900 tracking-wider uppercase mb-2">
            Pedagogy & Faculty Development
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Teaching Portfolio, Skills & Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Instructing core and elective courses across computer engineering curricula, leading international Faculty Development Programs, and continuous technical upskilling.
          </p>
        </div>

        {/* Tab Controls (Clean segmented buttons, no pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-slate-200 scrollbar-none">
          <button
            onClick={() => setActiveTab('teaching')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'teaching'
                ? 'bg-indigo-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            Subjects Taught ({PORTFOLIO_DATA.subjectsTaught.length})
          </button>
          
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'certifications'
                ? 'bg-indigo-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            Certifications ({PORTFOLIO_DATA.certifications.length})
          </button>

          <button
            onClick={() => setActiveTab('fdps')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'fdps'
                ? 'bg-indigo-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            FDPs & Workshops Organized ({PORTFOLIO_DATA.workshopsOrganized.length})
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'skills'
                ? 'bg-indigo-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            Technical Skill Matrix
          </button>
        </div>

        {/* Tab 1: Subjects Taught */}
        {activeTab === 'teaching' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.subjectsTaught.map((sub, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono font-semibold text-indigo-900">{sub.code}</span>
                    <span>{sub.level}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {sub.name}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Theory & Hands-on Lab</span>
                  <span className="text-emerald-700 font-medium">B.E. Curriculum</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 tabular-nums shrink-0">
                      {cert.date}
                    </span>
                  </div>
                  <div className="text-xs text-indigo-900 font-medium mt-1">
                    {cert.issuer}
                  </div>
                  {cert.grade && (
                    <div className="mt-2 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{cert.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: FDPs & Workshops Organized */}
        {activeTab === 'fdps' && (
          <div className="space-y-4">
            {PORTFOLIO_DATA.workshopsOrganized.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-900 mb-1">
                    <span>{item.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-500 font-normal">{item.location}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.title}
                  </h4>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Technical Skills */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-3">
                <Database className="w-4 h-4 text-indigo-700" />
                Data & Analytics
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {PORTFOLIO_DATA.technicalSkills.dataAnalytics.map((sk, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>{sk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-3">
                <Code className="w-4 h-4 text-indigo-700" />
                Programming
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {PORTFOLIO_DATA.technicalSkills.languages.map((sk, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>{sk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-3">
                <Terminal className="w-4 h-4 text-indigo-700" />
                Operating Systems
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {PORTFOLIO_DATA.technicalSkills.systemsAndPlatforms.map((sk, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>{sk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-3">
                <Cpu className="w-4 h-4 text-indigo-700" />
                Productivity & Tools
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {PORTFOLIO_DATA.technicalSkills.toolsAndProductivity.map((sk, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>{sk}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
