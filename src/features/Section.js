import BuildWith from './components/Section/BuildWith';
import Screenshots from './components/Section/Screenshots';
import SectionHeader from './components/Section/SectionHeader';

export default function Section() {
  return (
    <section>
      <SectionHeader />
      <BuildWith />
      <Screenshots />
    </section>
  );
}
