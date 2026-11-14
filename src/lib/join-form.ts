/** The Join intake form: one definition shared by the page and the email endpoint. */

export const iAmOptions = ['Survivor', 'Currently in treatment', 'Caregiver', 'Other'];
export const heardOptions = ['Instagram', 'Facebook', 'Event', 'A flyer', 'A friend', 'OCRA', 'Other'];
export const meetupOptions = ['Yes', 'No', 'Maybe'];

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
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email Address',
  phone: 'Phone Number',
  location: 'City & State',
  iAm: 'I am a...',
  cancerType: 'Type of Cancer',
  hopes: 'What are you hoping to get out of joining Toteally Sisters?',
  heard: 'How did you hear about us?',
  meetup: 'Would you like to join our monthly virtual meetup?',
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
  // Plain address only: no spaces, commas, angle brackets or quotes, since it becomes the email's Reply-To.
  else if (!/^[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/.test(data.email)) errors.email = 'That email doesn’t look quite right. Check for a typo?';
  if (data.iAm && !iAmOptions.includes(data.iAm)) data.iAm = '';
  if (data.heard && !heardOptions.includes(data.heard)) data.heard = '';
  if (data.meetup && !meetupOptions.includes(data.meetup)) data.meetup = '';
  return { data, errors, ok: Object.keys(errors).length === 0 };
}
