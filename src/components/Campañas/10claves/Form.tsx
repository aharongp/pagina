import AddressForm from './AddressForm';

function Form() {
  const handleSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <AddressForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
}

export default Form;