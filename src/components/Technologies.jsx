import "../styles/Technologies.css";

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Flutter", category: "Mobile" },
  { name: "Python", category: "AI / ML" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Express.js", category: "Backend" },
  { name: "Firebase", category: "Cloud" },
  { name: "Next.js", category: "Frontend" },
];

const Technologies = () => {
  return (
    <section className="technologies">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">OUR STACK</span>
          <h2 className="section-title">Technologies We Work With</h2>
          <p className="section-subtitle">
            We use modern, battle-tested technologies to build fast,
            secure and maintainable software.
          </p>
        </div>

        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div className="tech-chip" key={index}>
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;