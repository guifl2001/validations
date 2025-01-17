import { isValidCnpj } from './isValidCnpj';
import { isValidCpf } from './isValidCpf';

export const isValidDocument = (document?: string): boolean =>
  !!document && /^[a-zA-Z0-9]{4,20}$/.test(document);

export const isValidCpfCnpj = (value?: string): boolean =>
  !!value && (isValidCpf(value) || isValidCnpj(value));
