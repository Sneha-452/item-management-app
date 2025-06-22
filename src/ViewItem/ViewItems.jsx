// import React, { useState, useEffect } from 'react';
// import './ViewItems.css';

// function ViewItems() {
//   const [items, setItems] = useState([]);
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/items')
//       .then(res => res.json())
//       .then(data => setItems(Array.isArray(data) ? data : []))
//       .catch(() => setItems([]));
//   }, []);

//   const handleEnquire = async () => {
//     if (!selected) return;
//     const payload = {
//       item_name: selected.name,
//       item_type: selected.type,
//       item_description: selected.description
//     };

//     try {
//       const res = await fetch('http://localhost:5000/api/enquiry', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });
//       const result = await res.json();
//       alert(result.message || 'Email sent!');
//     } catch (err) {
//       alert('Error sending email');
//     }
//   };

//   return (
//     <div className="view-container">
//       <h2 className="view-title">📦 View Items</h2>
//       <nav style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//         <a href="/add" style={{ margin: '0 20px', textDecoration: 'none', color: '#007bff' }}>➕ Add Item</a>
//         <a href="/view" style={{ margin: '0 20px', textDecoration: 'none', color: '#007bff' }}>📦 View Items</a>
//       </nav>
//       <div className="view-grid">
//         {items.length ? items.map(item => (
//           <div key={item._id} className="card" onClick={() => setSelected(item)}>
//             <img src={item.coverImage} alt={item.name} className="card-img" />
//             <h3>{item.name}</h3>
//           </div>
//         )) : <p className="no-items">📭 No items to display</p>}
//       </div>

//       {selected && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>{selected.name}</h3>
//             <p><b>Type:</b> {selected.type}</p>
//             <p><b>Description:</b> {selected.description}</p>
//             <div className="carousel">
//               {[selected.coverImage, ...(selected.additionalImages || [])].map((img, i) => (
//                 <img key={i} src={img} alt={`item-${i}`} className="carousel-img" />
//               ))}
//             </div>
//             <div className="modal-actions">
//               <button className="enquire-btn" onClick={handleEnquire}>📩 Enquire</button>
//               <button onClick={() => setSelected(null)} className="close-btn">❌ Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ViewItems;      





import React, { useState, useEffect } from 'react';
import './ViewItems.css';

function ViewItems() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then(res => res.json())
      .then(data => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]));
  }, []);

  const handleEnquire = async () => {
    if (!selected) return;
    const payload = {
      item_name: selected.name,
      item_type: selected.type,
      item_description: selected.description
    };

    try {
      const res = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      alert(result.message || 'Email sent!');
    } catch (err) {
      alert('Error sending email');
    }
  };

  return (
    <div className="view-container">
      <h2 className="view-title">📦 View Items</h2>
      <nav style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <a href="/add" style={{ margin: '0 20px', textDecoration: 'none', color: '#007bff' }}>➕ Add Item</a>
        <a href="/view" style={{ margin: '0 20px', textDecoration: 'none', color: '#007bff' }}>📦 View Items</a>
      </nav>
      <div className="view-grid">
        {items.length ? items.map(item => (
          <div key={item._id} className="card" onClick={() => setSelected(item)}>
            <img src={`http://localhost:5000${item.coverImage}`} alt={item.name} className="card-img" />
            <h3>{item.name}</h3>
          </div>
        )) : <p className="no-items">📭 No items to display</p>}
      </div>

      {selected && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selected.name}</h3>
            <p><b>Type:</b> {selected.type}</p>
            <p><b>Description:</b> {selected.description}</p>
            <div className="carousel">
              {[selected.coverImage, ...(selected.additionalImages || [])].map((img, i) => (
                <img key={i} src={`http://localhost:5000${img}`} alt={`item-${i}`} className="carousel-img" />
              ))}
            </div>
            <div className="modal-actions">
              <button className="enquire-btn" onClick={handleEnquire}>📩 Enquire</button>
              <button onClick={() => setSelected(null)} className="close-btn">❌ Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewItems;






