import { createContext, useState } from "react";
import InputForm from "./components/InputForm";
import Qrcode from "./components/Qrcode";
import axios from "axios";
export const inputContext = createContext();
export default function App() {
  const [inputValue, setInputValue] = useState({
    url: '',
    color: ''
  });
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //c3d626c0-b02e-11ee-87aa-cf3236ec2744

  const config = {
    headers: { Authorization: 'Bearer c3d626c0-b02e-11ee-87aa-cf3236ec2744' }
  }
  const bodyParameters = {
    "colorDark": inputValue.color,
    "qrCategory": "url",
    "text": inputValue.url
  }
  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post('https://qrtiger.com/api/qr/static',
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    }
    catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error
  }
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen pt-3 px-20">
      <div className="container mx-auto bg-white max-w-4xl rounded-md shadow mt-10">
        <div className="md:grid md:grid-cols-3">
          <inputContext.Provider value={value}>
            <InputForm />
            <Qrcode />
          </inputContext.Provider>
        </div>
      </div>
    </div>
  )
}