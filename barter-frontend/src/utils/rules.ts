export default class Rules {

  public static emailRules: any[] = [
    (v: string) => !!v || 'The e-mail is required',
    (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
  ];

  public static nonNullFieldRules: any[] = [
    (v: string) => !!v || 'This field is required',
  ];

  public static displayNameRules: any[] = [
    (v: string) => /^@?(\w){1,15}$/.test(v) ||
      'Your display name cannot have more than 15 characters and must not contain any space',
    (v: string) => !!v || 'This field is required',
  ];

  public static phoneNumberRules: any[] = [
    (v: string) => !!v || 'The phone number is required',
    (v: string) => v.length === 10 || 'Phone number must be valid (ex. (123) 456 - 7890 )',
  ];

  public static passwordRules: any[] = [
    (v: string) => !!v || 'The password is required',
    (v: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(v) ||
      'Password must have at least eight characters, one uppercase letter,' +
      ' one lowercase letter and one number',
  ];

  public static confirmPasswordRules(password: string): any[] {
    return [
      (v: string) => !!v || 'You must confirm the password.',
      (v: string) => v === password || 'Passwords should match.',
    ];
  }
}
