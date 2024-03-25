import Head from "next/head";

export default function SEO({title, description}: {title: string, description: string}) {
    return (
        <Head>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
        </Head>
    )
}