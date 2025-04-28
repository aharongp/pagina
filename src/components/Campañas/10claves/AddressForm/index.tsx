import { useState } from 'react';
import FormField from '../FormField';
import CountrySelect from '../CountrySelect';
import Button from '../Button';
import CountrySelectPhone from '../CountryCodeField';
import PhoneNumberField from '../PhoneField';

export interface AddressFormProps {
  onSubmit?: (formData: FormData) => void;
  onCancel?: () => void;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  company: string;
  employment: string;
  countryCode: string;
  phone: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  country: 'United States',
  company: '',
  employment: '',
  countryCode:'+1',
  phone: ''
};

const AddressForm = ({ onSubmit, onCancel }: AddressFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://hook.us1.make.com/982inacgnf236i1hq0uutk5uwlmvcrm9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud al webhook');
      }

      if (onSubmit) {
        onSubmit(formData);
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        country: 'United States',
        company: '',
        employment: '',
        countryCode:'',
        phone: '',
      });
    } catch (error) {
      console.error('Error al enviar datos al webhook:', error);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Nombre"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <FormField
            label="Apellido"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-6">
          <FormField
            label="Correo electronico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-6">
          <CountrySelect
            label="Pais"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div className="mt-6">
          <FormField
            label="Empresa en la que trabajas"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <FormField
            label="Puesto de trabajo"
            name="employment"
            value={formData.employment}
            onChange={handleChange}
            required
          />
          <div className="flex items-center mb-4">
            <CountrySelectPhone
              label="Código de pais"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            />
          
            <PhoneNumberField
              label="Número de Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;