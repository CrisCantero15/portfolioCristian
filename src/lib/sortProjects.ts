const MONTHS: Record<string, number> = {
  enero: 0, febrero: 1, marzo: 2, abril: 3,
  mayo: 4, junio: 5, julio: 6, agosto: 7,
  septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
};

/** Convierte "Marzo 2026" en un número ordenable (año * 12 + mes) */
export function dateToSortValue(dateStr: string): number {
  const [month, year] = dateStr.trim().toLowerCase().split(' ');
  const monthIndex = MONTHS[month] ?? 0;
  return parseInt(year, 10) * 12 + monthIndex;
}

/** Ordena un array de entradas de colección por su campo `date`, de más reciente a más antiguo */
export function sortByDateDesc<T extends { data: { date: string } }>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => dateToSortValue(b.data.date) - dateToSortValue(a.data.date)
  );
}