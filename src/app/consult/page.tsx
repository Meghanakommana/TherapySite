'use client';

import React from 'react';
import ConsultForm from '../components/ConsultForm';

export default function ConsultPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Book a Free Consult</h1>
        <ConsultForm />
      </div>
    </main>
  );
}
