
function Contact() {
    const containerStyle = {
      textAlign: 'center',
      margin: 'auto',
      width: '50%',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginTop: '50px',
      backgroundColor: '#f4f4f4',
    };
  
    const h1Style = {
      margin: '60px',
      fontSize: '3rem',
      color: 'orange',
      padding: '0 1rem',
      borderBottom: '3px solid',
      borderLeft: '3px solid',
    };

    const textStyle = {
      fontStyle: 'italic',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    };
  
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/img/off1.jpeg)' }}>
        <div style={containerStyle}>
          <h1 style={h1Style}><strong>CONTACT</strong></h1>
          <h3 style={textStyle}>
            <em><p>24/7 active and reliable...</p></em>
            <em><p>email: fabiyisegun@hotmail.com</p></em>
            <em><p>Num: +234-7062999437</p></em>
          </h3>
        </div>
      </div>
    );
  }
  
  export default Contact;
  