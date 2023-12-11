// eslint-disable-next-line react/prop-types
function FooterComp({ isDarkMode }) {
  const footerStyle = {
    position: 'fixed',
    right: '0',
    bottom: '0',
    backgroundColor: isDarkMode ? '#333' : 'white', 
    width: '100vw',
    padding: '1rem',
    fontSize: '1.3rem',
    color: isDarkMode ? '#fff' : 'red', 
    textAlign: 'right',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 Segun Fabiyi..</p>
    </footer>
  );
}

export default FooterComp;

