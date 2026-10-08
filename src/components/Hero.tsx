import React, { useRef, useState } from 'react';
import { Award, BookOpen, Mail, MapPin, Phone, ArrowUpRight, GraduationCap, Camera, RotateCcw, Check, Upload, UserCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenGitHubGuide: () => void;
  onOpenPrintCV: () => void;
  currentPhoto: string | null;
  onPhotoChange: (newPhotoUrl: string) => void;
  onPhotoReset: () => void;
  isCustomPhoto: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenGitHubGuide,
  onOpenPrintCV,
  currentPhoto,
  onPhotoChange,
  onPhotoReset,
  isCustomPhoto
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoUpdatedToast, setPhotoUpdatedToast] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onPhotoChange(reader.result);
          setPhotoUpdatedToast(true);
          setTimeout(() => setPhotoUpdatedToast(false), 4000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 bg-linear-to-b from-white via-slate-50/50 to-slate-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Academic Persona & Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Academic Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-indigo-900 tracking-wide uppercase mb-3">
              <span>Department of Computer Engineering</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>DYPIT, Pimpri, Pune</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700">SPPU Affiliated</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-5">
              Prof. Sunita Ramesh Patil
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed mb-4 max-w-2xl">
              Assistant Professor, Doctoral Scholar & Prolific Inventor in AI, Cognitive Computing, Healthcare Diagnostics & Network Security.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
              15+ years of distinguished engineering pedagogy and research. Inventor of 
              <strong className="text-slate-900 font-semibold"> 23 published patents</strong> with the Indian Patent Office, 
              author of <strong className="text-slate-900 font-semibold">45+ peer-reviewed papers</strong> (including Q1 Elsevier MethodsX), 
              and author of the curriculum textbook <em className="text-slate-900 font-medium">"Augmented & Virtual Reality"</em> for SPPU.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#patents"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg transition-all shadow-sm hover:shadow"
              >
                <span>Explore 23 Patents</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-200" />
              </a>

              <a
                href="#publications"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all shadow-xs"
              >
                <span>Research Publications (45+)</span>
              </a>

              <button
                onClick={onOpenPrintCV}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 hover:text-indigo-900 transition-colors cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Full Resume (PDF)</span>
              </button>
            </div>

            {/* Quick Proof Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80">
              {PORTFOLIO_DATA.metrics.slice(0, 4).map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {m.caption}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Faculty Portrait & Trust Anchor */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm sm:max-w-md bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-md relative">
              
              {/* Photo Upload Prompter Banner (Shows if no custom photo uploaded yet) */}
              {!isCustomPhoto && (
                <div className="mb-3 p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-center">
                  <div className="text-xs font-bold text-indigo-950 mb-1 flex items-center justify-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-indigo-700" />
                    <span>Attach Your Official Photograph</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-2">
                    Click below to select <strong>Sunita Patil Passport Photo.jpg</strong> from your computer.
                  </p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-2 px-3 text-xs font-semibold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Choose Photo File</span>
                  </button>
                </div>
              )}

              {/* Photo Container */}
              <div className="relative aspect-4/5 sm:aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200/80 group">
                {currentPhoto ? (
                  <img
                    src={currentPhoto}
                    alt="Prof. Sunita Ramesh Patil"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />
                ) : (
                  /* Formal Faculty Crest Placeholder (Clean, non-AI) */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-linear-to-b from-indigo-950 to-slate-900">
                    <div className="w-20 h-20 rounded-full border-2 border-indigo-400/40 bg-indigo-900/60 flex items-center justify-center font-serif-display text-2xl font-bold tracking-wider text-amber-200 mb-3 shadow-inner">
                      SP
                    </div>
                    <div className="font-serif-display font-bold text-lg text-white">
                      Prof. Sunita Patil
                    </div>
                    <div className="text-xs text-indigo-200 mt-0.5">
                      Assistant Professor · Computer Engineering
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Dr. D. Y. Patil Institute of Technology, Pune
                    </div>

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-4 px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Passport Photo</span>
                    </button>
                  </div>
                )}

                {/* Ribbon overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md text-white px-3 py-2 rounded-lg text-xs flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-medium">Faculty & Researcher</span>
                  </div>
                  <span className="text-[11px] text-slate-300">DYPIT Pune</span>
                </div>

                {/* Floating Change Photo Button */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-lg backdrop-blur-xs text-xs font-medium flex items-center gap-1 shadow-md transition-all cursor-pointer"
                    title="Upload or change photo file"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span className="text-[11px] hidden sm:inline">
                      {isCustomPhoto ? 'Replace Photo' : 'Upload Photo'}
                    </span>
                  </button>

                  {isCustomPhoto && (
                    <button
                      onClick={onPhotoReset}
                      className="p-2 bg-white/90 hover:bg-white text-slate-700 rounded-lg text-xs font-medium shadow-md transition-all cursor-pointer"
                      title="Remove custom photo"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Hidden input for photo uploading */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  className="hidden"
                />
              </div>

              {/* Toast confirmation */}
              {photoUpdatedToast && (
                <div className="mt-3 p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <strong>Photo updated successfully!</strong>
                    <div className="text-[11px] text-emerald-700">Now showing across your portfolio and printable CV.</div>
                  </div>
                </div>
              )}

              {/* Faculty Metadata Strip */}
              <div className="mt-4 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-800 font-semibold">Durga Shakti Awardee (2025)</strong> · IEEE ICCUBEA Best Paper Award (2024)
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    Editor, <a href="https://scienxt.com/editorial-board-sjnndl/" target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline font-medium">Scienxt Journal of Neural Networks & Deep Learning</a>
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Dr. D. Y. Patil Institute of Technology, Pimpri, Pune, MH, India</span>
                </div>
              </div>

              {/* Quick direct contact links */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.primaryEmail}`}
                  className="text-indigo-800 hover:text-indigo-950 flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PORTFOLIO_DATA.personal.primaryEmail}</span>
                </a>
                <a
                  href="tel:+919284480140"
                  className="text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 9284480140</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
