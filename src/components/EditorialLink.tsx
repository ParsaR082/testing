import Link from "next/link";

export function EditorialLink({href,children}:{href:string;children:React.ReactNode}){
  return <Link href={href} className="editorial-link"><span>{children}</span><span className="editorial-arrow" aria-hidden="true">←</span></Link>;
}
