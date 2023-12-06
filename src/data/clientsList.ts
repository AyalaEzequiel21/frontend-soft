export type ClientType = {
  id: string,
  nombre: string,
  telefono: string,
  balance: number,
  category: string,
  in_delivery: boolean,
  pagos: string[],
  ventas: string[]
}

export const clientsList = [
    {
      "id": "c1",
      "nombre": "Horacio Munoz",
      "telefono": "123-456-7890",
      "balance": 5000,
      "category": 'cat-1',
      "in_delivery": false,
      "pagos": ["Pago1", "Pago2"],
      "ventas": ["Venta1", "Venta2"]
    },
    {
      "id": "c2",
      "nombre": "Adrian flaco",
      "telefono": "987-654-3210",
      "balance": 7500,
      "category": 'cat-1',
      "in_delivery": false,
      "pagos": ["Pago3", "Pago4"],
      "ventas": ["Venta3", "Venta4"]
    },
    {
      "id": "c3",
      "nombre": "jc lp",
      "telefono": "555-123-4567",
      "balance": 3000,
      "category": 'cat-2',
      "in_delivery": true,
      "pagos": ["Pago5", "Pago6"],
      "ventas": ["Venta5", "Venta6"]
    },
    {
      "id": "c12",
      "nombre": "eze lp",
      "telefono": "123-456-7890",
      "balance": 51000,
      "category": 'cat-2',
      "in_delivery": true,
      "pagos": ["Pago1", "Pago2"],
      "ventas": ["Venta1", "Venta2"]
    },
    {
      "id": "c2324",
      "nombre": "Colo regue",
      "telefono": "987-654-324234",
      "balance": 7500,
      "category": 'cat-1',
      "in_delivery": false,
      "pagos": ["Pago3", "Pago4"],
      "ventas": ["Venta3", "Venta4"]
    },
    {
      "id": "c334",
      "nombre": "Rene",
      "telefono": "555-123-4567",
      "balance": 3000,
      "category": 'cat-2',
      "in_delivery": true,
      "pagos": ["Pago5", "Pago6"],
      "ventas": ["Venta5", "Venta6"]
    },
    {
      "id": "c3234",
      "nombre": "eze salamines",
      "telefono": "555-123-4567",
      "balance": 3000,
      "category": 'cat-2',
      "in_delivery": false,
      "pagos": ["Pago5", "Pago6"],
      "ventas": ["Venta5", "Venta6"]
    }

  ]
