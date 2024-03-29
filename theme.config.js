export default {
    font : true,
    github: 'https://github.com/chrystalio',
    titleSuffix: ' – Kristoff Space',
    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">Kristoff</span>
        </>
    ),
    head: (
        <>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="Content-Language" content="en"/>
            <meta name="description" content="Welcome to my website"/>
            {/*<meta name="og:description" content="Nextra: the Next.js site builder"/>*/}
            <meta name="twitter:card" content="summary_large_image"/>
            {/*<meta name="twitter:image" content="https://nextra.vercel.app/og.png"/>*/}
            {/*<meta name="twitter:site:domain" content="nextra.vercel.app"/>*/}
            {/*<meta name="twitter:url" content="https://nextra.vercel.app"/>*/}
            <meta name="og:title" content="Kristoff site"/>
            {/*<meta name="og:image" content="https://nextra.vercel.app/og.png"/>*/}
            <meta name="apple-mobile-web-app-title" content="Kristoff"/>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-icon-180x180.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/android-icon-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicon-96x96.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        </>

    ),
    search: true,
    nextLinks: false,
    prevLinks: false,
    footerEditLink: false,
    footer: true,
    footerText: <>Made with ☕️ {new Date().getFullYear()} © Kristoff.</>,
    unstable_faviconGlyph: '🚀',
}
