import { toSnakeCase } from '@app/helpers/utils/utils';
import { userMock } from './userMock';

export const fillForm = (inputs, elements) => {
  inputs.forEach(input => {
    elements[input].value = userMock[toSnakeCase(input)];
    elements[input].dispatchEvent(new Event('input'));
  });
};
