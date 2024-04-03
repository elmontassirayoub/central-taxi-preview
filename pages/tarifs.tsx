import PageLayout from "@/components/common/PageLayout";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

export default function Tarifs({admin}: {admin: boolean}) {
    return <PageLayout page="/terms-of-use" admin={admin}>
        Tarifs
    </PageLayout>
}