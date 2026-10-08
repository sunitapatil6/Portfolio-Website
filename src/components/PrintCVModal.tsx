import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, User } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PrintCVModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto?: string | null;
}

export const PrintCVModal: React.FC<PrintCVModalProps> = ({ isOpen, onClose, currentPhoto }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative my-4 max-h-[95vh] overflow-y-auto">
        
        {/* Top Control Bar (Excluded from Print) */}
        <div className="no-print flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Curriculum Vitae Preview
            </h3>
            <p className="text-xs text-slate-500">
              Formatted for standard A4 print and PDF export. Click "Print / Save as PDF" to generate your document.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 p-1.5 rounded-md cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="print-page text-slate-900 text-xs sm:text-sm font-sans space-y-6">
          
          {/* Header */}
          <div className="text-center pb-4 border-b-2 border-slate-900">
            <h1 className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-1">
              CURRICULUM VITAE
            </h1>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              MS. SUNITA RAMESH PATIL
            </h2>
            <div className="text-xs text-slate-600 font-medium mt-1">
              {PORTFOLIO_DATA.personal.title} · {PORTFOLIO_DATA.personal.institution}
            </div>
          </div>

          {/* Personal Data & Photo */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 pb-4 border-b border-slate-200">
            <div className="flex-1 space-y-1 text-xs">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-1">
                Personal Data
              </h3>
              <p><strong>Permanent Address:</strong> {PORTFOLIO_DATA.personal.address}</p>
              <p><strong>E-mail:</strong> {PORTFOLIO_DATA.personal.primaryEmail} / {PORTFOLIO_DATA.personal.institutionalEmail}</p>
              <p><strong>Date of Birth:</strong> {PORTFOLIO_DATA.personal.dateOfBirth}</p>
              <p><strong>Marital Status:</strong> {PORTFOLIO_DATA.personal.maritalStatus}</p>
              <p><strong>Contact No:</strong> {PORTFOLIO_DATA.personal.phoneNumbers.join(' / ')}</p>
              <p><strong>Total Experience:</strong> {PORTFOLIO_DATA.personal.totalExperienceFormatted}</p>
            </div>

            <div className="w-24 h-30 sm:w-28 sm:h-34 border border-slate-300 rounded overflow-hidden shrink-0 self-start flex items-center justify-center bg-slate-50">
              {currentPhoto ? (
                <img
                  src={currentPhoto}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-2 text-slate-400">
                  <User className="w-8 h-8 mx-auto mb-1 text-slate-300" />
                  <span className="text-[10px] block font-medium">Passport Photo</span>
                </div>
              )}
            </div>
          </div>

          {/* Strengths */}
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-1">
              Strengths
            </h3>
            <ul className="list-disc pl-5 text-xs space-y-0.5 text-slate-700">
              <li>Seeking a position to utilize my skills and abilities in academics that offers professional growth while being resourceful, innovative and flexible.</li>
              <li>Good Academician with over 15 years of classroom engagement.</li>
              <li>Confident Administrator across NBA, NAAC, DAC and examinations.</li>
              <li>Quick Learner with multiple certifications in advanced AI and deep learning.</li>
              <li>Good interpersonal and communication skills.</li>
              <li>Counseling and student project mentoring.</li>
              <li>Hardworking and research-driven.</li>
            </ul>
          </div>

          {/* Educational Details Table */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-1">
              Educational Details
            </h3>
            <table className="w-full text-xs text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300">
                  <th className="p-2 border-r border-slate-300 w-10">Sr.</th>
                  <th className="p-2 border-r border-slate-300">Degree Awarded</th>
                  <th className="p-2 border-r border-slate-300">Name of University</th>
                  <th className="p-2 border-r border-slate-300 w-24">Year</th>
                  <th className="p-2 w-24">Marks / SGPA</th>
                </tr>
              </thead>
              <tbody>
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <tr key={idx} className="border-b border-slate-200">
                    <td className="p-2 border-r border-slate-300 text-center font-mono">{idx + 1}</td>
                    <td className="p-2 border-r border-slate-300 font-semibold">{edu.degree}</td>
                    <td className="p-2 border-r border-slate-300">{edu.institution}</td>
                    <td className="p-2 border-r border-slate-300 text-center">{edu.year}</td>
                    <td className="p-2 font-mono font-medium">{edu.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Work Experience */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-1">
              Work Experience (Total: 15 Years 7 Months)
            </h3>
            <div className="space-y-2 text-xs">
              {PORTFOLIO_DATA.workExperience.map((w, idx) => (
                <div key={idx} className="p-2 bg-slate-50 border border-slate-200 rounded">
                  <div className="font-bold text-slate-900">{w.institution}</div>
                  <div className="text-slate-700"><strong>Designation:</strong> {w.designation} · <strong>Duration:</strong> {w.duration}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-1">
              Achievements & Honors
            </h3>
            <ul className="list-disc pl-5 text-xs space-y-1 text-slate-700">
              <li><strong>Durga Shakti Award</strong> in March 2025.</li>
              <li><strong>Best Paper Award</strong> at 8th IEEE International Conference on Computing, Communication, Control, and Automation (ICCUBEA) 2024.</li>
              <li><strong>1st Rank</strong> in Master of Engineering, University of Pune.</li>
              <li><strong>Topper Rank</strong> in Graphology Course in June 2025.</li>
              <li><strong>Elite Grade</strong> in NPTEL "Introduction to Research", Feb-April 2019.</li>
              <li><strong>Elite Grade</strong> in NPTEL "Introduction to R Programming", Aug-Sept 2018.</li>
              <li><strong>Journal Editor:</strong> Scienxt Journal of Neural Networks and Deep Learning.</li>
            </ul>
          </div>

          {/* Book Published */}
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-1">
              Book Published
            </h3>
            <p className="text-xs text-slate-800">
              Published Book SPPU Course 2019-T.E. (Comp) Sem-VI (Elective-II) <strong>"Augmented & Virtual Reality"</strong> by Technical Publication, ISBN NO: <strong>9789355850744</strong>, April-2022.
            </p>
          </div>

          {/* Patents Published Summary */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-1">
              Patents Published ({PORTFOLIO_DATA.patents.length} Published Indian Patents)
            </h3>
            <table className="w-full text-[11px] text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300">
                  <th className="p-1 border-r border-slate-300 w-8">#</th>
                  <th className="p-1 border-r border-slate-300">Patent Title</th>
                  <th className="p-1 border-r border-slate-300 w-28">App Number</th>
                  <th className="p-1 border-r border-slate-300 w-20">Filing</th>
                  <th className="p-1 w-20">Publication</th>
                </tr>
              </thead>
              <tbody>
                {PORTFOLIO_DATA.patents.map((p) => (
                  <tr key={p.id} className="border-b border-slate-200">
                    <td className="p-1 border-r border-slate-300 text-center font-mono">{p.id}</td>
                    <td className="p-1 border-r border-slate-300 font-medium">{p.title}</td>
                    <td className="p-1 border-r border-slate-300 font-mono">{p.appNumber}</td>
                    <td className="p-1 border-r border-slate-300">{p.filingDate}</td>
                    <td className="p-1 text-emerald-800">{p.publicationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Declaration & Signature */}
          <div className="pt-8 text-xs border-t border-slate-300 flex justify-between items-end">
            <div>
              <p><strong>Date:</strong> __________________</p>
              <p className="mt-1"><strong>Place:</strong> Pune, Maharashtra</p>
            </div>
            <div className="text-right">
              <div className="font-serif-display font-bold text-sm">Mrs. Sunita Ramesh Patil</div>
              <div className="text-slate-500 text-[11px]">Assistant Professor, DYPIT</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
