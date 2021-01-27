const Footer = () => {
    let d = new Date();
    let y = d.getFullYear();
    return (
      <p>Copyright {y}</p>
    )
};

export default Footer;