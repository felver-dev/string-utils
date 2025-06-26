import { truncate } from '../truncate';

describe('truncate', () => {
  it('should truncate long strings', () => {
    expect(truncate('Hello World', 5)).toBe('Hello...');
    expect(truncate('JavaScript', 4)).toBe('Java...');
  });

  it('should not truncate short strings', () => {
    expect(truncate('Hello', 10)).toBe('Hello');
    expect(truncate('Hi', 5)).toBe('Hi');
  });

  it('should handle custom suffix', () => {
    expect(truncate('Hello World', 5, '---')).toBe('Hello---');
    expect(truncate('Test', 2, '!')).toBe('Te!');
  });

  it('should handle edge cases', () => {
    expect(truncate('Hello', 5)).toBe('Hello');
    expect(truncate('Hello', 0)).toBe('...');
    expect(truncate('Hello', -1)).toBe('');
  });

  it('should handle invalid input', () => {
    expect(truncate('', 5)).toBe('');
    expect(truncate(null as any, 5)).toBe('');
    expect(truncate(undefined as any, 5)).toBe('');
  });
});