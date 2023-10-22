// Importar los datos de las series
import { SERIES } from './data';

const tableBody = document.getElementById('table-body');

if (tableBody !== null) {
    let totalSeasons = 0;

    SERIES.forEach(serie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });

    const averageSeasons = totalSeasons / SERIES.length;
    const summaryRow = document.createElement('tr');
    summaryRow.innerHTML = `
        <td colspan="3">Promedio de Temporadas</td>
        <td>${averageSeasons.toFixed(2)}</td>
    `;
    tableBody.appendChild(summaryRow);
} else {
    console.error('table-body element not found');
}
