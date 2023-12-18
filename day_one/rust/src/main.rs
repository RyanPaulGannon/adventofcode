use std::fs;

fn main() {
    let file = fs::read_to_string("./input.txt").expect("Failed to read input");
    let file: Vec<&str> = file.split("\n").collect();
    println!("{:?}", file);
}
