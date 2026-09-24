import Link from "next/link";

type EditorialLinkProps = {
  href:string;
  children:React.ReactNode;
  transitionSource?:string;
};

export function EditorialLink({href,children,transitionSource}:EditorialLinkProps){
  return <Link
    href={href}
    className="editorial-link"
    data-page-transition={transitionSource ? true : undefined}
    data-transition-source-selector={transitionSource}
  >
    <span>{children}</span><span className="editorial-arrow" aria-hidden="true">←</span>
  </Link>;
}
