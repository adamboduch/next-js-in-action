import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

export default function StatefulLink({ href, as, title }) {
  const [changing, setChanging] = useState(false);

  function onClick(e) {
    if (changing) {
      e.preventDefault();
    }
  }

  function onRouteChangeStart() {
    setChanging(true);
  }

  useEffect(() => {
    Router.events.on("routeChangeStart", onRouteChangeStart);
    return () => {
      Router.events.off("routeChangeStart", onRouteChangeStart);
    };
  }, []);

  return (
    <Fragment>
      <Link href={href} as={as}>
        <a onClick={onClick}>{title}</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: unset;
          transition: color 0.2s ease;
        }
        a:hover {
          color: gray;
        }
      `}</style>
    </Fragment>
  );
}
