import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export default function Transparency() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Åpenhetsloven</h1>
            <p className="text-gray-500 mb-8">Sist oppdatert: 15. desember 2025</p>

            <div className="prose prose-lg max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vår forpliktelse til åpenhet</h2>
                <p>
                  Selv om CloudePulse AS per i dag ikke er omfattet av åpenhetsloven (Lov om virksomheters åpenhet og arbeid med grunnleggende menneskerettigheter og anstendige arbeidsforhold), er vi forpliktet til å drive vår virksomhet på en etisk og ansvarlig måte.
                </p>
                <p className="mt-4">
                  Vi jobber aktivt mot prinsippene i åpenhetsloven og FNs veiledende prinsipper for næringsliv og menneskerettigheter (UNGP), samt OECDs retningslinjer for flernasjonale selskaper.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Menneskerettigheter og arbeidsforhold</h2>
                <p>CloudePulse AS forplikter seg til å:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Respektere grunnleggende menneskerettigheter i all vår virksomhet</li>
                  <li>Sikre anstendige arbeidsforhold for alle ansatte</li>
                  <li>Velge leverandører og samarbeidspartnere som deler våre verdier</li>
                  <li>Kontinuerlig forbedre våre rutiner for aktsomhetsvurderinger</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Våre leverandører</h2>
                <p>
                  Som en skybasert programvaretjeneste har CloudePulse en begrenset leverandørkjede som hovedsakelig består av:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Skyinfrastruktur:</strong> Google Cloud Platform (Firebase) - en anerkjent leverandør med dokumenterte forpliktelser til menneskerettigheter og bærekraft</li>
                  <li><strong>Hosting:</strong> Vercel og Cloudflare - etablerte selskaper med tydelige etiske retningslinjer</li>
                </ul>
                <p className="mt-4">
                  Vi gjennomfører jevnlige vurderinger av våre leverandørers praksis og forpliktelser knyttet til menneskerettigheter og arbeidsforhold.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aktsomhetsvurderinger</h2>
                <p>
                  Vi gjennomfører aktsomhetsvurderinger i tråd med OECDs retningslinjer. Dette inkluderer:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Kartlegging av potensielle risikoer i vår virksomhet og leverandørkjede</li>
                  <li>Vurdering av faktiske og potensielle negative konsekvenser</li>
                  <li>Iverksetting av tiltak for å forebygge, redusere eller stanse negative konsekvenser</li>
                  <li>Overvåking og evaluering av tiltakenes effektivitet</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rett til informasjon</h2>
                <p>
                  I tråd med åpenhetslovens intensjon, har alle rett til å be om informasjon om hvordan CloudePulse AS håndterer faktiske og potensielle negative konsekvenser for grunnleggende menneskerettigheter og anstendige arbeidsforhold.
                </p>
                <p className="mt-4">
                  Henvendelser kan sendes til: <a href="mailto:support@cloudepulse.com" className="text-primary-600 hover:text-primary-700">support@cloudepulse.com</a>
                </p>
                <p className="mt-4">
                  Vi vil besvare henvendelser innen rimelig tid, og senest innen tre uker etter at forespørselen er mottatt.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt oss</h2>
                <p>
                  Har du spørsmål om vårt arbeid med menneskerettigheter og arbeidsforhold, eller ønsker du mer informasjon? Ta kontakt med oss:
                </p>
                <p className="mt-4">
                  <strong>CloudePulse AS</strong><br />
                  E-post: <a href="mailto:support@cloudepulse.com" className="text-primary-600 hover:text-primary-700">support@cloudepulse.com</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Referanser</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a href="https://lovdata.no/dokument/NL/lov/2021-06-18-99" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Åpenhetsloven (Lovdata)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.forbrukertilsynet.no/vi-jobber-med/apenhetsloven" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Forbrukertilsynet - Åpenhetsloven
                    </a>
                  </li>
                  <li>
                    <a href="https://www.oecd.org/corporate/mne/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      OECDs retningslinjer for flernasjonale selskaper
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
