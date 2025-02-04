import React from "react";
import Link from "next/link";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <div>
      <section>
        <h1>Index Page</h1>
      </section>
      <section>
        <Link
          href="/sections/onboarding/sign-in"
          className="hover:text-blue-600"
        >
          Sign In
        </Link>
      </section>
    </div>
  );
};

export default IndexPage;
