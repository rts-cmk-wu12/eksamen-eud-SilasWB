"use client"
import { useActionState } from "react"
import News from "@/actions/newsletter/news"

export default function Nyhedsbrev() { 
    const [formState, formAction, isPending] = useActionState(News)
  
    return (
        <> 
         <h2>NewsLetter</h2>
  
          <form className="contact__form" action={formAction}>
              <section className="contact">
              <div>
                  <label>
                      <span>Email</span>
                      <input className="contact__search-input" type="email" name="emailnews" defaultValue={formState?.data?.emailnews} />
                    <p>{formState?.properties?.emailnews?.errors}</p>
                  </label>
              </div>
              <button type="submit">Sign Up</button>
          </section>
          </form> 
        
  </>
    )
}