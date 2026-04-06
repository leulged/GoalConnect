export function getPlayerPositionBadgeClass(position: string) {
  const colors: Record<string, string> = {
    goalkeeper: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    defender: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    midfielder: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    forward: 'bg-red-500/10 text-red-400 border-red-500/20',
  };
  return colors[position] || '';
}
