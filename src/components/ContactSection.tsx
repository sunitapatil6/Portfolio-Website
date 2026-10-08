import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    purpose: 'Academic Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with formatted mailto
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || formData.purpose}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPurpose: ${formData.purpose}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.primaryEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-indigo-900 tracking-wider uppercase mb-2">
            Get in Touch
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Contact & Academic Inquiries
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Welcoming inquiries regarding joint Ph.D. research collaborations, guest lectures, curriculum advisory, and patent commercialization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Institution Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4 text-indigo-700" />
                Institutional Affiliation
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Dr. D. Y. Patil Institute of Technology (DYPIT)
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Department of Computer Engineering<br />
                Sant Tukaram Nagar, Pimpri, Pune - 411018, Maharashtra, India
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
                  <Mail className="w-4 h-4 text-indigo-700" />
                  Email Addresses
                </div>
                <div className="text-xs space-y-1.5 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Primary:</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.primaryEmail}`}
                      className="font-medium text-slate-900 hover:text-indigo-700"
                    >
                      {PORTFOLIO_DATA.personal.primaryEmail}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Institutional:</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.institutionalEmail}`}
                      className="font-medium text-slate-900 hover:text-indigo-700"
                    >
                      {PORTFOLIO_DATA.personal.institutionalEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
                  <Phone className="w-4 h-4 text-indigo-700" />
                  Phone Numbers
                </div>
                <div className="text-xs space-y-1 mt-2">
                  {PORTFOLIO_DATA.personal.phoneNumbers.map((phone, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-slate-500">Line {i + 1}:</span>
                      <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-mono text-slate-900 hover:text-indigo-700">
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4 text-indigo-700" />
                  Residence Address
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {PORTFOLIO_DATA.personal.address}
                </p>
              </div>

            </div>

          </div>

          {/* Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <h3 className="font-serif-display text-xl font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Fill in your details below to directly initiate an email correspondence.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-emerald-900">Message Ready in Email Client</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Your default email application was opened with your message. You can also reach out directly to {PORTFOLIO_DATA.personal.primaryEmail}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-1.5 text-xs font-medium text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-lg cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Prof. / Mr. / Ms."
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@university.edu"
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Purpose of Inquiry
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 text-slate-900"
                      >
                        <option value="Academic Collaboration">Academic Collaboration</option>
                        <option value="Research & Publications">Research & Publications</option>
                        <option value="Patent Licensing / Commercialization">Patent Licensing</option>
                        <option value="Guest Lecture / FDP Speaker">Guest Lecture / FDP</option>
                        <option value="Student Mentorship">Student Mentorship</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Brief summary..."
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your collaboration proposal or query here..."
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 text-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry to {PORTFOLIO_DATA.personal.primaryEmail}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
