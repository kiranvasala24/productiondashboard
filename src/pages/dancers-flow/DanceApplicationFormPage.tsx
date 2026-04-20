import React, { useState } from 'react';
import { Check, ChevronDown, ArrowLeft } from 'lucide-react';
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

const SelectWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative">
    {children}
    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
  </div>
);

const FileUpload: React.FC<{
  label: string;
  hasError?: boolean;
  onChange: (files: FileList | null) => void;
  accept?: string;
  multiple?: boolean;
  fileName?: string;
}> = ({ label, hasError, onChange, accept, multiple, fileName }) => (
  <label
    className={`block w-full border border-dashed rounded-md px-4 py-3 text-sm text-center cursor-pointer transition-colors ${
      hasError ? 'border-destructive text-destructive' : 'border-border text-muted-foreground hover:border-primary'
    }`}
  >
    {fileName || label}
    <input
      type="file"
      className="hidden"
      accept={accept}
      multiple={multiple}
      onChange={(e) => onChange(e.target.files)}
    />
  </label>
);

const DanceApplicationFormPage: React.FC = () => {
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

  // Step 2 - Dancer Personal Attributes
  const [dob, setDob] = useState('');
  const [weightUnit, setWeightUnit] = useState('lbs');
  const [weight, setWeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('ft');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [shoeSize, setShoeSize] = useState('');
  const [flexibility, setFlexibility] = useState('');
  const [strengthLifts, setStrengthLifts] = useState('');

  // Step 3 - Dance Experience
  const [primaryStyle, setPrimaryStyle] = useState('');
  const [additionalStyles, setAdditionalStyles] = useState('');
  const [yearsExperience, setYearsExperience] = useState('');
  const [training, setTraining] = useState('');
  const [choreographySkills, setChoreographySkills] = useState('');
  const [industryExp, setIndustryExp] = useState('');
  const [notablePerformances, setNotablePerformances] = useState('');

  // Step 4 - Media Portfolio
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [headshotFiles, setHeadshotFiles] = useState<File[]>([]);
  const [fullBodyFiles, setFullBodyFiles] = useState<File[]>([]);
  const [demoReelFile, setDemoReelFile] = useState<File | null>(null);
  const [demoReelUrl, setDemoReelUrl] = useState('');
  const [performanceVideos, setPerformanceVideos] = useState<File[]>([]);
  const [choreographySamples, setChoreographySamples] = useState<File[]>([]);

  // Step 5
  const [availableShootDate, setAvailableShootDate] = useState('');
  const [willingToTravel, setWillingToTravel] = useState('');
  const [scheduleConflicts, setScheduleConflicts] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [whyInterested, setWhyInterested] = useState('');
  const [howRelate, setHowRelate] = useState('');
  const [expectedPay, setExpectedPay] = useState('');

  // Step 6
  const [danceSkills, setDanceSkills] = useState('');
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
      if (!phone.trim()) newErrors.phone = 'Please enter a valid phone number';
      if (!country) newErrors.country = 'Country is required';
      if (!state) newErrors.state = 'State is required';
      if (!city) newErrors.city = 'City is required';
    }

    if (step === 2) {
      if (!dob) newErrors.dob = 'Select Date of Birth';
      if (!weight.trim()) newErrors.weight = 'Please enter a valid weight';
      if (!height.trim()) newErrors.height = 'Please enter a valid height';
      if (!gender) newErrors.gender = 'Select Gender';
      if (!shoeSize.trim()) newErrors.shoeSize = 'Enter shoe size';
      if (!flexibility) newErrors.flexibility = 'Select Flexibility';
    }

    if (step === 3) {
      if (!primaryStyle) newErrors.primaryStyle = 'Select Dance Style';
      if (!additionalStyles) newErrors.additionalStyles = 'Select Dance Styles';
      if (!yearsExperience.trim()) newErrors.yearsExperience = 'Enter years of experience';
      if (!training.trim()) newErrors.training = 'Field cannot be blank';
      if (!choreographySkills) newErrors.choreographySkills = 'Option must be selected';
      if (!industryExp) newErrors.industryExp = 'Field cannot be blank';
      if (!notablePerformances.trim()) newErrors.notablePerformances = 'Field cannot be blank';
    }

    if (step === 4) {
      if (!resumeFile) newErrors.resume = 'Upload is required';
      if (headshotFiles.length === 0) newErrors.headshots = 'Upload is required';
      if (fullBodyFiles.length === 0) newErrors.fullBody = 'Upload is required';
      if (!demoReelFile && !demoReelUrl.trim()) {
        newErrors.demoReel = 'Upload is required';
        newErrors.demoReelUrl = 'Field cannot be blank';
      }
      if (performanceVideos.length === 0) newErrors.performanceVideos = 'Upload is required';
      if (choreographySamples.length === 0) newErrors.choreographySamples = 'Upload is required';
    }

    if (step === 5) {
      if (!whyInterested.trim()) newErrors.whyInterested = 'Field cannot be blank';
      if (!howRelate.trim()) newErrors.howRelate = 'Field cannot be blank';
    }

    if (step === 6) {
      if (!danceSkills) newErrors.danceSkills = 'Field cannot be blank';
      if (!agreeTerms) newErrors.agreeTerms = 'You must agree to terms';
      if (!consentAI) newErrors.consentAI = 'Consent is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((p) => Math.min(p + 1, 6));
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    setCurrentStep((p) => Math.max(p - 1, 1));
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = () => alert('Application progress saved!');

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      alert('Application submitted successfully!');
      navigate('/dancers');
    }
  };

  const addLicense = () => setLicenses((p) => [...p, { name: '' }]);

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
        <span className="text-primary">🏅</span> Section 1 - Basic Profile Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">First name*</label>
          <input className={errors.firstName ? inputError : inputBase} placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value.slice(0, 50))} />
          {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Last name*</label>
          <input className={errors.lastName ? inputError : inputBase} placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value.slice(0, 50))} />
          {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Email Address*</label>
          <input type="email" className={errors.email ? inputError : inputBase} placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Phone Number*</label>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 border border-border rounded-md px-3 py-2.5 text-sm text-foreground min-w-[90px]">
              <span>🇺🇸</span>
              <select className="bg-transparent border-none text-sm text-foreground focus:outline-none" value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)}>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
            </div>
            <input className={errors.phone ? inputError : inputBase} placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5 mt-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Country*</label>
          <SelectWrapper>
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
          <SelectWrapper>
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
          <SelectWrapper>
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
        <span className="text-primary">🏅</span> Section 2 - Personal Attributes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Date of Birth*</label>
          <input type="date" className={errors.dob ? inputError : inputBase} value={dob} onChange={(e) => setDob(e.target.value)} />
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
          <label className="text-sm text-foreground mb-1.5 block">Gender*</label>
          <SelectWrapper>
            <select className={errors.gender ? selectError : selectBase} value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
          </SelectWrapper>
          {errors.gender && <p className="text-destructive text-xs mt-1">{errors.gender}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Shoe size*</label>
          <input className={errors.shoeSize ? inputError : inputBase} placeholder="Enter shoe size" value={shoeSize} onChange={(e) => setShoeSize(e.target.value.replace(/[^0-9.]/g, ''))} />
          {errors.shoeSize && <p className="text-destructive text-xs mt-1">{errors.shoeSize}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Flexibility Level*</label>
          <SelectWrapper>
            <select className={errors.flexibility ? selectError : selectBase} value={flexibility} onChange={(e) => setFlexibility(e.target.value)}>
              <option value="">Select Flexibility</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </SelectWrapper>
          {errors.flexibility && <p className="text-destructive text-xs mt-1">{errors.flexibility}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-2 block">Strength & Lifts Capabilities*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="strengthLifts" value="Yes" checked={strengthLifts === 'Yes'} onChange={(e) => setStrengthLifts(e.target.value)} className="accent-primary" />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="strengthLifts" value="No" checked={strengthLifts === 'No'} onChange={(e) => setStrengthLifts(e.target.value)} className="accent-primary" />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🏅</span> Section 3 - Professional Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Primary Dance Style*</label>
          <SelectWrapper>
            <select className={errors.primaryStyle ? selectError : selectBase} value={primaryStyle} onChange={(e) => setPrimaryStyle(e.target.value)}>
              <option value="">Select Dance Style</option>
              <option>Hip Hop</option>
              <option>Contemporary</option>
              <option>Ballet</option>
              <option>Jazz</option>
              <option>Salsa</option>
              <option>Breakdance</option>
            </select>
          </SelectWrapper>
          {errors.primaryStyle && <p className="text-destructive text-xs mt-1">{errors.primaryStyle}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Additional Dance Styles*</label>
          <SelectWrapper>
            <select className={errors.additionalStyles ? selectError : selectBase} value={additionalStyles} onChange={(e) => setAdditionalStyles(e.target.value)}>
              <option value="">Select Dance Styles</option>
              <option>Hip Hop</option>
              <option>Contemporary</option>
              <option>Ballet</option>
              <option>Jazz</option>
              <option>Salsa</option>
              <option>Breakdance</option>
            </select>
          </SelectWrapper>
          {errors.additionalStyles && <p className="text-destructive text-xs mt-1">{errors.additionalStyles}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Years Dancing Experience*</label>
          <input className={errors.yearsExperience ? inputError : inputBase} placeholder="Enter years of experience" value={yearsExperience} onChange={(e) => setYearsExperience(e.target.value.replace(/[^0-9]/g, ''))} />
          {errors.yearsExperience && <p className="text-destructive text-xs mt-1">{errors.yearsExperience}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Education/Formal Training*</label>
          <input className={errors.training ? inputError : inputBase} placeholder="Describe your training..." value={training} onChange={(e) => setTraining(e.target.value)} />
          {errors.training && <p className="text-destructive text-xs mt-1">{errors.training}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-foreground mb-2 block">Choreography Skills*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="choreoSkills" value="Yes" checked={choreographySkills === 'Yes'} onChange={(e) => setChoreographySkills(e.target.value)} className="accent-primary" />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="choreoSkills" value="No" checked={choreographySkills === 'No'} onChange={(e) => setChoreographySkills(e.target.value)} className="accent-primary" />
              No
            </label>
          </div>
          {errors.choreographySkills && <p className="text-destructive text-xs mt-1">{errors.choreographySkills}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-foreground mb-1.5 block">Industry Experience*</label>
          <SelectWrapper>
            <select className={errors.industryExp ? selectError : selectBase} value={industryExp} onChange={(e) => setIndustryExp(e.target.value)}>
              <option value="">Select Experience</option>
              <option>Music Videos</option>
              <option>Live Performances</option>
              <option>Television</option>
              <option>Film</option>
              <option>Theatre</option>
            </select>
          </SelectWrapper>
          {errors.industryExp && <p className="text-destructive text-xs mt-1">{errors.industryExp}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-foreground mb-1.5 block">Notable Performances/Credits*</label>
          <input className={errors.notablePerformances ? inputError : inputBase} placeholder="Describe your notable performances and credits..." value={notablePerformances} onChange={(e) => setNotablePerformances(e.target.value)} />
          {errors.notablePerformances && <p className="text-destructive text-xs mt-1">{errors.notablePerformances}</p>}
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🏅</span> Section 4 - Media Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Resume/CV (PDF only, 5MB limit)*</label>
          <FileUpload label="Upload Resume/CV" accept="application/pdf" hasError={!!errors.resume} fileName={resumeFile?.name} onChange={(files) => files && setResumeFile(files[0])} />
          {errors.resume && <p className="text-destructive text-xs mt-1">{errors.resume}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Headshots (JPG, PNG, JPEG - Max 5 images)*</label>
          <FileUpload label="Upload Headshots" accept="image/*" multiple hasError={!!errors.headshots} fileName={headshotFiles.length ? `${headshotFiles.length} file(s) selected` : undefined} onChange={(files) => files && setHeadshotFiles(Array.from(files).slice(0, 5))} />
          {errors.headshots && <p className="text-destructive text-xs mt-1">{errors.headshots}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Full-Body Shot (JPG, PNG, JPEG - Max 5 images)*</label>
          <FileUpload label="Upload Full-Body Shots" accept="image/*" multiple hasError={!!errors.fullBody} fileName={fullBodyFiles.length ? `${fullBodyFiles.length} file(s) selected` : undefined} onChange={(files) => files && setFullBodyFiles(Array.from(files).slice(0, 5))} />
          {errors.fullBody && <p className="text-destructive text-xs mt-1">{errors.fullBody}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Demo Reel*</label>
          <p className="text-xs text-muted-foreground mb-2">Upload Video (MP4, MOV, AVI, MKV, WebM - 100MB limit)*</p>
          <FileUpload label="Upload Demo Reel" accept="video/*" hasError={!!errors.demoReel} fileName={demoReelFile?.name} onChange={(files) => files && setDemoReelFile(files[0])} />
          {errors.demoReel && <p className="text-destructive text-xs mt-1">{errors.demoReel}</p>}
          <p className="text-center text-foreground font-bold my-2">OR</p>
          <label className="text-sm text-foreground mb-1.5 block">Provide URL</label>
          <input className={errors.demoReelUrl ? inputError : inputBase} placeholder="https://youtube.com/watch?v=" value={demoReelUrl} onChange={(e) => setDemoReelUrl(e.target.value)} />
          {errors.demoReelUrl && <p className="text-destructive text-xs mt-1">{errors.demoReelUrl}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Performance Videos (JPG, PNG, JPEG - Max 5 images)*</label>
          <FileUpload label="Upload Performance Videos" accept="image/*,video/*" multiple hasError={!!errors.performanceVideos} fileName={performanceVideos.length ? `${performanceVideos.length} file(s) selected` : undefined} onChange={(files) => files && setPerformanceVideos(Array.from(files).slice(0, 5))} />
          {errors.performanceVideos && <p className="text-destructive text-xs mt-1">{errors.performanceVideos}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Choreography Samples (JPG, PNG, JPEG - Max 5 images)*</label>
          <FileUpload label="Upload Choreography Samples" accept="image/*,video/*" multiple hasError={!!errors.choreographySamples} fileName={choreographySamples.length ? `${choreographySamples.length} file(s) selected` : undefined} onChange={(files) => files && setChoreographySamples(Array.from(files).slice(0, 5))} />
          {errors.choreographySamples && <p className="text-destructive text-xs mt-1">{errors.choreographySamples}</p>}
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🏅</span> Section 5 - Role-Specific Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className="text-sm text-foreground mb-2 block">Are you available on the shoot date?*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="shootDate" value="Yes" checked={availableShootDate === 'Yes'} onChange={(e) => setAvailableShootDate(e.target.value)} className="accent-primary" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="shootDate" value="No" checked={availableShootDate === 'No'} onChange={(e) => setAvailableShootDate(e.target.value)} className="accent-primary" /> No
            </label>
          </div>
        </div>
        <div>
          <label className="text-sm text-foreground mb-2 block">Are you willing to travel?*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="travel" value="Yes" checked={willingToTravel === 'Yes'} onChange={(e) => setWillingToTravel(e.target.value)} className="accent-primary" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="travel" value="No" checked={willingToTravel === 'No'} onChange={(e) => setWillingToTravel(e.target.value)} className="accent-primary" /> No
            </label>
          </div>
        </div>
        <div>
          <label className="text-sm text-foreground mb-2 block">Any schedule conflicts?*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="conflicts" value="Yes" checked={scheduleConflicts === 'Yes'} onChange={(e) => setScheduleConflicts(e.target.value)} className="accent-primary" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="conflicts" value="No" checked={scheduleConflicts === 'No'} onChange={(e) => setScheduleConflicts(e.target.value)} className="accent-primary" /> No
            </label>
          </div>
        </div>
        <div>
          <label className="text-sm text-foreground mb-2 block">Do you have relevant experience for this role?*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="relExp" value="Yes" checked={relevantExperience === 'Yes'} onChange={(e) => setRelevantExperience(e.target.value)} className="accent-primary" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="relExp" value="No" checked={relevantExperience === 'No'} onChange={(e) => setRelevantExperience(e.target.value)} className="accent-primary" /> No
            </label>
          </div>
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Why are you interested in this role?*</label>
          <textarea
            className={`${errors.whyInterested ? inputError : inputBase} min-h-[100px] resize-y`}
            placeholder="Explain your interest in the role..."
            maxLength={500}
            value={whyInterested}
            onChange={(e) => setWhyInterested(e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-1">{whyInterested.length}/500 characters</p>
          {errors.whyInterested && <p className="text-destructive text-xs mt-1">{errors.whyInterested}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">How do you relate to the character?*</label>
          <textarea
            className={`${errors.howRelate ? inputError : inputBase} min-h-[100px] resize-y`}
            placeholder="Describe how you relate to the character..."
            maxLength={500}
            value={howRelate}
            onChange={(e) => setHowRelate(e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-1">{howRelate.length}/500 characters</p>
          {errors.howRelate && <p className="text-destructive text-xs mt-1">{errors.howRelate}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Expected pay range</label>
          <SelectWrapper>
            <select className={selectBase} value={expectedPay} onChange={(e) => setExpectedPay(e.target.value)}>
              <option value="">Select Role Type</option>
              <option>$0 - $500</option>
              <option>$500 - $1000</option>
              <option>$1000 - $5000</option>
              <option>$5000+</option>
            </select>
          </SelectWrapper>
        </div>
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="text-primary">🏅</span> Section 6 - Skills and Capabilities
      </h2>
      <div className="space-y-5">
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Dance Skills*</label>
          <SelectWrapper>
            <select className={errors.danceSkills ? selectError : selectBase} value={danceSkills} onChange={(e) => setDanceSkills(e.target.value)}>
              <option value="">Select dance skills</option>
              <option>Hip Hop</option>
              <option>Contemporary</option>
              <option>Ballet</option>
              <option>Breakdance</option>
              <option>Jazz</option>
              <option>Salsa</option>
            </select>
          </SelectWrapper>
          {errors.danceSkills && <p className="text-destructive text-xs mt-1">{errors.danceSkills}</p>}
        </div>
        <div>
          <label className="text-sm text-foreground mb-1.5 block">Other Talents</label>
          <SelectWrapper>
            <select className={selectBase} value={otherTalents} onChange={(e) => setOtherTalents(e.target.value)}>
              <option value="">Select other talents</option>
              <option>Singing</option>
              <option>Acting</option>
              <option>Acrobatics</option>
              <option>Martial Arts</option>
            </select>
          </SelectWrapper>
        </div>

        <div>
          <p className="text-sm text-foreground mb-3">License/Certifications</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {licenses.map((lic, idx) => (
              <div key={idx}>
                <label className="text-sm text-foreground mb-1.5 block">Certification Name*</label>
                <input
                  className={inputBase}
                  placeholder="Enter certification name"
                  value={lic.name}
                  onChange={(e) => {
                    const next = [...licenses];
                    next[idx].name = e.target.value;
                    setLicenses(next);
                  }}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addLicense}
            className="mt-3 px-4 py-1.5 bg-background border border-border text-foreground text-sm rounded-md hover:bg-secondary transition-colors"
          >
            +Add License
          </button>
        </div>

        <div>
          <label className="text-sm text-foreground mb-1.5 block">Languages for Singing/Voiceover</label>
          <SelectWrapper>
            <select className={selectBase} value={singingLanguages} onChange={(e) => setSingingLanguages(e.target.value)}>
              <option value="">Describe your notable works and projects...</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Hindi</option>
            </select>
          </SelectWrapper>
        </div>

        <div className="border-t border-border pt-5">
          <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
            <span className="text-primary">✓</span> Consents and Submissions
          </h3>
          <label className="flex items-start gap-2 text-sm text-foreground cursor-pointer mb-3">
            <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="mt-0.5 accent-primary" />
            <span>I agree to the <span className="text-primary">Terms and Conditions</span>*</span>
          </label>
          {errors.agreeTerms && <p className="text-destructive text-xs mb-2">{errors.agreeTerms}</p>}
          <label className="flex items-start gap-2 text-sm text-foreground cursor-pointer">
            <input type="checkbox" checked={consentAI} onChange={(e) => setConsentAI(e.target.checked)} className="mt-0.5 accent-primary" />
            <span>I consent to the use of my data for AI processing and analysis to improve casting decisions*</span>
          </label>
          {errors.consentAI && <p className="text-destructive text-xs mt-1">{errors.consentAI}</p>}
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
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
    <div className="min-h-screen bg-background">
      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors mb-3"
        >
          <ArrowLeft size={16} /> Back to the job
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Apply for Role</h1>
        <p className="text-sm text-muted-foreground mb-10">Complete your application step by step</p>

        <StepIndicator currentStep={currentStep} onStepClick={(s) => s < currentStep && setCurrentStep(s)} />

        {renderStep()}

        <div className="border-t border-primary/20 mt-8 pt-6 flex justify-end gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-6 py-2 text-sm rounded-md bg-muted text-muted-foreground font-semibold disabled:opacity-50 hover:opacity-90 transition-opacity"
          >
            Previous
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 text-sm rounded-md bg-background text-foreground font-semibold border border-border hover:bg-secondary transition-colors"
          >
            Save
          </button>
          {currentStep < 6 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2 text-sm rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 text-sm rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Submit Application
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default DanceApplicationFormPage;
