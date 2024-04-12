import SEO from "@/components/SEO";
import PageLayout from "@/components/common/PageLayout";
import ForfaitLayout from "@/layouts/services/Forfait";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

export default function Frofait({ admin }: { admin: boolean }) {
    return <PageLayout page="/services/forfait" admin={admin}>
        <SEO title="Forfait – Central Taxi 67" description="Découvrez nos forfaits taxi du moment pour les transferts aéroportuaires, mise à disposition et voyage sur mesure avec nos chauffeurs professionnels à Strasbourg – Alsace." />
        <ForfaitLayout /> 
    </PageLayout>
}