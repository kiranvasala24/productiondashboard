import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

  const getStrength = (pwd: string) => {
    if (pwd.length === 0) return { label: '', color: '' };
    if (pwd.length < 6) return { label: 'Weak', color: 'text-destructive' };
    if (pwd.length < 10) return { label: 'Good', color: 'text-warning' };
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNum = /[0-9]/.test(pwd);
    const hasSpecial = /[^A-Za-z0-9]/.test(pwd);
    if (hasUpper && hasNum && hasSpecial) return { label: 'Excellent', color: 'text-success' };
    return { label: 'Good', color: 'text-warning' };
  };

  const strength = getStrength(password);

  const validate = () => {
    const errs: { password?: string; confirmPassword?: string } = {};
    if (!password.trim()) errs.password = 'Password is required';
    if (!confirmPassword.trim()) errs.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) errs.confirmPassword = 'Passwords do not match';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      navigate('/login');
    }
  };

  const inputBase = "w-full h-11 bg-secondary border border-border rounded-lg px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-success focus:shadow-[0_0_10px_2px_hsl(var(--success)/0.3)] transition-all duration-300";
  const inputError = "border-destructive focus:border-destructive focus:shadow-[0_0_10px_2px_hsl(var(--destructive)/0.3)]";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-[520px]">
        <h1 className="text-3xl font-bold text-primary mb-2">Reset Password</h1>
        <p className="text-sm text-muted-foreground mb-8">Please kindly set your new password</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-card-foreground mb-2">New Password</label>
            <input
              type="password"
              placeholder="••••••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${inputBase} ${submitted && errors.password ? inputError : ''}`}
            />
            {password && (
              <p className="text-xs mt-1 text-muted-foreground">
                Password strength <span className={strength.color}>{strength.label}.</span>
              </p>
            )}
            {submitted && errors.password && <p className="text-destructive text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm text-card-foreground mb-2">Re-enter Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`${inputBase} ${submitted && errors.confirmPassword ? inputError : ''}`}
            />
            {submitted && errors.confirmPassword && <p className="text-destructive text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
