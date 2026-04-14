export default function Skills() {
  const skills = [
    "Web Development",
    "Programming and Coding",
    "IT Security",
    "Systems Analysis",
    "Music and Instruments",
    "Video Games and E-sports",
    "Continuous Learning",
    "Career Growth"
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold text-gray-800">Areas of Interest</h2>

      <div className="flex flex-wrap gap-3 mt-4">
        {skills.map((item, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}