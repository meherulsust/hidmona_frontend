import { getUserInitials } from './helpers';

describe('Helpers', () => {
  it('should generate user initials correctly', () => {
    expect(getUserInitials('')).toEqual('');
    expect(getUserInitials('A')).toEqual('A');
    expect(getUserInitials('John')).toEqual('JO');
    expect(getUserInitials('John Doe')).toEqual('JD');
    expect(getUserInitials('AB De Villiers')).toEqual('AD');
  });
});
