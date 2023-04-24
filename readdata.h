#include <iostream>
#include <fstream>
#include "json.hpp"

using json = nlohmann::json;

json readJsonFile(const std::string& filename) {
    std::ifstream file(filename);
    if(!file.is_open()) {
        throw std::runtime_error("Failed to open file " + filename);
    }

    json data;
    file >> data;
    file.close();

    return data;
}
