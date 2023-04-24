#include <iostream>
#include "json.hpp"

using json = nlohmann::json;

using namespace std;

int main(){
    try {
        json data = readJsonFile("data.json");
        // Do something with the JSON data
    } catch (const exception& e) {
        cout << "Error: " << e.what() << endl;
        return 1;
    }
    return 0;
}