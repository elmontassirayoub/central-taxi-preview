import SEO from "@/components/SEO";
import PageLayout from "@/components/common/PageLayout";
import Tarif from "@/layouts/services/Tarif";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

export default function Tarifs({ admin }: { admin: boolean }) {
    return <PageLayout page="/tarifs" admin={admin}>
        <SEO title="Tarifs Taxi Strasbourg – Central Taxi 67" description="Combien coûte une course chez Central Taxi 67 ? Découvrez tous nos tarifs au km, tarif de jour et tarif de nuit, tarif de prise en charge et suppléments." />
        <Tarif />
    </PageLayout>
}