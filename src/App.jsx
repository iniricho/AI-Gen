import {useState} from "react";
import { requestToGrogAI } from './utils/groq';
import { Prism as SyntaxHighlight } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import './App.css';


function App() {
  const [data, setData] = useState("");

  const handleSubmit = async () => {
    const ai = await requestToGrogAI(content.value);
    console.log({ ai });
    setData(ai);
  };
  return (
    <main className='flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto'>
      <h1 className='text-4xl text-teal-500'>AI GEN</h1>
      <form className='flex flex-col gap-4 py-4 w-full'>
        <input 
        placeholder='Ketik disini..'
        className='py-2 px-4 text-md rounded-md' 
        id='content'
        type='text'
        />
        <button 
        onClick={handleSubmit}
        type='button'
        className='bg-teal-500 py-2 px-4 font-bold text-white rounded-md hover:bg-teal-600'>
          Kirim
          </button>
      </form>
      <div className="max-w-xl w-full mx-auto">
        { data ? (
      <SyntaxHighlight
      language="magma" 
      style={darcula} 
      wrapLongLines={true}
      lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
      >
        {data}
      </SyntaxHighlight>
        ) : null }
      </div>
    </main>
  );
};
export default App
