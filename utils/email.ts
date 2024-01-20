import nodemailer from "nodemailer"

export default async function sendMail(to: string, admin: boolean, confirmation: boolean, reservation: {date: string, time: string, from: string, to: string, _id: string}) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
        }
    });

    const subject = confirmation ? 'Confirmation de réservation Taxi' : admin ? 'Nouvelle Reservation' : 'Votre réservation a été reçue'
    const text = confirmation ? `Madame, Monsieur, \n\nPar la présente, je me permets de vous confirmer la réservation de votre taxi en date du ${reservation.date.split('T')[0]} ${reservation.time} , de ${reservation.from} à destination de ${reservation.to}. \n\nSalutations les plus distinguées de la part de toute l'equipe CENTRAL TAXI 67 . \nCordialement CENTRAL TAXI 67` : admin ? `Reservation` : `Madame, Monsieur, \n\nPar la présente, je me permets de vous informer qu'on a bien reçu la réservation de votre taxi en date du ${reservation.date.split('T')[0]} ${reservation.time} , de ${reservation.from} à destination de ${reservation.to}.\n\nSalutations les plus distinguées de la part de toute l'equipe CENTRAL TAXI 67.\n\nCordialement CENTRAL TAXI 67`
    const html = (confirmation || !admin) ? "" : `<h3>Nouvelle reservation confirmer or annuler <a style='text-decoration: underline; color: blue;' href='${process.env.APP_URL}/admin/reservation/${reservation?._id}'>Go here</a></h3>`

    const mailBaseOptions = { from: process.env.EMAIL, to, subject, text }
    const  mailOptions = (confirmation || !admin) ? {...mailBaseOptions} : {...mailBaseOptions, html}

    await transporter.sendMail(mailOptions)
    return
}