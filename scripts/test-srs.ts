import { SRSAlgorithm, SRSVocabularyItem } from '../src/lib/srs';

// Sample vocabulary item
const item: SRSVocabularyItem = {
  id: 'haus-house',
  german: 'Haus',
  english: 'house',
  interval: 1,
  repetitions: 0,
  easeFactor: 2.5,
  difficulty: 1,
  lastReviewed: undefined,
  nextReview: new Date(),
};

console.log('Initial:', item);

['correct', 'incorrect', 'easy', 'hard'].forEach(performance => {
  const updated = SRSAlgorithm.calculateNextReview(item, performance as any);
  console.log(`After "${performance}":`, {
    interval: updated.interval,
    repetitions: updated.repetitions,
    easeFactor: updated.easeFactor,
    nextReview: updated.nextReview,
  });
});
