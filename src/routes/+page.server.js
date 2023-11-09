/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const endpoints = [
    "http://localhost:5000/api/dashboard_estable",
    "http://localhost:5000/api/dashboard_plat",
    "http://localhost:5000/api/stock_table",
    "http://localhost:5000/api/grafica_pastoreo"
  ]
  const requests = endpoints.map(endpoint => fetchData(endpoint));
  const [dashboardEstable, dashboardPlat, stock, pasture] = await Promise.all(requests);
  const valoresStockY = stock.map(lista => lista[0]);
  const valoresStockX = stock.map(lista => lista[1]);
  const valorespastureX = pasture.map(lista => lista[0]);
  const valorespastureY = pasture.map(lista => lista[1]);
  console.log("Dashboard Estable:", dashboardEstable);
  console.log("Dashboard Plat:", dashboardPlat);
  console.log("stock grafica", stock);
  console.log("pasture grafica", pasture);
  console.log("Valores X de stock:", valoresStockX);
  console.log("Valores Y de stock:", valoresStockY);
  console.log("Valores X de pasture:", valorespastureX);
  console.log("Valores Y de pasture:", valorespastureY);
  const dashboard = [{
    mes: dashboardEstable[0],
    produccion: dashboardEstable[1],
    carga: dashboardEstable[2],
    productividad: dashboardEstable[3]
  },
  {
    tc: dashboardPlat[0],
    demanda: dashboardPlat[0] - dashboardEstable[2],
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
          label: 'Potreros',
          data: valoresStockY,
          borderWidth: 1,
          backgroundColor: ['#0C523B'],
        }
      ]
    },
    {
      labels: ['3/8/23', '18/8/23', '2/9/23', '17/9/23', '1/10/23'],
      datasets: [
        {
          label: 'Tasa de crecimiento',
          data: [30, 50, 45, 58, 45]
        }
      ]
    },
    {
      labels: ['Pastoreo', 'Reserva', 'Barbecho'],
      datasets: [
        {
          label: 'Area',
          data: [40, 15, 5],
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
            max: 120
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