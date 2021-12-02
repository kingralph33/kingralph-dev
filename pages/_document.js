
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel="icon" href="../public/images/ralph_king_memoji.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@1,400;1,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@1,400;1,700&display=swap" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}