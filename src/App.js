import React,{ useState } from "react";



  
  function App()
  {

    const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);

   const handleButtonClick = () => {
        setIsAlertVisible(true);

        setTimeout(() => {
           setIsAlertVisible(false);
        }, 10000);
    }

  return (
    <div className="App">
           <button style = {{width: "1366px",height: "636px"}} onClick={handleButtonClick}>

           {
           isAlertVisible && <div className='alert-container'>
               <div className='alert-inner'><b>W</b></div>
               
           </div>  
  } 
  </button>
        </div>
  
  );
}

export default App;
