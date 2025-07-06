'use client';

const areas = [
  {
    image: '/images/anxiety.jpg',
    title: 'Anxiety & Overthinking',
    desc: 'Tools to calm the mind, ease racing thoughts, and reclaim inner peace.',
  },
  {
    image: '/images/couple.jpg',
    title: 'Relationships & Boundaries',
    desc: 'Strengthen connection, build confidence, and navigate emotional patterns.',
  },
  {
    image: '/images/trauma.jpg',
    title: 'Healing from Trauma',
    desc: 'Gentle, evidence-based care to help process and move forward.',
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="py-[160px] px-6 bg-[#F4EDE0] text-gray-800">
  <div className="max-w-4xl mx-auto text-center mb-20">
    <p className="text-4xl text-gray-700 mb-8 leading-relaxed libre-baskerville-regular">
      Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
    </p>
    <p className="text-lg text-gray-700 mb-8 libre-baskerville-regular">
      You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma,
      grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships.
      Whatever the source of your stress, you don't have to face it alone.
      Therapy offers you the time and space to work toward wellness and peace.
    </p>

    <hr className="border-t border-black w-3/4 mx-auto" />

    <h2 className="text-4xl font-bold text-teal-700 mt-32 mb-4 libre-baskerville-regular uppercase tracking-wide">
      Services Offered
    </h2>
    <p className="text-xl text-gray-600 libre-baskerville-regular">Support that meets you where you are</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-15  mx-auto">
    {areas.map((area, index) => (
      <div key={index} className="flex flex-col items-center text-center">
        <img
          src={area.image}
          alt={area.title}
          className="w-100 h-100 rounded-full object-cover shadow-md transition-transform hover:scale-105"
        />
        <h3 className="text-3xl font-bold libre-baskerville-regular text-teal-800 mt-6">
          {area.title}
        </h3>
        <p className="text-lg text-gray-700  mt-3">{area.desc}</p>
      </div>
    ))}
  </div>
</section>

  );
}
