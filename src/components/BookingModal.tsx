import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { db, auth, handleFirestoreError, OperationType } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Service } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export default function BookingModal({ isOpen, onClose, service }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: auth.currentUser?.displayName || '',
    userEmail: auth.currentUser?.email || '',
    userPhone: '',
    date: '',
    time: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'bookings'), {
        userId: auth.currentUser?.uid || 'anonymous',
        userName: formData.userName,
        userEmail: formData.userEmail,
        userPhone: formData.userPhone,
        serviceId: service.id,
        serviceTitle: service.title,
        date: `${formData.date}T${formData.time}`,
        status: 'pending',
        createdAt: new Date().toISOString(),
      });
      setStep(3);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'bookings');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-[#1A1A2E] border border-white/10 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Réserver un service</h3>
                  <p className="text-gray-400">Vous avez choisi : <span className="text-[#FF6B35] font-bold">{service?.title}</span></p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      placeholder="Votre nom complet"
                      value={formData.userName}
                      onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF6B35] focus:outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="email"
                      placeholder="Votre email"
                      value={formData.userEmail}
                      onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF6B35] focus:outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="tel"
                      placeholder="Votre numéro de téléphone"
                      value={formData.userPhone}
                      onChange={(e) => setFormData({ ...formData, userPhone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF6B35] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.userName || !formData.userEmail || !formData.userPhone}
                  className="w-full py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#FF6B35]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuer
                </button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Choisir une date</h3>
                  <p className="text-gray-400">Sélectionnez le moment qui vous convient</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF6B35] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Heure</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF6B35] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={loading || !formData.date || !formData.time}
                    className="flex-[2] py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#FF6B35]/90 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span>Confirmer la réservation</span>
                    )}
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Demande envoyée !</h3>
                  <p className="text-gray-400">
                    Merci {formData.userName}. Nous avons bien reçu votre demande pour le service {service?.title}. 
                    Nous vous contacterons très bientôt pour confirmer.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-full py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#FF6B35]/90 transition-all"
                >
                  Fermer
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
