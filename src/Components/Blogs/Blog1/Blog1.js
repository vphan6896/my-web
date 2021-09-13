import pi_logo from './Pi-hole_logo.png'
import Blog from '../../Blog/Blog'

function Blog1() {

    var headlineImage = {
        "height":"200px",
        "width":"400px",
        "marginBottom":"10px"
      }
    var bodyImage0 = {
    "height":"300px",
    "width":"450px"
    }

    return (
        <div>
          <Blog title="Mechanical Keyboards" subtitle="and how I built my own"
          body={
          <div>
           <img style={headlineImage} src={pi_logo} alt="Raspberry Pi and Docker logos on top of a No Ads sign"/>
          <h3 className="has-text-weight-medium is-size-4">TLDR</h3>
          <ul>
            <li>1. Find switches I liked (quiet): Cherry MX Silent Red with Tealios Housing</li>
            <li>2. Find someone to make my custom keycaps: Maxkeyboards.com</li>
            <li>3. Find a case. Preferably hot-swappable so you can plug-n-play switches essentially.: GK96s from Epomaker</li>
            <li>3. Do some labor with switches. Then assemble.</li>
          </ul>
          <h3 className="has-text-weight-medium is-size-4">What's the deal with mechanical keyboards?</h3>
          <div>
            <p className="is-size-5">
            Mechanical keyboards are not a new concept. You can look up on more history behind them but an example
            of an early mechanical keyboard would be the typewriter or the <a href="https://en.wikipedia.org/wiki/Model_M_keyboard">
            Model M Keyboard from IBM
            </a>. 
            In summary, mechanical keyboards offer the end-user what every mouse does: functionality with feedback. Ever notice your mouse clicks make that "clicky" sound?
            That was in-place partly to inform the user that your attempt to press down on the mouse was sufficient to trigger the mouse button. Basic physics but
            this is what keyboards do for us as well.
            </p>
          </div>
          <hr style={{"border-top":"2px solid black"}}/>
          </div>
          }
          
          credits={
          <ul>
            <li>https://www.tomshardware.com/picturestory/736-history-of-mechanical-keyboards.html</li>

          </ul>}
          
          />
        </div>
    )
}

export default Blog1;