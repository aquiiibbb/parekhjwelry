import React, { useState } from "react";
import "./start.css";

// Variable names number se start nahi ho sakte, isliye 'img' lagana zaroori hai
import img1 from '../assest/1.png';
import img2 from '../assest/2.png';
import img3 from '../assest/3.png';
import img4 from '../assest/4.png';
import img5 from '../assest/5.png';
import img6 from '../assest/6.png';
import img7 from '../assest/7.png';
import img8 from '../assest/8.png';
import img9 from '../assest/9.png';
import img10 from '../assest/10.png';
import img11 from '../assest/stone.png';

// 1. Category Data & Images
const categoryImages = {
  anklet: img1,
  bracelet: img2,
  chain: img3,
  charm: img4,
  earrings: img5,
  necklace: img6,
  pendant: img7,
  ring: img8,
  stone: img9,
  watch: img10,
};

const categories = [
  { key: "anklet", label: "Anklet", basePrice: 80 },
  { key: "bracelet", label: "Bracelet", basePrice: 90 },
  { key: "chain", label: "Chain", basePrice: 60 },
  { key: "charm", label: "Charm", basePrice: 30 },
  { key: "earrings", label: "Earrings", basePrice: 50 },
  { key: "necklace", label: "Necklace", basePrice: 120 },
  { key: "pendant", label: "Pendant", basePrice: 70 },
  { key: "ring", label: "Ring", basePrice: 85 },
  { key: "stone", label: "Stone", basePrice: 40 },
  { key: "watch", label: "Watch", basePrice: 150 },
];

