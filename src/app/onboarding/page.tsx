'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthChange, getCurrentUser } from '@/lib/auth';
import { updateUserOnboarding } from '@/lib/db/user';
import { GermanLevel } from '@/types/user';
import { Button } from '@/components/ui/button';

type OnboardingStep = 'level' | 'goal' | 'finish';

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('level');
  const [germanLevel, setGermanLevel] = useState<GermanLevel | null>(null);
  const [dailyGoal, setDailyGoal] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      if (firebaseUser) {
        setUserId(firebaseUser.uid);
      } else {
        setUserId(null);
      }
      // (Removed: Always show onboarding, even if already completed)
    });
    return () => unsubscribe();
  }, [router]);

  const handleNext = () => {
    if (currentStep === 'level' && germanLevel) {
      setCurrentStep('goal');
    } else if (currentStep === 'goal') {
      setCurrentStep('finish');
    }
  };

  const handleFinish = async () => {
    if (!germanLevel) return;

    // If not logged in, redirect to login before saving onboarding
    if (!userId) {
      router.push('/auth/login');
      return;
    }

    setLoading(true);
    try {
      await updateUserOnboarding(userId, {
        germanLevel,
        dailyGoalMinutes: dailyGoal || undefined,
        onboardingCompleted: true,
      });
      router.push('/dashboard');
    } catch (error) {
      console.error('Error completing onboarding:', error);
      alert('Failed to save your preferences. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const progress = {
    level: 1,
    goal: 2,
    finish: 3,
  }[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 sm:p-12">
        {/* Progress indicator - purple themed */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-purple-700">Step {progress} of 3</span>
            <span className="text-sm font-medium text-purple-700">{Math.round((progress / 3) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-purple-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 transition-all duration-300"
              style={{ width: `${(progress / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Level Selection Step */}
        {currentStep === 'level' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-2xl flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-10 text-center">
                Do you know any German?
              </h2>
              <div className="flex flex-col gap-4 w-full items-center mb-12">
                {[
                  { value: 'BEGINNER' as GermanLevel, label: 'I am a complete beginner' },
                  { value: 'A1' as GermanLevel, label: 'Not much' },
                  { value: 'A2' as GermanLevel, label: 'I know some common words and phrases' },
                  { value: 'B1_PLUS' as GermanLevel, label: 'I am conversational in German' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setGermanLevel(option.value)}
                    className={`px-6 py-2 rounded-full font-medium text-base md:text-lg transition-all shadow-sm border-none focus:outline-none focus:ring-2 focus:ring-purple-400 w-fit
                      ${germanLevel === option.value
                        ? 'bg-purple-500 text-white scale-105'
                        : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={!germanLevel}
                className={`mt-8 px-8 py-3 rounded bg-purple-700 text-white font-medium text-base flex items-center gap-2 transition-all duration-150 mx-auto
                  ${!germanLevel ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-800'}`}
              >
                Continue
                <span aria-hidden className="ml-2">→</span>
              </button>
            </div>
          </div>
        )}

        {/* Goal Selection Step */}
        {currentStep === 'goal' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-2xl flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-10 text-center">
                How much time can you spend most days?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 w-full items-center mb-12 justify-center">
                {[5, 10, 15, 20].map((minutes) => (
                  <button
                    key={minutes}
                    onClick={() => setDailyGoal(minutes)}
                    className={`px-6 py-2 rounded-full font-medium text-base md:text-lg transition-all shadow-sm border-none focus:outline-none focus:ring-2 focus:ring-purple-400 w-fit
                      ${dailyGoal === minutes
                        ? 'bg-purple-500 text-white scale-105'
                        : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}
                    `}
                  >
                    {minutes} min
                  </button>
                ))}
              </div>
              <div className="flex gap-4 w-full">
                <button
                  onClick={() => setCurrentStep('level')}
                  className="flex-1 px-8 py-3 rounded bg-purple-200 text-purple-800 font-medium text-base transition-all duration-150 hover:bg-purple-300"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className={`flex-1 px-8 py-3 rounded bg-purple-700 text-white font-medium text-base transition-all duration-150
                    ${!dailyGoal ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-800'}`}
                  disabled={!dailyGoal}
                >
                  Continue
                  <span aria-hidden className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Finish Step */}
        {currentStep === 'finish' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-2xl flex flex-col items-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6 text-center">
                You&apos;re all set!
              </h2>
              <p className="text-lg text-purple-700 mb-8 text-center">
                Let&apos;s meet your stories and start learning German the Minka way.
              </p>
              <button
                onClick={handleFinish}
                className={`mt-6 px-8 py-3 rounded bg-purple-700 text-white font-medium text-base flex items-center gap-2 transition-all duration-150 mx-auto
                  ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-800'}`}
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Go to Dashboard'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

