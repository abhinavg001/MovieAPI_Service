import { extractEditors } from '../utils';

describe('Utils', () => {
  it('should extract editors from crew data', () => {
    const mockCredits = {
      crew: [
        { known_for_department: 'Editing', name: 'Editor A' },
        { known_for_department: 'Directing', name: 'Director A' }
      ]
    };
    const editors = extractEditors(mockCredits);
    expect(editors).toEqual(['Editor A']);
  });
});
