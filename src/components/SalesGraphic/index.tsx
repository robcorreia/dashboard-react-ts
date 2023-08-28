import React from 'react'
import { IVenda } from '../../contexts/DataContext'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformData(data: IVenda[]): VendaDia[] {
  const days = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const day = item.data.split(' ')[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[day][item.status] += item.preco;

    return acc;
  }, {})

  return Object.values(days).map(day => ({ ...day, data: day.data.substring(5) })) //map no final serve pra tirar os 5 primeiros caracteres da data
}

const SalesGraphic = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        data={transformedData}
      >

        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        {/* <CartesianGrid stroke='#f5f5f5' /> */}
        <Line type="monotone" dataKey="pago" stroke='#A36AF9' strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke='#FBCB21' strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke='#000000' strokeWidth={3} />

      </LineChart>
    </ResponsiveContainer>
  )
}

export default SalesGraphic