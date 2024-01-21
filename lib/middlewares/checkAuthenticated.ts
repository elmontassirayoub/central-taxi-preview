import { getSession } from "@/pages/api/users/editProfile"

const checkAuthentication = (serverSideProps: Function) => {
    return async (context: any) => {
        const session = await getSession(context)

        const admin = session?.user?.email === process.env.ADMIN_EMAIL

        return await serverSideProps(context, admin)
    }
}

export default checkAuthentication