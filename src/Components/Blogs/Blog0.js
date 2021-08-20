import Blog from '../Blog/Blog.js'
import kbd_gif from './keyboard.gif'
import lancelot from './lancelot.png'
import keycap from './dropmtfujikeycap.png'
import matcha from './matchakeycaps.png'

function Blog0() {
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
          <img style={headlineImage} src={kbd_gif} alt="Glowing keyboard showing outline of Lancelot"/> <img style={headlineImage} src={lancelot} alt="Lancelot from Fate Zero"/>
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
            <br/><br/>
            If you get deeper into the keyboard hobby, you'll start to notice the finer details such as the sound profile of each keyboard. There may be keyboards with
            more <a href="https://youtu.be/HF0ZlqMe3rw?t=6"> distinct tappy sounds 
            </a> or maybe the <a href="https://youtu.be/x_VRaHneWto?t=99">sound of their clicky switches overwhelm the reverb of the switches</a>.
            Then there's the aesthetic part of keyboards
            which can be appreciated by everyone. Once you move past the ostentatious leds and their numerous settings, you can coordinate color schemes and even get 
            custom-made keycaps to bring some personality to your battlestation. <br/>
            <img style={bodyImage0} src={matcha} alt="soft shades of green colored keycaps"/> <img style={bodyImage0} src={keycap} alt="keycap with Mount Fuji model inside resin"/> 
            
            <h3 className="has-text-weight-medium is-size-4">So why build my own custom one?</h3>
            I dislike membrane keyboards (what you see in offices and schools). It's debatable that they're almost as loud as a mechanical keyboard depending on a user's typing behavior.
            They are difficult to repair due to lack of support and sometimes keys get stuck or not register. When I was coding or typing an essay, pressing the left shift key
            on a Dell membrane keyboard was extremely hard. If I type a "abcdef" quickly, it would register as "acef". Failure to register keystrokes is called ghosting. 
            Good quality keyboards will try to implement anti-ghosting but nothing is perfect. Especially not a Dell keyboard built with low quality parts. 
            <br/><br/> 
            Now, not all non-mechanical keyboards are bad. I am very comfortable typing on laptop keyboards Macs and
            Windows alike. Windows laptops have scissor switches which like other commercial non-mechanical keyboards are difficult to repair (My '-'' minus key is still broken
            on my laptop) and suffer ghosting as well. With less resistance than a membrane keyboard, laptop keyboards have a reactive, light stroke feeling to them which makes
            them comfortable for typing. Fair warning, if you even buy a keyboard from a large company like Logitech, appreciate it for a few years, somehow lost your 'e' key, 
            then it's possible your warranty expired or Logitech no longer has any spare parts to send to you (even if they did, you'll be expecting $5 for a single letter).
            Not to mention, replacing a scissor switch on a laptop is a lot harder than the mechanical keyboards' plug-n-play.
            <br/> <br/>
            <a href="https://switchandclick.com/cherry-mx-guide/"> Guide to Cherry (most popular types of switches) switches</a>
            <br/> <br/>
            My goal was to build a quiet linear keyboard with custom keycaps outlined in white for backlight capability as you can see at the top of the page. Linears eliminate
            sound from the mechanical switch. I've used Cherry MX reds before from a <a href="https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/CORSAIR-Gaming-K70-Mechanical-Gaming-Keyboard-%E2%80%94-CHERRY%C2%AE-MX-Red/p/CH-9000069-NA">
            Corsair K70 </a>. They're light to press on but still make a significant sound when typing. A quick google search showed there were Cherry MX Silent Red switches 
            which were basically red switches but had rubber dampeners at the bottom to cut some of the sound of pressing down on a key. Then I thought, if I'm going out of my 
            way to find a vendor that makes custom keycaps, I might as well make my switches feel a little more premium feeling. What better to do then to consult a friend who 
            knows more than me? TLDR: He recommended putting the Cherry MX Red Silent stem (inside part of a switch) in a Tealios housing (outside casing part of a switch). 
            This housing would provide a more firm and solid feel than that of the Cherry's which can further dampen any unwanted sound. One flaw with this frankenswitch is
            paying for twice the amount of switches and the labor to swap the parts out. It's not a difficult thing to do, but it is tedious.
            </p>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <hr style={{"border-top":"2px solid black"}}/>
          </div>
          }
          
          credits={
          <ul>
            <li>https://www.tomshardware.com/picturestory/736-history-of-mechanical-keyboards.html</li>
            <li>https://switchandclick.com/cherry-mx-guide/</li>
            <li>https://drop.com/buy/gks-xda-v2-dye-subbed-pbt-matcha-keycap-set</li>
            <li>https://drop.com/buy/bkd-mt-fuji-wood-resin-artisan-keycap</li>
          </ul>}
          
          />
        </div>
    )
}

export default Blog0;