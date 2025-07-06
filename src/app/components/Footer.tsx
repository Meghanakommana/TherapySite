'use client';

import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="pt-24 pb-6 px-6 bg-[#F4EDE0] text-black">
      <div className="max-w-5xl mx-auto space-y-16 text-center">
        <h2 className="text-4xl font-bold libre-baskerville-regular">🏢 Contact & Office Info</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 text-lg items-center">
          {/* Location */}
          <div className="text-center">
            <h3 className="font-semibold text-xl mb-2">📍 Location</h3>
            <p>1287 Maplewood Drive</p>
            <p>Los Angeles, CA 90026</p>
          </div>

          {/* Experience */}
          <div className="text-center">
            <h3 className="font-semibold text-xl mb-2">💼 Experience</h3>
            <p>8 years of practice</p>
            <p>500+ client sessions</p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="font-semibold text-xl mb-2">📞 Contact</h3>
            <p>Phone: (323) 555-0192</p>
            <p>
              Email:{' '}
              <a
                href="mailto:serena@blakepsychology.com"
                className="underline text-teal-400 hover:text-teal-300"
              >
                serena@blakepsychology.com
              </a>
            </p>
          </div>

          {/* Office Hours */}
          <div className="text-center">
            <h3 className="font-semibold text-xl mb-2">🕒 Office Hours</h3>
            <p>In-person: Tue & Thu, 10 AM–6 PM</p>
            <p>Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6 mb-0">
        © {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
