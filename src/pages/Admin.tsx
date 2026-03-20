import React, { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, onSnapshot, query, orderBy, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { Booking, UserProfile } from '../types';
import { motion } from 'motion/react';
import { Calendar, Check, X, Trash2, User as UserIcon, Mail, Phone } from 'lucide-react';

interface AdminProps {
  user: UserProfile | null;
}

export default function Admin({ user }: AdminProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.role !== 'admin') return;

    const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const bookingsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Booking));
      setBookings(bookingsData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'bookings');
    });

    return () => unsubscribe();
  }, [user]);

  const updateStatus = async (id: string, status: 'confirmed' | 'cancelled') => {
    try {
      await updateDoc(doc(db, 'bookings', id), { status });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `bookings/${id}`);
    }
  };

  const deleteBooking = async (id: string) => {
    if (!window.confirm('Voulez-vous vraiment supprimer cette réservation ?')) return;
    try {
      await deleteDoc(doc(db, 'bookings', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `bookings/${id}`);
    }
  };

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Accès refusé</h2>
          <p className="text-gray-400">Vous n'avez pas les permissions nécessaires pour accéder à cette page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Panel Administration</h1>
        <div className="bg-[#FF6B35]/10 px-4 py-2 rounded-full border border-[#FF6B35]/20">
          <span className="text-[#FF6B35] font-bold">{bookings.length} Réservations</span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B35]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {bookings.map((booking) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#FF6B35]/20 rounded-full flex items-center justify-center">
                      <Calendar className="text-[#FF6B35]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{booking.serviceTitle}</h3>
                      <p className="text-gray-400 text-sm">
                        {new Date(booking.date).toLocaleString('fr-FR', {
                          dateStyle: 'full',
                          timeStyle: 'short',
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <UserIcon size={16} className="text-[#9B59B6]" />
                      <span>{booking.userName}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Mail size={16} className="text-[#9B59B6]" />
                      <span>{booking.userEmail}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Phone size={16} className="text-[#9B59B6]" />
                      <span>{booking.userPhone}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    booking.status === 'confirmed' ? 'bg-green-500/20 text-green-500' :
                    booking.status === 'cancelled' ? 'bg-red-500/20 text-red-500' :
                    'bg-yellow-500/20 text-yellow-500'
                  }`}>
                    {booking.status === 'pending' ? 'En attente' : 
                     booking.status === 'confirmed' ? 'Confirmé' : 'Annulé'}
                  </div>

                  <div className="flex items-center gap-2">
                    {booking.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateStatus(booking.id, 'confirmed')}
                          className="p-2 bg-green-500/20 text-green-500 hover:bg-green-500 hover:text-white rounded-lg transition-all"
                          title="Confirmer"
                        >
                          <Check size={20} />
                        </button>
                        <button
                          onClick={() => updateStatus(booking.id, 'cancelled')}
                          className="p-2 bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                          title="Annuler"
                        >
                          <X size={20} />
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => deleteBooking(booking.id)}
                      className="p-2 bg-white/5 text-gray-400 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                      title="Supprimer"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {bookings.length === 0 && (
            <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
              <p className="text-gray-400">Aucune réservation pour le moment.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
