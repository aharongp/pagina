import React from 'react';

interface PhoneNumberFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="w-full ml-4 mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="tel"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder="Número de teléfono"
        className="border rounded-md p-2 flex-1 "
      />
    </div>
  );
};

export default PhoneNumberField;
