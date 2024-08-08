import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Grafico() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Contas")
      .then(resp => resp.json())
      .then(dados => {
        // Calcula a média de dias por tipo de visto
        const tipos = dados.reduce((acc, curr) => {
          const isoAnalysisDateStr = convertDateToISO(curr.Data_de_entrega_documentos);
          const isoDeliveryDateStr = convertDateToISO(curr.Data_de_entrega_do_visto);

          const analysisDate = new Date(isoAnalysisDateStr);
          const deliveryDate = new Date(isoDeliveryDateStr);
          const currentDate = new Date();

          const daysDifference = isValid(analysisDate)
            ? isValid(deliveryDate)
              ? differenceInDays(deliveryDate, analysisDate)
              : differenceInDays(currentDate, analysisDate)
            : 0;

          if (!acc[curr.Tipo_de_visto]) {
            acc[curr.Tipo_de_visto] = { totalDias: 0, count: 0 };
          }
          acc[curr.Tipo_de_visto].totalDias += daysDifference;
          acc[curr.Tipo_de_visto].count += 1;

          return acc;
        }, {});

        const media = Object.keys(tipos).map(tipo => ({
          tipo,
          mediaDias: Math.floor(tipos[tipo].totalDias / tipos[tipo].count)
        }));

        setData(media);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const convertDateToISO = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month}-${day}`;
  };

  const isValid = (date) => !isNaN(date.getTime());

  const differenceInDays = (endDate, startDate) => Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#fff', color: '#4f43cb', padding: '10px', borderRadius: '5px' }}>
          <p>{`${label} : ${payload[0].value} dias`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0 auto', color: '#4f43cb' }}>
      <BarChart
        width={800}  // Ou use "width='80%'" para uma largura relativa
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="tipo" stroke="#FFFFFF" tick={{ fill: '#FFFFFF' }} />
        <YAxis stroke="#FFFFFF" tick={{ fill: '#FFFFFF' }} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
        <Legend />
        <Bar
          dataKey="mediaDias"
          fill="#4f43cb"
          barSize={150}
        />
      </BarChart>
    </div>

  );
}

export default Grafico;
