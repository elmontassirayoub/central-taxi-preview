import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import PageLayout from "@/components/common/PageLayout";
import BookLayout from "@/layouts/book";



export type CoordinationType = {
    lat: number,
    lng: number
}

export type ReservationData = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    address: "",
    email: "",
    message: ""
}

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {

    if (admin) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            admin
        }
    }
})

export default function Book({ admin = false }: { admin: boolean }) {

    return <PageLayout admin={admin} page="/book">
        <div className="my-10">
            <BookLayout />
        </div>
    </PageLayout>
}