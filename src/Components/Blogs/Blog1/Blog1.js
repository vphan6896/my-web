import pi_logo from './Pi-hole_logo.png'
import Blog from '../../Blog/Blog'
import BlogCredit from '../BlogCredit';

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
            <li>Raspberry Pi is compact and fun to work with, but had a storage problem.</li>
          </ul>
          <div>
            <h3 className="has-text-weight-medium is-size-4">What's Pi-Hole and why?</h3>
            <p className={blockStyle}>
                Here is the wiki: <a href="https://en.wikipedia.org/wiki/Pi-hole">https://en.wikipedia.org/wiki/Pi-hole</a>. Simplified,
                it helps you filter out ads by 'blocking' the ad's source server. This is a Linux software solution and can be deployed
                on a host-level basis or a network-level basis. So while one might have 
                <a href="https://www.getadblock.com/en/"> Adblock</a> or 
                <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"> UBlockOrigin</a> on Google Chrome
                as extensions to reduce the intrusive ads a user may encounter during browsing, Pi-Holes tackle a lower level 
                (Think <a href="https://en.wikipedia.org/wiki/OSI_model">OSI Model</a>). Instead of allowing the client to establish connection
                with ad providers, the client receives a blank result therefore saving time and bandwidth. This is not fool-proof as there
                clever ways to circumventing pi-holes. Google serve ads for instance are served from the same servers as many of their other content
                is. To attempt blocking that, you would receive false-positives and effectively not be able to browse the internet at all. It is best 
                to supplement ad-blocking softwares with a Pi-hole rather than looking at them as direct alternatives.
            </p>

            <h3 className="has-text-weight-medium is-size-4">Equipment</h3>
            <p className={blockStyle}>
              I started off with a family member's unused laptop. It was a Samsung Windows 7 Laptop with a new 120 GB hard drive that took about 3 minutes to boot 
              up. There were no ethernet ports on it and the usb wifi/ethernet speeds were very limited with this laptop. Though a Pi-Hole does not use much 
              bandwidth, browsing and downloading software took multitudes longer than the modern 2010 or newer computers. You will need the ability to provide
               your pi-hole a static ip address, and if you want to deploy it network-wide, you will need access to the DNS settings for the router. 
            </p>

            <h3 className="has-text-weight-medium is-size-4">Deploying</h3>
            <p className={blockStyle}>
              At the time I was working with this laptop, I did not want to spend the money to buy an actual Raspberry Pi. Unfortunately, I do not have all the details
               of when I tried messing with Virtual Machines to deploy Pi-Hole. All I remember is that it was difficult to expose the virtual machine's IP address to 
               the home network devices. That alone stops you from using the Pi-Hole's IP Address as your DNS server and defeats the whole purpose. Because this laptop
                is not Linux-based, I had to resort to deploying pi-hole through Docker. There were some roadblocks on installing Docker. The newest Docker application
                was not compatible with the Samsung laptop's OS so Docker Toolbox had to be installed. The process to running commands to install Pi-Hole is simple, so
                that will be skipped. The result was Pi-Hole running and the container could ping Google and my other local devices. However, I could not access the 
                Pi-Hole web interface (one visual confirmation of Pi-Hole successful deployment). I even enabled ssh into my container and checked the
              <a href="https://docs.pi-hole.net/main/prerequisites/"> required ports </a> were functioning by checking Pi-Hole's status. Reflecting back on this, I wonder
              if a Windows 7 default firewall setting may have blocked some of the ports. Unsatisfied with my hours of looking through forums and even creating my own
              post, I just went to my Windows 10 PC and repeated the same steps (with the new Docker, not Docker toolbox). This worked. And yes, you can connect 
              to your own container (this was tied to my PC's IP) for DNS.
            </p>

            <h3 className="has-text-weight-medium is-size-4">Hyper-V vs My Convenience</h3>
            <p className={blockStyle}>
              There is a phone emulator called <a href="https://www.bluestacks.com/"> BlueStacks </a> that I use to play my mobile games. This software requires 
              Hyper-V and other virtualization Windows settings to be disabled. As of 2020, BlueStacks does have a new emulator that can run with Hyper-V, but
              in my experience, I still ran into errors having Docker and BlueStacks up. I took a pause at this time to mull over my Pi-hole deployment and use 
              case. I would have to keep my hefty gaming computer up all day to keep pi-hole running for my other devices to benefit from... This is when I 
              caved in and bought a used Raspberry Pi on Ebay (Be environmental and cheap!).
            </p>


          </div>
          

          <hr style={{"border-top":"2px solid black"}}/>
          </div>
          }
          
          credits={
          <ul>
            <BlogCredit url="https://en.wikipedia.org/wiki/Pi-hole"/>
            <BlogCredit url="https://www.youtube.com/watch?v=wkzIkdcd6wk"/>
            <p>
              Note on the video above: the dockerfile the author provides should have both dns entries pointing to localhost 127.0.0.1.
              Secondary and tertiary DNS server configurations <br/> on a computer will be used even if the primary DNS server works.
              Counter-intuitively, DNS configurations do not fail a DNS server and try the next one you listed.<br/> All 2 or 3 DNS servers 
              will be used in no particular order.
            </p>
            <BlogCredit url="https://support.bluestacks.com/hc/en-us/articles/360055244412-How-to-disable-Hyper-V-on-Windows-for-BlueStacks-5"/>
          </ul>
          }
          
          />
        </div>
    )
}

export default Blog1;