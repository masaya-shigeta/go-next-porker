import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ruleText, setRuleText] = useState("")
  const [errors, setErrors] = useState([])

  const submitValue = async (event) => {
    const text = event.target.text.value
    event.preventDefault()
    const res = await fetch("/api/porker", {
      method: 'POST',
      body: JSON.stringify({text: text}),
      headers: { 'Content-Type': 'application/json' },
    })
    const json = await res.json()
    setRuleText(json.text)
    setErrors(json.errors)
  }

  return (
    <div className={styles.container}>
      <form className="flex flex-col" onSubmit={submitValue}>
        <p>
          <input id="text" name="text" type="text" />
        </p>
        <p>
          <button type="submit">送信</button>
        </p>
      </form>
      <p>{ruleText}</p>
      <p>{errors}</p>
    </div>
  )
}
