export function dateToMillis(value: unknown): number | undefined {
  if (!value) return undefined;
  // Firestore Timestamp has toDate()
  if (typeof (value as any)?.toDate === 'function') {
    return (value as any).toDate().getTime();
  }
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return value; // assume milliseconds
  const asDate = new Date(value as any);
  return isNaN(asDate.getTime()) ? undefined : asDate.getTime();
}

export function toDate(value: unknown): Date | undefined {
  const ms = dateToMillis(value);
  return ms ? new Date(ms) : undefined;
}
