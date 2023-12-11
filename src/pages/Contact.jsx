// eslint-disable-next-line react/prop-types
const Contact = ({ isDarkMode }) => {

    const containerStyle = {
      textAlign: 'center',
      margin: 'auto',
      width: '50%',
      marginTop: '50px',
      backgroundColor: isDarkMode ? '#333' : '',
      color: isDarkMode ? '' : '#333',
    };
  
    const h1Style = {
      margin: '50px',
      fontSize: '3rem',
      padding: '0 0.5rem',
      borderBottom: '3px solid',
      borderLeft: '2px solid',
      color: isDarkMode ? 'black' : 'orange',
      marginLeft: '0.5rem',
    };

    const textStyle = {
      fontStyle: 'italic',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    };
  
    return (
      <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-cover " style={{ backgroundImage: 'url(/img/off1.jpeg)' }}>
        <div className="mt-10">
          <h1 className=" text-5xl font-thin ">Always Within your Reach..</h1>
        </div>
        <div style={containerStyle}>
          <h1 style={h1Style}><strong>CONTACT</strong></h1>
          <h3 style={textStyle}>
            <em><p className=" text-lime-700" >Email: fabiyisegun@hotmail.com</p></em>
            <em><p className="text-lime-700">Phone#: +2347062999437</p></em>
          </h3>
        </div>
      </div>
    </div>
    );
  }
  
  export default Contact;
  