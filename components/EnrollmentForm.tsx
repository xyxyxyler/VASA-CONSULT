import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, Loader2, CreditCard, CalendarDays, BookOpen, User } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

type Step = 1 | 2 | 3 | 4 | 5;

// Package details for calculation
const PACKAGES = {
    '1-on-1': { multiplier: 1 },
    'split': { multiplier: 0.8 }, // Example ratio for split cost
    'corporate': { multiplier: null } // Custom pricing
};

const FREQUENCIES = {
    '4x': { text: 'Once every week = 4 x in a month', priceGHS: 800 },
    '8x': { text: 'Twice every week = 8 x in a month', priceGHS: 1000 },
    '12x': { text: 'Thrice every week = 12 x in a month', priceGHS: 1700 },
    'custom': { text: 'Different payment plan', priceGHS: null }
};

// Approximate conversion rates (These should ideally come from an API if exact accuracy is paramount, but hardcoded estimates work for basic display)
const USD_RATE = 0.075;
const EUR_RATE = 0.068;
const GBP_RATE = 0.058;

export const EnrollmentForm: React.FC = () => {
    const { t } = useLanguage();
    const [step, setStep] = useState<Step>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Form State
    const [formData, setFormData] = useState({
        // Step 1: Personal
        email: '',
        name: '',
        whatsapp: '',
        countryTimezone: '',
        
        // Step 2: Profile
        currentLevel: '',
        studyDuration: '',
        exams: '',
        challenge: '',
        attendedSeminar: '',
        discoverySource: '',
        pastVasaStudent: '',

        // Step 3: Goals
        goals: [] as string[],
        successDefinition: '',
        learningStyle: '',

        // Step 4: Package & Schedule
        classFormat: '',
        frequency: '',
        agreedToResources: false,
        startDate: '',
        availabilities: [] as string[],
        additionalNotes: '',

        // Step 5: Payment
        paymentMethod: '',
        agreedToDeposit: false,
        agreedToCancellationPolicy: false,
    });

    const updateFormData = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleArrayItem = (field: 'goals' | 'availabilities', value: string) => {
        setFormData(prev => {
            const current = prev[field];
            const updated = current.includes(value) 
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [field]: updated };
        });
    };

    // Calculate dynamic price
    const calculatePrice = () => {
        if (!formData.classFormat || !formData.frequency) return null;
        if (formData.classFormat === 'Corporate/ Team Package contact for price' || formData.frequency === 'Different payment plan') return 'Custom Pricing';

        let basePrice = 0;
        if (formData.frequency.includes('4 x in a month')) basePrice = 800;
        if (formData.frequency.includes('8 x in a month')) basePrice = 1000;
        if (formData.frequency.includes('12 x in a month')) basePrice = 1700;

        if (formData.classFormat.includes('split cost')) {
             // If split cost, they might pay half or a different rate. Let's assume standard listed price is total and they split, or list price is per person. 
             // Providing a note might be safer, but let's assume the listed GHS prices are the base rate to display.
             return {
                 ghs: basePrice,
                 usd: Math.round(basePrice * USD_RATE),
                 eur: Math.round(basePrice * EUR_RATE),
                 gbp: Math.round(basePrice * GBP_RATE)
             };
        }

        return {
            ghs: basePrice,
            usd: Math.round(basePrice * USD_RATE),
            eur: Math.round(basePrice * EUR_RATE),
            gbp: Math.round(basePrice * GBP_RATE)
        };
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 5) as Step);
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation for step 5
        if (!formData.agreedToDeposit || !formData.agreedToCancellationPolicy) {
            alert("Please agree to the deposit and cancellation policies to proceed.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Web3Forms API Call
            // Note: Users will need to replace 'YOUR_ACCESS_KEY_HERE' with their actual key from web3forms.com
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'cfe4365b-8973-406f-9549-6d2457585c96', // Web3Forms Key
                    subject: `New Class Registration from ${formData.name}`,
                    from_name: 'VASA Website Enrollment',
                    to_email: 'vasaconsults@gmail.com',
                    'Full Name': formData.name,
                    'Email Address': formData.email,
                    'WhatsApp Number': formData.whatsapp,
                    'Country & Timezone': formData.countryTimezone,
                    'Current French Level': formData.currentLevel,
                    'How long studying?': formData.studyDuration,
                    'Exams Taken': formData.exams,
                    'Biggest Challenge': formData.challenge,
                    'Attended Seminar Before': formData.attendedSeminar,
                    'Discovered VASA via': formData.discoverySource,
                    'Past VASA Student': formData.pastVasaStudent,
                    'Top Goals': formData.goals.join(', '),
                    'Definition of Success': formData.successDefinition,
                    'Learning Style preference': formData.learningStyle,
                    'Class Format': formData.classFormat,
                    'Frequency': formData.frequency,
                    'Agreed to Resource Policy': formData.agreedToResources ? 'Yes' : 'No',
                    'Start Date': formData.startDate,
                    'Availabilities': formData.availabilities.join(', '),
                    'Notes/Questions': formData.additionalNotes,
                    'Payment Method': formData.paymentMethod,
                    'Agreed to 50% Deposit': formData.agreedToDeposit ? 'Yes' : 'No',
                    'Agreed to Cancellation Policy': formData.agreedToCancellationPolicy ? 'Yes' : 'No',
                })
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus('success');
            } else {
                console.error('Web3Forms Error:', result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="bg-brand-black border border-white/10 rounded-3xl p-12 text-center max-w-2xl mx-auto">
                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-medium text-white mb-4">{t('enroll.success.title')}</h2>
                <p className="text-gray-400 text-lg mb-4">
                    Thank you, {formData.name}. Your registration has been submitted successfully. We will review your details and contact you via WhatsApp or Email shortly.
                </p>
                <div className="bg-brand-beige/10 border border-brand-beige/20 rounded-xl p-4 mb-8 text-brand-beige text-sm">
                    <strong>Important:</strong> Please ensure you keep a receipt or proof of payment for all transactions made regarding this enrollment.
                </div>
                <Button variant="primary" onClick={() => window.location.href = '/'}>
                    {t('enroll.success.btn')}
                </Button>
            </div>
        );
    }

    const priceInsight = calculatePrice();

    return (
        <div className="bg-brand-black border border-white/10 rounded-[2.5rem] p-6 md:p-12">
            
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex justify-between mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`flex items-center justify-center w-10 h-10 rounded-full font-medium ${step === i ? 'bg-brand-beige text-black' : step > i ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500'}`}>
                            {step > i ? <Check className="w-5 h-5" /> : i}
                        </div>
                    ))}
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-brand-beige transition-all duration-500 ease-out"
                        style={{ width: `${((step - 1) / 4) * 100}%` }}
                    />
                </div>
            </div>

            <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }} className="space-y-8">
                
                {/* STEP 1: Personal Info */}
                {step === 1 && (
                    <div className="animate-fade-in space-y-6">
                        <div className="flex items-center gap-3 mb-8">
                            <User className="w-6 h-6 text-brand-beige" />
                            <h2 className="text-2xl font-medium text-white">{t('enroll.step1.title')}</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t('enroll.labels.name')}</label>
                                <input required type="text" value={formData.name} onChange={e => updateFormData('name', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t('enroll.labels.email')}</label>
                                <input required type="email" value={formData.email} onChange={e => updateFormData('email', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t('enroll.labels.whatsapp')}</label>
                                <input required type="tel" value={formData.whatsapp} onChange={e => updateFormData('whatsapp', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none" placeholder="+233..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t('enroll.labels.country')}</label>
                                <input required type="text" value={formData.countryTimezone} onChange={e => updateFormData('countryTimezone', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none" placeholder="e.g. Ghana (GMT)" />
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 2: Profile */}
                {step === 2 && (
                    <div className="animate-fade-in space-y-8">
                         <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-6 h-6 text-brand-beige" />
                            <h2 className="text-2xl font-medium text-white">{t('enroll.step2.title')}</h2>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">How would you rate your current French level? *</label>
                            <div className="space-y-3">
                                {[
                                    'Learning French for the first time - No prior knowledge.',
                                    'A1 - Beginner - Can understand and use very simple expressions.',
                                    'A2 - Elementary - Can communicate in simple and routine tasks.',
                                    'B1 - Intermediate - Can handle everyday conversations.',
                                    'B2 - Upper Intermediate - Can interact fluently with native speakers.',
                                    'A French graduate looking to refresh oral skills.'
                                ].map((level) => (
                                    <label key={level} className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                        <input type="radio" name="level" required checked={formData.currentLevel === level} onChange={() => updateFormData('currentLevel', level)} className="mt-1" />
                                        <span className="text-gray-300">{level}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">How long have you been studying French?</label>
                            <div className="grid grid-cols-2 gap-4">
                                {['0 - 3 months', '3 - 6 months', '6 - 12 months', '1+ year'].map((dur) => (
                                    <label key={dur} className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                        <input type="radio" name="duration" checked={formData.studyDuration === dur} onChange={() => updateFormData('studyDuration', dur)} />
                                        <span className="text-gray-300">{dur}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Do you plan to take or have you taken any official exams (DELF/DALF/TCF)? If yes, specify passing score.</label>
                            <input type="text" value={formData.exams} onChange={e => updateFormData('exams', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none" />
                        </div>
                    </div>
                )}

                {/* STEP 3: Goals */}
                {step === 3 && (
                    <div className="animate-fade-in space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Check className="w-6 h-6 text-brand-beige" />
                            <h2 className="text-2xl font-medium text-white">{t('enroll.step3.title')}</h2>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">What are your top goals for learning French? (Select all that apply) *</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {['Daily conversation', 'Academic exams', 'Travel/relocation', 'Professional/business'].map((goal) => (
                                    <label key={goal} className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                        <input type="checkbox" checked={formData.goals.includes(goal)} onChange={() => toggleArrayItem('goals', goal)} className="w-4 h-4 rounded" />
                                        <span className="text-gray-300">{goal}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">In one or two sentences, what would "success" look like after 3 months? *</label>
                            <textarea required rows={3} value={formData.successDefinition} onChange={e => updateFormData('successDefinition', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none resize-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">Preferred learning style</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['Visual', 'Auditory', 'Interactive', 'A mix', 'Not sure'].map((style) => (
                                    <label key={style} className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                        <input type="radio" name="style" checked={formData.learningStyle === style} onChange={() => updateFormData('learningStyle', style)} />
                                        <span className="text-gray-300">{style}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 4: Package & Schedule */}
                {step === 4 && (
                    <div className="animate-fade-in space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <CalendarDays className="w-6 h-6 text-brand-beige" />
                            <h2 className="text-2xl font-medium text-white">{t('enroll.step4.title')}</h2>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">Which class format are you registering for? *</label>
                            <div className="space-y-3">
                                {['1-on-1 Private', '2 learners who want to split cost', 'Corporate/ Team Package contact for price'].map((format) => (
                                    <label key={format} className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                        <input type="radio" name="format" required checked={formData.classFormat === format} onChange={() => updateFormData('classFormat', format)} />
                                        <span className="text-gray-300">{format}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">How many lessons per week? (1 hour duration) *</label>
                            <div className="space-y-3">
                                {Object.values(FREQUENCIES).map((freq) => (
                                    <label key={freq.text} className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                        <input type="radio" name="freq" required checked={formData.frequency === freq.text} onChange={() => updateFormData('frequency', freq.text)} />
                                        <span className="text-gray-300">{freq.text}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl bg-brand-beige/10 border border-brand-beige/20 text-brand-beige">
                                <input type="checkbox" required checked={formData.agreedToResources} onChange={(e) => updateFormData('agreedToResources', e.target.checked)} className="mt-1" />
                                <span>I agree that every package gives access to unlimited resources and daily pronunciation practice with audios. *</span>
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Desired Start Date *</label>
                            <input type="date" required value={formData.startDate} onChange={e => updateFormData('startDate', e.target.value)} className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none [color-scheme:dark]" />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">Select all availabilities (GMT):</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                {[
                                    'Monday 10am - 11am', 'Monday 5pm - 6pm', 'Monday 7pm - 8pm',
                                    'Tuesday 5pm - 6pm', 'Tuesday 7pm - 8pm', 'Tuesday 8pm - 9pm',
                                    'Wednesday 5pm - 6pm', 'Wednesday 7pm - 8pm', 'Thursday 5pm - 6pm',
                                    'Friday 10am - 11am', 'Friday 12pm - 1pm', 'Friday 5pm - 6pm',
                                    'Saturday 10am - 11am', 'Saturday 11:30am - 12:30pm', 'Saturday 1:30pm - 2:30pm',
                                    'Sunday 7pm - 8pm'
                                ].map((time) => (
                                    <label key={time} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-white/5 hover:border-white/20 bg-white/5 transition-colors text-sm">
                                        <input type="checkbox" checked={formData.availabilities.includes(time)} onChange={() => toggleArrayItem('availabilities', time)} className="w-4 h-4 rounded" />
                                        <span className="text-gray-300">{time}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 5: Payment summary */}
                {step === 5 && (
                    <div className="animate-fade-in space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <CreditCard className="w-6 h-6 text-brand-beige" />
                            <h2 className="text-2xl font-medium text-white">{t('enroll.step5.title')}</h2>
                        </div>

                        {/* Price Display */}
                        <div className="bg-brand-beige/5 border border-brand-beige/20 rounded-2xl p-6 mb-8">
                            <h3 className="text-brand-beige font-medium mb-4">Estimated Investment</h3>
                            {priceInsight && typeof priceInsight === 'object' ? (
                                <div>
                                    <div className="text-4xl font-bold text-white mb-2">GHS {priceInsight.ghs} <span className="text-lg font-normal text-gray-400">/ month</span></div>
                                    <p className="text-sm text-gray-400 mb-4">Approximate international equivalents:</p>
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">~ USD ${priceInsight.usd}</div>
                                        <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">~ EUR €{priceInsight.eur}</div>
                                        <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">~ GBP £{priceInsight.gbp}</div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4 italic">* Currency conversions are estimates. Actual charges depend on your bank's current exchange rate.</p>
                                </div>
                            ) : (
                                <div className="text-xl text-white">Custom Pricing - We will contact you with details based on your package selection.</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">Preferred Payment Method *</label>
                            <div className="space-y-3">
                                {['Momo (0543409270) use French class as Ref', 'Bank transfer (on request)'].map((method) => (
                                    <label key={method} className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                        <input type="radio" name="payment" required checked={formData.paymentMethod === method} onChange={() => updateFormData('paymentMethod', method)} />
                                        <span className="text-gray-300">{method}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <label className="flex items-start gap-4 cursor-pointer p-4 rounded-xl border border-white/5 bg-white/5">
                                <input type="checkbox" required checked={formData.agreedToDeposit} onChange={(e) => updateFormData('agreedToDeposit', e.target.checked)} className="mt-1 w-5 h-5 rounded border-gray-600" />
                                <span className="text-gray-300 text-sm">I agree that a 50% deposit or more is required to start the class. *</span>
                            </label>
                            
                            <label className="flex items-start gap-4 cursor-pointer p-4 rounded-xl border border-white/5 bg-white/5">
                                <input type="checkbox" required checked={formData.agreedToCancellationPolicy} onChange={(e) => updateFormData('agreedToCancellationPolicy', e.target.checked)} className="mt-1 w-5 h-5 rounded border-gray-600" />
                                <span className="text-gray-300 text-sm">I agree that Cancellation of classes for 3 times in a row without permission = automatic annulment. *</span>
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Do you have any questions or notes for Veronica?</label>
                            <textarea rows={3} value={formData.additionalNotes} onChange={e => updateFormData('additionalNotes', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none resize-none" />
                        </div>
                        
                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                There was an error submitting your form. Please ensure all your details are correct or try again later.
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-8 border-t border-white/10 mt-12">
                    {step > 1 ? (
                        <Button type="button" variant="outline" onClick={prevStep} className="px-6 text-white border-white/20 hover:bg-white/5 hover:text-white" disabled={isSubmitting}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> {t('enroll.btn.back')}
                        </Button>
                    ) : <div></div>}

                    {step < 5 ? (
                        <Button type="submit" variant="primary" hasArrow className="px-8">
                            {t('enroll.btn.next')}
                        </Button>
                    ) : (
                        <Button type="submit" variant="primary" disabled={isSubmitting} className="px-8">
                            {isSubmitting ? (
                                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> {t('enroll.btn.submitting')}</>
                            ) : (
                                <>{t('enroll.btn.complete')} <Check className="w-4 h-4 ml-2" /></>
                            )}
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
};
