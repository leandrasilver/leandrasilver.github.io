import type { FormEvent } from 'react'

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!name || !email || !message) {
      window.alert('Please complete all fields before submitting.')
      return
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:leandrasilver@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        <div className="sectionTitle2">
          <h3>
            <span>lets get in</span>
          </h3>
          <h2>Touch</h2>
        </div>

        <div className="contactForm">
          <form action="#" method="POST" className="formEmail" autoComplete="off" name="formEmail" onSubmit={handleSubmit}>
            <div className="formFlex">
              <label className="visuallyHidden" htmlFor="contact-name">
                Name
              </label>
              <input type="text" id="contact-name" className="name" name="name" placeholder="Name" required />
              <label className="visuallyHidden" htmlFor="contact-email">
                Email
              </label>
              <input type="email" id="contact-email" className="email" name="email" placeholder="Email" required />
            </div>
            <label className="visuallyHidden" htmlFor="message">
              Message
            </label>
            <textarea name="message" id="message" cols={30} rows={10} placeholder="Message" required></textarea>
            <input type="submit" name="submit" value="Submit" />
          </form>
        </div>
      </div>

      <div className="toTop">
        <a href="#toTop" aria-label="Back to top">
          <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
        </a>
      </div>
      <h4 className="toTopText">Back to Top</h4>
    </section>
  )
}
