import { useState } from 'react'

export default function TheiaAssistant() {
  const [show, setShow] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = async () => {
    if (!input) return
    const newMessages = [...messages, { role: 'user', text: input }]
    setMessages(newMessages)
    setInput('')
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    })
    const data = await res.json()
    setMessages([...newMessages, { role: 'assistant', text: data.reply }])
  }

  return (
    <>
      <button onClick={() => setShow(!show)} className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-full shadow-lg z-50">
        Ask Theia
      </button>
      {show && (
        <div className="fixed bottom-20 right-6 w-96 bg-white shadow-xl rounded-lg p-4 z-50">
          <div className="h-64 overflow-y-auto border-b mb-2">
            {messages.map((m, i) => (
              <div key={i} className={\`my-1 text-sm \${m.role === 'user' ? 'text-right' : 'text-left text-blue-600'}\`}>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask something..." className="border flex-grow p-2 rounded" />
            <button onClick={sendMessage} className="bg-blue-600 text-white px-3 py-2 rounded">Send</button>
          </div>
        </div>
      )}
    </>
  )
}
