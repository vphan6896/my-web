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

    var blockTitle="has-text-weight-medium is-size-4";
    var blockStyle="is-size-5 block";

    return (
        <div>
          <Blog title="Pi-Holes" subtitle="on a 2008 laptop, Docker, then an actual Raspberry Pi"
          body={
          <div>
           <img style={headlineImage} src={pi_logo} alt="Raspberry Pi and Docker logos on top of a No Ads sign"/>
          <h3 className="has-text-weight-medium is-size-4">TLDR</h3>
          <ul className={blockStyle}>
            <li>The old laptop was outdated on its drivers and had a chain of issues. Abandoned the work after 20 hours of debugging.</li>
            <li>Docker was neat, but relied on my computer to be on to provide Pi-hole services. Having Docker also prevented me from using
                mobile phone emulators like BlueStacks due to Hyper-V being enabled.
            </li>
            <li>Raspberry Pi is compact and fun to work with, but had one stability problem.</li>
          </ul>
          <div>
            <h3 className="has-text-weight-medium is-size-4">What's Pi-Hole and why?</h3>
            <p className={blockStyle}>
                Here is the wiki: <a href="https://en.wikipedia.org/wiki/Pi-hole">https://en.wikipedia.org/wiki/Pi-hole</a>. Simplified,
                it helps you filter out ads by 'blocking' the ad's source server. This is a Linux software solution and can be deployed
                on a host-level basis or a network-level basis. So while one might have 
                <a href="https://www.getadblock.com/en/">Adblock</a> or 
                <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm">UBlockOrigin</a> on Google Chrome
                as extensions to reduce the intrusive ads a user may encounter during browsing, Pi-Holes tackle a lower level 
                (Think <a href="https://en.wikipedia.org/wiki/OSI_model">OSI Model</a>). Instead of allowing the client to establish connection
                with ad providers, the client receives a blank result therefore saving time and bandwidth. This is not fool-proof as there
                clever ways to circumventing pi-holes. Google's serve ads for instance are served from the same servers as many of their other content
                is. To attempt blocking that, you would receive false-positives and effectively not be able to browse the internet at all. It is best 
                to supplement ad-blocking softwares with a Pi-hole rather than looking at them as direct alternatives.
            </p>
          </div>


          <hr style={{"border-top":"2px solid black"}}/>
          </div>
          }
          
          credits={
          <ul>
            <li>https://en.wikipedia.org/wiki/Pi-hole</li>

          </ul>}
          
          />
        </div>
    )
}

export default Blog1;