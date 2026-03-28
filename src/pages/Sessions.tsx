import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, User, ArrowRight, CheckCircle2 } from 'lucide-react';

type Step = 'LOCATION' | 'SERVICE' | 'DETAILS' | 'CONFIRMED';

export function Sessions() {
  const [step, setStep] = useState<Step>('LOCATION');
  const [formData, setFormData] = useState({
    location: '',
    service: '',
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const nextStep = (next: Step) => setStep(next);

  const renderStep = () => {
    switch (step) {
      case 'LOCATION':
        return (
          <motion.div 
            key="location"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase tracking-tighter">01_VALIDATE_ZONE</h2>
              <p className="font-body text-sm text-outline uppercase tracking-widest">In-person consultations are available in specific operational zones.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ZoneButton 
                label="COPENHAGEN_METRO" 
                active={formData.location === 'CPH'} 
                onClick={() => {
                  setFormData({ ...formData, location: 'CPH' });
                  setTimeout(() => nextStep('SERVICE'), 400);
                }} 
              />
              <ZoneButton 
                label="NORTHERN_ZEALAND" 
                active={formData.location === 'NZL'} 
                onClick={() => {
                  setFormData({ ...formData, location: 'NZL' });
                  setTimeout(() => nextStep('SERVICE'), 400);
                }} 
              />
            </div>
          </motion.div>
        );
      case 'SERVICE':
        return (
          <motion.div 
            key="service"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase tracking-tighter">02_SELECT_PROTOCOL</h2>
              <p className="font-body text-sm text-outline uppercase tracking-widest">Define the scope of the insider session.</p>
            </div>
            <div className="space-y-4">
              <ServiceOption 
                title="ACOUSTIC_IMPROVEMENT" 
                description="Technical focus on sound behavior. We measure reverb, echo, and spectral decay to optimize your room's sonic performance."
                onClick={() => {
                  setFormData({ ...formData, service: 'ACOUSTIC' });
                  nextStep('DETAILS');
                }}
              />
              <ServiceOption 
                title="VISUAL_DECORATION" 
                description="Aesthetic and spatial design. We map out the visual placement of absorb units to complement your existing interior architecture."
                onClick={() => {
                  setFormData({ ...formData, service: 'VISUAL' });
                  nextStep('DETAILS');
                }}
              />
              <ServiceOption 
                title="FULL_SPECTRUM" 
                description="Comprehensive session covering both technical acoustic performance and aesthetic interior integration."
                onClick={() => {
                  setFormData({ ...formData, service: 'BOTH' });
                  nextStep('DETAILS');
                }}
              />
            </div>
          </motion.div>
        );
      case 'DETAILS':
        return (
          <motion.div 
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase tracking-tighter">03_IDENTIFY_TARGET</h2>
              <p className="font-body text-sm text-outline uppercase tracking-widest">Provide coordinates for the on-site session.</p>
            </div>
            <div className="space-y-6">
              <Input label="FULL_NAME" placeholder="ENTER NAME" value={formData.name} onChange={(v) => setFormData({...formData, name: v})} />
              <Input label="EMAIL_ADDRESS" placeholder="ENTER EMAIL" value={formData.email} onChange={(v) => setFormData({...formData, email: v})} />
              <Input label="PHONE_NUMBER" placeholder="+45 00 00 00 00" value={formData.phone} onChange={(v) => setFormData({...formData, phone: v})} />
              <Input label="PHYSICAL_ADDRESS" placeholder="STREET, CITY, POSTAL" value={formData.address} onChange={(v) => setFormData({...formData, address: v})} />
              <button 
                onClick={() => nextStep('CONFIRMED')}
                className="w-full bg-primary text-on-primary py-6 font-headline font-black uppercase tracking-widest hover:bg-white hover:text-black transition-none flex justify-center items-center gap-4"
              >
                REQUEST_PRESENCE <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        );
      case 'CONFIRMED':
        return (
          <motion.div 
            key="confirmed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 py-12"
          >
            <div className="flex justify-center">
              <CheckCircle2 size={80} className="text-primary" strokeWidth={1} />
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-4xl font-black uppercase tracking-tighter">SESSION_QUEUED</h2>
              <p className="font-body text-sm text-outline uppercase tracking-widest max-w-md mx-auto">
                An absorb insider will review your coordinates. Expect a spectral handshake within 24 hours.
              </p>
            </div>
            <div className="pt-8">
              <button 
                onClick={() => setStep('LOCATION')}
                className="font-label text-xs uppercase tracking-widest text-primary border-b border-primary pb-1"
              >
                RETURN_TO_BASE
              </button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-8 max-w-4xl mx-auto">
      <header className="mb-20">
        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-[-0.05em] uppercase mb-4">Sessions</h1>
        <p className="font-label text-xs uppercase tracking-widest text-outline">On-Site Technical Guidance / Human Interface</p>
      </header>

      <div className="bg-transparent border-4 border-outline p-8 md:p-16 relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>

      <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-[10px] font-label uppercase tracking-[0.2em] text-outline opacity-50">
        <div className="flex items-center gap-3">
          <MapPin size={14} /> CPH_ZONE_ACTIVE
        </div>
        <div className="flex items-center gap-3">
          <Calendar size={14} /> 09:00 - 18:00_CET
        </div>
        <div className="flex items-center gap-3">
          <User size={14} /> INSIDER_VERIFIED
        </div>
      </footer>
    </div>
  );
}

function ZoneButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`p-8 border-2 transition-none text-left group ${
        active ? 'bg-primary border-primary text-on-primary' : 'border-outline-variant hover:border-primary'
      }`}
    >
      <span className={`block font-headline text-xl font-black mb-2 ${active ? 'text-on-primary' : 'text-white group-hover:text-primary'}`}>
        {label}
      </span>
      <span className={`block font-label text-[10px] uppercase tracking-widest ${active ? 'text-on-primary/70' : 'text-outline'}`}>
        Operational Area
      </span>
    </button>
  );
}

function ServiceOption({ title, description, onClick }: { title: string; description: string; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="w-full p-8 border-2 border-outline-variant hover:border-primary text-left group transition-none"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-headline text-2xl font-black uppercase group-hover:text-primary">{title}</h3>
        <ArrowRight size={24} className="text-outline group-hover:text-primary" />
      </div>
      <p className="font-body text-xs text-outline leading-relaxed uppercase tracking-tight">
        {description}
      </p>
    </button>
  );
}

function Input({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="block font-label text-[10px] uppercase tracking-widest text-outline">{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b-2 border-outline-variant py-4 font-headline text-lg focus:outline-none focus:border-primary transition-none placeholder:text-outline-variant"
      />
    </div>
  );
}
