export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-white mb-6 flex items-center gap-4">
      <span className="w-8 h-[2px] bg-gradient-to-r from-ai-cyan to-transparent inline-block"></span>
      {title}
    </h2>
  );
}
