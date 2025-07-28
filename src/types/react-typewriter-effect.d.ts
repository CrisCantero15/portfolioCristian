declare module 'react-typewriter-effect' {
  import * as React from 'react';

  interface TypeWriterEffectProps {
    textStyle?: React.CSSProperties;
    startDelay?: number;
    cursorColor?: string;
    text: string;
    typeSpeed?: number;
  }

  const TypeWriterEffect: React.FC<TypeWriterEffectProps>;

  export default TypeWriterEffect;
}
