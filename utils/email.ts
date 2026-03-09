import nodemailer from "nodemailer"

export default async function sendMail({to, admin, confirmation, status , reservation}: {to: string, admin: boolean, confirmation: boolean, status: string, reservation: {date: string, time: string, from: string, to: string, _id: string}}) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
        }
    });

    const subject = admin
        ? "Nouvelle réservation – Taxis Strasbourg – Central Taxi 67"
        : status === "confirmed"
            ? "Votre demande de réservation – Taxis Strasbourg – Central Taxi 67"
            : status === "cancelled"
                ? "Votre demande de réservation – Taxis Strasbourg – Central Taxi 67"
                : "Votre demande de réservation a bien été reçue – Taxis Strasbourg – Central Taxi 67"

    const text = admin
        ? "Nouvelle réservation reçue. Consultez le détail dans l’espace administrateur."
        : status === "pending"
            ? `Bonjour,

Merci pour votre demande auprès de Taxis Strasbourg – Central Taxi 67.

Votre réservation a bien été reçue et est actuellement en cours de vérification.
Nous vous confirmerons rapidement par SMS ou par email avec tous les détails de votre prise en charge.

Pour toute demande urgente, vous pouvez nous contacter directement au +33 (0)6 47 60 01 71.

À très bientôt,
Taxis Strasbourg – Central Taxi 67 – Aéroports & Gares`
            : status === "confirmed"
                ? `Bonjour,

Nous avons le plaisir de vous confirmer que votre réservation auprès de Taxis Strasbourg – Central Taxi 67 est bien acceptée.

Votre trajet est désormais planifié. Notre chauffeur se présentera au point de rendez-vous convenu à l’heure indiquée. Pour les transferts aéroport, le suivi du vol est effectué en temps réel afin d’adapter la prise en charge en cas de retard.

Pour toute modification ou information complémentaire, vous pouvez nous joindre directement au +33 (0)6 47 60 01 71.

Merci pour votre confiance et à très bientôt à bord.

Taxis Strasbourg – Central Taxi 67 – Aéroports & Gares`
                : `Bonjour,

Nous vous remercions pour votre demande auprès de Taxis Strasbourg – Central Taxi 67.

Malheureusement, nous ne sommes pas disponibles à l’horaire souhaité et ne pouvons pas confirmer cette réservation.
Nous restons néanmoins à votre disposition pour toute autre date ou demande de transport.

Si besoin, nous pouvons également vous orienter vers un chauffeur partenaire indépendant selon les disponibilités.

Merci pour votre compréhension.

Taxis Strasbourg – Central Taxi 67 – Aéroports & Gares
+33 (0)6 47 60 01 71`

    const html = (confirmation || !admin) ? "" : `<h3>Nouvelle reservation confirmer or annuler <a style='text-decoration: underline; color: blue;' href='${process.env.NEXTAUTH_URL}/admin/${reservation?._id}'>Cliquer Ici</a></h3>`

    const mailBaseOptions = { from: process.env.EMAIL, to, subject, text }
    const  mailOptions = (confirmation || !admin) ? {...mailBaseOptions} : {...mailBaseOptions, html}

    await transporter.sendMail(mailOptions)
    return
}