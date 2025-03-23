
import React from 'react';

interface PasswordStrengthMeterProps {
  password: string;
}

const PasswordStrengthMeter = ({ password }: PasswordStrengthMeterProps) => {
  // Function to calculate password strength
  const calculateStrength = (password: string): { score: number; label: string } => {
    if (!password) return { score: 0, label: '' };

    let score = 0;

    // Length check
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // Complexity checks
    if (/[A-Z]/.test(password)) score += 1; // Has uppercase
    if (/[a-z]/.test(password)) score += 1; // Has lowercase
    if (/[0-9]/.test(password)) score += 1; // Has number
    if (/[^A-Za-z0-9]/.test(password)) score += 1; // Has special char

    // Normalize score to 0-4 range
    score = Math.min(4, Math.floor(score / 1.5));

    // Map score to label
    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    
    return { score, label: labels[score] };
  };

  const strength = calculateStrength(password);

  // Return empty div if no password
  if (!password) return <div className="h-1 mt-1"></div>;

  // Colors for different strength levels
  const colors = [
    '', // Empty
    'bg-red-500', // Weak
    'bg-orange-500', // Fair
    'bg-yellow-500', // Good
    'bg-green-500', // Strong
  ];

  return (
    <div className="mt-1">
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colors[strength.score]}`} 
          style={{ width: `${(strength.score / 4) * 100}%` }}
        ></div>
      </div>
      <p className={`text-xs mt-1 ${colors[strength.score].replace('bg-', 'text-')}`}>
        {strength.label}
      </p>
    </div>
  );
};

export default PasswordStrengthMeter;
