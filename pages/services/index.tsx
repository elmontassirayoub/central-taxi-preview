import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import PageLayout from "@/components/common/PageLayout";
import ServicesLayout from "@/layouts/services";
import SEO from "@/components/SEO";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

export default function Services({ admin = false }: { admin: boolean }) {

    return <PageLayout page="/services" admin={admin}>
        <SEO title="Taxi Strasbourg Service pour le transport privé et professionnel" description="Central Taxi 67 vous propose des solutions de transport adaptées à tous vos besoins de déplacements à Strasbourg et en Alsace. Véhicules confortables accueillant  jusqu'à 8 passagers." />
        <ServicesLayout />
    </PageLayout >
}