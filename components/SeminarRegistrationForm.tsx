import React, { useState } from 'react';
import { Check, Loader2, ArrowRight, ArrowLeft, Mail, Users, User, BookOpen, Share2 } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export const SeminarRegistrationForm: React.FC = () => {
    const { t } = useLanguage();
    const [step, setStep] = useState<1 | 2>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Form State
    const [formData, setFormData] = useState({
        email: '',
        followStatus: '',
        previouslyFilled: '',
        userType: '',
        userTypeOther: '',
        studyDuration: '',
        goals: '',
        upcomingContact: '',
        joinCommunity: false,
        source: '',
        sourceOther: ''
    });

    const updateFormData = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'cfe4365b-8973-406f-9549-6d2457585c96', // Web3Forms Key
                    subject: `New Seminar Registration: ${formData.email}`,
                    from_name: 'VASA Seminar Form',
                    to_email: 'vasaconsults@gmail.com',
                    'Email Address': formData.email,
                    'Follows VASA on Socials': formData.followStatus,
                    'Previously Registered': formData.previouslyFilled,
                    'User Category': formData.userType === 'Other' ? formData.userTypeOther : formData.userType,
                    'Studying French For': formData.studyDuration,
                    'Seminar Goals': formData.goals,
                    'Contact For Upcoming Seminars': formData.upcomingContact,
                    'Wants Community Access (GH₵200)': formData.joinCommunity ? 'Yes' : 'No',
                    'Discovered Via': formData.source === 'Other' ? formData.sourceOther : formData.source,
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
                <h2 className="text-3xl font-medium text-white mb-4">{t('seminar.success.title')}</h2>
                <p className="text-gray-400 text-lg mb-8">
                    {t('seminar.success.desc')}
                </p>
                {formData.joinCommunity && (
                    <div className="bg-brand-beige/10 border border-brand-beige/20 rounded-xl p-6 mb-8">
                        <h3 className="text-brand-beige font-medium mb-2">{t('seminar.community.next_steps')}</h3>
                        <p className="text-sm text-gray-300 mb-4">{t('seminar.community.instruction')}</p>
                        <a href="https://chat.whatsapp.com/C7Wpy9JkGFpFc5cpRp5zXu" target="_blank" rel="noreferrer" className="inline-block text-brand-beige font-medium hover:underline">
                            {t('seminar.community.link')} &rarr;
                        </a>
                    </div>
                )}
                <Button variant="primary" onClick={() => window.location.href = '/'}>
                    {t('enroll.success.btn')}
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-brand-black border border-white/10 rounded-[2.5rem] p-6 md:p-12">
            
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex justify-between mb-4 px-2">
                    <div className={`flex items-center gap-2 font-medium ${step >= 1 ? 'text-brand-beige' : 'text-gray-500'}`}>
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-brand-beige/20' : 'bg-white/5'}`}>1</div>
                        <span className="hidden sm:inline">{t('seminar.step1')}</span>
                    </div>
                    <div className={`flex items-center gap-2 font-medium ${step >= 2 ? 'text-brand-beige' : 'text-gray-500'}`}>
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-brand-beige/20' : 'bg-white/5'}`}>2</div>
                        <span className="hidden sm:inline">{t('seminar.step2')}</span>
                    </div>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-brand-beige transition-all duration-500 ease-out"
                        style={{ width: ((step / 2) * 100) + '%' }}
                    />
                </div>
            </div>

            <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); setStep(2); }} className="space-y-8">
                
                {/* STEP 1 */}
                {step === 1 && (
                    <div className="animate-fade-in space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <User className="w-6 h-6 text-brand-beige" />
                            <h2 className="text-2xl font-medium text-white">{t('seminar.step1.title')}</h2>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">{t('seminar.label.email')} *</label>
                            <input required type="email" value={formData.email} onChange={e => updateFormData('email', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none" placeholder="your@email.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">{t('seminar.label.follow')} *</label>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                    <input type="radio" required name="follow" checked={formData.followStatus === 'LinkedIn'} onChange={() => updateFormData('followStatus', 'LinkedIn')} className="mt-1" />
                                    <span className="text-gray-300 text-sm">Yes, on LinkedIn (https://www.linkedin.com/company/vasaconsultancy/)</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                    <input type="radio" required name="follow" checked={formData.followStatus === 'Instagram'} onChange={() => updateFormData('followStatus', 'Instagram')} className="mt-1" />
                                    <span className="text-gray-300 text-sm">Yes, on Instagram (@vasaconsults)</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                    <input type="radio" required name="follow" checked={formData.followStatus === 'Both'} onChange={() => updateFormData('followStatus', 'Both')} className="mt-1" />
                                    <span className="text-gray-300 text-sm">Both</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">{t('seminar.label.filled_before')}</label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="filled" required checked={formData.previouslyFilled === 'I have'} onChange={() => updateFormData('previouslyFilled', 'I have')} />
                                    <span className="text-gray-300">{t('seminar.option.ihave')}</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="filled" required checked={formData.previouslyFilled === 'I have not'} onChange={() => updateFormData('previouslyFilled', 'I have not')} />
                                    <span className="text-gray-300">{t('seminar.option.ihavenot')}</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">{t('seminar.label.describe')} *</label>
                            <div className="space-y-3">
                                {['Student', 'Professional', 'Other'].map((type) => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors">
                                        <input type="radio" name="userType" required checked={formData.userType === type} onChange={() => updateFormData('userType', type)} />
                                        <span className="text-gray-300">{t('seminar.option.' + type.toLowerCase())}</span>
                                    </label>
                                ))}
                                {formData.userType === 'Other' && (
                                    <input 
                                        type="text" 
                                        placeholder="Please specify" 
                                        required 
                                        value={formData.userTypeOther} 
                                        onChange={e => updateFormData('userTypeOther', e.target.value)} 
                                        className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none text-sm" 
                                    />
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">{t('seminar.label.duration')} *</label>
                            <input required type="text" value={formData.studyDuration} onChange={e => updateFormData('studyDuration', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none" placeholder={t('seminar.placeholder.duration')} />
                        </div>
                    </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <div className="animate-fade-in space-y-8">
                         <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-6 h-6 text-brand-beige" />
                            <h2 className="text-2xl font-medium text-white">{t('seminar.step2.title')}</h2>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">{t('seminar.label.goals')} *</label>
                            <textarea required rows={3} value={formData.goals} onChange={e => updateFormData('goals', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none resize-none" placeholder={t('seminar.placeholder.goals')} />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">{t('seminar.label.contact')} *</label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="contact" required checked={formData.upcomingContact === 'Oui'} onChange={() => updateFormData('upcomingContact', 'Oui')} />
                                    <span className="text-gray-300">Oui</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="contact" required checked={formData.upcomingContact === 'Non'} onChange={() => updateFormData('upcomingContact', 'Non')} />
                                    <span className="text-gray-300">Non</span>
                                </label>
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-brand-beige/5 border border-brand-beige/20 text-white">
                            <label className="flex items-start gap-4 cursor-pointer">
                                <input type="checkbox" checked={formData.joinCommunity} onChange={e => updateFormData('joinCommunity', e.target.checked)} className="mt-1 w-5 h-5 rounded border-gray-600 shrink-0 accent-brand-beige" />
                                <div>
                                    <span className="block font-medium mb-1 text-brand-beige">{t('seminar.label.community')}</span>
                                    <span className="block text-sm text-gray-300 leading-relaxed">
                                        Join our Speak French, Shine Online Community to access passionate French learners, weekly practice sessions, topics for the year, pdf on every seminar, give & receive feedback before and after the seminar! (Yearly subscription fee of Gh₵200)
                                    </span>
                                </div>
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-4">{t('seminar.label.source')} *</label>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                {['Whatsapp', 'Instagram', 'LinkedIn', 'Facebook', 'Tiktok', 'A friend informed you', 'Other'].map((src) => (
                                    <label key={src} className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 transition-colors text-sm">
                                        <input type="radio" name="source" required checked={formData.source === src} onChange={() => updateFormData('source', src)} />
                                        <span className="text-gray-300">{src}</span>
                                    </label>
                                ))}
                            </div>
                            {formData.source === 'Other' && (
                                <input 
                                    type="text" 
                                    placeholder="Please specify" 
                                    required 
                                    value={formData.sourceOther} 
                                    onChange={e => updateFormData('sourceOther', e.target.value)} 
                                    className="w-full mt-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-beige outline-none text-sm" 
                                />
                            )}
                        </div>

                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                There was an error submitting your form. Please try again.
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-8 border-t border-white/10 mt-12">
                    {step === 2 ? (
                        <Button type="button" variant="outline" onClick={() => setStep(1)} className="px-6 text-white border-white/20 hover:bg-white/5 hover:text-white" disabled={isSubmitting}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> {t('enroll.btn.back')}
                        </Button>
                    ) : <div></div>}

                    {step === 1 ? (
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
