// Importar los datos de las series
import { Serie } from './serie.js';
const SERIES = [
    new Serie(1, 'Breaking Bad', 'AMC', 5),
    new Serie(2, 'Game of Thrones', 'HBO', 8),
    new Serie(3, 'Stranger Things', 'Netflix', 4),
    new Serie(4, 'The Witcher', 'Netflix', 2),
    new Serie(5, 'The Mandalorian', 'Disney+', 2),
    new Serie(6, 'The Office', 'NBC', 9),
];
console.log(SERIES);
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
}
else {
    console.error('table-body element not found');
}
