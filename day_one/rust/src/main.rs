use std::fs;

fn main() {
    let file = fs::read_to_string("../input.txt").expect("failed to read input");
    let file: Vec<&str> = file.lines().map(|line| line.trim()).collect();

    let mut counter = 0;
    let mut line_counter = 0;
    for line in file.iter() {
        //  println!("{:?}", line);

        let mut numbers = Vec::new();

        for char in line.chars() {
            //  println!("{:?}", char);

            if !char.is_alphabetic() {
                numbers.push(char);
                //  println!("{:?}", numbers);
            }
        }

        let joined_numbers = if let (Some(first_char), Some(last_char)) =
            (numbers.first().copied(), numbers.last().copied())
        {
            Some(format!("{}{}", first_char, last_char))
        } else {
            None
        };

        let converted_numbers: u32 = joined_numbers.expect("a number").parse().unwrap();

        counter += converted_numbers;
        line_counter += 1;
        println!(
            "line #{:?} : {} : {} : {}",
            line_counter, converted_numbers, counter, line
        );

        //  println!("{:?}", numbers)
    }
}
