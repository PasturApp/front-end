/** @type {import('./$types').PageServerLoad} */
export async function load() {

    // const res = await fetch("...")

    // const data = await res.json()

    const data = [
        {
            title: 'Stock',
            dataset: [100, 200, 300],
            labels: ['Agosto', 'Setiembre', 'Octubre']
        }
    ]

    const charts = [
        {
            title:'Stock',
            canvaId: 'Stock',
            options: {}
        },
        {
            title:'Pastoreo',
            canvaId: 'Pastoreo',
            options: {}
        
        },
        {
            title: 'Tasa de crecimiento',
            canvaId: 'Tasa de crecimiento',
            options: {}
        },
        {
            title: 'Uso del suelo',
            canvaId: 'Uso del suelo',
            options: {}
        }
    ]

    charts.

    return {
        charts
    };
};