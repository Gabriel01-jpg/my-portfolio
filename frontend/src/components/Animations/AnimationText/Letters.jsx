export function Letters(props) {

    let letters = props.letters.split("");

    letters = letters.map(letter => {
        if(letter == ' '){
            letter = "\u00A0"
        }

        return letter;
    })

    return (
        <>
            {letters.map((item, index) => {
                return (
                    <span key={index}>{item}</span>
                )
            })}
        </>
    )
}