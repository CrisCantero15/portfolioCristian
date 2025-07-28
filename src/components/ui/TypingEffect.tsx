
import TypeWriterEffect from 'react-typewriter-effect';

export default function TypingEffect () {
    return (
        <TypeWriterEffect
            textStyle={{ 
                fontSize: '2rem',
                color: 'white',
                fontWeight: 'bold'
            }}
            startDelay={100}
            cursorColor="white"
            text="Cristian Cantero López"
            typeSpeed={100}
        />
    );
}