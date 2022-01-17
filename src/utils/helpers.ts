export function getUserInitials(name: string) {
  if (!name) return '';

  const parts = name.split(' ');

  if (parts.length === 1) {
    // Only first name
    return parts[0].substring(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}
