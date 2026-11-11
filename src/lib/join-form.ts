/** The Join intake form: one definition shared by the page and the email endpoint. */

export const iAmOptions = ['A survivor', 'Currently in treatment', 'A caregiver or loved one', 'Something else', 'Prefer not to say'];
export const heardOptions = ['Instagram', 'Facebook', 'An event', 'A flyer', 'A friend', 'OCRA', 'My care team', 'Somewhere else'];
export const meetupOptions = ['Yes, please', 'Maybe, tell me more', 'Not right now'];

export type JoinFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  iAm: string;
  cancerType: string;
  hopes: string;
  heard: string;
  meetup: string;
  more: string;
};

export const labels: Record<keyof JoinFields, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  phone: 'Phone',
  location: 'City and state',
  iAm: 'I am…',
  cancerType: 'Type of cancer',
  hopes: 'What are you hoping to get from Toteally Sisters?',
  heard: 'How did you hear about us?',
  meetup: 'Would you like to join the monthly meetup?',
  more: 'Anything else you’d like to share?',
};

const max: Partial<Record<keyof JoinFields, number>> = { hopes: 3000, more: 3000 };

export function validate(input: Partial<Record<string, unknown>>) {
  const data = {} as JoinFields;
  for (const key of Object.keys(labels) as (keyof JoinFields)[]) {
    const v = input[key];
    data[key] = typeof v === 'string' ? v.trim().slice(0, max[key] ?? 200) : '';
  }
  const errors: Partial<Record<keyof JoinFields, string>> = {};
  if (!data.firstName) errors.firstName = 'Please tell us your first name.';
  if (!data.lastName) errors.lastName = 'Please tell us your last name.';
  if (!data.email) errors.email = 'We need an email to send you the meetup link.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'That email doesn’t look quite right. Check for a typo?';
  if (data.iAm && !iAmOptions.includes(data.iAm)) data.iAm = '';
  if (data.heard && !heardOptions.includes(data.heard)) data.heard = '';
  if (data.meetup && !meetupOptions.includes(data.meetup)) data.meetup = '';
  return { data, errors, ok: Object.keys(errors).length === 0 };
}
