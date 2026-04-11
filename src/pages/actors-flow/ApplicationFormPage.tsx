import React, { useState } from 'react';
import { ArrowLeft, Check, Calendar, ChevronDown, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  'Basic Info',
  'Personal',
  'Experience',
  'Media',
  'Role Questions',
  'Skills & Consent',
];

interface FormErrors {
  [key: string]: string;
}

interface Language {
  language: string;
  fluency: string;
}

interface License {
  name: string;
}

const StepIndicator: React.FC<{ currentStep: number; onStepClick: (step: number) => void }> = ({
  currentStep,
  onStepClick,
}) => (
  <div className="flex items-center justify-center gap-0 mb-10">
    {steps.map((label, i) => {
      const stepNum = i + 1;
      const isCompleted = stepNum < currentStep;
      const isCurrent = stepNum === currentStep;
      return (
        <React.Fragment key={i}>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => onStepClick(stepNum)}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                isCompleted
                  ? 'bg-primary border-primary text-primary-foreground'
                  : isCurrent
                  ? 'border-primary text-primary bg-transparent'
                  : 'border-muted-foreground/40 text-muted-foreground bg-transparent'
              }`}
            >
              {isCompleted ? <Check size={18} /> : stepNum}
            </div>
            <span
              className={`text-xs mt-2 ${
                isCurrent ? 'text-primary font-semibold' : 'text-muted-foreground'
              }`}
            >
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-16 md:w-24 h-0.5 mt-[-18px] ${
                stepNum < currentStep ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          )}
        </React.Fragment>
      );
    })}
  </div>
);

const inputBase =
  'w-full bg-transparent border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors';
const inputError =
  'w-full bg-transparent border border-destructive rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-destructive transition-colors';
const selectBase =
  'w-full bg-transparent border border-border rounded-md px-4 py-2.5 text-sm text-muted-foreground focus:outline-none focus:border-primary transition-colors appearance-none';
const selectError =
  'w-full bg-transparent border border-destructive rounded-md px-4 py-2.5 text-sm text-muted-foreground focus:outline-none focus:border-destructive transition-colors appearance-none';

const SelectWrapper: React.FC<{
  children: React.ReactNode;
  hasError?: boolean;
}> = ({ children }) => (
  <div className="relative">
    {children}
    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
  </div>
);

const ApplicationFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});

  // Step 1
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneCode, setPhoneCode] = useState('+1');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [locationAvailability, setLocationAvailability] = useState('');

  // Step 2
  const [dob, setDob] = useState('');
  const [weightUnit, setWeightUnit] = useState('lbs');
  const [weight, setWeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('ft');
  const [height, setHeight] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [gender, setGender] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [languages, setLanguages] = useState<Language[]>([{ language: '', fluency: '' }]);

  // Step 3
  const [eyeColorExp, setEyeColorExp] = useState('');
  const [hairColorExp, setHairColorExp] = useState('');
  const [rolesType, setRolesType] = useState('');
  const [industryExp, setIndustryExp] = useState('');
  const [notableWorks, setNotableWorks] = useState('');

  // Step 4
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [headshotFiles, setHeadshotFiles] = useState<File[]>([]);
  const [demoReelFile, setDemoReelFile] = useState<File | null>(null);
  const [demoReelUrl, setDemoReelUrl] = useState('');

  // Step 5
  const [availableShootDate, setAvailableShootDate] = useState('');
  const [willingToTravel, setWillingToTravel] = useState('');
  const [scheduleConflicts, setScheduleConflicts] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [whyInterested, setWhyInterested] = useState('');
  const [howRelate, setHowRelate] = useState('');
  const [expectedPay, setExpectedPay] = useState('');

  // Step 6
  const [actingSkills, setActingSkills] = useState('');
  const [otherTalents, setOtherTalents] = useState('');
  const [licenses, setLicenses] = useState<License[]>([
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
  ]);
  const [singingLanguages, setSingingLanguages] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [consentAI, setConsentAI] = useState(false);

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!firstName.trim()) newErrors.firstName = 'First name is required';
      if (!lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email address';
      if (!phone.trim()) newErrors.phone = 'Phone number is required';
      if (!country) newErrors.country = 'Country is required';
      if (!state) newErrors.state = 'State is required';
      if (!city) newErrors.city = 'City is required';
    }

    if (step === 2) {
      if (!dob) newErrors.dob = 'Select Date of Birth';
      if (!weight.trim()) newErrors.weight = 'Please enter a valid weight';
      if (!height.trim()) newErrors.height = 'Please enter a valid height';
      if (!eyeColor) newErrors.eyeColor = 'Select Eye Color';
      if (!hairColor) newErrors.hairColor = 'Select Hair Color';
      if (!gender) newErrors.gender = 'Select Gender';
      if (!ethnicity) newErrors.ethnicity = 'Select Ethnicity';
      if (!languages[0]?.language) newErrors.languages = 'Please enter at least one language';
    }

    if (step === 3) {
      if (!eyeColorExp) newErrors.eyeColorExp = 'Select Eye Color';
      if (!hairColorExp) newErrors.hairColorExp = 'Select Hair Color';
      if (!rolesType) newErrors.rolesType = 'Field cannot be blank';
      if (!industryExp) newErrors.industryExp = 'Field cannot be blank';
      if (!notableWorks.trim()) newErrors.notableWorks = 'Field cannot be blank';
    }

    if (step === 4) {
      if (!resumeFile) newErrors.resume = 'Upload is required';
      if (headshotFiles.length === 0) newErrors.headshots = 'Upload is required';
      if (!demoReelFile && !demoReelUrl.trim()) {
        newErrors.demoReel = 'Upload is required';
        newErrors.demoReelUrl = 'Field cannot be blank';
      }
    }

    if (step === 5) {
      if (!whyInterested.trim()) newErrors.whyInterested = 'Field cannot be blank';
      if (!howRelate.trim()) newErrors.howRelate = 'Field cannot be blank';
    }

    if (step === 6) {
      if (!actingSkills) newErrors.actingSkills = 'Field cannot be blank';
      if (!agreeTerms) newErrors.agreeTerms = 'You must agree to terms';
      if (!consentAI) newErrors.consentAI = 'Consent is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
      setErrors({});
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleSave = () => {
    alert('Application progress saved!');
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      alert('Application submitted successfully!');
      navigate(-1);
    }
  };

  const addLanguage = () => {
    setLanguages((prev) => [...prev, { language: '', fluency: '' }]);
  };

  const removeLanguage = (index: number) => {
    setLanguages((prev) => prev.filter((_, i) => i !== index));
  };

  const addLicense = () => {
    setLicenses((prev) => [...prev, { name: '' }]);
  };

  const computeAge = (dateStr: string) => {
    if (!dateStr) return '';
    const birth = new Date(dateStr);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age > 0 ? age.toString() : '';
  };

  const renderStep1 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🎭</span> Section 1 - Basic Profile Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">First name*<span className="text-muted-foreground ml-1">ⓘ</span></label>
          <input
            className={errors.firstName ? inputError : inputBase}
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value.slice(0, 50))}
          />
          {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Last name*<span className="text-muted-foreground ml-1">ⓘ</span></label>
          <input
            className={errors.lastName ? inputError : inputBase}
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value.slice(0, 50))}
          />
          {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Email Address*<span className="text-muted-foreground ml-1">ⓘ</span></label>
          <input
            className={errors.email ? inputError : inputBase}
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Phone Number*</label>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 border border-border rounded-md px-3 py-2.5 text-sm text-foreground min-w-[90px]">
              <span>🇺🇸</span>
              <select
                className="bg-transparent border-none text-sm text-foreground focus:outline-none"
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
            </div>
            <input
              className={errors.phone ? inputError : inputBase}
              placeholder="Enter Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5 mt-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Country*</label>
          <SelectWrapper hasError={!!errors.country}>
            <select className={errors.country ? selectError : selectBase} value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
            </select>
          </SelectWrapper>
          {errors.country && <p className="text-destructive text-xs mt-1">{errors.country}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">State*</label>
          <SelectWrapper hasError={!!errors.state}>
            <select className={errors.state ? selectError : selectBase} value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">Select State</option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
            </select>
          </SelectWrapper>
          {errors.state && <p className="text-destructive text-xs mt-1">{errors.state}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">City*</label>
          <SelectWrapper hasError={!!errors.city}>
            <select className={errors.city ? selectError : selectBase} value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              <option value="NYC">New York City</option>
              <option value="LA">Los Angeles</option>
              <option value="CHI">Chicago</option>
            </select>
          </SelectWrapper>
          {errors.city && <p className="text-destructive text-xs mt-1">{errors.city}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm text-foreground mb-2 block">Current location availability*</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
            <input type="radio" name="locationAvail" value="Yes" checked={locationAvailability === 'Yes'} onChange={(e) => setLocationAvailability(e.target.value)} className="accent-primary" />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
            <input type="radio" name="locationAvail" value="No" checked={locationAvailability === 'No'} onChange={(e) => setLocationAvailability(e.target.value)} className="accent-primary" />
            No
          </label>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🎭</span> Section 2 - Personal Attributes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Date of Birth*</label>
          <div className="relative">
            <input
              type="date"
              className={errors.dob ? inputError : inputBase}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          {errors.dob && <p className="text-destructive text-xs mt-1">{errors.dob}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Age*</label>
          <input className={inputBase + ' bg-muted/20'} value={computeAge(dob) || 'Select Date of Birth'} readOnly />
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Weight*</label>
          <div className="flex gap-2">
            <SelectWrapper>
              <select className={selectBase + ' !w-20'} value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                <option value="lbs">lbs</option>
                <option value="kg">kg</option>
              </select>
            </SelectWrapper>
            <input className={errors.weight ? inputError : inputBase} placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          {errors.weight && <p className="text-destructive text-xs mt-1">{errors.weight}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Height*</label>
          <div className="flex gap-2">
            <SelectWrapper>
              <select className={selectBase + ' !w-20'} value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
                <option value="ft">ft</option>
                <option value="cm">cm</option>
              </select>
            </SelectWrapper>
            <input className={errors.height ? inputError : inputBase} placeholder="Enter Height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          {errors.height && <p className="text-destructive text-xs mt-1">{errors.height}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Eye Color*</label>
          <SelectWrapper>
            <select className={errors.eyeColor ? selectError : selectBase} value={eyeColor} onChange={(e) => setEyeColor(e.target.value)}>
              <option value="">Select Eye Color</option>
              <option value="Brown">Brown</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Hazel">Hazel</option>
              <option value="Black">Black</option>
            </select>
          </SelectWrapper>
          {errors.eyeColor && <p className="text-destructive text-xs mt-1">{errors.eyeColor}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Hair Color*</label>
          <SelectWrapper>
            <select className={errors.hairColor ? selectError : selectBase} value={hairColor} onChange={(e) => setHairColor(e.target.value)}>
              <option value="">Select Hair Color</option>
              <option value="Black">Black</option>
              <option value="Brown">Brown</option>
              <option value="Blonde">Blonde</option>
              <option value="Red">Red</option>
              <option value="Gray">Gray</option>
            </select>
          </SelectWrapper>
          {errors.hairColor && <p className="text-destructive text-xs mt-1">{errors.hairColor}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Gender*</label>
          <SelectWrapper>
            <select className={errors.gender ? selectError : selectBase} value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Other">Other</option>
            </select>
          </SelectWrapper>
          {errors.gender && <p className="text-destructive text-xs mt-1">{errors.gender}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Ethnicity*</label>
          <SelectWrapper>
            <select className={errors.ethnicity ? selectError : selectBase} value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}>
              <option value="">Select Ethnicity</option>
              <option value="Asian">Asian</option>
              <option value="Black">Black</option>
              <option value="Hispanic">Hispanic/Latino</option>
              <option value="White">White</option>
              <option value="Mixed">Mixed</option>
              <option value="Other">Other</option>
            </select>
          </SelectWrapper>
          {errors.ethnicity && <p className="text-destructive text-xs mt-1">{errors.ethnicity}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm text-foreground mb-1.5 block">Language(s) spoken*</label>
        {languages.map((lang, i) => (
          <div key={i} className="flex gap-2 mb-2 items-center">
            <SelectWrapper>
              <select
                className={errors.languages && i === 0 ? selectError : selectBase}
                value={lang.language}
                onChange={(e) => {
                  const updated = [...languages];
                  updated[i].language = e.target.value;
                  setLanguages(updated);
                }}
                style={{ width: '180px' }}
              >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Mandarin">Mandarin</option>
                <option value="French">French</option>
                <option value="Hindi">Hindi</option>
              </select>
            </SelectWrapper>
            <SelectWrapper>
              <select
                className={selectBase}
                value={lang.fluency}
                onChange={(e) => {
                  const updated = [...languages];
                  updated[i].fluency = e.target.value;
                  setLanguages(updated);
                }}
                style={{ width: '180px' }}
              >
                <option value="">Select Fluency</option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
              </select>
            </SelectWrapper>
            {i > 0 && (
              <button onClick={() => removeLanguage(i)} className="text-muted-foreground hover:text-destructive">
                <X size={16} />
              </button>
            )}
          </div>
        ))}
        {errors.languages && <p className="text-destructive text-xs mt-1">{errors.languages}</p>}
        <button
          onClick={addLanguage}
          className="mt-2 text-sm border border-border rounded-md px-4 py-1.5 text-foreground hover:border-primary transition-colors"
        >
          +Add Language
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🎭</span> Section 3 - Professional Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Eye Color*</label>
          <SelectWrapper>
            <select className={errors.eyeColorExp ? selectError : selectBase} value={eyeColorExp} onChange={(e) => setEyeColorExp(e.target.value)}>
              <option value="">Select Eye Color</option>
              <option value="Brown">Brown</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>
          </SelectWrapper>
          {errors.eyeColorExp && <p className="text-destructive text-xs mt-1">{errors.eyeColorExp}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Hair Color*</label>
          <SelectWrapper>
            <select className={errors.hairColorExp ? selectError : selectBase} value={hairColorExp} onChange={(e) => setHairColorExp(e.target.value)}>
              <option value="">Select Hair Color</option>
              <option value="Black">Black</option>
              <option value="Brown">Brown</option>
              <option value="Blonde">Blonde</option>
            </select>
          </SelectWrapper>
          {errors.hairColorExp && <p className="text-destructive text-xs mt-1">{errors.hairColorExp}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm text-foreground mb-1.5 block">Types of Roles Previously Done*</label>
        <SelectWrapper>
          <select className={errors.rolesType ? selectError : selectBase} value={rolesType} onChange={(e) => setRolesType(e.target.value)}>
            <option value="">Select Role Type</option>
            <option value="Lead">Lead</option>
            <option value="Supporting">Supporting</option>
            <option value="Extra">Extra</option>
            <option value="Voice">Voice Acting</option>
          </select>
        </SelectWrapper>
        {errors.rolesType && <p className="text-destructive text-xs mt-1">{errors.rolesType}</p>}
      </div>

      <div className="mt-5">
        <label className="text-sm text-foreground mb-1.5 block">Industry Experience*</label>
        <SelectWrapper>
          <select className={errors.industryExp ? selectError : selectBase} value={industryExp} onChange={(e) => setIndustryExp(e.target.value)}>
            <option value="">Select Experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </SelectWrapper>
        {errors.industryExp && <p className="text-destructive text-xs mt-1">{errors.industryExp}</p>}
      </div>

      <div className="mt-5">
        <label className="text-sm text-foreground mb-1.5 block">Notable Works/Projects*</label>
        <input
          className={errors.notableWorks ? inputError : inputBase}
          placeholder="Describe your notable works and projects..."
          value={notableWorks}
          onChange={(e) => setNotableWorks(e.target.value)}
        />
        {errors.notableWorks && <p className="text-destructive text-xs mt-1">{errors.notableWorks}</p>}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🎭</span> Section 3 - Media Uploads
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Resume/CV (PDF only, 5MB limit)*</label>
          <label className="flex items-center justify-center border border-dashed border-border rounded-md py-3 text-sm text-muted-foreground cursor-pointer hover:border-primary transition-colors">
            {resumeFile ? resumeFile.name : 'Upload Resume/CV'}
            <input type="file" accept=".pdf" className="hidden" onChange={(e) => setResumeFile(e.target.files?.[0] || null)} />
          </label>
          {errors.resume && <p className="text-destructive text-xs mt-1">{errors.resume}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Headshots (JPG, PNG, JPEG - Max 5 images)*</label>
          <label className="flex items-center justify-center border border-dashed border-border rounded-md py-3 text-sm text-muted-foreground cursor-pointer hover:border-primary transition-colors">
            {headshotFiles.length > 0 ? `${headshotFiles.length} file(s) selected` : 'Upload Headshots'}
            <input type="file" accept=".jpg,.jpeg,.png" multiple className="hidden" onChange={(e) => setHeadshotFiles(Array.from(e.target.files || []).slice(0, 5))} />
          </label>
          {errors.headshots && <p className="text-destructive text-xs mt-1">{errors.headshots}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-semibold text-foreground mb-1 block">Demo Reel*</label>
        <p className="text-xs text-muted-foreground mb-2">Upload Video (MP4, MOV, AVI, WebM - 100MB limit)*</p>
        <label className="flex items-center justify-center border border-dashed border-border rounded-md py-3 text-sm text-muted-foreground cursor-pointer hover:border-primary transition-colors w-full md:w-1/2">
          {demoReelFile ? demoReelFile.name : 'Upload Demo Reel'}
          <input type="file" accept=".mp4,.mov,.avi,.webm" className="hidden" onChange={(e) => setDemoReelFile(e.target.files?.[0] || null)} />
        </label>
        {errors.demoReel && <p className="text-destructive text-xs mt-1">{errors.demoReel}</p>}

        <p className="text-center font-bold text-foreground my-3">OR</p>

        <label className="text-sm text-foreground mb-1.5 block">Provide URL</label>
        <input
          className={errors.demoReelUrl ? inputError : inputBase}
          placeholder="https://youtube.com/watch?v="
          value={demoReelUrl}
          onChange={(e) => setDemoReelUrl(e.target.value)}
          style={{ maxWidth: '500px' }}
        />
        {errors.demoReelUrl && <p className="text-destructive text-xs mt-1">{errors.demoReelUrl}</p>}
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🎭</span> Section 5 - Role-Specific Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div>
          <label className="text-sm text-foreground mb-2 block">Are you available on the shoot date?*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="shootDate" value="Yes" checked={availableShootDate === 'Yes'} onChange={(e) => setAvailableShootDate(e.target.value)} className="accent-primary" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="shootDate" value="No" checked={availableShootDate === 'No'} onChange={(e) => setAvailableShootDate(e.target.value)} className="accent-primary" /> No
            </label>
          </div>
        </div>
        <div>
          <label className="text-sm text-foreground mb-2 block">Are you willing to travel?*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="travel" value="Yes" checked={willingToTravel === 'Yes'} onChange={(e) => setWillingToTravel(e.target.value)} className="accent-primary" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="travel" value="No" checked={willingToTravel === 'No'} onChange={(e) => setWillingToTravel(e.target.value)} className="accent-primary" /> No
            </label>
          </div>
        </div>
        <div>
          <label className="text-sm text-foreground mb-2 block">Any schedule conflicts?*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="conflicts" value="Yes" checked={scheduleConflicts === 'Yes'} onChange={(e) => setScheduleConflicts(e.target.value)} className="accent-primary" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="conflicts" value="No" checked={scheduleConflicts === 'No'} onChange={(e) => setScheduleConflicts(e.target.value)} className="accent-primary" /> No
            </label>
          </div>
        </div>
        <div>
          <label className="text-sm text-foreground mb-2 block">Do you have relevant experience for this role?*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="relevantExp" value="Yes" checked={relevantExperience === 'Yes'} onChange={(e) => setRelevantExperience(e.target.value)} className="accent-primary" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="relevantExp" value="No" checked={relevantExperience === 'No'} onChange={(e) => setRelevantExperience(e.target.value)} className="accent-primary" /> No
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mt-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Why are you interested in this role?*</label>
          <textarea
            className={errors.whyInterested ? inputError + ' h-24 resize-none' : inputBase + ' h-24 resize-none'}
            placeholder="Explain your interest in the role..."
            value={whyInterested}
            onChange={(e) => setWhyInterested(e.target.value.slice(0, 500))}
          />
          <p className="text-xs text-muted-foreground mt-1">{whyInterested.length}/500 characters</p>
          {errors.whyInterested && <p className="text-destructive text-xs mt-0.5">{errors.whyInterested}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">How do you relate to the character?*</label>
          <textarea
            className={errors.howRelate ? inputError + ' h-24 resize-none' : inputBase + ' h-24 resize-none'}
            placeholder="Describe how you relate to the character..."
            value={howRelate}
            onChange={(e) => setHowRelate(e.target.value.slice(0, 500))}
          />
          <p className="text-xs text-muted-foreground mt-1">{howRelate.length}/500 characters</p>
          {errors.howRelate && <p className="text-destructive text-xs mt-0.5">{errors.howRelate}</p>}
        </div>
      </div>

      <div className="mt-5" style={{ maxWidth: '400px' }}>
        <label className="text-sm text-foreground mb-1.5 block">Expected pay range</label>
        <SelectWrapper>
          <select className={selectBase} value={expectedPay} onChange={(e) => setExpectedPay(e.target.value)}>
            <option value="">Select Role Type</option>
            <option value="0-500">$0 - $500</option>
            <option value="500-1000">$500 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </SelectWrapper>
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🎭</span> Section 6 - Skills and Capabilities
      </h2>

      <div className="space-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Acting Skills*</label>
          <SelectWrapper>
            <select className={errors.actingSkills ? selectError : selectBase} value={actingSkills} onChange={(e) => setActingSkills(e.target.value)}>
              <option value="">Select acting skills</option>
              <option value="Method">Method Acting</option>
              <option value="Classical">Classical Acting</option>
              <option value="Improv">Improvisation</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
            </select>
          </SelectWrapper>
          {errors.actingSkills && <p className="text-destructive text-xs mt-1">{errors.actingSkills}</p>}
        </div>

        <div>
          <label className="text-sm text-foreground mb-1.5 block">Other Talents</label>
          <SelectWrapper>
            <select className={selectBase} value={otherTalents} onChange={(e) => setOtherTalents(e.target.value)}>
              <option value="">Select other talents</option>
              <option value="Singing">Singing</option>
              <option value="Dancing">Dancing</option>
              <option value="MartialArts">Martial Arts</option>
              <option value="Stunts">Stunts</option>
            </select>
          </SelectWrapper>
        </div>

        <div>
          <label className="text-sm font-semibold text-foreground mb-3 block">License/Certifications</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {licenses.map((lic, i) => (
              <div key={i}>
                <label className="text-sm text-foreground mb-1.5 block">Certification Name*</label>
                <input
                  className={inputBase}
                  placeholder="Enter certification name"
                  value={lic.name}
                  onChange={(e) => {
                    const updated = [...licenses];
                    updated[i].name = e.target.value;
                    setLicenses(updated);
                  }}
                />
              </div>
            ))}
          </div>
          <button
            onClick={addLicense}
            className="mt-3 text-sm border border-border rounded-md px-4 py-1.5 text-foreground hover:border-primary transition-colors"
          >
            +Add License
          </button>
        </div>

        <div>
          <label className="text-sm text-foreground mb-1.5 block">Languages for Singing/Voiceover</label>
          <SelectWrapper>
            <select className={selectBase} value={singingLanguages} onChange={(e) => setSingingLanguages(e.target.value)}>
              <option value="">Describe your notable works and projects...</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </SelectWrapper>
        </div>
      </div>

      <hr className="border-border my-6" />

      <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <span className="text-primary">✅</span> Consents and Submissions
      </h2>

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm text-foreground cursor-pointer">
          <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="mt-0.5 accent-primary" />
          <span>I agree to the <span className="text-primary underline">Terms and Conditions</span>*</span>
        </label>
        {errors.agreeTerms && <p className="text-destructive text-xs ml-7">{errors.agreeTerms}</p>}
        <label className="flex items-start gap-3 text-sm text-foreground cursor-pointer">
          <input type="checkbox" checked={consentAI} onChange={(e) => setConsentAI(e.target.checked)} className="mt-0.5 accent-primary" />
          <span>I consent to the use of my data for AI processing and analysis to improve casting decisions*</span>
        </label>
        {errors.consentAI && <p className="text-destructive text-xs ml-7">{errors.consentAI}</p>}
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      case 6: return renderStep6();
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="px-6 md:px-16 py-6 flex-1 max-w-[1000px] mx-auto w-full">
        {/* Back */}
        <button
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-2 bg-transparent border-none p-0 text-sm"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          Back to the job
        </button>

        <h1 className="text-3xl font-bold text-primary mb-1">Apply for Role</h1>
        <p className="text-muted-foreground text-sm mb-8">Complete your application step by step</p>

        <StepIndicator currentStep={currentStep} onStepClick={(step) => { setErrors({}); setCurrentStep(step); }} />

        {renderCurrentStep()}

        {/* Progress bar */}
        <div className="w-full h-1 bg-muted-foreground/20 rounded-full mt-8 mb-4 overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>

        {/* Footer buttons */}
        <div className="flex justify-end gap-3 mb-10">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-6 py-2 rounded-md border border-border text-sm text-foreground hover:bg-muted/30 transition-colors disabled:opacity-40"
          >
            Previous
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md border border-border text-sm text-foreground hover:bg-muted/30 transition-colors"
          >
            Save
          </button>
          {currentStep < 6 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Submit Application
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default ApplicationFormPage;
