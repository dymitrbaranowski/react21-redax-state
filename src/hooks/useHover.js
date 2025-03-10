import { useState } from 'react';

export default function useHover(ref) {
  const [isHovered, setIsHovered] = useState(false);

  const on = () => setIsHovered(true);
  const off = () => setIsHovered(false);

  if (ref.current) {
    ref.current.addEventListener('mouseenter', on);
    ref.current.addEventListener('mouseleave', off);
  }

  return isHovered;
}
