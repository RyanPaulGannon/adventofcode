enum Digit {
    One,
    Two,
}

fn match_digits(digit: Digit) -> &'static str {
    match digit {
        Digit::One => "one",
        Digit::Two => "two",
    }
}

fn main() {
    println!("{:?}", Digit::One);
    let digit = match_digits(Digit::One);
}
