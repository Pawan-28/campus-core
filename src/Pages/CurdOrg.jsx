import React, { useState } from 'react';

const initialForm = {
  orgType: '',
  name: '',
  email: '',
  location: '',
  address: '',
  pin: '',
  state: '',
  city: ''
};

const orgTypes = ["School", "College", "Institute"];
const states = ["Bihar", "HARYANA", "UP"];
const cities = ["Noida", "Patna", "Ghaziabad" ,"Gurugram", "Faridabad", "Gaya"];

const CurdOrg = () => {
  const [orgs, setOrgs] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editIndex, setEditIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    if (editIndex !== null) {
      // Edit existing org
      const updated = [...orgs];
      updated[editIndex] = form;
      setOrgs(updated);
      setEditIndex(null);
    } else {
      // Add new org
      setOrgs([...orgs, form]);
    }
    setForm(initialForm);
    setIsSubmitting(false);
  };

  const handleEdit = (idx) => {
    setForm(orgs[idx]);
    setEditIndex(idx);
  };

  const handleDelete = (idx) => {
    setOrgs(orgs.filter((_, i) => i !== idx));
    if (editIndex === idx) {
      setForm(initialForm);
      setEditIndex(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-slide-in">
      <div className="bg-gradient-to-r from-blue-200 to-blue-600 rounded-2xl shadow-2xl p-8 card-hover border border-blue-100 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-5xl font-extrabold text-blue-900 mb-4">Organization Management</h2>
          <p className="text-amber-50 text-xl max-w-2xl mx-auto">Streamline your operations with our powerful CRUD management system. Create, update, and manage your organizations efficiently.</p>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-200 to-pink-200 rounded-xl p-6 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-900 mb-2">{orgs.length}</div>
            <div className="text-blue-700 text-sm">Total Organizations</div>
          </div>
          <div className="bg-gradient-to-r from-blue-200 to-pink-200 rounded-xl p-6 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-900 mb-2">{orgs.filter(org => org.orgType === 'School').length}</div>
            <div className="text-blue-700 text-sm">Schools</div>
          </div>
          <div className="bg-gradient-to-r from-blue-200 to-pink-200 rounded-xl p-6 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-900 mb-2">{orgs.filter(org => org.orgType === 'College').length}</div>
            <div className="text-blue-700 text-sm">Colleges</div>
          </div>
          <div className="bg-gradient-to-r from-blue-200 to-pink-200 rounded-xl p-6 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-900 mb-2">{orgs.filter(org => org.orgType === 'Institute').length}</div>
            <div className="text-blue-700 text-sm">Institutes</div>
          </div>
        </div>
        {/* Form */}
        <div className="bg-gradient-to-r from-red-200 to-blue-200 rounded-2xl p-8 mb-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {editIndex !== null ? 'Edit Organization' : 'Add New Organization'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Organization Type
                </label>
                <select 
                  name="orgType" 
                  value={form.orgType} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="text-gray-800">Select Type</option>
                  {orgTypes.map(type => (
                    <option key={type} value={type} className="text-gray-800">{type}</option>
                  ))}
                </select>
              </div>
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Organization Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                  placeholder="Enter organization name"
                  required 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                  placeholder="Enter email address"
                  required 
                />
              </div>
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Location
                </label>
                <input 
                  type="text" 
                  name="location" 
                  value={form.location} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                  placeholder="Enter location"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Address
                </label>
                <input 
                  type="text" 
                  name="address" 
                  value={form.address} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                  placeholder="Enter complete address"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="group">
                  <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                    Pin Code
                  </label>
                  <input 
                    type="text" 
                    name="pin" 
                    value={form.pin} 
                    onChange={handleChange} 
                    className="w-full bg-blue-50 border border-blue-200 p-3 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                    placeholder="PIN"
                  />
                </div>
                <div className="group">
                  <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                    State
                  </label>
                  <select 
                    name="state" 
                    value={form.state} 
                    onChange={handleChange} 
                    className="w-full bg-blue-50 border border-blue-200 p-3 rounded-xl text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="text-gray-800">State</option>
                    {states.map(state => (
                      <option key={state} value={state} className="text-gray-800">{state}</option>
                    ))}
                  </select>
                </div>
                <div className="group">
                  <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                    City
                  </label>
                  <select 
                    name="city" 
                    value={form.city} 
                    onChange={handleChange} 
                    className="w-full bg-blue-50 border border-blue-200 p-3 rounded-xl text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="text-gray-800">City</option>
                    {cities.map(city => (
                      <option key={city} value={city} className="text-gray-800">{city}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                  {editIndex !== null ? 'Updating...' : 'Adding...'}
                </div>
              ) : (
                editIndex !== null ? 'Update Organization' : 'Add Organization'
              )}
            </button>
          </form>
        </div>
        {/* Organizations List */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <svg className="w-8 h-8 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Registered Organizations ({orgs.length})
          </h3>
          {orgs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h4 className="text-blue-900 text-xl font-semibold mb-2">No organizations yet</h4>
              <p className="text-blue-700 text-lg">Start by adding your first organization using the form above.</p>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="w-full overflow-x-auto hidden sm:block">
                <table className="min-w-[700px] w-full bg-white rounded-xl overflow-hidden border border-blue-100 text-sm sm:text-base">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-blue-900 font-semibold">Type</th>
                      <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-blue-900 font-semibold">Name</th>
                      <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-blue-900 font-semibold">Email</th>
                      <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-blue-900 font-semibold">Location</th>
                      <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-blue-900 font-semibold">State</th>
                      <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-blue-900 font-semibold">City</th>
                      <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-blue-900 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orgs.map((org, idx) => (
                      <tr key={idx} className="border-b border-blue-50 hover:bg-blue-50 transition-colors duration-200">
                        <td className="py-2 sm:py-4 px-2 sm:px-6 text-blue-900">
                          <span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium">
                            {org.orgType}
                          </span>
                        </td>
                        <td className="py-2 sm:py-4 px-2 sm:px-6 text-blue-900 font-medium">{org.name}</td>
                        <td className="py-2 sm:py-4 px-2 sm:px-6 text-blue-900">{org.email}</td>
                        <td className="py-2 sm:py-4 px-2 sm:px-6 text-blue-900">{org.location}</td>
                        <td className="py-2 sm:py-4 px-2 sm:px-6 text-blue-900">{org.state}</td>
                        <td className="py-2 sm:py-4 px-2 sm:px-6 text-blue-900">{org.city}</td>
                        <td className="py-2 sm:py-4 px-2 sm:px-6">
                          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                            <button 
                              onClick={() => handleEdit(idx)} 
                              className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(idx)} 
                              className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Mobile Cards */}
              <div className="block sm:hidden space-y-4">
                {orgs.map((org, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-blue-100 p-4 shadow-md">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-blue-700">{org.orgType}</span>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleEdit(idx)} 
                          className="px-3 py-1 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg text-xs flex items-center shadow"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(idx)} 
                          className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg text-xs flex items-center shadow"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="mb-1"><span className="font-semibold text-blue-900">Name: </span>{org.name}</div>
                    <div className="mb-1"><span className="font-semibold text-blue-900">Email: </span>{org.email}</div>
                    <div className="mb-1"><span className="font-semibold text-blue-900">Location: </span>{org.location}</div>
                    <div className="mb-1"><span className="font-semibold text-blue-900">State: </span>{org.state}</div>
                    <div><span className="font-semibold text-blue-900">City: </span>{org.city}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurdOrg;
