function MyFooter() {
  const footerStyle = {
    position: 'fixed',
    right: '0',
    bottom: '0',
    backgroundColor: 'white',
    width: '100vw',
    padding: '1rem',
    fontSize: '1.3rem',
    color: 'blue',
    textAlign: 'right',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 Segun Fabiyi..</p>
    </footer>
  );
}

export default MyFooter;
