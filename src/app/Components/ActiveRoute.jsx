import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Link from "next/link";

export default function ActiveRoute({ children, href }) {
  const pathname = usePathname()
  const active = pathname == href ? true : false;
  const border = active ? "border-amber-400 border-b-2 " : "border-cyan-900";

  return (
    <Link href={href}>
      <div className={border}>{children}</div>
    </Link>
  );
}