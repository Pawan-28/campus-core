import React, { useState } from 'react';
import { FiSend, FiMail, FiBell, FiAlertTriangle, FiCheck, FiClock, FiPaperclip } from 'react-icons/fi';

const mockOrganizations = [
  { id: 1, name: 'Alpha College', logo: '🏫' },
  { id: 2, name: 'Beta School', logo: '📚' },
  { id: 3, name: 'Gamma Institute', logo: '🎓' },
  { id: 4, name: 'Delta Academy', logo: '🏫' },
];

const alertTypes = [
  'System-wide Announcement',
  'Subscription Expiry Warning',
  'Maintenance Notice',
];

const priorityOptions = [
  { value: 'Urgent', color: 'bg-red-100 text-red-800', icon: '❗' },
  { value: 'High', color: 'bg-orange-100 text-orange-800', icon: '⚠️' },
  { value: 'Normal', color: 'bg-blue-100 text-blue-800', icon: 'ℹ️' },
  { value: 'Low', color: 'bg-gray-100 text-gray-800', icon: '🔽' },
];

const statusColors = {
  Sent: 'bg-blue-100 text-blue-800',
  Delivered: 'bg-yellow-100 text-yellow-800',
  Read: 'bg-green-100 text-green-800',
};

const CommunicationCenter = () => {
  const [activeTab, setActiveTab] = useState('bulk');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedOrgs, setSelectedOrgs] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [status, setStatus] = useState({ message: '', type: '' });

  // Bulk mail
  const [bulkRecipientType, setBulkRecipientType] = useState('orgs');
  const [customBulkEmails, setCustomBulkEmails] = useState('');

  // Notification
  const [notifPriority, setNotifPriority] = useState('Normal');
  const [notifMessage, setNotifMessage] = useState('');
  const [notifStatus, setNotifStatus] = useState([]);

  // Alert
  const [alertType, setAlertType] = useState(alertTypes[0]);
  const [alertPriority, setAlertPriority] = useState('Normal');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertAttachments, setAlertAttachments] = useState([]);
  const [alertStatus, setAlertStatus] = useState([]);
  const [alertRecipientType, setAlertRecipientType] = useState('all');
  const [alertCustomOrgs, setAlertCustomOrgs] = useState([]);

  const handleFileChange = (e, setter) => {
    setter(Array.from(e.target.files));
  };

  const showStatus = (message, type = 'success') => {
    setStatus({ message, type });
    setTimeout(() => setStatus({ message: '', type: '' }), 3000);
  };

  const handleNotifSubmit = (e) => {
    e.preventDefault();
    const initial = mockOrganizations.map(org => ({
      org,
      status: 'Sent',
      read: false,
      timestamp: new Date(),
    }));
    setNotifStatus(initial);
    showStatus('Notification broadcast initiated!', 'success');
    
    setTimeout(() => {
      setNotifStatus(prev => prev.map(s => ({ ...s, status: 'Delivered' })));
      setTimeout(() => {
        setNotifStatus(prev => prev.map(s => ({ ...s, status: 'Read', read: true })));
      }, 1500);
    }, 1500);
    
    setNotifMessage('');
    setNotifPriority('Normal');
  };

  const handleAlertSubmit = (e) => {
    e.preventDefault();
    let orgsToSend = [];
    
    if (alertRecipientType === 'all') {
      orgsToSend = mockOrganizations;
    } else {
      orgsToSend = mockOrganizations.filter(org => 
        alertCustomOrgs.includes(org.id.toString())
      );
      if (orgsToSend.length === 0) {
        showStatus('Please select at least one organization.', 'error');
        return;
      }
    }
    
    const initial = orgsToSend.map(org => ({
      org,
      status: 'Sent',
      read: false,
      timestamp: new Date(),
    }));
    
    setAlertStatus(initial);
    showStatus('Alert sent successfully!', 'success');
    
    setTimeout(() => {
      setAlertStatus(prev => prev.map(s => ({ ...s, status: 'Delivered' })));
      setTimeout(() => {
        setAlertStatus(prev => prev.map(s => ({ ...s, status: 'Read', read: true })));
      }, 1500);
    }, 1500);
    
    // Reset form
    setAlertMessage('');
    setAlertPriority('Normal');
    setAlertType(alertTypes[0]);
    setAlertAttachments([]);
  };

  const handleBulkSubmit = (e) => {
    e.preventDefault();
    if (bulkRecipientType === 'custom' && !customBulkEmails.trim()) {
      showStatus('Please enter at least one custom email.', 'error');
      return;
    }
    if (bulkRecipientType === 'orgs' && selectedOrgs.length === 0) {
      showStatus('Please select at least one organization.', 'error');
      return;
    }
    
    showStatus('Bulk email sent successfully!', 'success');
    // Reset form
    setSubject('');
    setMessage('');
    setSelectedOrgs([]);
    setAttachments([]);
    setCustomBulkEmails('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200/60 via-cyan-100/60 to-blue-50 py-8 px-2 sm:px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto rounded-3xl shadow-2xl bg-white/60 border border-blue-200/40 backdrop-blur-xl relative overflow-hidden">
        {/* Glassy Gradient Border */}
        <div className="absolute -inset-1 rounded-3xl z-0 bg-gradient-to-br from-blue-400/40 via-cyan-300/40 to-blue-200/40 blur-lg opacity-70 pointer-events-none" />
        <div className="relative z-10">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 p-8 text-white rounded-t-3xl shadow-md border-b-2 border-blue-200 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-white/20 rounded-full p-4 shadow-lg backdrop-blur-xl">
                <FiSend className="text-4xl" title="Communication Center" />
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-lg">Communication Center</h1>
            </div>
            <p className="opacity-90 text-lg font-medium">Send messages, notifications, and alerts to organizations</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center bg-transparent mt-2 mb-4">
            <div className="flex gap-2 bg-white/60 rounded-full p-2 shadow-inner backdrop-blur-xl">
              {[
                { id: 'bulk', icon: <FiMail title='Bulk Email' />, label: 'Bulk Email' },
                { id: 'notif', icon: <FiBell title='Notification' />, label: 'Notification' },
                { id: 'alert', icon: <FiAlertTriangle title='Alert' />, label: 'Alert' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-2 font-semibold rounded-full transition-all duration-200 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeTab === tab.id ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white scale-105 shadow-lg' : 'text-blue-700 hover:bg-blue-100/60'}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status Message */}
          {status.message && (
            <div className={`px-6 py-3 ${status.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'} font-medium border-b`}>{status.message}</div>
          )}

          {/* Tab Content */}
          <div className="p-6 sm:p-10 animate-fade-in">
            {/* Bulk Email Tab */}
            {activeTab === 'bulk' && (
              <form onSubmit={handleBulkSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Recipient Selection */}
                  <div className="space-y-6 bg-white/80 rounded-2xl p-6 shadow-md border border-blue-100">
                    <h4 className="text-lg font-bold text-blue-700 mb-2">Recipients</h4>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="radio" name="bulkRecipientType" value="orgs" checked={bulkRecipientType === 'orgs'} onChange={() => setBulkRecipientType('orgs')} className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2">Organizations</span>
                      </label>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="radio" name="bulkRecipientType" value="custom" checked={bulkRecipientType === 'custom'} onChange={() => setBulkRecipientType('custom')} className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2">Custom Emails</span>
                      </label>
                    </div>
                    {bulkRecipientType === 'orgs' ? (
                      <div className="mt-2">
                        <label className="block font-medium text-gray-700">Select Organizations</label>
                        <select multiple className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-auto min-h-[120px] bg-white" value={selectedOrgs} onChange={e => setSelectedOrgs(Array.from(e.target.selectedOptions, option => option.value))}>
                          {mockOrganizations.map(org => (
                            <option key={org.id} value={org.id} className="flex items-center gap-2 py-1">
                              {org.logo} {org.name}
                            </option>
                          ))}
                        </select>
                        {selectedOrgs.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedOrgs.map(id => {
                              const org = mockOrganizations.find(o => o.id.toString() === id);
                              return (
                                <span key={id} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold shadow-sm">
                                  <span className="text-lg">{org.logo}</span> {org.name}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mt-2">
                        <label className="block font-medium text-gray-700">Email Addresses</label>
                        <textarea className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Enter comma-separated emails" rows={3} value={customBulkEmails} onChange={e => setCustomBulkEmails(e.target.value)} />
                      </div>
                    )}
                  </div>
                  {/* Email Content */}
                  <div className="space-y-6 bg-white/80 rounded-2xl p-6 shadow-md border border-blue-100">
                    <h4 className="text-lg font-bold text-blue-700 mb-2">Email Content</h4>
                    <div>
                      <label className="block font-medium text-gray-700">Subject</label>
                      <input type="text" className="bg-blue-100 mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={subject} onChange={e => setSubject(e.target.value)} />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">Message</label>
                      <textarea className="bg-blue-100 mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows={4} value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">Attachments</label>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <label className="cursor-pointer bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-xl border border-gray-300 shadow-sm text-sm font-medium text-gray-700 transition flex items-center gap-1">
                          <FiPaperclip className="text-gray-500" title="Attach files" />
                          Choose Files
                          <input type="file" multiple className="hidden" onChange={e => handleFileChange(e, setAttachments)} />
                        </label>
                        {attachments.length > 0 && attachments.map((file, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold shadow-sm">
                            <FiPaperclip className="text-cyan-400" />
                            <span className="truncate max-w-[100px]">{file.name}</span>
                            <span className="text-xs text-gray-400">({(file.size / 1024).toFixed(1)} KB)</span>
                          </span>
                        ))}
                        {attachments.length === 0 && <span className="text-sm text-gray-400">No files selected</span>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <button type="submit" className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                    <FiSend className="mr-2" /> Send Bulk Email
                  </button>
                </div>
              </form>
            )}

            {/* Notification Tab */}
            {activeTab === 'notif' && (
              <form onSubmit={handleNotifSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6 bg-white/80 rounded-2xl p-6 shadow-md border border-blue-100">
                    <h4 className="text-lg font-bold text-blue-700 mb-2">Notification Details</h4>
                    <div>
                      <label className="block font-medium text-gray-700">Priority</label>
                      <select className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={notifPriority} onChange={e => setNotifPriority(e.target.value)} required>
                        {priorityOptions.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.icon} {opt.value}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">Message</label>
                      <textarea className="bg-blue-100 mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows={6} value={notifMessage} onChange={e => setNotifMessage(e.target.value)} required placeholder="Enter your notification message here..." />
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                        <FiBell className="mr-2" /> Broadcast Notification
                      </button>
                    </div>
                  </div>
                  {/* Status Panel */}
                  <div className="bg-white/80 rounded-2xl p-6 shadow-inner border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-3">Delivery Status</h3>
                    <div className="space-y-3 divide-y divide-gray-200">
                      {notifStatus.length > 0 ? (
                        notifStatus.map((s, idx) => (
                          <div key={idx} className="flex items-center gap-4 py-3 group">
                            <div className="flex-shrink-0 h-14 w-14 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">
                              {s.org.logo}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center">
                                <p className="text-base font-semibold text-gray-900 truncate">{s.org.name}</p>
                                <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold ${statusColors[s.status]}`}>{s.status}</span>
                              </div>
                              <div className="flex justify-between mt-1 items-center">
                                <p className="text-xs text-gray-500">{s.timestamp.toLocaleTimeString()}</p>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${s.read ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{s.read ? (<><FiCheck className="mr-1" /> Read</>) : (<><FiClock className="mr-1" /> Pending</>)}</span>
                              </div>
                            </div>
                            {/* Timeline Dot */}
                            <div className={`h-5 w-5 rounded-full border-2 ${s.status === 'Read' ? 'bg-green-400 border-green-600' : s.status === 'Delivered' ? 'bg-yellow-300 border-yellow-500' : 'bg-blue-200 border-blue-400'} shadow transition-all group-hover:scale-110`} title={s.status}></div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-400">
                          <FiBell className="mx-auto h-12 w-12" />
                          <p className="mt-2">No notifications sent yet</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            )}

            {/* Alert Tab */}
            {activeTab === 'alert' && (
              <form onSubmit={handleAlertSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6 bg-white/80 rounded-2xl p-6 shadow-md border border-blue-100">
                    <h4 className="text-lg font-bold text-blue-700 mb-2">Alert Details</h4>
                    <div>
                      <label className="block font-medium text-gray-700">Recipient Type</label>
                      <div className="flex gap-4 mt-1">
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="radio" name="alertRecipientType" value="all" checked={alertRecipientType === 'all'} onChange={() => setAlertRecipientType('all')} className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-2">All Organizations</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="radio" name="alertRecipientType" value="custom" checked={alertRecipientType === 'custom'} onChange={() => setAlertRecipientType('custom')} className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-2">Custom</span>
                        </label>
                      </div>
                      {alertRecipientType === 'custom' && (
                        <div className="mt-2">
                          <label className="block font-medium text-gray-700">Select Organizations</label>
                          <select multiple className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-auto min-h-[100px] bg-white" value={alertCustomOrgs} onChange={e => setAlertCustomOrgs(Array.from(e.target.selectedOptions, option => option.value))}>
                            {mockOrganizations.map(org => (
                              <option key={org.id} value={org.id} className="flex items-center gap-2 py-1">{org.logo} {org.name}</option>
                            ))}
                          </select>
                          {alertCustomOrgs.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {alertCustomOrgs.map(id => {
                                const org = mockOrganizations.find(o => o.id.toString() === id);
                                return (
                                  <span key={id} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold shadow-sm">
                                    <span className="text-lg">{org.logo}</span> {org.name}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">Alert Type</label>
                      <select className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={alertType} onChange={e => setAlertType(e.target.value)} required>
                        {alertTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">Priority</label>
                      <select className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={alertPriority} onChange={e => setAlertPriority(e.target.value)} required>
                        {priorityOptions.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.icon} {opt.value}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">Message</label>
                      <textarea className=" bg-blue-100 mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows={4} value={alertMessage} onChange={e => setAlertMessage(e.target.value)} required placeholder="Enter your alert message here..." />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700">Attachments</label>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <label className="cursor-pointer bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-xl border border-gray-300 shadow-sm text-sm font-medium text-gray-700 transition flex items-center gap-1">
                          <FiPaperclip className="text-gray-500" title="Attach files" />
                          Choose Files
                          <input type="file" multiple className="hidden" onChange={e => handleFileChange(e, setAlertAttachments)} />
                        </label>
                        {alertAttachments.length > 0 && alertAttachments.map((file, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold shadow-sm">
                            <FiPaperclip className="text-cyan-400" />
                            <span className="truncate max-w-[100px]">{file.name}</span>
                            <span className="text-xs text-gray-400">({(file.size / 1024).toFixed(1)} KB)</span>
                          </span>
                        ))}
                        {alertAttachments.length === 0 && <span className="text-sm text-gray-400">No files selected</span>}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-red-600 to-orange-400 hover:from-red-700 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all">
                        <FiAlertTriangle className="mr-2" /> Send Alert
                      </button>
                    </div>
                  </div>
                  {/* Status Panel */}
                  <div className="bg-white/80 rounded-2xl p-6 shadow-inner border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-3">Alert Status</h3>
                    <div className="space-y-3 divide-y divide-gray-200">
                      {alertStatus.length > 0 ? (
                        alertStatus.map((s, idx) => (
                          <div key={idx} className="flex items-center gap-4 py-3 group">
                            <div className="flex-shrink-0 h-14 w-14 rounded-full bg-white border-2 border-red-200 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">
                              {s.org.logo}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center">
                                <p className="text-base font-semibold text-gray-900 truncate">{s.org.name}</p>
                                <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold ${statusColors[s.status]}`}>{s.status}</span>
                              </div>
                              <div className="flex justify-between mt-1 items-center">
                                <p className="text-xs text-gray-500">{s.timestamp.toLocaleTimeString()}</p>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${s.read ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{s.read ? (<><FiCheck className="mr-1" /> Read</>) : (<><FiClock className="mr-1" /> Pending</>)}</span>
                              </div>
                            </div>
                            {/* Timeline Dot */}
                            <div className={`h-5 w-5 rounded-full border-2 ${s.status === 'Read' ? 'bg-green-400 border-green-600' : s.status === 'Delivered' ? 'bg-yellow-300 border-yellow-500' : 'bg-blue-200 border-blue-400'} shadow transition-all group-hover:scale-110`} title={s.status}></div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-400">
                          <FiAlertTriangle className="mx-auto h-12 w-12" />
                          <p className="mt-2">No alerts sent yet</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationCenter;