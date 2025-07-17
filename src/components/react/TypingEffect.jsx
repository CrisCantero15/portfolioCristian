import TypeWriterEffect from 'react-typewriter-effect';

export default function TypingEffect() {
    return (
        <TypeWriterEffect
            textStyle={{ 
                fontSize: '2rem',
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center'
            }}
            startDelay={100}
            cursorColor="white"
            text="Cristian Cantero"
            typeSpeed={100}
        />
    );
}