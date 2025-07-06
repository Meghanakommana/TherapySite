'use client';

import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative relative bg-[#F4EDE0] bg-cover bg-center h-screen">
         <div className="absolute top-8 left-20 text-2xl font-bold text-black-300 drop-shadow-md">
        Dr. Serena Blake. Psy.D.
      </div>
    <section
      id="hero"
      className="relative h-[70vh] w-full top-20 bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/beachback.webp')" }}
    >
      {/* Name top-left */}
     

      {/* Glass content card */}
      <div className="absolute inset-0 text-center p-8 md:p-10 top-65 items-center justify-center px-6">
        {/* <div className="bg-white/30 backdrop-blur-lg p-8 md:p-10 rounded-xl max-w-xl text-center text-black shadow-xl border border-white/50"> */}
          <h1 className="text-6xl font-bold mb-4 mt-8">Dr. Serena Blake. Psy.D.</h1>
          <br />
          <p className="text-lg mb-6">
            Compassionate therapy for anxiety, relationships & trauma.
          </p>
          <button
            onClick={() => router.push('/consult')}
            className="bg-teal-500 hover:bg-teal-600 text-black px-6 py-2 rounded-md transition"
          >
            Book a Free Consultation
          </button>
        {/* </div> */}
      </div>
    </section></div>
  );
} 
