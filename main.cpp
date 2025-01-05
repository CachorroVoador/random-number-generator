#include <stdio.h>
#include <cstdlib>
#include <iostream>
#include <fstream>

#include "nlohmann/json.hpp"
using json = nlohmann::json;

json loadFile() {
    std::ifstream f("numbers.json");
    if(f.peek() == EOF){
        json j;
        return j;
    }
    return json::parse(f);
}

void saveToFile(json data) {
    std::ofstream o("numbers.json");
    o << data << std::endl;
}

int generateRandomNumber() {
    srand(time(0));
    return rand() % 200 + 1;
}

int main() {
    json data = loadFile();
    if(data.size() == 200) {
        std::cout << "Terminou";
        return 0;
    };
    data.push_back(generateRandomNumber());
    std::cout << data << std::endl;
    saveToFile(data);
    return 0;
}