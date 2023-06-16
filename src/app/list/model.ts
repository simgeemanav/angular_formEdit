export interface dataModel {
  id: number;
  carId: string;
  inStock?: boolean;
  hp?: number;
  price?: number;
  color?: 'primary' | 'danger' | 'success' | '-' | string;
}
