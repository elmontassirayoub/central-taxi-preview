import Head from "next/head";
import StructuredData from "./StructuredData";

type SEOProps = {
    title: string
    description: string
    canonical?: string
    structuredDataType?: "Organization" | "LocalBusiness" | "TaxiService"
    serviceName?: string
    serviceDescription?: string
    serviceUrl?: string
}

export default function SEO({
    title, 
    description, 
    canonical,
    structuredDataType = "LocalBusiness",
    serviceName,
    serviceDescription,
    serviceUrl
}: SEOProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                {canonical && <link rel="canonical" href={canonical} />}
            </Head>
            <StructuredData 
                type={structuredDataType}
                serviceName={serviceName}
                serviceDescription={serviceDescription}
                serviceUrl={serviceUrl || canonical}
            />
        </>
    )
}