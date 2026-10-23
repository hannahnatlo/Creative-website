import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="story" className="restaurant-section story-section">
          <p className="eyebrow">PANINI · PIZZA · ESPRESSO</p>
          <h2>A little Italian.<br /><em>A lot of heart.</em></h2>
          <p>Your lunch break, your coffee stop, your next pizza night. Find a taste of Italy and a warm welcome at Cosetta in downtown Fairfield.</p>
          <a className="text-link" href="https://www.cosetta.net/ourstory">Meet Cosetta ↗</a>
        </section>
        <section id="visit" className="restaurant-section visit-section">
          <div>
            <p className="eyebrow">COME ON IN</p>
            <h2>See you at<br /><em>Cosetta.</em></h2>
            <address>1560 Post Road<br />Fairfield, CT 06824</address>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&amp;query=Cosetta+1560+Post+Road+Fairfield+CT">Get directions ↗</a>
          </div>
          <div className="visit-details">
            <h3>Opening hours</h3>
            <dl>
              <div><dt>Monday – Tuesday</dt><dd>10 am – 8 pm</dd></div>
              <div><dt>Wednesday – Friday</dt><dd>10 am – 9 pm</dd></div>
              <div><dt>Saturday</dt><dd>9 am – 9 pm</dd></div>
              <div><dt>Sunday</dt><dd>9 am – 8 pm</dd></div>
            </dl>
            <a className="text-link" href="tel:+12032552292">(203) 255-2292</a>
            <p><a className="text-link" href="https://www.instagram.com/cosettapaninoteca/">Follow along on Instagram ↗</a></p>
          </div>
        </section>
      </main>
      <footer>Cosetta · Paninoteca &amp; Pizzeria · Fairfield, Connecticut</footer>
    </div>
  )
}

export default App
