/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const endpoints = [
    "http://localhost:5000/api/grafica_pastoreo",
    "http://localhost:5000/api/stock",
    "http://localhost:5000/api/grafica_tc"
  ]
  const requests = endpoints.map(endpoint => fetchData(endpoint));
  const [pasture, stock, tc] = await Promise.all(requests);
  console.log("pasture", pasture)
  console.log("stock", stock)
  console.log("tc", tc)
  const valoresStockY = stock.map(lista => lista[0]);
  console.log(valoresStockY)
  const valoresStockX = stock.map(lista => lista[1]);
  const valorespastureX = pasture.map(lista => lista[0]);
  const valorespastureY = pasture.map(lista => lista[1]);
  const valorestcX = tc.map(lista => lista[0]);
  const valorestcY = tc.map(lista => lista[1]);
  const dashboard = [{
    mes: 43,
    produccion: 12,
    carga: 22,
    productividad: 32
  },
  {
    tc: 22,
    demanda: 1,
  }]
  const data = [
    {
      labels: valoresStockX,
      datasets: [
        {
          label: 'Stock',
          data: valoresStockY
        }
      ]
    },
    {
      labels: valorespastureX,
      datasets: [
        {
          label: 'Disponibilidad',
          data: valorespastureY,
          borderWidth: 1,
          backgroundColor: ['#0C523B'],
        }
      ]
    },
    {
      labels: valorestcY,
      datasets: [
        {
          label: 'Tasa de crecimiento',
          data: valorestcX
        }
      ]
    },
    {
      labels: ['Pastoreo', 'Reserva', 'Barbecho'],
      datasets: [
        {
          label: 'Area',
          data: [6, 2, 0],
          borderWidth: 1,
          backgroundColor: ['#0C523B', '#528A3F', '#D3D8BD']
        }
      ]
    }
  ];
  // data[0] -> stock data, labels
  // data[1] -> pastoreo data, labels
  // data[2] -> suelo data, labels
  // data[3] -> tasa de crecimiento data, labels

  const charts = [
    {
      title: 'Stock',
      canvaId: 'Stock',
      type: 'line',
      data: {
        ...data[0],
        datasets: [
          {
            ...data[0].datasets[0],
            borderColor: '#0C523B',
            backgroundColor: '#0C523B',
            tension: 0.35
          },
          {
            label: 'Rango obj. min',
            data: [2750, 2750, 2750, 2750, 2750],
            borderColor: '#CFE7D1',
            backgroundColor: '#CFE7D1',
            pointRadius: 0,
            fill: 1
          },
          {
            label: 'Rango obj. max',
            data: [2250, 2250, 2250, 2250, 2250],
            borderColor: '#CFE7D1',
            backgroundColor: '#CFE7D1',
            pointRadius: 0,
            fill: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            grid: {
              display: false
            },
            title: {
              display: true,
              text: 'kgMS/ha'
            },
            min: 0,
            max: 3500
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          title: {
            display: true,
            position: 'top',
            text: 'Stock',
            align: 'center',
            font: {
              size: 20,
              family: 'Poppins'
            },
            color: '#0C523B'
          }
        }
      }
    },
    {
      title: 'Pastoreo',
      canvaId: 'Pastoreo',
      type: 'bar',
      data: {
        ...data[1],
        datasets: [
          {
            ...data[1].datasets[0],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            grid: {
              display: false
            },
            title: {
              display: true,
              text: 'kgMS/ha'
            },
            min: 0,
            max: 3500
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          title: {
            display: true,
            position: 'top',
            text: 'Disponibilidad por potrero',
            align: 'center',
            font: {
              size: 20,
              family: 'Poppins'
            },
            color: '#0C523B'
          }
        }
      },
    },
    {
      title: 'Tasa de crecimiento',
      canvaId: 'Tasa de crecimiento',
      type: 'line',
      data: {
        ...data[2],
        datasets: [
          {
            ...data[2].datasets[0],
            borderColor: '#0C523B',
            backgroundColor: '#0C523B',
            tension: 0.35
          }
        ]
      },
      options: {
        scales: {
          y: {
            grid: {
              display: false
            },
            title: {
              display: true,
              text: 'kgMS/ha'
            },
            min: 0,
            max: 70
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          title: {
            display: true,
            position: 'top',
            text: 'Tasa de crecimiento',
            align: 'center',
            font: {
              size: 20,
              family: 'Poppins'
            },
            color: '#0C523B'
          }
        }
      }
    },
    {
      title: 'Uso del suelo',
      canvaId: 'Uso del suelo',
      type: 'pie',
      data: {
        ...data[3],
        datasets: [
          {
            ...data[3].datasets[0],
            borderWidth: 1,
            backgroundColor: ['#0C523B', '#528A3F', '#D3D8BD']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          },
          title: {
            display: true,
            position: 'top',
            text: 'Uso del suelo',
            align: 'center',
            font: {
              size: 20,
              family: 'Poppins'
            },
            color: '#0C523B'
          }
        }
      }
    }
  ];
  return { dashboard, charts }
}
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`DATA GET ERROR: ${response.status} ${response.statusText}`);
  }
  return response.json();
}