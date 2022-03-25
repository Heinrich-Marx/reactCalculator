import { Calculations } from '../../Containers/Calculations/Calculations';
import { Operators } from '../../Containers/Operators/Operators';
import { Section } from './style';
export const Display = () => {
  return (
    <Section>
      <Calculations />
      <Operators />
    </Section>
  );
};
