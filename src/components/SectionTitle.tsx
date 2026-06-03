export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 flex items-center gap-3">
      <span
        className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-accent-from to-accent-to shrink-0"
        aria-hidden
      />
      <span className="text-accent-gradient">{title}</span>
    </h2>
  );
}
