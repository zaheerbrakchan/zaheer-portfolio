import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

const LINKS = [
  { href: "mailto:xaheer3scc@gmail.com", label: "xaheer3scc@gmail.com", icon: Mail },
  {
    href: "https://www.linkedin.com/in/zaheer-abass-590a31142/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://github.com/zaheerbrakchan", label: "GitHub", icon: Github },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 glass">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center justify-center gap-6 text-center">
        <p className="text-sm text-gray-400 max-w-md leading-relaxed">
          Interested in collaborating or building something together? Let&apos;s talk.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Icon className="w-4 h-4 text-accent-to" />
              {label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Zaheer Abass · AI Engineer & Backend Developer
        </p>
      </div>
    </footer>
  );
}
