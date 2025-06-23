import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

export const metadata = {
  title: "Nouns DAO Docs",
  description: "Documentation for Nouns DAO",
};

const navbar = (
  <Navbar
    logo={
      <img src="/images/general/logo.svg" alt="Logo" width={100} height={20} />
    }

    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Nouns DAO.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <link rel="shortcut icon" href="/images/general/docs-head.svg" />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/nounsDAO/docs/tree/main"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
