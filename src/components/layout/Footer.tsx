import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="site-footer border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
        <p className="footer-copy text-xs text-zinc-400">
          © {new Date().getFullYear()} Douglas Figueirôa. {t("rights")}
        </p>
        <div className="flex items-center gap-5 text-xs">
          <Link href="mailto:figueiroadouglas@gmail.com" className="hover:underline">
            {t("email")}
          </Link>
          <Link
            href="https://linkedin.com/in/douglas-figueirôa-1ba2541bb"
            target="_blank"
            className="hover:underline"
          >
            {t("linkedin")}
          </Link>
          <Link
            href="https://github.com/DouglasiOSDeveloper"
            target="_blank"
            className="hover:underline"
          >
            {t("github")}
          </Link>
          <Link
            href="https://www.instagram.com/douglas.figueiroa/"
            target="_blank"
            className="hover:underline"
          >
            {t("instagram")}
          </Link>
          <Link
            href="https://wa.me/61982541672?text=Hello Douglas! I'm Interested in your work. Let's chat!"
            target="_blank"
            className="hover:underline"
          >
            {t("whatsapp")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
