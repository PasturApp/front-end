/** @type {import('svelte').Load} */
export async function load({ fetch, context }) { 

  const data = [
    {
      labels: ["jueve", "vierne", "dia"],
      datasets: [
        {
          label: 'Stock',
          data: [12, 32, 42]
        }
      ]
    },
    {
      labels: ["jueve", "vierne", "dia"],
      datasets: [
        {
          label: 'Disponibilidad',
          data: [12, 32, 42],
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
  return { charts }
}