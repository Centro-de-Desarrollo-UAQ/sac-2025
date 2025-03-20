export default function BodyComponent() {
  return (

    <div className="relative w-full h-screen flex items-center justify-center">
      
      <div>
        <div className="mt-6 h-1 w-full flex justify-center">
          <div className="w-[20%] bg-yellow-400"></div> 
          <div className="w-[20%] bg-green-400"></div>  
          <div className="w-[20%] bg-blue-400"></div>    
          <div className="w-[20%] bg-red-400"></div>    
        </div>
        <div className="relative p-10 max-w-3xl text-center flex items-center justify-center gap-5">
          <img src="/cubo.svg" alt="Lego" className="w-16"/>
          <h1 className="text-4xl text-black font-cerapro">¿QUÉ ES LA SAC?</h1>
        </div>
        
        <p className="relative p-10 max-w-3xl text-2xl text-center font-bold text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum at tellus sit amet tristique. 
          Phasellus sit amet feugiat eros, a lobortis orci. Duis tempus aliquam sem, in convallis magna bibendum eget.
        </p>
        
        <div className="mt-8 h-1 w-full flex justify-center">
          <div className="w-[20%] bg-yellow-400"></div> 
          <div className="w-[20%] bg-green-400"></div>  
          <div className="w-[20%] bg-blue-400"></div>    
          <div className="w-[20%] bg-red-400"></div>    
        </div>
        </div>
       </div>
  );
}
