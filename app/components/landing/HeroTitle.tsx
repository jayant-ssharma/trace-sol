import SplitText from '@/app/components/uiStyle/SplitText';

export default function HeroTitle() {
  return (
    <div
        className='flex justify-center '> 
    <SplitText
      text="Trace-SOL"
      className="text-4xl lg:text-6xl  font-extrabold text-white"
      splitType="chars"
      delay={60}
      duration={0.8}
    />
    </div>
  );
}