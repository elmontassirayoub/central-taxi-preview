import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import PageLayout from "@/components/common/PageLayout";
import ServicesLayout from "@/layouts/services";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

export default function Services({ admin = false }: { admin: boolean }) {

    return <PageLayout page="/services" admin={admin}>
        <ServicesLayout />
    </PageLayout >
}