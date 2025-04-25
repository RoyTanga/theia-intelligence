export default async function handler(req, res) {
  const { prompt } = req.body
  const reply = `Echoing: ${prompt}` // Replace with real GPT integration
  res.status(200).json({ reply })
}
