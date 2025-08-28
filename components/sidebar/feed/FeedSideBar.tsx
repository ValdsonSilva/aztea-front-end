// components/AzteaSidebar.tsx
import { useAuthContext } from "@/services/authContext";
import Link from "next/link";

type NavItem = { label: string; href?: string };
type Props = { className?: string };

export default function Sidebar({ className = "" }: Props) {
  const explore: NavItem[] = [
    { label: "Curated collections", href: "#" },
    { label: "Reading rooms", href: "#" },
    { label: "Archives", href: "#" },
  ];
  const authors: NavItem[] = [
    { label: "Explore", href: "#" },
    { label: "More", href: "#" },
  ];

  const { logout } = useAuthContext();

  return (
    <aside className={`text-white ${className}`}>
      <div
        className="
          mx-auto flex min-h-[65vh] lg:min-h-[75vh] w-full
          max-w-[13rem] flex-col items-center lg:items-start
          justify-center lg:justify-start gap-6 lg:gap-8 px-3
        "
      >
        {/* EXPLORE */}
        <div className="w-full">
          <h3
            className="
              text-center lg:text-left uppercase tracking-[0.16em]
              text-base sm:text-lg md:text-xl font-light
            "
          >
            EXPLORE
          </h3>
          <ul className="mt-4 space-y-1.5 sm:space-y-2 text-center lg:text-left">
            {explore.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href ?? "#"}
                  className="
                    text-sm sm:text-base md:text-[0.95rem]
                    font-light leading-snug hover:opacity-90
                    focus:underline underline-offset-4
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* AUTHORS */}
        <div className="w-full">
          <h3
            className="
              text-center lg:text-left uppercase tracking-[0.16em]
              text-base sm:text-lg md:text-xl font-light
            "
          >
            AUTHORS
          </h3>
          <ul className="mt-4 space-y-1.5 sm:space-y-2 text-center lg:text-left">
            {authors.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href ?? "#"}
                  className="
                    text-sm sm:text-base md:text-[0.95rem]
                    font-light leading-snug hover:opacity-90
                    focus:underline underline-offset-4
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LIVESTREAMMING */}
        <h3
          className="
            text-center lg:text-left uppercase tracking-[0.22em]
            text-sm sm:text-base font-light
          "
        >
          LIVESTREAMMING
        </h3>

        {/* Botão Log out */}
        <button
          onClick={logout}
          className="
            mt-4 lg:mt-6 w-44 sm:w-52 rounded-xl border border-white/70
            px-4 py-2 text-sm sm:text-base font-light
            hover:bg-white hover:text-black transition
            focus:outline-none focus:ring-2 focus:ring-white/70
            cursor-pointer
          "
        >
          Log out
        </button>
      </div>
    </aside>
  );
}

