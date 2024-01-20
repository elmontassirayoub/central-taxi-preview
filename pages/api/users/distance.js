export default async function handler(req, res) {
    let { depart, arrive } = req.body
    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=place_id:${depart}&destinations=place_id:${arrive}&key=${process.env.GOOGLE_MAPS_API_KEY_DISTANCE}`

    try {
        const response = await fetch(url)
        const result = await response.json()
        res.status(201).json({...result.rows[0]?.elements[0],})
    } catch (e) {
        console.log("error: ", e)
        res.status(403).json({ message: e?.message || "Something went wrong" })
    }

}