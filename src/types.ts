export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  price?: number;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: string;
  title?: string;
}

export interface Booking {
  id: string;
  userId?: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  serviceId: string;
  serviceTitle: string;
  date: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount?: string;
  active: boolean;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'admin' | 'user';
}
