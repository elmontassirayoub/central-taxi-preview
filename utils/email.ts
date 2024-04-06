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

    const text = admin ? "Reservation" : status === "pending" ? "Madame, Monsieur, \n\nPar la présente, je me permets de vous informer qu'on a bien reçu la réservation de votre taxi" : status === "confirmed" ? "Cher(e) client(e),\n\nNous vous remercions chaleureusement pour votre réservation de taxi sur notre site internet.\n\nNous sommes ravis de vous confirmer que votre réservation a bien été prise en compte.\n\nVotre taxi sera prêt et à votre disposition à l'heure convenue.\n\nNotre équipe s'assurera de vous offrir un service de qualité et sécurisé pour vous conduire à votre destination.\n\nN'hésitez pas à nous contacter si vous avez besoin de plus d'informations ou si vous souhaitez apporter des modifications à votre réservation.\n\nNous sommes impatients de vous accueillir à bord de l'un de nos taxis.\n\nCordialement\n\nResponsable chargé du service clientèle Central Taxi 67" : "Cher client,Nous avons bien reçu votre demande de réservation de taxi via notre site internet. Malheureusement, nous sommes au regret de vous informer que nous ne pourrons pas honorer votre demande pour le moment. En raison d'une disponibilité limitée ou d'une surcharge de demandes, nous ne sommes pas en mesure de garantir votre réservation. Nous vous prions de nous excuser pour tout désagrément que cela pourrait causer. Nous vous encourageons à explorer d'autres options de transport ou à nous contacter pour voir s'il est possible de vous assister d'une autre manière.\n\nCordialement\n\nResponsable chargé du service clientèle Central Taxi 67"

    const html = (confirmation || !admin) ? "" : `<h3>Nouvelle reservation confirmer or annuler <a style='text-decoration: underline; color: blue;' href='${process.env.NEXTAUTH_URL}/admin/${reservation?._id}'>Cliquer Ici</a></h3>`

    const mailBaseOptions = { from: process.env.EMAIL, to, subject, text }
    const  mailOptions = (confirmation || !admin) ? {...mailBaseOptions} : {...mailBaseOptions, html}

    await transporter.sendMail(mailOptions)
    return
}