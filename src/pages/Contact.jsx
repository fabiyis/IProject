// eslint-disable-next-line react/prop-types
const Contact = ({ isDarkMode }) => {

    const containerStyle = {
      textAlign: 'center',
      margin: 'auto',
      width: '50%',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginTop: '50px',
      backgroundColor: isDarkMode ? '#333' : '#f4f4f4',
      color: isDarkMode ? '#fff' : '#333',
    };
  
    const h1Style = {
      margin: '60px',
      fontSize: '3rem',
      
      padding: '0 1rem',
      borderBottom: '3px solid',
      borderLeft: '3px solid',
      color: isDarkMode ? 'black' : 'orange',

    };

    const textStyle = {
      fontStyle: 'italic',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    };
  
    return (
      <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-cover  bg-center" style={{ backgroundImage: 'url(/img/off1.jpeg)' }}>
        <div className="mt-10">
          <h1 className=" text-5xl font-thin">Always Within your Reach..</h1>
        </div>
        <div style={containerStyle}>
          <h1 style={h1Style}><strong>CONTACT</strong></h1>
          <h3 style={textStyle}>
            <em><p>24/7 active and reliable...</p></em>
            <em><p>email: fabiyisegun@hotmail.com</p></em>
            <em><p>Num: +234-7062999437</p></em>
          </h3>
        </div>
      </div>
    </div>
    );
  }
  
  export default Contact;
  