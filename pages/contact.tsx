import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import PageLayout from "@/components/common/PageLayout";
import ContactLayout from "@/layouts/Contact";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
  return {
    props: {
      admin
    }
  }
})

export default function Contact({ admin = false }: { admin: boolean }) {

  return <PageLayout admin={admin} page="/contact">
    <ContactLayout />
  </PageLayout>
}