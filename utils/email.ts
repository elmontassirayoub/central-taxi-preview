import nodemailer from "nodemailer"

export default async function sendMail({to, admin, confirmation, status , reservation}: {to: string, admin: boolean, confirmation: boolean, status: string, reservation: {date: string, time: string, from: string, to: string, _id: string}}) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
        }
    });
    

    const subject = admin ? "Nouvelle Reservation" : status === "confirmed" ? "Confirmation de réservation Taxi" : status === "cancelled" ? "Annulation de réservation Taxi" : "Votre réservation a été reçue"

    const text = admin ? "Reservation" :  `Madame, Monsieur, \n\nPar la présente, ${status === "pending" ? "je me permets de vous informer qu'on a bien reçu " : `je me permets de vous ${status === "confirmed" ? "confirmer" : "annuler"}`} la réservation de votre taxi en date du ${reservation.date.split('T')[0]} ${reservation.time} , de ${reservation.from} à destination de ${reservation.to}. \n\nSalutations les plus distinguées de la part de toute l'equipe CENTRAL TAXI 67 . \nCordialement CENTRAL TAXI 67`

    const html = (confirmation || !admin) ? "" : `<h3>Nouvelle reservation confirmer or annuler <a style='text-decoration: underline; color: blue;' href='${process.env.NEXTAUTH_URL}/admin/${reservation?._id}'>Go here</a></h3>`

    const mailBaseOptions = { from: process.env.EMAIL, to, subject, text }
    const  mailOptions = (confirmation || !admin) ? {...mailBaseOptions} : {...mailBaseOptions, html}

    await transporter.sendMail(mailOptions)
    return
}