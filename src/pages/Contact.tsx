


import React, { useState } from 'react';
import { FiMail, FiX, FiUpload } from 'react-icons/fi';
import { HOC } from '../componnets/HOC';
import contact1 from '../assets/img/contact1.png'
import contact2 from '../assets/img/contact2.png'
import contact3 from '../assets/img/contact3.png'
import contact4 from '../assets/img/contact4.png'
import contact5 from '../assets/img/contact5.png'
import contact6 from '../assets/img/contact6.png'
const Contact:React.FC = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Jason Price',
      email: 'kullman.jerry@yahoo.com',
      image:contact1,
    },
    {
      id: 2,
      name: 'Duane Dean',
      email: 'rusty.botsford@vidilio',
      image:contact2,
    },
    {
      id: 3,
      name: 'Jonathan Barker',
      email: 'cora.haley@quha.biz',
      image:contact3,
    },
    {
      id: 4,
      name: 'Rosie Glover',
      email: 'lockman.marques@hotmail.com',
      image:contact4,
    },
    {
      id: 5,
      name: 'Patrick Greer',
      email: 'pearl.eichmann@freewone.net',
      image:contact5,
    },
    {
      id: 6,
      name: 'Darrell Ortega',
      email: 'chaya.shields@ferry.info',
      image:contact6,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: '',
  });

  const [preview, setPreview] = useState('');

  // JS-style input change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
   
  // Image upload
  const handleImage = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
      setFormData({ ...formData, image: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  // Add Contact
  const handleAddContact = () => {
    if (!formData.name || !formData.email) return;

    setContacts([
      ...contacts,
      {
        id: contacts.length + 1,
        name: formData.name,
        email: formData.email,
        image:
          formData.image ||
          'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500',
      },
    ]);

    setFormData({ name: '', email: '', image: '' });
    setPreview('');
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Add New Contact
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md"
          >
            <div className="h-56 overflow-hidden rounded-t-xl">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.email}</p>

              <button className="mx-auto flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-sm">
                <FiMail size={14} />
                Message
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Contact Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-semibold">Add Contact</h2>
              <button onClick={() => setIsOpen(false)}>
                <FiX />
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-4 mb-4">
                {preview ? (
                  <img
                    src={preview}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <FiUpload />
                  </div>
                )}
                <input type="file" onChange={handleImage} />
              </div>

              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 mb-3"
              />

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 mb-4"
              />

              <button
                onClick={handleAddContact}
                className="bg-blue-600 text-white w-full py-2 rounded"
              >
                Add Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HOC(Contact);
