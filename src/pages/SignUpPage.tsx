import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ChevronDown } from 'lucide-react';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState<'user' | 'business'>('user');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '', role: '', profileName: '', agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required';
    if (!form.email.trim()) errs.email = 'Email address is required';
    if (!form.password.trim()) errs.password = 'Password is required';
    if (!form.confirmPassword.trim()) errs.confirmPassword = 'Please confirm your password';
    else if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    if (!form.role) errs.role = 'Select the role';
    if (!form.profileName.trim()) errs.profileName = 'Profile Name is required';
    if (!form.agreeTerms) errs.agreeTerms = 'You must agree to the Terms & Conditions';
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

  const update = (field: string, value: string | boolean) => setForm(prev => ({ ...prev, [field]: value }));

  const inputBase = "w-full h-11 bg-secondary border border-border rounded-lg px-3 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_10px_2px_hsl(var(--primary)/0.3)] transition-all duration-300";
  const inputError = "border-destructive focus:border-destructive focus:shadow-[0_0_10px_2px_hsl(var(--destructive)/0.3)]";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-[900px]">
        <h1 className="text-3xl font-bold text-primary mb-4">Sign Up</h1>

        {/* Account Type */}
        <div className="flex items-center gap-6 mb-6">
          {(['user', 'business'] as const).map(type => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${accountType === type ? 'border-primary' : 'border-muted-foreground'}`}>
                {accountType === type && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <span className={`text-sm capitalize ${accountType === type ? 'text-primary' : 'text-card-foreground'}`}>{type}</span>
              <input type="radio" className="hidden" checked={accountType === type} onChange={() => setAccountType(type)} />
            </label>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {/* First Name */}
            <div>
              <label className="block text-sm text-card-foreground mb-2">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="First Name" value={form.firstName} onChange={e => update('firstName', e.target.value)} className={`${inputBase} ${submitted && errors.firstName ? inputError : ''}`} />
              </div>
              {submitted && errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm text-card-foreground mb-2">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => update('lastName', e.target.value)} className={`${inputBase} ${submitted && errors.lastName ? inputError : ''}`} />
              </div>
              {submitted && errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-card-foreground mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Email address" value={form.email} onChange={e => update('email', e.target.value)} className={`${inputBase} ${submitted && errors.email ? inputError : ''}`} />
              </div>
              {submitted && errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm text-card-foreground mb-2">Role</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select value={form.role} onChange={e => update('role', e.target.value)} className={`${inputBase} appearance-none pr-10 ${submitted && errors.role ? inputError : ''}`}>
                  <option value="">Select Role</option>
                  <option value="actor">Actor</option>
                  <option value="director">Director</option>
                  <option value="producer">Producer</option>
                  <option value="writer">Writer</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              {submitted && errors.role && <p className="text-destructive text-xs mt-1">{errors.role}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-card-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={e => update('password', e.target.value)} className={`${inputBase} pr-10 ${submitted && errors.password ? inputError : ''}`} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {submitted && errors.password && <p className="text-destructive text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Profile Name */}
            <div>
              <label className="block text-sm text-card-foreground mb-2">Profile Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Enter Profile Name" value={form.profileName} onChange={e => update('profileName', e.target.value)} className={`${inputBase} ${submitted && errors.profileName ? inputError : ''}`} />
              </div>
              {submitted && errors.profileName && <p className="text-destructive text-xs mt-1">{errors.profileName}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-card-foreground mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" value={form.confirmPassword} onChange={e => update('confirmPassword', e.target.value)} className={`${inputBase} pr-10 ${submitted && errors.confirmPassword ? inputError : ''}`} />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {submitted && errors.confirmPassword && <p className="text-destructive text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* Terms */}
          <div className="mt-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.agreeTerms} onChange={e => update('agreeTerms', e.target.checked)} className="w-4 h-4 rounded border-border bg-secondary accent-primary" />
              <span className="text-sm text-muted-foreground">I agree to <span className="text-primary cursor-pointer hover:underline">Terms & Conditions</span></span>
            </label>
            {submitted && errors.agreeTerms && <p className="text-destructive text-xs mt-1">{errors.agreeTerms}</p>}
          </div>

          {/* Submit */}
          <button type="submit" className="w-full max-w-[400px] h-12 mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-sm text-muted-foreground mt-4">
            Already have an account?{' '}
            <button type="button" onClick={() => navigate('/login')} className="text-primary hover:underline">Click here to login</button>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 mt-6 max-w-[400px]">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social */}
          <div className="flex items-center gap-6 mt-4">
            {['G', 'f', 'ig'].map((icon, i) => (
              <button key={i} type="button" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors text-sm font-bold">
                {icon === 'G' ? (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                ) : icon === 'f' ? (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                )}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
