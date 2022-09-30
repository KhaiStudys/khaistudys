export default function Projects({ children }) {
  return (
    <section className="container mx-auto p-4 my-24">
      <h2 className="text-3xl font-medium">Projects (more coming soon...)</h2>
      <div className="flex flex-wrap gap-6">{children}</div>
    </section>
  );
}
