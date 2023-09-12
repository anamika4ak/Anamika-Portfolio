//
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

function Footer() {
  return (
    <footer>
      <p className="footer">
        <b>Anamika || Copyright &copy; {currentYear}</b>
      </p>
    </footer>
  );
}

export default Footer;
