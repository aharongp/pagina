import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CountrySelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}

// Lista simplificada de códigos de países
const countries = [
  '+1' ,
  '+44' ,
  '+61' ,
  '+49' ,
  '+33' ,
  '+81' ,
  '+55' ,
  '+91' ,
 '+86' ,
];

const CountrySelectPhone: React.FC<CountrySelectProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="w-full mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-white"
        >
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country} {/* Solo muestra el código del país */}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown size={18} />
        </div>
      </div>
    </div>
  );
};

export default CountrySelectPhone;
