export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2 border-slate-200">
      {title}
    </h2>
  );
}
