import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* HEADER */}
      <header className="text-center py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md">
        <h1 className="text-5xl font-bold tracking-tight">
          My Portfolio
        </h1>
        <p className="mt-3 text-gray-300 text-lg">
          Web Developer | Student | Tech Enthusiast
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto p-6 space-y-10">

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <AboutMe />
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <Education />
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <Experience />
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <Skills />
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <Contact />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-8 bg-gray-100 text-gray-600 mt-16 border-t">
        <p>© 2026 Icasiam Marc S.</p>
      </footer>

    </div>
  );
}