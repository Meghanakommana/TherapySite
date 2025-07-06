'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 mb-10 bg-white">
      <h2 className="text-3xl font-extrabold mb-12  text-center md:items-start libre-baskerville-regular text-teal-700">
        Meet Dr. Serena Blake
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center   gap-50">
        {/* Left: Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed gmd:w-2/3">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
          with eight years of experience and over 500 client sessions. She blends evidence-based
          approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
          personalized care to help you overcome anxiety, strengthen relationships, and heal from
          trauma.
          <br />
           Whether you meet in her Maplewood Drive office or connect virtually via Zoom,
          Dr. Blake is committed to creating a safe, supportive space for you to thrive.
        </p>

        {/* Right: Image */}
        <img
          src="/images/serena.jpg"
          alt="Dr. Serena Blake"
          className="w-full md:w-[300px]  object-cover rounded-lg shadow-lg mt-20 md:mt-0"
        />
      </div>
    </section>
  );
}
