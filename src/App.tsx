import { motion, useReducedMotion } from 'framer-motion'
import './index.css'

const order = '#visit'
const menu = '#food'

export default function App() {
  const reduceMotion = useReducedMotion()
  return (
    <>
      <header className="header">
        <a className="wordmark" href="#home" aria-label="Cosetta home">cosetta<span>✳</span></a>
        <nav aria-label="Main navigation"><a href="#food">The food</a><a href="#about">The feeling</a><a href="#visit">Find us</a></nav>
        <a className="button small" href={order}>Plan your visit <span>↗</span></a>
      </header>
      <main id="home">
        <section className="hero">
          <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <p className="eyebrow"><span className="dot" /> YOUR ITALIAN CORNER · FAIRFIELD, CT</p>
            <h1>Good food.<br />Great company.<br /><span>That’s Cosetta.</span></h1>
            <p className="intro">A slice on the go. A lunch worth slowing down for. Italian favorites for whatever the day brings.</p>
            <div className="actions"><a className="button" href={menu}>Explore the menu <span>↗</span></a><a className="underlink" href="#visit">Come say ciao <span>↓</span></a></div>
            <div className="hero-note"><span>01 / A LITTLE TASTE OF ITALY</span><span>1560 POST ROAD</span></div>
          </motion.div>
          <motion.div className="hero-photo" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .9 }}>
            <img src={`${import.meta.env.BASE_URL}cosetta-pizza.jpg`} alt="Cosetta pizza topped with prosciutto and fresh basil" fetchPriority="high" />
            <span className="photo-tag">THE EVERYDAY, DONE DELICIOUSLY.</span>
            <a className="round-link" href={order} aria-label="Find visiting information">CIAO!<br /><span>↗</span></a>
          </motion.div>
        </section>
        <div className="ticker" aria-label="Panini, pizza, espresso"><span>PANINI</span><i>✳</i><span>PIZZA</span><i>✳</i><span>ESPRESSO</span><i>✳</i><span>BUON APPETITO</span><i>✳</i></div>
        <section id="food" className="food-section">
          <div className="section-top"><p className="eyebrow">01 — THE FOOD</p><p>Simple pleasures.<br />Very good taste.</p></div>
          <div className="food-heading"><h2>Your next<br /><em>“usual.”</em></h2><p>Meet your lunch plans, your pizza-night plans, and your just-one-coffee plans. There’s a little something for every appetite.</p></div>
          <div className="food-grid">
            <article className="food-card"><div className="card-image"><img src={`${import.meta.env.BASE_URL}cosetta-hero.jpg`} alt="A selection of Italian panini from Cosetta" loading="lazy" /></div><div className="card-caption"><h3>Panini</h3><span>01</span></div><p>Big layers. A very good lunch.</p></article>
            <article className="food-card"><div className="card-image"><img src={`${import.meta.env.BASE_URL}cosetta-pizza.jpg`} alt="Fresh pizza from Cosetta in Fairfield" loading="lazy" /></div><div className="card-caption"><h3>Pizza</h3><span>02</span></div><p>For the table. Or all for you.</p></article>
            <article className="coffee-card"><span className="eyebrow">MAKE A LITTLE TIME</span><div className="coffee-art" aria-hidden="true">☕</div><div className="card-caption"><h3>Espresso &amp; more</h3><span>03</span></div><p>Your daily pause, Italian style.</p></article>
          </div>
        </section>
        <section id="about" className="about-section"><p className="eyebrow">02 — THE FEELING</p><h2>A neighborhood spot.<br />An Italian state of mind.</h2><div className="about-bottom"><span className="asterisk" aria-hidden="true">✳</span><p>Some days call for a quick bite. Others call for one more coffee and a longer conversation. Make Cosetta part of your day, right here in downtown Fairfield.</p><a className="underlink" href="#visit">Make yourself at home ↗</a></div></section>
        <section id="visit" className="visit-section"><div><p className="eyebrow">03 — YOUR NEXT STOP</p><h2>See you<br />on Post Road.</h2><address>1560 Post Road<br />Fairfield, CT 06824</address><p className="location-note">Downtown Fairfield, Connecticut</p></div><div className="visit-info"><h3>Come hungry.</h3><dl><div><dt>Monday — Tuesday</dt><dd>10 am — 8 pm</dd></div><div><dt>Wednesday — Friday</dt><dd>10 am — 9 pm</dd></div><div><dt>Saturday</dt><dd>9 am — 9 pm</dd></div><div><dt>Sunday</dt><dd>9 am — 8 pm</dd></div></dl><div className="contact-links"><span>(203) 255-2292</span><span>Stop by. Stay a little.</span></div></div></section>
      </main>
      <footer><a className="footer-mark" href="#home">cosetta<span>↗</span></a><div className="footer-bottom"><span>PANINOTECA · PIZZERIA · FAIRFIELD, CT</span><span>Pizza photography: CT Bites</span><span>BUON APPETITO.</span></div></footer>
    </>
  )
}
