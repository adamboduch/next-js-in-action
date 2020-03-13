import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ActiveLink({ title, ...props }) {
  const router = useRouter();

  return (
    <Fragment>
      <Link {...props}>
        <a>{title}</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: unset;
          transition: color 0.2s ease;
          font-weight: ${props.href === router.pathname ? "bold" : "normal"};
        }
        a:hover {
          color: gray;
        }
      `}</style>
    </Fragment>
  );
}
