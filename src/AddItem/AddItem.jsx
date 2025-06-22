// import React, { useState } from 'react';
// import './AddItem.css';

// function AddItem() {
//   const [formData, setFormData] = useState({
//     name: '',
//     type: '',
//     description: '',
//     coverImage: null,
//     additionalImages: [],
//   });
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCoverChange = (e) => {
//     setFormData({ ...formData, coverImage: e.target.files[0] });
//   };

//   const handleAdditionalChange = (e) => {
//     setFormData({ ...formData, additionalImages: Array.from(e.target.files) });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     const payload = new FormData();
//     payload.append('name', formData.name);
//     payload.append('type', formData.type);
//     payload.append('description', formData.description);
//     payload.append('coverImage', formData.coverImage);
//     formData.additionalImages.forEach((file) => payload.append('additionalImages', file));

//     try {
//       const res = await fetch('http://localhost:5000/api/items', {
//         method: 'POST',
//         body: payload
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setSuccess(true);
//         setFormData({ name: '', type: '', description: '', coverImage: null, additionalImages: [] });
//         setTimeout(() => setSuccess(false), 3000);
//       } else {
//         setError(data.error);
//       }
//     } catch (err) {
//       setError('Upload failed.');
//     }
//   };

//   return (
//     <div className="add-item-container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
//       <div style={{ width: '100%', maxWidth: '600px', background: '#f9f9f9', padding: '30px', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
//         <h2 style={{ textAlign: 'center', color: '#333' }}>➕ Add New Item</h2>
//         {success && <p style={{ color: 'green', textAlign: 'center' }}>✅ Item successfully added!</p>}
//         {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//           <input type="text" name="name" placeholder="📝 Item Name" value={formData.name} onChange={handleChange} required style={{ padding: '10px' }} />
//           <select name="type" value={formData.type} onChange={handleChange} required style={{ padding: '10px' }}>
//             <option value="">🔽 Select Type</option>
//             <option value="Shirt">👕 Shirt</option>
//             <option value="Pant">👖 Pant</option>
//             <option value="Shoes">👟 Shoes</option>
//             <option value="Sports Gear">🏏 Sports Gear</option>
//           </select>
//           <textarea name="description" placeholder="📄 Description" value={formData.description} onChange={handleChange} required style={{ padding: '10px' }} />
//           <label><b>📷 Cover Image:</b></label>
//           <input type="file" accept="image/*" onChange={handleCoverChange} required />
//           <label><b>📸 Additional Images:</b></label>
//           <input type="file" accept="image/*" multiple onChange={handleAdditionalChange} />
//           <button type="submit" style={{ padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
//             ✅ Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddItem;

import React, { useState } from 'react';
import './AddItem.css';

function AddItem() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: null,
    additionalImages: [],
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoverChange = (e) => {
    setFormData({ ...formData, coverImage: e.target.files[0] });
  };

  const handleAdditionalChange = (e) => {
    setFormData({ ...formData, additionalImages: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('type', formData.type);
    payload.append('description', formData.description);
    payload.append('coverImage', formData.coverImage);
    formData.additionalImages.forEach((file) => payload.append('additionalImages', file));

    try {
      const res = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        body: payload
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', type: '', description: '', coverImage: null, additionalImages: [] });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Upload failed.');
    }
  };

  return (
    <div className="add-item-container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
      <div style={{ width: '100%', maxWidth: '600px', background: '#f9f9f9', padding: '30px', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>➕ Add New Item</h2>
        {success && <p style={{ color: 'green', textAlign: 'center' }}>✅ Item successfully added!</p>}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" name="name" placeholder="📝 Item Name" value={formData.name} onChange={handleChange} required style={{ padding: '10px' }} />
          <select name="type" value={formData.type} onChange={handleChange} required style={{ padding: '10px' }}>
            <option value="">🔽 Select Type</option>
            <option value="Shirt">👕 Shirt</option>
            <option value="Pant">👖 Pant</option>
            <option value="Shoes">👟 Shoes</option>
            <option value="Sports Gear">🏏 Sports Gear</option>
          </select>
          <textarea name="description" placeholder="📄 Description" value={formData.description} onChange={handleChange} required style={{ padding: '10px' }} />
          <label><b>📷 Cover Image:</b></label>
          <input type="file" accept="image/*" onChange={handleCoverChange} required />
          <label><b>📸 Additional Images:</b></label>
          <input type="file" accept="image/*" multiple onChange={handleAdditionalChange} />
          <button type="submit" style={{ padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            ✅ Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddItem;






