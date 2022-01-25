import '../../assets/css/include/footer.css';
import twitter from '../../assets/img/twitter.png'
import discord from '../../assets/img/discord.png'
import instagram from '../../assets/img/instagram.png'

function Footer() {
  return(
    <div className="content-footer">
      <div className="meta">
        <div className="containter-footer">
          <p className="footer-word">Powered by Reaffirm</p>
        </div>
        <div className="containter-footer">
          <div className="social-part" style={{display:'flex'}}>
            <img style={{cursor:'pointer'}} src={twitter} />
            <img style={{cursor:'pointer'}} className="social-img" src={discord} />
            <img style={{cursor:'pointer'}} className="social-img" src={instagram} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;