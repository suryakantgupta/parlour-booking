import dbConnect from '../../lib/dbConnect';
import { Bookings } from '../../models/bookings';

export default async (req, res) => {
    await dbConnect()

    if (req.method == 'GET') {
        const result = await Bookings.find()
        res.send(result)
    }

    if (req.method == 'POST') {
        const booking = new Bookings(req.body)
        const result = await booking.save()
        res.status(200).json({ status: "ok" })
    }
}