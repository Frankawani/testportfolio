import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

/*{project?.technologies.map((tech) => (
                  <img
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt=""
                    className=" h-6 w-6"
                  />
                ))} */
