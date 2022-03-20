import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import { CountryType } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
    } catch {
      console.log("Hata Oluştu!");
    }
  };
  useEffect(() => {
    getCountries();
  }, []);

  console.log({ countries });

  return (
    <div>
      {countries.map((country) => {
        return <Country country={country} />;
      })}
    </div>
  );
}

export default App;
