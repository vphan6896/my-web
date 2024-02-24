import Blog from '../../Blog/Blog.js'
import BlogCredit from '../../Blog/BlogCredit.js'
import kbd_gif from '../keyboard.gif'
import lancelot from './lancelot.png'
import keycap from './dropmtfujikeycap.png'
import matcha from './matchakeycaps.png'
import design from './wipDesigning.png'
import keychron from './keychronc2.jpg'
import foam from './foam.jpg'
import le1 from './le1.png'
import le2 from './le2.png'

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

    var blockTitle="has-text-weight-medium is-size-4";
    var blockStyle="is-size-5 block"

    return (
        <div>
          <Blog title="Mechanical Keyboards" subtitle="and how I built my own"
          body={
          <div>
          <img style={headlineImage} src={kbd_gif} alt="Glowing keyboard showing outline of Lancelot"/> <img style={headlineImage} src={lancelot} alt="Lancelot from Fate Zero"/>
          <h3 className={blockTitle}>TLDR</h3>
          <ul className="block">
            <li>1. Find switches I liked (quiet): Cherry MX Silent Red with Tealios Housing</li>
            <li>2. Find someone to make my custom keycaps: Maxkeyboards.com</li>
            <li>3. Find a case. Preferably hot-swappable so you can plug-n-play switches essentially.: GK96s from Epomaker</li>
            <li>3. Do some labor with switches. Then assemble.</li>
          </ul>
          <div>
            <h3 className={blockTitle}>What's the deal with mechanical keyboards?</h3>
            <p className={blockStyle}>
            Mechanical keyboards are not a new concept. You can look up on more history behind them but an example
            of an early mechanical keyboard would be the typewriter or the <a href="https://en.wikipedia.org/wiki/Model_M_keyboard">
            Model M Keyboard from IBM
            </a>. 
            </p>
            <p className={blockStyle}>
            In summary, mechanical keyboards offer the end-user what every mouse does: functionality with feedback. Ever notice your mouse clicks make that "clicky" sound?
            That was in-place partly to inform the user that your attempt to press down on the mouse was sufficient to trigger the mouse button. Basic physics but
            this is what keyboards do for us as well.
            </p>
            <p className={blockStyle}>
            If you get deeper into the keyboard hobby, you'll start to notice the finer details such as the sound profile of each keyboard. There may be keyboards with
            more <a href="https://youtu.be/HF0ZlqMe3rw?t=6"> distinct tappy sounds 
            </a> or maybe the <a href="https://youtu.be/x_VRaHneWto?t=99">sound of their clicky switches overwhelm the reverb of the switches</a>.
            Then there's the aesthetic part of keyboards
            which can be appreciated by everyone. Once you move past the ostentatious leds and their numerous settings, you can coordinate color schemes and even get 
            custom-made keycaps to bring some personality to your battlestation. <br/>
            <img style={bodyImage0} src={matcha} alt="soft shades of green colored keycaps"/> <img style={bodyImage0} src={keycap} alt="keycap with Mount Fuji model inside resin"/> 
            </p>
            <p className={blockStyle}>
            <h3 className={blockTitle}>So why build my own custom one?</h3>
            I dislike membrane keyboards (what you see in offices and schools). It's debatable that they're almost as loud as a mechanical keyboard depending on a user's typing behavior.
            They are difficult to repair due to lack of support and sometimes keys get stuck or not register. When I was coding or typing an essay, pressing the left shift key
            on a Dell membrane keyboard was extremely hard. If I type a "abcdef" quickly, it would register as "acef". Failure to register keystrokes is called ghosting. 
            Good quality keyboards will try to implement anti-ghosting but nothing is perfect. Especially not a Dell keyboard built with low quality parts. 
            </p>
            <p className={blockStyle}>
            Now, not all non-mechanical keyboards are bad. I am very comfortable typing on laptop keyboards Macs and
            Windows alike. Windows laptops have scissor switches which like other commercial non-mechanical keyboards are difficult to repair (My '-'' minus key is still broken
            on my laptop) and suffer ghosting as well. With less resistance than a membrane keyboard, laptop keyboards have a reactive, light stroke feeling to them which makes
            them comfortable for typing. Fair warning, if you even buy a keyboard from a large company like Logitech, appreciate it for a few years, somehow lost your 'e' key, 
            then it's possible your warranty expired or Logitech no longer has any spare parts to send to you (even if they did, you'll be expecting $5 for a single letter).
            Not to mention, replacing a scissor switch on a laptop is a lot harder than the mechanical keyboards' plug-n-play.
            </p>
            <p className={blockStyle}>
            <a href="https://switchandclick.com/cherry-mx-guide/"> Guide to Cherry (most popular types of switches) switches</a>
            </p>
            <p className={blockStyle}>
            My goal was to build a quiet linear keyboard with custom keycaps outlined in white for backlight capability as you can see at the top of the page. Linears eliminate
            sound from the mechanical switch. I've used Cherry MX reds before from a <a href="https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/CORSAIR-Gaming-K70-Mechanical-Gaming-Keyboard-%E2%80%94-CHERRY%C2%AE-MX-Red/p/CH-9000069-NA">
            Corsair K70 </a>. They're light to press on but still make a significant sound when typing. A quick google search showed there were Cherry MX Silent Red switches 
            which were basically red switches but had rubber dampeners at the bottom to cut some of the sound of pressing down on a key. Then I thought, if I'm going out of my 
            way to find a vendor that makes custom keycaps, I might as well make my switches feel a little more premium feeling. What better to do then to consult a friend who 
            knows more than me? TLDR: He recommended putting the Cherry MX Red Silent stem (inside part of a switch) in a Tealios housing (outside casing part of a switch). 
            This housing would provide a more firm and solid feel than that of the Cherry's which can further dampen any unwanted sound. One flaw with this frankenswitch is
            paying for twice the amount of switches and the labor to swap the parts out. It's not a difficult thing to do, but it is tedious.
            </p>
            <p className={blockStyle}>
            <h3 className={blockTitle}>Switches. Okay, what about them fancy engraved keycaps?</h3>
            Although I memorized the ANSI keyboard layout (This isn't impressive.) and can tell which key is which with my eyes closed, I wanted to leave the legend on the side 
            for less experienced typists using my computer. This would also prevent the legend from distracting the viewer from the keycap artwork. Now begins the search for 
            a manufacturer.
            I've done lots of Googling to find a place that would do custom keycaps. I've checked solutionsinplastic.com who does injection molding and other custom
            buttons for machinery (ones you would find in a factory). They don't do computer keyboards. Lots of Reddit posts point you in the direction of customization
             in the form of mix-matching different colored keycaps. <a href="https://pimpmykeyboard.com/"> Link here if interested </a> Which is great in itself but isn't the 
            backlit keycaps I envisioned. Finally, I found wasdkeyboards.com and maxkeyboards.com. Wasdkeyboards wasn't as upfront about their custom keycap options, so maxkeyboards
            received more of my traffic. Additionally, maxkeyboards had an <a href="https://www.instagram.com/maxkeyboards/">Instagram</a> showing their past work.
            </p>

            <p className={blockStyle}>
            <h3 className={blockTitle}>Designing the files for the vendor</h3>
            Maxkeyboards ordering system for custom keycaps is direct contact with their email support. I tried to be self-sufficient by downloading their keycaps template
            files and working my image onto the keycaps on Inkscape. I had no prior experience working with vector graphics but did understand the concept of layers in art
            from previous tinkering with other art tools long ago. The magic of the internet provided a video with the exact instructions on imprinting an image onto keycaps:
            <a href="https://www.youtube.com/watch?v=d3XuDNFCfWg&ab_channel=TheWiggin"> Here.</a> Even with the video, there was still some struggling through the layers, resizing
            images, and multi-selection before clipping was successful. All there was to do was to email the files, complete transaction and carry on.
            </p>
            <img className={bodyImage0} src={design} alt="Screenshot of Inkscape UI with keycaps template" />

            <p className={blockStyle}>
            <h3 className={blockTitle}>Looking for a Case</h3>
            Upfront, I wanted a full keyboard. Numpad and function keys. Oftentimes, many mechanical keyboard enthusiasts' keyboards are TKL (without numpads) or a 60% form.
            They seem to have prejudice against numpads. But in my use case, I use it for extra mappings in video games, simple arithmetic and the occasional pin number entry.
            Not to mention alt+codes that generate special characters such as smiley face ☺, em dash — and en dash – were essential for internet banter and fun. You cannot 
            do this with the number row key.
            </p>
            <p className={blockStyle}>
            In addition to the difficulty of acquiring a full-sized mechanical keyboard case is being hot-swappable. I have soldering equipment and can solder (experience
            from working on video game consoles), but did not want to spend hours potentially messing up the keyboard PCB when soldering switches in. Last but not least,
            there had to be backlight. (How else will my engraved keycaps truly shine?) My search came across the <a href="https://www.keychron.com/products/keychron-c2-wired-mechanical-keyboard?variant=32294075170905]">
            Keychron C2</a>. This keyboard worked well but was difficult to pry open and had gaps between the function row keys. The gaps between the function row keys
            ruined the keycap artwork unity.
            </p>
            <img className={bodyImage0} src={keychron} alt="Keychron C2 keyboard with custom keycaps"/>
            <p className={blockStyle}>
            More to review on the keycaps I designed and received... It is a bit difficult to discern the foreground and background, and the backlight was not customizable and was only white.
            I did add foam to the Keychron C2 thanks to my sore fingers, this <a href="https://www.reddit.com/r/Keychron/comments/liv7ek/free_keychron_c2_foam_mod/">
              Reddit post</a>, and lots of spudging tools. This immensely reduced the reverb from typing. All there's left is to find another keyboard that better fit 
            my keycaps artwork which brings me to more Googling: <a href="https://epomaker.com/products/gk96s">the GK96s</a>. Here is a 
            <a href="https://www.reddit.com/r/MechanicalKeyboards/comments/kws5w2/epomaker_gk96ls_reviewish/"> review</a>. The TLDR: it's only 96%, but is hot-swappable.
            Bonuses are its bluetooth capability and key remapping (the scroll lock key can become delete).
            </p>
            
            <p className={blockStyle}>
            <h3 className={blockTitle}>Putting it altogether.</h3>
            I know the blog is a bit out of order, but bear with me. Assume my frankenswitches, custom keycaps (obviously), GK96s, and any modding tools have arrived. You will
            want a switch puller, keycap puller (2-in-1's work okay), and a screwdriver at the very least for any mechanical keyboard. The switches were already lubed but for that
            extra sound dampening, I filmed the alphanumeric keys with Deskeys foam switch films. Here is a video of someone else's experiment:
             <a href="https://www.youtube.com/watch?v=kiD5FCWZloE&ab_channel=Histy"> video</a>. The GK96s was easy to disassemble due to its reliance on screws instead of snap-on tabs.
            After opening it, I added foam:
            </p>
            <img className={bodyImage0} src={foam} alt="Keyboard case with foam in it"/>
            <p className={blockStyle}>
            Then, there is a bane of all keyboard enthusiasts: stabilizer keys. If you think I'm being extra... Here is a video of rattly stabilizers vs good stabilizers:
            <a href="https://www.youtube.com/watch?v=r56Nsit_4G0&ab_channel=Hitchyy"> Bad</a> | <a href="https://www.youtube.com/watch?v=zQBxG4TWP8w&ab_channel=SSSAK">Good. (Watch the first 10 seconds only)</a> Stabilizer keys are the larger keys such as the Enter key or the spacebar. Hopefully, stabilizers 
            are a self-explanatory term. If you didn't have on on your space bar, the space bar would act like a see-saw/teeter-totter instead of pressing down uniformly. Stabilizers
            with their many potential areas of noise are tedious to mod. Lubing the stabilizer wires 
            </p>

            <p className={blockStyle}>
            What's left is messing with the GK96 software. Let me tell you, it's not easy. After 3 hours of tinkering, I found the most consistent way was to make edits to the
            custom lighting profile, save it, open the profiles page switch from an arbitrary one, save and apply, then switch to the custom one before saving and applying for the final time.
            To add to the confusion, the keyboard has a set of layers (affecting light effects and mappings) and a set of light effect profiles. To change light effect profile (default {"->"} our custom one)
            for this keyboard, press fn+(-).
            To turn it on, press fn+(9). Unplugging this device will not turn it off, it will go into Bluetooth mode. To turn it off completely, hold fn+` until all lights are off.
            Also, you cannot overwrite the default keyboard profile for its mappings. You will always have to load your keyboard profile
            if you wanted to have your scroll lock key as delete key.
            </p>
            <img className={headlineImage} src={le1} alt="GK96 software showing custom lighting profile settings"/>
            <img className={headlineImage} src={le2} alt="GK96 software showing custom lighting profiles and layers"/>

            <p className={blockStyle}>
            <h3 className={blockTitle}>Conclusion</h3>
            Please refer to the top of the page for what the keyboard
            looks like. Now, I don't have good equipment for recording a nearly silent keyboard, but here is a video of someone else's exact frankenswitches:
            <a href="https://www.youtube.com/watch?v=ypi14DazBqw"> Mx Zilent Sound Test</a>. Look up any other keyboard sound test while keeping the same volume on your
            computer and you will quickly notice there is a vast difference in sound amplitudes. I assure you, it isn't majorly the recording equipment differences. The
            MX Zilents are just that silent. More silent than regular membrane keyboards and more silent than laptop keyboards.
            </p>
            <p className={blockStyle}>
            I hope my journey into custom mechanical keyboards has been informative or serve well as a documentation for my future self to reflect on.
            Although I spent too much money (especially on the custom keycaps) on what one could argue as unnecessary features, the learning process has been insightful. 
            It's easy to dismiss other people's hobbies when you're ignorant of the finer details, but I chose to investigate it and come out with a 
            product for myself. Don't use my experience as the average. A nice mechanical keyboard can be as cheap as $20 with thoughtful modding and using materials around the house
            (packaging foam, t-shirts, screw drivers, etc.) Don't let enthusiasts and their jargon scare you. Find what you like, and set forth to realize your goals.
            I can tell you having created a literal one-of-a-kind in the entire world keyboard made almost exactly to my exact 
            specifications has brought me great satisfaction and I still enjoy the nearly absolute silent keyboard for my everyday use. There will be a later blog on
            how I eliminated the mouse click sounds ☺.
            </p>
            
          <br/><br/><br/><br/><br/>
          </div>
          <hr style={{"border-top":"2px solid black"}}/>
          </div>
          }
          
          credits={
            <ul>
              <BlogCredit url="https://www.tomshardware.com/picturestory/736-history-of-mechanical-keyboards.html"/>
              <BlogCredit url="https://switchandclick.com/cherry-mx-guide/"/>
              <BlogCredit url="https://drop.com/buy/gks-xda-v2-dye-subbed-pbt-matcha-keycap-set"/>
              <BlogCredit url="https://drop.com/buy/bkd-mt-fuji-wood-resin-artisan-keycap"/>
              <BlogCredit url="https://www.etsy.com/shop/DecentKeyboards"/>
              <BlogCredit url="https://pimpmykeyboard.com/"/>
              <BlogCredit url="https://www.reddit.com/r/MechanicalKeyboards/comments/51qepc/where_can_i_buy_custom_keycaps/"/>
              <BlogCredit url="https://www.wasdkeyboards.com/"/>
              <BlogCredit url="https://www.maxkeyboard.com/"/>
              <BlogCredit url="https://www.instagram.com/maxkeyboards/"/>
              <BlogCredit url="https://www.youtube.com/watch?v=d3XuDNFCfWg&ab_channel=TheWiggin"/>
              <BlogCredit url="https://www.reddit.com/r/Keychron/comments/liv7ek/free_keychron_c2_foam_mod/"/>
            </ul>
          }
          />
        </div>
    )
}

export default Blog0;