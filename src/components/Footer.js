const Footer = () => {  
  return (
    <footer >
      <div className="images">
        <a href="https://github.com/lilianaba">
          <img
            className="logo"
            src={require(`../Assets/logos/gh.png`)}
            alt="githublogo"
          />
        </a>

        <a href="www.linkedin.com/in/lilianabazand">
          <img
            className="logo"
            src={require(`../Assets/logos/in.png`)}
            alt="linkedInlogo"
          />
        </a> 

        <a href="mailto:lilianabazand@yahoo.com">
          <img
            className="logo"
            src={require(`../Assets/logos/ma.png`)}
            alt="maillogo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