// 2. Services Data
const AVAILABLE_SERVICES = [
  { id: '3d-cad-cam-design', name: '3D CAD/CAM Design', category: 'Other', desc: 'Custom 3D CAD/CAM jewelry design and modeling.', price: 40, img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80' },
  { id: 'appraisal', name: 'Appraisal', category: 'Other', desc: 'Professional jewelry appraisal and valuation.', price: 40, img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=500&q=80' },
  { id: 'bail-fabrication', name: 'Bail Fabrication', category: 'Pendant', desc: 'Custom bail fabrication for pendants and charms.', price: 40, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80' },
  { id: 'chain-solder', name: 'Chain Solder', category: 'Chain', desc: 'Expert chain soldering and seamless repair.', price: 40, img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80' },
  { id: 'clasp-replacement', name: 'Clasp Replacement', category: 'Bracelet', desc: 'Replace broken or worn clasps on chains and bracelets.', price: 40, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZqnAtQ9auUuFu9HjY3nhaAE1qTR9GGId65vBvdcaQg&s=10' },
  { id: 'cleanse-restore', name: 'Cleanse & Restore', category: 'Other', desc: 'Deep cleaning and complete restoration for your jewelry.', price: 40, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80' },
  { id: 'detangle', name: 'Detangle', category: 'Chain', desc: 'Careful detangling of knotted chains and necklaces.', price: 40, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=80' },
  { id: 'earrings-backing', name: 'Earrings Backing Conversion', category: 'Earrings', desc: 'Convert earring backings for better comfort and security.', price: 40, img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=500&q=80' },
  { id: 'engraving', name: 'Engraving', category: 'Other', desc: 'Add meaningful personalized jewelry inscriptions.', price: 40, img: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=500&q=80' },
  { id: 'engraving-removal', name: 'Engraving Removal', category: 'Other', desc: 'Remove unwanted engravings and personalization marks.', price: 40, img: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=500&q=80' },
  { id: 'plating', name: 'Plating', category: 'Other', desc: 'Restore brightness and refresh jewelry finishes.', price: 40, img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=500&q=80' },
  { id: 'polish', name: 'Polish', category: 'Other', desc: 'Remove wear and restore jewelry shine.', price: 40, img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=500&q=80' },
  { id: 'prong-repair', name: 'Prong Repair', category: 'Ring', desc: 'Secure gemstones with renewed protective prongs.', price: 53, img: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=500&q=80' },
  { id: 'ring-band-renewal', name: 'Ring Band Renewal', category: 'Ring', desc: 'Renew and strengthen worn ring bands.', price: 40, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80' },
  { id: 'ring-resize', name: 'Ring Resize', category: 'Ring', desc: 'Professional ring resizing for a perfect fit.', price: 40, img: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=500&q=80' },
  { id: 'ring-rounding', name: 'Ring Rounding', category: 'Ring', desc: 'Restore bent rings back to their perfect round shape.', price: 40, img: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=500&q=80' },
  { id: 'rings-joining-separation', name: 'Rings Joining & Separation', category: 'Ring', desc: 'Join bridal sets or separate previously joined rings.', price: 40, img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80' },
  { id: 'stone-replacement', name: 'Stone Replacement', category: 'Stone', desc: 'Source and replace missing or damaged stones.', price: 40, img: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=500&q=80' },
  { id: 'stone-setting', name: 'Stone Setting &...', category: 'Stone', desc: 'Professionally secure gemstones within jewelry settings.', price: 51, img: img11 },
  { id: 'stone-tightening', name: 'Stone Tightening', category: 'Stone', desc: 'Secure loose stones before they become lost.', price: 40, img: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=500&q=80' }
];

// 3. UI Images Mapping (Screenshots wale options ke photos)
// Replace these placehold.co links with your own asset paths later (e.g. img1, img2)
const UI_IMAGES = {
  stones: {
    Amethyst: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Amethyst',
    Citrine: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Citrine',
    Diamond: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Diamond',
    Emerald: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Emerald',
    Garnet: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Garnet',
    Opal: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Opal',
    Peridot: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Peridot',
    Ruby: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Ruby',
    Sapphire: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Sapphire',
    Topaz: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Topaz',
  },
  chains: {
    Ball: 'https://placehold.co/120x80/f5f0eb/8a897f?text=Ball',
    Box: 'https://placehold.co/120x80/f5f0eb/8a897f?text=Box',
    Cable: 'https://placehold.co/120x80/f5f0eb/8a897f?text=Cable',
    'Curb Cuban': 'https://placehold.co/120x80/f5f0eb/8a897f?text=Curb+Cuban',
    Figaro: 'https://placehold.co/120x80/f5f0eb/8a897f?text=Figaro',
    'Miami Cuban': 'https://placehold.co/120x80/f5f0eb/8a897f?text=Miami+Cuban',
    Paperclip: 'https://placehold.co/120x80/f5f0eb/8a897f?text=Paperclip',
    Rope: 'https://placehold.co/120x80/f5f0eb/8a897f?text=Rope',
    Singapore: 'https://placehold.co/120x80/f5f0eb/8a897f?text=Singapore',
    Tennis: 'https://placehold.co/120x80/f5f0eb/8a897f?text=Tennis',
    Wheat: 'https://placehold.co/120x80/f5f0eb/8a897f?text=Wheat',
  },
  settings: {
    Bezel: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Bezel',
    Channel: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Channel',
    Prong: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Prong',
  },
  polish: {
    Gloss: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Gloss',
    Hammered: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Hammered',
    Matte: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Matte',
    'Sand Blast': 'https://placehold.co/100x100/f5f0eb/8a897f?text=Sand+Blast',
    Satin: 'https://placehold.co/100x100/f5f0eb/8a897f?text=Satin',
  }
};

export default function ProcessFlow() {
  const [step, setStep] = useState(1);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  
  const [formData, setFormData] = useState({
    baseMetal: '',
    additionalDetails: '',
    
    // Cleanse & Restore
    cleanseType: '',
    
    // Chain & Clasp
    jewelryConstruction: '',
    chainLinkType: '',
    stonesMounted: '',
    solderingLevel: '',
    numberOfSolderLocations: '',
    desiredClaspType: '',
    jewelryWeight: '',
    
    // Plating & Polish
    platingColor: '',
    platingGrade: '',
    polishFinish: '',
    
    // Appraisal
    appraisalProvider: '',
    nameOnAppraisal: '',
    
    // Engraving
    engravingType: '',
    
    // Stone Tightening
    serviceType: '', // Inspect & Tighten, Remove, Remove & Reset
    stoneSettingTypeTighten: '', // Bezel, Channel, Prong, Other
    smallestStone: '',
    numberOfStones: '',
    
    // Stone Setting
    stoneShape: '',
    stoneSettingTypeSetting: '', // Channel, Low-Base Prong, Solitaire Prong
    
    // Prong Repair
    numberOfProngs: '',
    prongType: '',
    stoneType: ''
  });

  const toggleService = (id) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // ----- DYNAMIC FIELD LOGIC -----
  const getRequiredFields = () => {
    let fields = new Set();
    
    selectedServices.forEach(id => {
      if (id === 'appraisal') {
        fields.add('baseMetal');
        fields.add('appraisalProvider');
        fields.add('nameOnAppraisal');
      } else if (id === 'chain-solder') {
        fields.add('baseMetal');
        fields.add('jewelryConstruction');
        fields.add('chainLinkType');
        fields.add('stonesMounted');
        fields.add('solderingLevel');
        fields.add('numberOfSolderLocations');
      } else if (id === 'clasp-replacement') {
        fields.add('jewelryConstruction');
        fields.add('chainLinkType');
        fields.add('desiredClaspType');
      } else if (id === 'cleanse-restore') {
        fields.add('cleanseType');
      } else if (id === 'detangle') {
        fields.add('jewelryWeight');
      } else if (id === 'engraving') {
        fields.add('baseMetal');
        fields.add('engravings');
      } else if (id === 'plating') {
        fields.add('platingColor');
        fields.add('platingGrade');
        fields.add('jewelryWeight');
        fields.add('jewelryConstruction');
      } else if (id === 'polish') {
        fields.add('baseMetal');
        fields.add('polishFinish');
      } else if (id === 'prong-repair') {
        fields.add('baseMetal');
        fields.add('numberOfProngs');
        fields.add('prongType');
        fields.add('stoneType');
      } else if (id === 'stone-setting') {
        fields.add('baseMetal');
        fields.add('stoneShape');
        fields.add('stoneSettingTypeSetting');
      } else if (id === 'stone-tightening') {
        fields.add('baseMetal');
        fields.add('serviceType');
        fields.add('stoneSettingTypeTighten');
        fields.add('smallestStone');
        fields.add('numberOfStones');
      } else {
        fields.add('baseMetal');
      }
    });

    return Array.from(fields);
  };

  // ----- STEP 1: PIECE SELECTION -----
  const renderStep1 = () => (
    <section className="sms-grid-section fade-in">
      <h1 className="sms-grid__title">select your piece</h1>
      <div className="sms-grid">
        {categories.map((item) => (
          <button 
            key={item.key}
            className="sms-card" 
            type="button"
            onClick={() => {
              setSelectedPiece(item);
              setSelectedServices([]); 
              setStep(2);
            }}
          >
            <span className="sms-card__photo">
              <img src={categoryImages[item.key]} alt={item.label} loading="lazy" />
            </span>
            <span className="sms-card__label">{item.label}</span>
          </button>
        ))}
      </div>
    </section>
  );

  // ----- STEP 2: SERVICE SELECTION -----
  const renderStep2 = () => {
    const filteredServices = AVAILABLE_SERVICES.filter(service => 
      service.category === selectedPiece.label || service.category === 'Other'
    );

    return (
      <div className="process-step fade-in">
        <h2 className="sms-grid__title" style={{textAlign: "center", marginBottom: "20px"}}>
          Services for {selectedPiece.label}
        </h2>
        <div className="services-grid">
          {filteredServices.length > 0 ? (
            filteredServices.map(service => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <div 
                  key={service.id} 
                  className={`service-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="service-img-wrapper">
                    <img src={service.img} alt={service.name} />
                    <div className="checkbox">
                      {isSelected && <span className="checkmark">✔</span>}
                    </div>
                  </div>
                  <div className="service-info">
                    <h4>{service.name}</h4>
                    <p>{service.desc}</p>
                    <span className="price">from ${service.price}+</span>
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{textAlign: "center", width: "100%"}}>No specific services found for {selectedPiece.label}.</p>
          )}
        </div>
        <div className="bottom-action-bar">
          <button className="btn-light" onClick={() => setStep(1)}>Pick a different piece</button>
          <button 
            className="btn-primary" 
            disabled={selectedServices.length === 0}
            onClick={() => setStep(3)}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  // ----- STEP 3: CONFIGURATION FORM (DYNAMIC) -----
  const renderStep3 = () => {
    if (!selectedPiece) return null;
    
    const fieldsToShow = getRequiredFields();

    return (
      <div className="process-step config-step fade-in">
        <button className="text-btn back-link" onClick={() => setStep(2)}>
          &larr; Change services
        </button>
        
        <div className="config-layout">
          <div className="config-left">
            <div className="product-showcase">
              <img src={categoryImages[selectedPiece.key]} alt={selectedPiece.label} />
              <div className="product-showcase-info">
                <h2 className="script-font">{selectedPiece.label}</h2>
                <span className="base-price">${selectedPiece.basePrice}+</span>
              </div>
              <div className="selected-pills">
                {selectedServices.map(id => {
                  const s = AVAILABLE_SERVICES.find(x => x.id === id);
                  return <span key={id} className="pill">{s?.name}</span>;
                })}
              </div>
            </div>
          </div>

          <div className="config-right">
            
            {/* TYPE (Cleanse & Restore) */}
            {fieldsToShow.includes('cleanseType') && (
              <div className="form-group">
                <label>Type <span className="req">*</span></label>
                <div className="segmented-control" style={{display: 'flex', gap: '10px'}}>
                  <button type="button" style={{display: 'flex', flexDirection: 'column', textAlign: 'left', padding: '15px'}} className={formData.cleanseType === 'Basic Cleanse' ? 'active' : ''} onClick={() => handleFormChange('cleanseType', 'Basic Cleanse')}>
                    <strong style={{marginBottom: '5px'}}>Basic Cleanse</strong>
                    <span style={{fontSize: '12px', color: 'gray'}}>Ultrasonic clean • Steam remove dirt & buildup • Dry</span>
                  </button>
                  <button type="button" style={{display: 'flex', flexDirection: 'column', textAlign: 'left', padding: '15px'}} className={formData.cleanseType === 'Full Restoration' ? 'active' : ''} onClick={() => handleFormChange('cleanseType', 'Full Restoration')}>
                    <strong style={{marginBottom: '5px'}}>Full Restoration</strong>
                    <span style={{fontSize: '12px', color: 'gray'}}>Check & tighten stones • Restore shape & alignment • Remove scratches • Refinish to like-new • Apply rhodium (white gold, if needed) • Limited stone coverage based on size & condition</span>
                  </button>
                </div>
              </div>
            )}

            {/* BASE METAL */}
            {fieldsToShow.includes('baseMetal') && (
              <div className="form-group">
                <label>Base Metal <span className="req">*</span></label>
                <select value={formData.baseMetal} onChange={(e) => handleFormChange('baseMetal', e.target.value)}>
                  <option value="">Select...</option>
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                  <option value="platinum">Platinum</option>
                </select>
              </div>
            )}

            {/* NUMBER OF PRONGS (Prong Repair) */}
            {fieldsToShow.includes('numberOfProngs') && (
              <div className="form-group">
                <label>Number of Prongs <span className="req">*</span></label>
                <input type="number" value={formData.numberOfProngs} onChange={(e) => handleFormChange('numberOfProngs', e.target.value)} />
              </div>
            )}

            {/* PRONG TYPE (Prong Repair) */}
            {fieldsToShow.includes('prongType') && (
              <div className="form-group">
                <label>Prong Type <span className="req">*</span></label>
                <div className="segmented-control" style={{flexWrap: 'wrap', gap: '10px'}}>
                  {['Full-Prong', 'Half-Prong', 'Tip', 'V-Prong'].map(opt => (
                    <button key={opt} type="button" style={{flex: '1 1 calc(25% - 10px)'}} className={formData.prongType === opt ? 'active' : ''} onClick={() => handleFormChange('prongType', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STONE TYPE(S) Images (Prong Repair) */}
            {fieldsToShow.includes('stoneType') && (
              <div className="form-group">
                <label>Stone Type(s) <span className="req">*</span></label>
                <div className="chain-link-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
                  {['Amethyst', 'Citrine', 'Diamond', 'Emerald', 'Garnet', 'Opal', 'Peridot', 'Ruby', 'Sapphire', 'Topaz', 'Other'].map(type => (
                    <div 
                      key={type}
                      className={`stone-card ${formData.stoneType === type ? 'active' : ''}`}
                      onClick={() => handleFormChange('stoneType', type)}
                      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', border: '1px solid #e0dcd3', borderRadius: '8px', cursor: 'pointer', background: formData.stoneType === type ? '#fff7f0' : '#fff'}}
                    >
                      {type === 'Other' ? (
                        <div style={{height: '50px', width: '50px', border: '1px dashed #ccc', borderRadius: '50%', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#8a897f'}}>+</div>
                      ) : (
                        <img src={UI_IMAGES.stones[type]} alt={type} style={{height: '50px', width: '50px', objectFit: 'contain', marginBottom: '10px', borderRadius: '8px'}} />
                      )}
                      <span style={{fontSize: '12px', textAlign: 'center'}}>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STONE SHAPE (Stone Setting) */}
            {fieldsToShow.includes('stoneShape') && (
              <div className="form-group">
                <label>Stone Shape <span className="req">*</span></label>
                <div className="segmented-control" style={{flexWrap: 'wrap', gap: '10px'}}>
                  {['Baguette', 'Emerald-Cut', 'Heart', 'Marquise', 'Oval', 'Pear', 'Princess', 'Round'].map(opt => (
                    <button key={opt} type="button" style={{flex: '1 1 calc(25% - 10px)'}} className={formData.stoneShape === opt ? 'active' : ''} onClick={() => handleFormChange('stoneShape', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STONE SETTING TYPE - Buttons (Stone Setting) */}
            {fieldsToShow.includes('stoneSettingTypeSetting') && (
              <div className="form-group">
                <label>Stone Setting Type <span className="req">*</span></label>
                <div className="segmented-control">
                  {['Channel', 'Low-Base Prong', 'Solitaire Prong'].map(opt => (
                    <button key={opt} type="button" className={formData.stoneSettingTypeSetting === opt ? 'active' : ''} onClick={() => handleFormChange('stoneSettingTypeSetting', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SERVICE TYPE (Stone Tightening) */}
            {fieldsToShow.includes('serviceType') && (
              <div className="form-group">
                <label>Service Type <span className="req">*</span></label>
                <div className="segmented-control">
                  {['Inspect & Tighten', 'Remove', 'Remove & Reset'].map(opt => (
                    <button key={opt} type="button" className={formData.serviceType === opt ? 'active' : ''} onClick={() => handleFormChange('serviceType', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STONE SETTING TYPE - Images (Stone Tightening) */}
            {fieldsToShow.includes('stoneSettingTypeTighten') && (
              <div className="form-group">
                <label>Stone Setting Type <span className="req">*</span></label>
                <div className="stone-setting-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
                  {['Bezel', 'Channel', 'Prong', 'Other'].map(type => (
                    <div 
                      key={type}
                      className={`stone-card ${formData.stoneSettingTypeTighten === type ? 'active' : ''}`}
                      onClick={() => handleFormChange('stoneSettingTypeTighten', type)}
                      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', border: '1px solid #e0dcd3', borderRadius: '8px', cursor: 'pointer', background: formData.stoneSettingTypeTighten === type ? '#fff7f0' : '#fff'}}
                    >
                      {type === 'Other' ? (
                        <div style={{height: '60px', width: '60px', border: '1px dashed #ccc', borderRadius: '8px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#8a897f'}}>+</div>
                      ) : (
                        <img src={UI_IMAGES.settings[type]} alt={type} style={{height: '60px', width: '60px', objectFit: 'contain', marginBottom: '10px', borderRadius: '8px'}} />
                      )}
                      <span style={{fontSize: '12px'}}>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SMALLEST STONE SIZE */}
            {fieldsToShow.includes('smallestStone') && (
              <div className="form-group">
                <label>Smallest Stone Size <span className="req">*</span></label>
                <div className="segmented-control">
                  {['Less than or equal to 5 mm', 'Greater than 5 mm'].map(opt => (
                    <button key={opt} type="button" className={formData.smallestStone === opt ? 'active' : ''} onClick={() => handleFormChange('smallestStone', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* NUMBER OF STONES */}
            {fieldsToShow.includes('numberOfStones') && (
              <div className="form-group">
                <label>Number of Stones <span className="req">*</span></label>
                <input type="text" value={formData.numberOfStones} onChange={(e) => handleFormChange('numberOfStones', e.target.value)} />
              </div>
            )}

            {/* PLATING COLOR */}
            {fieldsToShow.includes('platingColor') && (
              <div className="form-group">
                <label>Plating Color <span className="req">*</span></label>
                <select value={formData.platingColor} onChange={(e) => handleFormChange('platingColor', e.target.value)}>
                  <option value="">Select...</option>
                  <option value="rhodium">Rhodium (White)</option>
                  <option value="yellow-gold">Yellow Gold</option>
                  <option value="rose-gold">Rose Gold</option>
                  <option value="black-rhodium">Black Rhodium</option>
                </select>
              </div>
            )}

            {/* PLATING GRADE */}
            {fieldsToShow.includes('platingGrade') && (
              <div className="form-group">
                <label>Plating Grade <span className="req">*</span></label>
                <div className="segmented-control" style={{display: 'flex', gap: '10px'}}>
                  <button type="button" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={formData.platingGrade === 'Standard' ? 'active' : ''} onClick={() => handleFormChange('platingGrade', 'Standard')}>
                    <span>Standard</span><span style={{fontSize: '12px', marginTop: '4px', fontWeight: 'normal', color: 'gray'}}>Lasts 4-5 months</span>
                  </button>
                  <button type="button" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={formData.platingGrade === 'Premium' ? 'active' : ''} onClick={() => handleFormChange('platingGrade', 'Premium')}>
                    <span>Premium</span><span style={{fontSize: '12px', marginTop: '4px', fontWeight: 'normal', color: 'gray'}}>Lasts for over a year</span>
                  </button>
                </div>
              </div>
            )}

            {/* POLISH FINISH - Images */}
            {fieldsToShow.includes('polishFinish') && (
              <div className="form-group">
                <label>Polish Finish <span className="req">*</span></label>
                <div className="chain-link-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px'}}>
                  {['Gloss', 'Hammered', 'Matte', 'Sand Blast', 'Satin'].map(finish => (
                    <div 
                      key={finish} 
                      className={`stone-card ${formData.polishFinish === finish ? 'active' : ''}`} 
                      onClick={() => handleFormChange('polishFinish', finish)} 
                      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', border: '1px solid #e0dcd3', borderRadius: '8px', cursor: 'pointer', background: formData.polishFinish === finish ? '#fff7f0' : '#fff'}}
                    >
                      <img src={UI_IMAGES.polish[finish]} alt={finish} style={{height: '50px', width: '50px', objectFit: 'contain', marginBottom: '10px', borderRadius: '8px'}} />
                      <span style={{fontSize: '12px', textAlign: 'center'}}>{finish}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* JEWELRY WEIGHT */}
            {fieldsToShow.includes('jewelryWeight') && (
              <div className="form-group">
                <label>Jewelry Weight <span className="req">*</span></label>
                <div style={{position: 'relative'}}>
                  <input type="number" value={formData.jewelryWeight} onChange={(e) => handleFormChange('jewelryWeight', e.target.value)} style={{paddingRight: '60px'}} />
                  <span style={{position: 'absolute', right: '15px', top: '15px', color: 'gray'}}>grams</span>
                </div>
              </div>
            )}

            {/* JEWELRY CONSTRUCTION */}
            {fieldsToShow.includes('jewelryConstruction') && (
              <div className="form-group">
                <label>Jewelry Construction <span className="req">*</span></label>
                <div className="segmented-control">
                  {['Solid', 'Hollow', 'Not Sure'].map(opt => (
                    <button key={opt} type="button" className={formData.jewelryConstruction === opt ? 'active' : ''} onClick={() => handleFormChange('jewelryConstruction', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CHAIN LINK TYPE - Images */}
            {fieldsToShow.includes('chainLinkType') && (
              <div className="form-group">
                <label>Chain Link Type <span className="req">*</span></label>
                <div className="chain-link-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px'}}>
                  {['Ball', 'Box', 'Cable', 'Curb Cuban', 'Figaro', 'Miami Cuban', 'Paperclip', 'Rope', 'Singapore', 'Tennis', 'Wheat', 'Other'].map(type => (
                    <div 
                      key={type} 
                      className={`stone-card ${formData.chainLinkType === type ? 'active' : ''}`} 
                      onClick={() => handleFormChange('chainLinkType', type)} 
                      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', border: '1px solid #e0dcd3', borderRadius: '8px', cursor: 'pointer', background: formData.chainLinkType === type ? '#fff7f0' : '#fff'}}
                    >
                      {type === 'Other' ? (
                        <div style={{height: '40px', width: '100%', border: '1px dashed #ccc', borderRadius: '4px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#8a897f'}}>+</div>
                      ) : (
                        <img src={UI_IMAGES.chains[type]} alt={type} style={{height: '40px', width: '100%', objectFit: 'cover', marginBottom: '10px', borderRadius: '4px'}} />
                      )}
                      <span style={{fontSize: '12px', textAlign: 'center'}}>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ARE THERE STONES MOUNTED? */}
            {fieldsToShow.includes('stonesMounted') && (
              <div className="form-group">
                <label>Are there Stones mounted? <span className="req">*</span></label>
                <div className="segmented-control">
                  {['No', 'Yes'].map(opt => (
                    <button key={opt} type="button" className={formData.stonesMounted === opt ? 'active' : ''} onClick={() => handleFormChange('stonesMounted', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SOLDERING LEVEL */}
            {fieldsToShow.includes('solderingLevel') && (
              <div className="form-group">
                <label>Soldering Level <span className="req">*</span></label>
                <div className="segmented-control vertical" style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <button type="button" className={formData.solderingLevel === 'Simple' ? 'active' : ''} onClick={() => handleFormChange('solderingLevel', 'Simple')} style={{textAlign: 'left', padding: '15px'}}>
                    <strong>Simple</strong> - Small breaks in chains, jump ring solder, ear posts that fell off, small areas, simple to do.
                  </button>
                  <button type="button" className={formData.solderingLevel === 'Intricate' ? 'active' : ''} onClick={() => handleFormChange('solderingLevel', 'Intricate')} style={{textAlign: 'left', padding: '15px'}}>
                    <strong>Intricate</strong> - Breaks in chains, wider solder areas, alignment is needed.
                  </button>
                  <button type="button" className={formData.solderingLevel === 'Complex' ? 'active' : ''} onClick={() => handleFormChange('solderingLevel', 'Complex')} style={{textAlign: 'left', padding: '15px'}}>
                    <strong>Complex</strong> - A break or breaks where other areas may come apart. Very wide areas to be soldered.
                  </button>
                  <button type="button" className={formData.solderingLevel === 'Difficult' ? 'active' : ''} onClick={() => handleFormChange('solderingLevel', 'Difficult')} style={{textAlign: 'left', padding: '15px'}}>
                    <strong>Difficult</strong> - Possibility of harming stones, multiple weld spots involved, or a hollow chain, the "best jeweler" must do the work.
                  </button>
                </div>
              </div>
            )}

            {/* NUMBER OF SOLDER LOCATIONS */}
            {fieldsToShow.includes('numberOfSolderLocations') && (
              <div className="form-group">
                <label>Number of Solder Locations <span className="req">*</span></label>
                <input type="number" value={formData.numberOfSolderLocations} onChange={(e) => handleFormChange('numberOfSolderLocations', e.target.value)} />
              </div>
            )}

            {/* DESIRED CLASP TYPE */}
            {fieldsToShow.includes('desiredClaspType') && (
              <div className="form-group">
                <label>Desired Clasp Type <span className="req">*</span></label>
                <div className="segmented-control" style={{flexWrap: 'wrap', gap: '10px'}}>
                  {['Barrel', 'Box-Lock', 'Hidden Box-Lock', 'Hinge Clasp Lock', 'Lobster', 'Spring-Ring', 'Other'].map(opt => (
                    <button key={opt} type="button" style={{flex: '1 1 calc(33% - 10px)'}} className={formData.desiredClaspType === opt ? 'active' : ''} onClick={() => handleFormChange('desiredClaspType', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* APPRAISAL PROVIDER */}
            {fieldsToShow.includes('appraisalProvider') && (
              <div className="form-group">
                <label>Appraisal Provider <span className="req">*</span></label>
                <div className="segmented-control" style={{display: 'flex', gap: '10px'}}>
                  <button type="button" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={formData.appraisalProvider === 'GIA Certified Appraisal' ? 'active' : ''} onClick={() => handleFormChange('appraisalProvider', 'GIA Certified Appraisal')}>
                    <span>GIA Certified Appraisal</span><span style={{fontSize: '10px', marginTop: '4px', fontWeight: 'normal', color: 'gray'}}>Appraised by GIA Certified Individual</span>
                  </button>
                  <button type="button" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={formData.appraisalProvider === 'EGL USA Gemology Lab' ? 'active' : ''} onClick={() => handleFormChange('appraisalProvider', 'EGL USA Gemology Lab')}>
                    <span>EGL USA Gemology Lab</span><span style={{fontSize: '10px', marginTop: '4px', fontWeight: 'normal', color: 'gray'}}>Appraised by Private Lab</span>
                  </button>
                </div>
              </div>
            )}

            {/* NAME ON APPRAISAL */}
            {fieldsToShow.includes('nameOnAppraisal') && (
              <div className="form-group">
                <label>Name on Appraisal (Full Legal Name) <span className="req">*</span></label>
                <input type="text" value={formData.nameOnAppraisal} onChange={(e) => handleFormChange('nameOnAppraisal', e.target.value)} />
              </div>
            )}

            {/* ENGRAVINGS */}
            {fieldsToShow.includes('engravings') && (
              <div className="form-group">
                <label>Engravings <span className="req">*</span></label>
                <p className="sub-label">Add up to 3 text or photo engravings on this piece.</p>
                <div className="segmented-control">
                  <button type="button" className={formData.engravingType === 'Text' ? 'active' : ''} onClick={() => handleFormChange('engravingType', 'Text')}>+ Text engraving</button>
                  <button type="button" className={formData.engravingType === 'Photo' ? 'active' : ''} onClick={() => handleFormChange('engravingType', 'Photo')}>+ Photo engraving</button>
                </div>
              </div>
            )}

            {/* ADDITIONAL DETAILS (Always Visible) */}
            <div className="form-group">
              <label>Additional Details <span className="req">*</span></label>
              <div className="textarea-wrapper">
                <textarea 
                  placeholder="Describe any special requests, details, or instructions..."
                  rows="4"
                  value={formData.additionalDetails}
                  onChange={(e) => handleFormChange('additionalDetails', e.target.value)}
                />
                <div className="textarea-icons">
                  <span>📎</span> <span>📷</span> <span>🎤</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="bottom-action-bar form-actions">
          <button className="btn-light" onClick={() => setStep(2)}>Back</button>
          <button className="btn-primary" onClick={() => setStep(4)}>Review & Add to Cart</button>
        </div>
      </div>
    );
  };

  // ----- STEP 4: REVIEW & ADD TO CART -----
  const renderStep4 = () => {
    if (!selectedPiece) return null;
    
    const fieldsToShow = getRequiredFields();

    return (
      <div className="process-step review-step fade-in">
        <div className="review-container">
          
          <div className="review-block">
            <p className="review-header">{selectedPiece.label.toUpperCase()}</p>
            <h3 className="review-title">{selectedServices.length} services selected</h3>
            
            <ul className="review-list">
              {selectedServices.map(id => {
                const s = AVAILABLE_SERVICES.find(x => x.id === id);
                return (
                  <li key={id}>
                    <span className="item-name">{s?.name}</span>
                    <span className="item-price">from ${s?.price}+</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="review-block">
            <p className="review-header">DETAILS PROVIDED</p>
            <ul className="review-list">
              <li>
                <span className="item-name">Jewelry Type</span>
                <span className="item-value">{selectedPiece.label}</span>
              </li>
              
              {fieldsToShow.includes('baseMetal') && formData.baseMetal && <li><span className="item-name">Base Metal</span><span className="item-value">{formData.baseMetal}</span></li>}
              {fieldsToShow.includes('prongType') && formData.prongType && <li><span className="item-name">Prong Type</span><span className="item-value">{formData.prongType}</span></li>}
              {fieldsToShow.includes('numberOfProngs') && formData.numberOfProngs && <li><span className="item-name">No. of Prongs</span><span className="item-value">{formData.numberOfProngs}</span></li>}
              {fieldsToShow.includes('stoneType') && formData.stoneType && <li><span className="item-name">Stone Type</span><span className="item-value">{formData.stoneType}</span></li>}
              {fieldsToShow.includes('stoneShape') && formData.stoneShape && <li><span className="item-name">Stone Shape</span><span className="item-value">{formData.stoneShape}</span></li>}
              {fieldsToShow.includes('stoneSettingTypeSetting') && formData.stoneSettingTypeSetting && <li><span className="item-name">Setting Type</span><span className="item-value">{formData.stoneSettingTypeSetting}</span></li>}
              {fieldsToShow.includes('stoneSettingTypeTighten') && formData.stoneSettingTypeTighten && <li><span className="item-name">Setting Type</span><span className="item-value">{formData.stoneSettingTypeTighten}</span></li>}
              {fieldsToShow.includes('serviceType') && formData.serviceType && <li><span className="item-name">Service Type</span><span className="item-value">{formData.serviceType}</span></li>}
              {fieldsToShow.includes('smallestStone') && formData.smallestStone && <li><span className="item-name">Smallest Stone Size</span><span className="item-value">{formData.smallestStone}</span></li>}
              {fieldsToShow.includes('numberOfStones') && formData.numberOfStones && <li><span className="item-name">Number of Stones</span><span className="item-value">{formData.numberOfStones}</span></li>}
              {fieldsToShow.includes('cleanseType') && formData.cleanseType && <li><span className="item-name">Cleanse Type</span><span className="item-value">{formData.cleanseType}</span></li>}
              {fieldsToShow.includes('platingColor') && formData.platingColor && <li><span className="item-name">Plating Color</span><span className="item-value">{formData.platingColor}</span></li>}
              {fieldsToShow.includes('platingGrade') && formData.platingGrade && <li><span className="item-name">Plating Grade</span><span className="item-value">{formData.platingGrade}</span></li>}
              {fieldsToShow.includes('polishFinish') && formData.polishFinish && <li><span className="item-name">Polish Finish</span><span className="item-value">{formData.polishFinish}</span></li>}
              {fieldsToShow.includes('jewelryConstruction') && formData.jewelryConstruction && <li><span className="item-name">Construction</span><span className="item-value">{formData.jewelryConstruction}</span></li>}
              {fieldsToShow.includes('chainLinkType') && formData.chainLinkType && <li><span className="item-name">Chain Link</span><span className="item-value">{formData.chainLinkType}</span></li>}
              {fieldsToShow.includes('desiredClaspType') && formData.desiredClaspType && <li><span className="item-name">Clasp Type</span><span className="item-value">{formData.desiredClaspType}</span></li>}
              {fieldsToShow.includes('solderingLevel') && formData.solderingLevel && <li><span className="item-name">Soldering Level</span><span className="item-value">{formData.solderingLevel}</span></li>}
              {fieldsToShow.includes('jewelryWeight') && formData.jewelryWeight && <li><span className="item-name">Weight</span><span className="item-value">{formData.jewelryWeight} grams</span></li>}
              {fieldsToShow.includes('appraisalProvider') && formData.appraisalProvider && <li><span className="item-name">Appraisal Provider</span><span className="item-value">{formData.appraisalProvider}</span></li>}
              {fieldsToShow.includes('nameOnAppraisal') && formData.nameOnAppraisal && <li><span className="item-name">Name on Appraisal</span><span className="item-value">{formData.nameOnAppraisal}</span></li>}
              {fieldsToShow.includes('engravings') && formData.engravingType && <li><span className="item-name">Engraving Type</span><span className="item-value">{formData.engravingType}</span></li>}
              {formData.additionalDetails && <li><span className="item-name">Additional Details</span><span className="item-value">{formData.additionalDetails}</span></li>}
            </ul>
          </div>

        </div>

        <div className="bottom-action-bar">
          <button className="btn-light" onClick={() => setStep(3)}>Back</button>
          <button className="btn-primary" onClick={() => alert('Added to Cart!')}>Add to Cart</button>
        </div>
      </div>
    );
  };

  return (
    <div className="cw-page process-wrapper">
      <main>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </main>
    </div>
  );
}