import { values } from 'lodash';

export const selectBenches = ({ benches }) => (
  values(benches)
);
